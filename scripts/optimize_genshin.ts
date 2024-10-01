// import { writeFileSync } from 'fs';
import { genshinProfile } from '../data/genshin_raw';
import { IGOOD, convertToGOODKey } from 'enka-network-api';
import good from '../data/good.json';

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
	(prev, { calculations, name }) => ({
		...prev,
		[name.replace(' ', '')]: {
			name: calculations.name,
			details: calculations.details,
			weapon: calculations.weapon,
			ranking: calculations.ranking,
			outOf: calculations.outOf
		}
	}),
	{} as Record<
		string,
		{
			name: string;
			details: string;
			weapon: string;
			ranking: number;
			outOf: number;
		} | null
	>
);

// ===== Final export =====

const characters = good.characters.map((character) => ({
	...character,
	weapon: weaponMap[character.key],
	artifacts: artifactMap[character.key],
	ranking: rankingMap[character.key]
}));

console.log(characters[0]);
