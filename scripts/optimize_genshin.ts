// import { writeFileSync } from 'fs';
import { BuildStatKey, genshinProfile } from '../data/genshin_raw';
import { IGOOD, ISubstat, SlotKey, StatKey } from 'enka-network-api';
import goodJSON from '../data/good.json';
import { writeFileSync } from 'fs';

const good: IGOOD = goodJSON as IGOOD;

// ===== Weapon by character name =====
type Weapon = Exclude<IGOOD['weapons'], undefined>;
type WeaponExport = Omit<Weapon[0], 'location' | 'lock'>;

// TODO add weapon stats from Akasha.cv

const weaponMap = (good.weapons as Weapon).reduce(
	(prev, { key, level, ascension, refinement, location }) => ({
		...prev,
		[location]: {
			key,
			level,
			ascension,
			refinement
		}
	}),
	{} as Record<string, WeaponExport | null>
);

// ===== Artifact by character name =====
type Artifact = Exclude<IGOOD['artifacts'], undefined>;
type ArtifactExport = Omit<Artifact[0], 'lock' | 'location'>;

const artifactMap = (good.artifacts as Artifact).reduce(
	(prev, { location, level, rarity, slotKey, setKey, mainStatKey, substats }) => {
		if (location != '') {
			prev[location] ??= [];
			prev[location].push({
				setKey,
				slotKey,
				level,
				rarity,
				mainStatKey,
				substats
			});
		}
		return prev;
	},
	{} as Record<string, ArtifactExport[] | null>
);

// ===== Ranking by character name =====
const rankingMap = genshinProfile.akasha.reduce(
	(prev, { calculations, name, stats, weapon: { stars } }) => ({
		...prev,
		[name.replace(' ', '')]: {
			name: calculations.name,
			details: calculations.details,
			weapon: calculations.weapon,
			weaponStars: stars,
			ranking: calculations.ranking,
			outOf: calculations.outOf,
			stats
		}
	}),
	{} as Record<
		string,
		{
			name: string;
			details: string;
			weapon: string;
			weaponStars: number;
			ranking: number;
			outOf: number;
			stats: Record<BuildStatKey, number>;
		} | null
	>
);

// ===== Final export =====
type GenshinCharacter = {
	key: string;
	level: number;
	constellation: number;
	ascension: number;
	element?: string;
	stars: number;
	talent: {
		auto: number;
		skill: number;
		burst: number;
	};
	weapon?: WeaponExport;
	artifacts?: ArtifactExport[];
	ranking?: {
		name: string;
		details: string;
		weapon: string;
		ranking: number;
		outOf: number;
		stats: Record<BuildStatKey, number>;
	};
};
const characters: GenshinCharacter[] =
	good.characters
		?.map((character) => {
			const characterData = genshinProfile.characters[character.key];
			return {
				...character,
				element: characterData?.element,
				stars: characterData?.stars,
				weapon: weaponMap[character.key] ?? undefined,
				artifacts: artifactMap[character.key] ?? undefined,
				ranking: rankingMap[character.key] ?? undefined
			};
		})
		.filter((character) => !character.key.includes('Traveler')) ?? []; // TODO: point of failure if new character has Traveler in name

type GenshinWeapon = {
	key: string;
	stars: number;
	level: number;
	refinement: number;
	ascension: number;
	location?: string;
};

const weapons: GenshinWeapon[] =
	good.weapons?.map((weapon) => {
		const weaponData = genshinProfile.weapons[weapon.key];
		return {
			key: weapon.key,
			level: weapon.level,
			refinement: weapon.refinement,
			ascension: weapon.ascension,
			location:
				weapon.location === '' || weapon.location.startsWith('Traveler')
					? undefined
					: weapon.location,
			stars: weaponData.stars
		};
	}) ?? [];

type GenshinArtifact = {
	mainStatKey: StatKey;
	substats: ISubstat[];
	setKey: string;
	slotKey: SlotKey;
	cv: number;
	location?: string;
};
const artifacts: GenshinArtifact[] =
	good.artifacts
		?.filter((artifact) => {
			const cr = artifact.substats.find((ss) => ss.key === 'critRate_')?.value ?? 0;
			const cd = artifact.substats.find((ss) => ss.key === 'critDMG_')?.value ?? 0;
			const cv = cd + 2 * cr;

			const isYellow = artifact.rarity === 5;
			const isMax = artifact.level === 20;
			const isHighCV = cv > 30;
			return isYellow && isMax && isHighCV;
		})
		.map(({ mainStatKey, substats, setKey, slotKey, location }) => ({
			mainStatKey,
			substats: substats.sort(
				(a, b) => (b.key.startsWith('crit') ? 1 : 0) - (a.key.startsWith('crit') ? 1 : 0)
			),
			setKey,
			slotKey,
			location: location === '' || location.startsWith('Traveler') ? undefined : location,
			cv: parseFloat(
				(
					(substats.find((ss) => ss.key === 'critDMG_')?.value ?? 0) +
					2 * (substats.find((ss) => ss.key === 'critRate_')?.value ?? 0)
				).toFixed(2)
			)
		}))
		.sort((a, b) => b.cv - a.cv) ?? [];

const ts = `
import type { IGOOD, StatKey, ISubstat, SlotKey } from 'enka-network-api';
import type { ArtifactCacheKey, CharacterCacheKey, WeaponCacheKey } from './genshin_cache';
type Weapon = Exclude<IGOOD['weapons'], undefined>;
type WeaponExport = Omit<Weapon[0], 'location' | 'lock' | 'key'> & {
	key: WeaponCacheKey;
};
type Artifact = Exclude<IGOOD['artifacts'], undefined>;
type ArtifactExport = Omit<Artifact[0], 'lock' | 'location' | 'setKey'> & {
	setKey: ArtifactCacheKey;
};
type Element = 'Hydro' | 'Pyro' | 'Geo' | 'Cryo' | 'Dendro' | 'Electro' | 'Anemo';
type BuildStatKey =
	| 'critRate'
	| 'critDamage'
	| 'energyRecharge'
	| 'healingBonus'
	| 'incomingHealingBonus'
	| 'elementalMastery'
	| 'physicalDamageBonus'
	| 'geoDamageBonus'
	| 'cryoDamageBonus'
	| 'pyroDamageBonus'
	| 'anemoDamageBonus'
	| 'hydroDamageBonus'
	| 'dendroDamageBonus'
	| 'electroDamageBonus'
	| 'maxHp'
	| 'atk'
	| 'def';

type GenshinCharacter = {
	key: CharacterCacheKey
	level: number;
	constellation: number;
	ascension: number;
	element?: Element;
	stars: number;
	talent: {
		auto: number;
		skill: number;
		burst: number;
	};
	weapon?: WeaponExport;
	artifacts?: ArtifactExport[];
	ranking?: {
		name: string;
		details: string;
		weapon: string;
		weaponStars: number;
		ranking: number;
		outOf: number;
		stats: Record<BuildStatKey, number>;
	};
};

export type GenshinWeapon = {
	key: WeaponCacheKey;
	stars: number;
	level: number;
	refinement: number;
	ascension: number;
	location?: CharacterCacheKey;
}

export type GenshinArtifact = {
	setKey: ArtifactCacheKey;
	mainStatKey: StatKey;
	substats: ISubstat[];
	slotKey: SlotKey;
	cv: number;
	location?: CharacterCacheKey;
};

const elementToBuildStatKey: Record<Element, BuildStatKey> = {
	Anemo: 'anemoDamageBonus',
	Cryo: 'cryoDamageBonus',
	Dendro: 'dendroDamageBonus',
	Electro: 'electroDamageBonus',
	Geo: 'geoDamageBonus',
	Hydro: 'hydroDamageBonus',
	Pyro: 'pyroDamageBonus'
}

const characters: GenshinCharacter[] = ${JSON.stringify(characters)}
const weapons: GenshinWeapon[] = ${JSON.stringify(weapons)}
const artifacts: GenshinArtifact[] = ${JSON.stringify(artifacts)}
export default characters
export { elementToBuildStatKey, weapons, artifacts }
export type { GenshinCharacter, BuildStatKey, Element }
`;

writeFileSync('src/lib/genshin_agg.ts', ts);