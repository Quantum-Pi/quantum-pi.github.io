// import { writeFileSync } from 'fs';
import { BuildStatKey, genshinProfile } from '../data/genshin_raw';
import { IGOOD } from 'enka-network-api';
import good from '../data/good.json';
import { writeFileSync } from 'fs';

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
	(prev, { calculations, name, stats, element, weapon: { stars } }) => ({
		...prev,
		[name.replace(' ', '')]: {
			name: calculations.name,
			details: calculations.details,
			weapon: calculations.weapon,
			weaponStars: stars,
			ranking: calculations.ranking,
			outOf: calculations.outOf,
			stats,
			element
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
			element: string;
		} | null
	>
);

// ===== Final export =====
type GenshinCharacter = {
	key: string;
	level: number;
	constellation: number;
	ascension: number;
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
		element: string;
		stats: Record<BuildStatKey, number>;
	};
};
const characters: GenshinCharacter[] = good.characters.map((character) => ({
	...character,
	weapon: weaponMap[character.key] ?? undefined,
	artifacts: artifactMap[character.key] ?? undefined,
	ranking: rankingMap[character.key] ?? undefined
}));

const ts = `
import type { IGOOD } from 'enka-network-api';
type Weapon = Exclude<IGOOD['weapons'], undefined>;
type WeaponExport = Omit<Weapon[0], 'location' | 'lock'>;
type Artifact = Exclude<IGOOD['artifacts'], undefined>;
type ArtifactExport = Omit<Artifact[0], 'lock' | 'location'>;
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
	key: string;
	level: number;
	constellation: number;
	ascension: number;
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
		element: Element;
	};
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
export default characters
export { elementToBuildStatKey }
export type { GenshinCharacter, BuildStatKey, Element }
`;

writeFileSync('src/lib/genshin_agg.ts', ts);