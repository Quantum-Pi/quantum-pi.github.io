import { genshinProfile } from '../data/genshin_raw';
import good from '../data/good.json';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { downloadImage, hash } from './lib';
import {
	EnkaClient,
	CharacterData,
	WeaponData,
	ArtifactData,
	convertToGOODKey,
	IArtifact
} from 'enka-network-api';

const enka = new EnkaClient({
	userAgent: 'quantumpie.net Genshin icon caching',
	cacheDirectory: './cache'
});
await enka.cachedAssetsManager.cacheDirectorySetup();
await enka.cachedAssetsManager.fetchAllContents();
/**=====================*\
|       Characters       |
\=======================*/
const characters = enka.getAllCharacters().reduce(
	(prev, curr) => {
		return {
			...prev,
			[convertToGOODKey(curr.name.get('en'))]: curr
		};
	},
	{} as Record<string, CharacterData>
);

const characterImgMap: Record<
	string,
	{ character: string; file: string; path: string; hash: string; name: string | number }[]
> = {};

if (genshinProfile.good.characters) {
	const mergedCharacters = genshinProfile.good.characters;
	const charKeys = mergedCharacters.map((c) => c.key);
	for (const c of good.characters) {
		if (!charKeys.includes(c.key)) {
			mergedCharacters.push(c);
		}
	}
	for (const c of mergedCharacters) {
		if (c.key.includes('Traveler')) continue;

		const character = characters[c.key];
		const characterImgs: (typeof characterImgMap)[''] = [];
		let talent_i = 0;
		await Promise.all(
			[
				{ name: 'sideIcon', url: character.sideIcon.url },
				...character.constellations.map((con, i) => ({ name: `con_${i}`, url: con.icon.url })),
				{ name: 'burst', url: character.elementalBurst?.icon.url },
				{ name: 'skill', url: character.elementalSkill?.icon.url },
				// {name: '', url: character.gachaSlice.url},
				{ name: 'characterIcon', url: character.icon.url },
				{ name: 'normal', url: character.normalAttack.icon.url },
				{ name: 'splashImage', url: character.splashImage.url },
				...character.passiveTalents.map((talent) => {
					try {
						// Raiden i=2 is undefined, handle potential future issues
						talent.name.get('en');
						return {
							name: `talent_${talent_i++}`,
							url: talent.icon.url
						};
					} catch {
						return {
							name: 'null',
							url: null
						};
					}
				})
			].map(({ url, name }) => {
				if (!url || url.length == 0) return null;
				const link = url.replace('api.ambr.top', 'gi.yatta.moe');
				// console.log(link);
				const file = link.split('/').at(-1)?.replace(`_${c.key}`, '');
				if (!file) return null;
				const path = `src/assets/genshin/characters/${c.key}/${file}`;
				characterImgs.push({
					character: c.key,
					file: `${c.key}/${file.replace('.png', '')}`,
					path,
					name,
					hash: hash()
				});
				if (!existsSync(path)) {
					mkdirSync(path.split('/').slice(0, -1).join('/'), { recursive: true });
					return downloadImage(link, path);
				}
			})
		);
		characterImgMap[c.key] = characterImgs;
	}
}

const characterImports = `type CharacterImageKey =
	| 'sideIcon'
	| 'con_0'
	| 'con_1'
	| 'con_2'
	| 'con_3'
	| 'con_4'
	| 'con_5'
	| 'burst'
	| 'skill'
	| 'characterIcon'
	| 'normal'
	| 'splashImage'
	| 'talent_0'
	| 'talent_1'
	| 'talent_2';

type CharacterCacheKey = ${Object.keys(characterImgMap)
	.map((str) => `'${str}'`)
	.join(' | ')};

const characterImageDict: Record<CharacterCacheKey, Record<CharacterImageKey, () => Promise<Picture>> & { talent_3?: () => Promise<Picture> }> = {
${Object.entries(characterImgMap).map(([character, attr]) => {
	return `${character}: {
${attr
	.map(
		({ name, file }) =>
			`\t${name}: async () => (await import('../assets/genshin/characters/${file}.png?enhanced&format=webp')).default`
	)
	.join(',\n')}
}`;
})}
};
const getCharacterImage = async (character: CharacterCacheKey, image: CharacterImageKey) => {
	return await characterImageDict[character][image]()
};

export { getCharacterImage }
export type { CharacterCacheKey }
`;

/**=====================*\
|         Weapons        |
\=======================*/
const weapons = enka.getAllWeapons().reduce(
	(prev, curr) => {
		return {
			...prev,
			[convertToGOODKey(curr.name.get('en'))]: curr
		};
	},
	{} as Record<string, WeaponData>
);

const weaponImgMap: Record<
	string,
	{ weapon: string; file: string; path: string; hash: string; name: string | number }[]
> = {};

if (genshinProfile.good.weapons) {
	const mergedWeapons = genshinProfile.good.weapons;
	const weaponKeys = mergedWeapons.map((c) => c.key);
	for (const w of good.weapons) {
		if (!weaponKeys.includes(w.key)) {
			mergedWeapons.push(w);
		}
	}
	for (const w of mergedWeapons) {
		const weapon = weapons[w.key];

		const weaponImgs: (typeof weaponImgMap)[''] = [];
		await Promise.all(
			[
				{ name: 'baseIocn', url: weapon.icon.url },
				{ name: 'awakenIcon', url: weapon.awakenIcon.url },
				{ name: 'splashImage', url: weapon.splashImage.url }
			].map(({ url, name }) => {
				if (!url || url.length == 0) return null;
				const link = url.replace('api.ambr.top', 'gi.yatta.moe');
				// console.log(link);
				const file = link.split('/').at(-1)?.replace(`_${w.key}`, '');
				if (!file) return null;
				const path = `src/assets/genshin/weapons/${w.key}/${file}`;
				weaponImgs.push({
					weapon: w.key,
					file: `${w.key}/${file.replace('.png', '')}`,
					path,
					name,
					hash: hash()
				});
				if (!existsSync(path)) {
					mkdirSync(path.split('/').slice(0, -1).join('/'), { recursive: true });
					return downloadImage(link, path);
				}
			})
		);
		weaponImgMap[w.key] = weaponImgs;
	}
}

const weaponImports = `type WeaponImageKey =
	'baseIocn' |
	'awakenIcon' |
	'splashImage';

type WeaponCacheKey = ${Object.keys(weaponImgMap)
	.map((str) => `'${str}'`)
	.join(' | ')};

const weaponImageDict: Record<WeaponCacheKey, Record<WeaponImageKey, () => Promise<Picture>>> = {
${Object.entries(weaponImgMap).map(([weapon, attr]) => {
	return `${weapon}: {
${attr
	.map(
		({ name, file }) =>
			`\t${name}: async () => (await import('../assets/genshin/weapons/${file}.png?enhanced&format=webp')).default`
	)
	.join(',\n')}
}`;
})}

};
const getWeaponImage = async (weapon: WeaponCacheKey, image: WeaponImageKey) => {
	return await weaponImageDict[weapon][image]()
};

export { getWeaponImage }
export type { WeaponCacheKey }

`;

/**=====================*\
|       Artifacts        |
\=======================*/
const artifacts = enka.getAllArtifacts().reduce(
	(prev, curr) => {
		return {
			...prev,
			[convertToGOODKey(curr.set.name.get('en'))]: curr
		};
	},
	{} as Record<string, ArtifactData>
);

const artifactImageMap: Record<
	string,
	{ artifact: string; file: string; path: string; hash: string; name: string | number }[]
> = {};

if (genshinProfile.good.artifacts) {
	const mergedArtifacts = genshinProfile.good.artifacts;
	const artifactKeys = mergedArtifacts.map((c) => c.setKey);
	for (const a of good.artifacts) {
		if (!artifactKeys.includes(a.setKey)) {
			mergedArtifacts.push(a as IArtifact);
		}
	}
	for (const a of mergedArtifacts) {
		const artifact = artifacts[a.setKey];
		const url = artifact.icon.url.replace(/_[1-5].png/, '_$.png');

		const artifactImages: (typeof artifactImageMap)[''] = [];
		await Promise.all(
			[
				{ name: 'goblet', url: url.replace('$', '1') },
				{ name: 'plume', url: url.replace('$', '2') },
				{ name: 'circlet', url: url.replace('$', '3') },
				{ name: 'flower', url: url.replace('$', '4') },
				{ name: 'sands', url: url.replace('$', '5') }
			].map(({ url, name }) => {
				// const link = url.split('_');
				if (!url || url.length == 0) return null;
				// link[link.length - 1] = '_$.png';
				const link = url.replace('api.ambr.top', 'gi.yatta.moe');
				// console.log(link);
				const file = link.split('/').at(-1);
				if (!file) return null;
				const path = `src/assets/genshin/artifacts/${a.setKey}/${file}`;
				artifactImages.push({
					artifact: a.setKey,
					file: `${a.setKey}/${file.replace('.png', '')}`,
					path,
					name,
					hash: hash()
				});
				if (!existsSync(path)) {
					mkdirSync(path.split('/').slice(0, -1).join('/'), { recursive: true });
					return downloadImage(link, path);
				}
			})
		);
		artifactImageMap[a.setKey] = artifactImages;
	}
}

const artifactImports = `type ArtifactImageKey =
	'goblet' |
	'plume' |
	'circlet' |
	'flower' |
	'sands';

type ArtifactCacheKey = ${Object.keys(artifactImageMap)
	.map((str) => `'${str}'`)
	.join(' | ')};

const artifactImageDict: Record<ArtifactCacheKey, Record<ArtifactImageKey, () => Promise<Picture>>> = {
${Object.entries(artifactImageMap).map(([weapon, attr]) => {
	return `${weapon}: {
${attr
	.map(
		({ name, file }) =>
			`\t${name}: async () => (await import('../assets/genshin/artifacts/${file}.png?enhanced&format=webp')).default`
	)
	.join(',\n')}
}`;
})}
};
const getArtifactImage = async (weapon: ArtifactCacheKey, image: ArtifactImageKey) => {
	return await artifactImageDict[weapon][image]()
};

export { getArtifactImage }
export type { ArtifactCacheKey }
`;

/**=====================*\
|     Create Output      |
\=======================*/
const cache = `/**
* NOTE: This file is auto-generated by scripts/prefetch_steam.ts
* DO NOT modify manually
*/
import type { Picture } from 'vite-imagetools';
import type { Element } from './genshin_agg';

import AnemoBG from '../assets/genshin/misc/Anemo-bg.jpg?enhanced&format=webp';
import DendroBG from '../assets/genshin/misc/Dendro-bg.jpg?enhanced&format=webp';
import ElectroBG from '../assets/genshin/misc/Electro-bg.jpg?enhanced&format=webp';
import GeoBG from '../assets/genshin/misc/Geo-bg.jpg?enhanced&format=webp';
import CryoBG from '../assets/genshin/misc/Cryo-bg.jpg?enhanced&format=webp';
import PyroBG from '../assets/genshin/misc/Pyro-bg.jpg?enhanced&format=webp';
import HydroBG from '../assets/genshin/misc/Hydro-bg.jpg?enhanced&format=webp';

const elementBGs: Record<Element, Picture> = {
	Anemo: AnemoBG,
	Cryo: CryoBG,
	Dendro: DendroBG,
	Electro: ElectroBG,
	Geo: GeoBG,
	Hydro: HydroBG,
	Pyro: PyroBG
};
export { elementBGs };

${characterImports}
${weaponImports}
${artifactImports}
`;

writeFileSync('src/lib/genshin_cache.ts', cache);
