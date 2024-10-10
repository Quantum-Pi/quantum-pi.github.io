import { genshinProfile } from '../data/genshin_raw';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { downloadImage, hash } from './lib';
import {
	EnkaClient,
	CharacterData,
	WeaponData,
	// ArtifactData,
	convertToGOODKey
} from 'enka-network-api';

const enka = new EnkaClient({ userAgent: 'quantumpie.net Genshin icon caching' });

/**=====================*\
|       Characters       |
\=======================*/
const characters = enka.getAllCharacters().reduce((prev, curr) => {
	return {
		...prev,
		[convertToGOODKey(curr.name.get('en'))]: curr
	};
}, {} as Record<string, CharacterData>);

const characterImgMap: Record<
	string,
	{ character: string; file: string; path: string; hash: string; name: string | number }[]
> = {};

if (genshinProfile.good.characters) {
	for (const c of genshinProfile.good.characters) {
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
				console.log(link);
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

const characterImports = `${Object.values(characterImgMap)
	.reduce((prev, curr) => {
		prev.push(...curr);
		return prev;
	}, [])
	.map(
		({ file, hash }) =>
			`import ${hash} from '../assets/genshin/characters/${file}.png?enhanced&format=webp'`
	)
	.join('\n')}

type CharacterImageKey =
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

type CharacterKey = ${Object.keys(characterImgMap)
	.map((str) => `'${str}'`)
	.join(' | ')};

const characterImageDict: Record<CharacterKey, Record<CharacterImageKey, Picture>> = {
${Object.entries(characterImgMap).map(([character, attr]) => {
	return `${character}: {
${attr.map(({ name, hash }) => `\t${name}: ${hash}`).join(',\n')}
}`;
})}
};
const getCharacterImage = (character: CharacterKey, image: CharacterImageKey) => {
	return characterImageDict[character][image]
};

export { getCharacterImage }
`;

/**=====================*\
|         Weapons        |
\=======================*/
const weapons = enka.getAllWeapons().reduce((prev, curr) => {
	return {
		...prev,
		[convertToGOODKey(curr.name.get('en'))]: curr
	};
}, {} as Record<string, WeaponData>);

const weaponImgMap: Record<
	string,
	{ weapon: string; file: string; path: string; hash: string; name: string | number }[]
> = {};

if (genshinProfile.good.weapons) {
	for (const w of genshinProfile.good.weapons) {
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
				console.log(link);
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

const weaponImports = `${Object.values(weaponImgMap)
	.reduce((prev, curr) => {
		prev.push(...curr);
		return prev;
	}, [])
	.map(
		({ file, hash }) =>
			`import ${hash} from '../assets/genshin/weapons/${file}.png?enhanced&format=webp'`
	)
	.join('\n')}

type WeaponImageKey =
	'baseIocn' |
	'awakenIcon' |
	'splashImage';

type WeaponKey = ${Object.keys(weaponImgMap)
	.map((str) => `'${str}'`)
	.join(' | ')};

const weaponImageDict: Record<WeaponKey, Record<WeaponImageKey, Picture>> = {
${Object.entries(weaponImgMap).map(([weapon, attr]) => {
	return `${weapon}: {
${attr.map(({ name, hash }) => `\t${name}: ${hash}`).join(',\n')}
}`;
})}
};
const getWeaponImage = (weapon: WeaponKey, image: WeaponImageKey) => {
	return weaponImageDict[weapon][image]
};

export { getWeaponImage }
`;

/**=====================*\
|     Create Output      |
\=======================*/
const cache = `/**
* NOTE: This file is auto-generated by scripts/prefetch_steam.ts
* DO NOT modify manually
*/
import type { Picture } from 'vite-imagetools';
${characterImports}
${weaponImports}
`;

writeFileSync('src/lib/genshin_cache.ts', cache);
