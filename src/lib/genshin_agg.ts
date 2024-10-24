import type { IGOOD } from 'enka-network-api';
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
	key: CharacterCacheKey;
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
const elementToBuildStatKey: Record<Element, BuildStatKey> = {
	Anemo: 'anemoDamageBonus',
	Cryo: 'cryoDamageBonus',
	Dendro: 'dendroDamageBonus',
	Electro: 'electroDamageBonus',
	Geo: 'geoDamageBonus',
	Hydro: 'hydroDamageBonus',
	Pyro: 'pyroDamageBonus'
};
const characters: GenshinCharacter[] = [
	{
		key: 'Yelan',
		level: 90,
		constellation: 6,
		ascension: 6,
		talent: { auto: 10, skill: 10, burst: 10 },
		element: 'Hydro',
		stars: 5,
		weapon: { key: 'AquaSimulacra', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 20.2 },
					{ key: 'def_', value: 7.3 },
					{ key: 'critRate_', value: 10.9 },
					{ key: 'def', value: 23 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'hp_', value: 9.9 },
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'enerRech_', value: 11 },
					{ key: 'critRate_', value: 6.2 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'critDMG_', value: 7 },
					{ key: 'atk_', value: 16.9 },
					{ key: 'critRate_', value: 3.9 },
					{ key: 'enerRech_', value: 16.2 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hydro_dmg_',
				substats: [
					{ key: 'def_', value: 5.1 },
					{ key: 'critDMG_', value: 31.1 },
					{ key: 'hp_', value: 4.1 },
					{ key: 'enerRech_', value: 9.7 }
				]
			},
			{
				setKey: 'ThunderingFury',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'critDMG_', value: 28 },
					{ key: 'hp_', value: 11.1 },
					{ key: 'hp', value: 209 },
					{ key: 'def', value: 42 }
				]
			}
		],
		ranking: {
			name: 'C6 Combo with C4 Mona, Avg DMG',
			details:
				"Frontloaded average DMG for c6r5 Aqua Yelan Combo: 2x E + 2x BTB + 3x C2 + 5x C6 + 24x Q. Team: c0r5 fs Kazuha @ 1000 EM vv hydro swirl + Zhongli shield up + c4 Mona burst up. Yelan's A4 set to 10s, C4 2 stacks, 18% HP from A1. 4p Nymph's Dream is set to 3 stacks.",
			weapon: 'Aqua Simulacra',
			weaponStars: 5,
			ranking: 17409,
			outOf: 461224,
			stats: {
				critRate: 0.7591000630271484,
				critDamage: 2.578648193062549,
				energyRecharge: 1.4072000815284302,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 0,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.4660000934016754,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 32107.7734376027,
				atk: 1183.8574219777,
				def: 722.3638917042625
			}
		}
	},
	{
		key: 'Clorinde',
		level: 80,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 9, burst: 7 },
		element: 'Electro',
		stars: 5,
		weapon: { key: 'FinaleOfTheDeep', level: 90, ascension: 6, refinement: 3 },
		artifacts: [
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 25.6 },
					{ key: 'def_', value: 7.3 },
					{ key: 'critRate_', value: 7.8 },
					{ key: 'atk', value: 18 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'hp', value: 538 },
					{ key: 'def_', value: 13.1 },
					{ key: 'critRate_', value: 6.2 },
					{ key: 'critDMG_', value: 21 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'def_', value: 24.8 },
					{ key: 'critRate_', value: 2.7 },
					{ key: 'critDMG_', value: 15.5 },
					{ key: 'hp_', value: 4.1 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critDMG_',
				substats: [
					{ key: 'def', value: 67 },
					{ key: 'hp', value: 299 },
					{ key: 'atk', value: 62 },
					{ key: 'critRate_', value: 3.5 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'electro_dmg_',
				substats: [
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'critRate_', value: 3.9 },
					{ key: 'atk_', value: 25.7 },
					{ key: 'hp', value: 299 }
				]
			}
		],
		ranking: {
			name: 'Overload Combo, DPS',
			details:
				"C0 Clorinde + C6 Fischl + 4p Noblesse C6 Chevreuse @ 40k HP + 4p Cinder C6 Thoma. Leaderboard ranks DPS based on 16s rotation using QEE 5N3E combo. Clorinde's A1 and A4 at full uptime for simplicity. Chevreuse's C6 stacks: QEE:0, N3E:1, N3E: 2, N3E:3, N3E:3, N3E: 3. 4pc Harmonic Whimsy stacks Q:1, EE:2, 5N3:3. Finale of the Deep's passive does not affect the burst. ",
			weapon: 'Finale of the Deep',
			weaponStars: 4,
			ranking: 41507,
			outOf: 152224,
			stats: {
				critRate: 0.48310033144360964,
				critDamage: 1.875700331348242,
				energyRecharge: 1.0000003344,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 0,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0.46600032510167544,
				maxHp: 18452.0976565844,
				atk: 2303.85888705315,
				def: 1125.301514006275
			}
		}
	},
	{
		key: 'Xiao',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 10, skill: 8, burst: 10 },
		element: 'Anemo',
		stars: 5,
		weapon: { key: 'StaffOfHoma', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 20.2 },
					{ key: 'atk', value: 49 },
					{ key: 'critRate_', value: 3.9 },
					{ key: 'atk_', value: 9.3 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critDMG_', value: 22.5 },
					{ key: 'def_', value: 13.1 },
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'critRate_', value: 7 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'def_', value: 6.6 },
					{ key: 'eleMas', value: 49 },
					{ key: 'critDMG_', value: 17.9 },
					{ key: 'def', value: 37 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critDMG_',
				substats: [
					{ key: 'eleMas', value: 21 },
					{ key: 'def', value: 67 },
					{ key: 'hp', value: 538 },
					{ key: 'atk_', value: 11.1 }
				]
			},
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'anemo_dmg_',
				substats: [
					{ key: 'hp', value: 269 },
					{ key: 'hp_', value: 9.3 },
					{ key: 'atk', value: 33 },
					{ key: 'critRate_', value: 10.9 }
				]
			}
		],
		ranking: {
			name: 'Hyper Xiao, Avg DMG',
			details:
				"Combo that includes A4/VHA/PJWS/CQ stacking, Bennett, Noblesse and Elegy uptimes, 2E and 11HP with collision damage. 4p Noblese Aquila C6 Bennett, 4p ToTM Elegy C6 Faruzan, Zhongli. Faruzan's A4 is disabled for a bit of simplicity (it's also pretty weak anyways)",
			weapon: 'Staff of Homa',
			weaponStars: 5,
			ranking: 33098,
			outOf: 367177,
			stats: {
				critRate: 0.4909007421682068,
				critDamage: 2.5916367045591064,
				energyRecharge: 1.0583007804105469,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 48.95999984657266,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0.4660007528016754,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 20881.2656257621,
				atk: 2183.8916784964754,
				def: 1098.4959724417874
			}
		}
	},
	{
		key: 'KamisatoAyaka',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 10, skill: 8, burst: 10 },
		element: 'Cryo',
		stars: 5,
		weapon: { key: 'AmenomaKageuchi', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critDMG_',
				substats: [
					{ key: 'enerRech_', value: 6.5 },
					{ key: 'def_', value: 19 },
					{ key: 'def', value: 42 },
					{ key: 'critRate_', value: 9.3 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'hp_', value: 10.5 },
					{ key: 'critDMG_', value: 20.2 },
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'atk_', value: 13.4 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'def_', value: 13.1 },
					{ key: 'critDMG_', value: 21.8 },
					{ key: 'hp_', value: 10.5 },
					{ key: 'critRate_', value: 3.5 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'critRate_', value: 7 },
					{ key: 'critDMG_', value: 14 },
					{ key: 'def', value: 19 },
					{ key: 'def_', value: 18.2 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'cryo_dmg_',
				substats: [
					{ key: 'atk', value: 14 },
					{ key: 'atk_', value: 18.1 },
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'critRate_', value: 6.6 }
				]
			}
		],
		ranking: {
			name: 'Burst DMG vs Frozen, Mona variant, Avg DMG',
			details:
				'Soumetsu Cutting average DMG, Ayaka c0r5, TTDS Mona c0r5, Kazuha c0r1, c6r5 Diona. TTDS, 4p ToTM and 4p Noblesse active. Enemy is frozen',
			weapon: 'Amenoma Kageuchi',
			weaponStars: 4,
			ranking: 188227,
			outOf: 549421,
			stats: {
				critRate: 0.33390098992764283,
				critDamage: 2.1431009787696533,
				energyRecharge: 1.0583009738105469,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 39.62999820891797,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0.6160009521621399,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 22285.1640634555,
				atk: 2181.781495096125,
				def: 1105.27587986175
			}
		}
	},
	{
		key: 'HuTao',
		level: 90,
		constellation: 1,
		ascension: 6,
		talent: { auto: 10, skill: 10, burst: 8 },
		element: 'Pyro',
		stars: 5,
		weapon: { key: 'CalamityQueller', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'pyro_dmg_',
				substats: [
					{ key: 'def', value: 16 },
					{ key: 'critDMG_', value: 28 },
					{ key: 'hp_', value: 9.9 },
					{ key: 'hp', value: 508 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critRate_', value: 5.8 },
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'atk', value: 39 },
					{ key: 'enerRech_', value: 4.5 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critRate_', value: 14 },
					{ key: 'hp', value: 538 },
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'hp_', value: 5.8 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'eleMas', value: 16 },
					{ key: 'critRate_', value: 7 },
					{ key: 'def_', value: 10.2 },
					{ key: 'critDMG_', value: 19.4 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'hp', value: 568 },
					{ key: 'atk_', value: 9.9 },
					{ key: 'critDMG_', value: 20.2 },
					{ key: 'eleMas', value: 19 }
				]
			}
		],
		ranking: {
			name: 'VV Swirl Hyper Tao Combo, Avg DMG',
			details:
				'Average DMG for 11N1CD + Q combo. elegy instructor amber c0r1. kazuha c2r1 @ 1000EM(1420). 4p SR burst uptime 1/3, other sets: 2/3. ',
			weapon: 'Ballad of the Fjords',
			weaponStars: 5,
			ranking: 118793,
			outOf: 530437,
			stats: {
				critRate: 0.6293003265833862,
				critDamage: 1.7543004457926759,
				energyRecharge: 1.0971003477549561,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 34.97000154900312,
				physicalDamageBonus: 0,
				geoDamageBonus: 0.1200003283,
				cryoDamageBonus: 0.1200003283,
				pyroDamageBonus: 0.7360003249621399,
				anemoDamageBonus: 0.1200003283,
				hydroDamageBonus: 0.1200003283,
				dendroDamageBonus: 0.1200003283,
				electroDamageBonus: 0.1200003283,
				maxHp: 31640.8730472033,
				atk: 1420.9364016954876,
				def: 981.719482750175
			}
		}
	},
	{
		key: 'Venti',
		level: 80,
		constellation: 0,
		ascension: 5,
		talent: { auto: 1, skill: 4, burst: 7 },
		element: 'Anemo',
		stars: 5,
		weapon: { key: 'Cloudforged', level: 60, ascension: 3, refinement: 5 },
		artifacts: [
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'flower',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'def', value: 23 },
					{ key: 'critDMG_', value: 7 },
					{ key: 'critRate_', value: 10.5 },
					{ key: 'eleMas', value: 35 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'sands',
				level: 16,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'eleMas', value: 56 },
					{ key: 'critDMG_', value: 12.4 },
					{ key: 'hp', value: 299 },
					{ key: 'enerRech_', value: 10.4 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'circlet',
				level: 16,
				rarity: 4,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'critRate_', value: 5.9 },
					{ key: 'eleMas', value: 30 },
					{ key: 'hp', value: 191 },
					{ key: 'atk', value: 14 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'goblet',
				level: 14,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'atk', value: 14 },
					{ key: 'def', value: 16 },
					{ key: 'atk_', value: 16.9 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'plume',
				level: 12,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'eleMas', value: 19 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'def', value: 23 },
					{ key: 'def_', value: 19 }
				]
			}
		]
	},
	{
		key: 'Tartaglia',
		level: 80,
		constellation: 0,
		ascension: 6,
		talent: { auto: 8, skill: 10, burst: 9 },
		element: 'Hydro',
		stars: 5,
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 },
		artifacts: [
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hydro_dmg_',
				substats: [
					{ key: 'critDMG_', value: 14.8 },
					{ key: 'critRate_', value: 3.1 },
					{ key: 'hp_', value: 22.7 },
					{ key: 'def', value: 16 }
				]
			},
			{
				setKey: 'HeartOfDepth',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critRate_', value: 7 },
					{ key: 'enerRech_', value: 11 },
					{ key: 'critDMG_', value: 21 },
					{ key: 'eleMas', value: 42 }
				]
			},
			{
				setKey: 'HeartOfDepth',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'hp_', value: 4.7 },
					{ key: 'critDMG_', value: 18.7 },
					{ key: 'eleMas', value: 23 },
					{ key: 'critRate_', value: 12.8 }
				]
			},
			{
				setKey: 'HeartOfDepth',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'critRate_', value: 6.2 },
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'def_', value: 11.7 },
					{ key: 'eleMas', value: 42 }
				]
			},
			{
				setKey: 'HeartOfDepth',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'atk_', value: 4.7 },
					{ key: 'critDMG_', value: 21.8 },
					{ key: 'def_', value: 17.5 },
					{ key: 'def', value: 19 }
				]
			}
		],
		ranking: {
			name: 'Childe International, Avg DMG',
			details:
				"1 rQ (vape) + 1 E + N2C * 6 + mSlash * 4. c0r1 Kazuha + c6r1 Xiangling + c6r1 Bennett. Most buffs expire after 3N2C. Shimenawa's burst damage is halved.",
			weapon: 'Aqua Simulacra',
			weaponStars: 1,
			ranking: 18380,
			outOf: 158121,
			stats: {
				critRate: 0.6526007483678894,
				critDamage: 1.4556007812696534,
				energyRecharge: 1.110100788899048,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 107.22999648553906,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.9040007422643738,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 20299.890625758,
				atk: 769.9595954845626,
				def: 1012.9014900158126
			}
		}
	},
	{
		key: 'Zhongli',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 9, burst: 7 },
		element: 'Geo',
		stars: 5,
		weapon: { key: 'BlackTassel', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'eleMas', value: 54 },
					{ key: 'hp', value: 866 },
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'critRate_', value: 2.7 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'eleMas', value: 58 },
					{ key: 'hp_', value: 9.9 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'def_', value: 10.9 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'atk_', value: 4.1 },
					{ key: 'def_', value: 13.1 },
					{ key: 'hp', value: 1195 },
					{ key: 'eleMas', value: 23 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'atk', value: 68 },
					{ key: 'hp', value: 418 },
					{ key: 'def_', value: 13.1 },
					{ key: 'atk_', value: 5.8 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'plume',
				level: 16,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'hp_', value: 9.3 },
					{ key: 'def_', value: 17.5 },
					{ key: 'critRate_', value: 3.5 },
					{ key: 'enerRech_', value: 4.5 }
				]
			}
		],
		ranking: {
			name: 'Shieldbot, Max HP',
			details: '---',
			weapon: 'Black Tassel',
			weaponStars: 3,
			ranking: 48684,
			outOf: 569504,
			stats: {
				critRate: 0.11220080344261323,
				critDamage: 0.5000007966,
				energyRecharge: 1.148900828643457,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 135.2100075104672,
				physicalDamageBonus: 0,
				geoDamageBonus: 0.2880007842022339,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 55159.7734382966,
				atk: 991.6034553864438,
				def: 1141.1004646637875
			}
		}
	},
	{
		key: 'Xianyun',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 6, burst: 9 },
		element: 'Anemo',
		stars: 5,
		weapon: { key: 'OathswornEye', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'critRate_', value: 2.7 },
					{ key: 'def', value: 37 },
					{ key: 'enerRech_', value: 16.8 },
					{ key: 'critDMG_', value: 13.2 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'atk_', value: 14 },
					{ key: 'enerRech_', value: 6.5 },
					{ key: 'critDMG_', value: 10.9 },
					{ key: 'def_', value: 13.9 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'def', value: 67 },
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'atk_', value: 14 },
					{ key: 'enerRech_', value: 12.3 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'def', value: 21 },
					{ key: 'enerRech_', value: 9.7 },
					{ key: 'critRate_', value: 10.5 },
					{ key: 'eleMas', value: 35 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'enerRech_', value: 11.7 },
					{ key: 'hp', value: 627 },
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'eleMas', value: 33 }
				]
			}
		]
	},
	{
		key: 'KaedeharaKazuha',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 7, skill: 9, burst: 9 },
		element: 'Anemo',
		stars: 5,
		weapon: { key: 'FavoniusSword', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'eleMas', value: 61 },
					{ key: 'atk', value: 33 },
					{ key: 'enerRech_', value: 10.4 },
					{ key: 'def', value: 19 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'def', value: 19 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'eleMas', value: 35 },
					{ key: 'hp_', value: 20.4 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'def', value: 37 },
					{ key: 'hp', value: 239 },
					{ key: 'hp_', value: 10.5 },
					{ key: 'enerRech_', value: 16.8 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'atk_', value: 8.2 },
					{ key: 'hp', value: 777 },
					{ key: 'atk', value: 58 },
					{ key: 'def', value: 21 }
				]
			},
			{
				setKey: 'MaidenBeloved',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'enerRech_', value: 11 },
					{ key: 'def_', value: 10.2 },
					{ key: 'critDMG_', value: 21.8 },
					{ key: 'hp', value: 209 }
				]
			}
		],
		ranking: {
			name: 'EM + ER (+ CR) balance formula',
			details:
				'Assumes Favonius Sword R5 (EM / 1000 + ER / 500) * 5000 + (vv ? 2000 : 0) + (CR > 15% ? (CR * 1500) : 0)',
			weapon: 'Favonius Sword',
			weaponStars: 4,
			ranking: 397877,
			outOf: 777849,
			stats: {
				critRate: 0.05000095514505806,
				critDamage: 0.7176009423837036,
				energyRecharge: 1.5607340343102782,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 770.280030251275,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0.15000096036046448,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 23476.1328134544,
				atk: 767.6204233176812,
				def: 984.1942758567437
			}
		}
	},
	{
		key: 'RaidenShogun',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 9, burst: 8 },
		element: 'Electro',
		stars: 5,
		weapon: { key: 'DragonsBane', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'GildedDreams',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critRate_', value: 11.7 },
					{ key: 'eleMas', value: 40 },
					{ key: 'atk_', value: 13.4 },
					{ key: 'critDMG_', value: 7 }
				]
			},
			{
				setKey: 'GildedDreams',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'def_', value: 13.9 },
					{ key: 'enerRech_', value: 17.5 },
					{ key: 'eleMas', value: 47 },
					{ key: 'def', value: 19 }
				]
			},
			{
				setKey: 'GildedDreams',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'critRate_', value: 7 },
					{ key: 'atk_', value: 5.8 },
					{ key: 'enerRech_', value: 16.2 },
					{ key: 'atk', value: 27 }
				]
			},
			{
				setKey: 'GildedDreams',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'critRate_', value: 6.2 },
					{ key: 'enerRech_', value: 11 },
					{ key: 'def_', value: 7.3 },
					{ key: 'atk_', value: 14.6 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'def', value: 60 },
					{ key: 'critRate_', value: 5.8 },
					{ key: 'critDMG_', value: 12.4 },
					{ key: 'hp_', value: 4.1 }
				]
			}
		],
		ranking: {
			name: 'Double Hydro Burst, Avg DMG',
			details:
				"c0 Raiden, c2 Furina, c0 Yelan, c0 4p VV Jean. Combo: Q 3N5. Furina's Fanfare at 400 stacks. Yelan's A4 at 8s seconds. ",
			weapon: 'Staff of the Scarlet Sands',
			weaponStars: 4,
			ranking: 785670,
			outOf: 905764,
			stats: {
				critRate: 0.3572009568098236,
				critDamage: 0.6943009559992004,
				energyRecharge: 1.7669009034517456,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 946.261963850725,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0.30676093744069827,
				maxHp: 18213.8046884601,
				atk: 1397.4862070147874,
				def: 1034.8646249835374
			}
		}
	},
	{
		key: 'Nahida',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 6, skill: 10, burst: 8 },
		element: 'Dendro',
		stars: 5,
		weapon: { key: 'SacrificialFragments', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'GildedDreams',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'critDMG_', value: 21.8 },
					{ key: 'critRate_', value: 9.7 },
					{ key: 'def', value: 23 }
				]
			},
			{
				setKey: 'DeepwoodMemories',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'eleMas', value: 47 },
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'def_', value: 26.2 },
					{ key: 'atk', value: 18 }
				]
			},
			{
				setKey: 'DeepwoodMemories',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'eleMas', value: 47 },
					{ key: 'atk_', value: 5.8 },
					{ key: 'hp', value: 747 },
					{ key: 'critRate_', value: 9.3 }
				]
			},
			{
				setKey: 'DeepwoodMemories',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'def', value: 35 },
					{ key: 'enerRech_', value: 20.7 },
					{ key: 'hp_', value: 4.1 },
					{ key: 'critDMG_', value: 5.4 }
				]
			},
			{
				setKey: 'DeepwoodMemories',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'atk', value: 16 },
					{ key: 'def', value: 32 },
					{ key: 'critRate_', value: 8.9 },
					{ key: 'hp_', value: 8.7 }
				]
			}
		],
		ranking: {
			name: 'Off-field Tri-Karma Purification',
			details:
				'Off-field Tri-Karma Purification (non-spread) avg DMG. Example team: Nahida + Xingqiu + Kuki + non-dendro flex.',
			weapon: 'A Thousand Floating Dreams',
			weaponStars: 4,
			ranking: 382074,
			outOf: 718694,
			stats: {
				critRate: 0.32990047821908874,
				critDamage: 0.8497004557600586,
				energyRecharge: 1.259000544642505,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 988.4519658137312,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0.15000048766046448,
				electroDamageBonus: 0,
				maxHp: 17215.0781254817,
				atk: 1141.32568407545,
				def: 885.8529667902937
			}
		}
	},
	{
		key: 'Furina',
		level: 90,
		constellation: 1,
		ascension: 6,
		talent: { auto: 1, skill: 10, burst: 10 },
		element: 'Hydro',
		stars: 5,
		weapon: { key: 'FleuveCendreFerryman', level: 90, ascension: 6, refinement: 3 },
		artifacts: [
			{
				setKey: 'GoldenTroupe',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'hp_', value: 12.2 },
					{ key: 'eleMas', value: 40 },
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'critDMG_', value: 12.4 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'enerRech_', value: 17.5 },
					{ key: 'hp_', value: 5.8 },
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'eleMas', value: 65 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'def', value: 58 },
					{ key: 'critRate_', value: 6.6 },
					{ key: 'atk', value: 31 },
					{ key: 'critDMG_', value: 15.5 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'atk_', value: 9.9 },
					{ key: 'critDMG_', value: 27.2 },
					{ key: 'hp', value: 299 },
					{ key: 'enerRech_', value: 6.5 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'def', value: 44 },
					{ key: 'hp_', value: 14 },
					{ key: 'eleMas', value: 40 },
					{ key: 'critDMG_', value: 12.4 }
				]
			}
		],
		ranking: {
			name: 'Mademoiselle Crabaletta, Avg DMG',
			details:
				'Average DMG for Mademoiselle Crabaletta in a double hydro team. Number of characters who offered HP: 4. Fanfare stacks count: 200. Weapon stacks maxed when applicable. ',
			weapon: 'Fleuve Cendre Ferryman',
			weaponStars: 4,
			ranking: 101527,
			outOf: 406193,
			stats: {
				critRate: 0.7202001166888061,
				critDamage: 1.3159001422472778,
				energyRecharge: 1.7249001813479248,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 39.62999742751797,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 38907.7500001741,
				atk: 1222.8964845491,
				def: 797.3916627717563
			}
		}
	},
	{
		key: 'Faruzan',
		level: 90,
		constellation: 6,
		ascension: 6,
		talent: { auto: 1, skill: 6, burst: 10 },
		element: 'Anemo',
		stars: 4,
		weapon: { key: 'FavoniusWarbow', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'GoldenTroupe',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'atk', value: 53 },
					{ key: 'critDMG_', value: 7 },
					{ key: 'enerRech_', value: 9.1 },
					{ key: 'critRate_', value: 10.1 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'def_', value: 5.1 },
					{ key: 'enerRech_', value: 9.7 },
					{ key: 'critRate_', value: 12.1 },
					{ key: 'hp_', value: 5.3 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'enerRech_',
				substats: [
					{ key: 'critRate_', value: 6.6 },
					{ key: 'def', value: 16 },
					{ key: 'atk', value: 27 },
					{ key: 'hp', value: 837 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'anemo_dmg_',
				substats: [
					{ key: 'hp_', value: 5.3 },
					{ key: 'enerRech_', value: 11.7 },
					{ key: 'hp', value: 657 },
					{ key: 'eleMas', value: 61 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'atk', value: 51 },
					{ key: 'def', value: 58 },
					{ key: 'atk_', value: 5.3 },
					{ key: 'hp_', value: 9.9 }
				]
			}
		]
	},
	{
		key: 'Bennett',
		level: 90,
		constellation: 5,
		ascension: 6,
		talent: { auto: 1, skill: 2, burst: 10 },
		element: 'Pyro',
		stars: 4,
		weapon: { key: 'AquilaFavonia', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'NoblesseOblige',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'atk_', value: 9.9 },
					{ key: 'enerRech_', value: 23.3 },
					{ key: 'def', value: 46 },
					{ key: 'def_', value: 7.3 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'atk', value: 31 },
					{ key: 'def', value: 44 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'atk_', value: 21.6 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'heal_',
				substats: [
					{ key: 'def', value: 35 },
					{ key: 'hp_', value: 9.9 },
					{ key: 'enerRech_', value: 16.2 },
					{ key: 'atk', value: 14 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'enerRech_',
				substats: [
					{ key: 'atk', value: 53 },
					{ key: 'hp', value: 807 },
					{ key: 'eleMas', value: 21 },
					{ key: 'hp_', value: 5.8 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'flower',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'enerRech_', value: 11.7 },
					{ key: 'def_', value: 16.8 },
					{ key: 'atk_', value: 5.8 },
					{ key: 'hp_', value: 10.5 }
				]
			}
		]
	},
	{
		key: 'Xingqiu',
		level: 81,
		constellation: 6,
		ascension: 6,
		talent: { auto: 1, skill: 7, burst: 10 },
		element: 'Hydro',
		stars: 4,
		weapon: { key: 'SkywardBlade', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'atk', value: 35 },
					{ key: 'critRate_', value: 5.8 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'enerRech_', value: 11 },
					{ key: 'critRate_', value: 7.8 },
					{ key: 'atk_', value: 14.6 },
					{ key: 'critDMG_', value: 13.2 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'def', value: 42 },
					{ key: 'atk_', value: 11.1 },
					{ key: 'critRate_', value: 3.5 },
					{ key: 'critDMG_', value: 21 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hydro_dmg_',
				substats: [
					{ key: 'eleMas', value: 58 },
					{ key: 'def_', value: 13.1 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'critDMG_', value: 10.9 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'enerRech_', value: 6.5 },
					{ key: 'hp', value: 269 },
					{ key: 'critDMG_', value: 27.2 },
					{ key: 'def_', value: 20.4 }
				]
			}
		],
		ranking: {
			name: 'Sword Rain, Avg DMG',
			details: "4p Nymph's Dream is set to very optimistic 3 stacks.",
			weapon: 'Sacrificial Sword',
			weaponStars: 5,
			ranking: 39319,
			outOf: 133571,
			stats: {
				critRate: 0.5760009615091125,
				critDamage: 1.2771010129121583,
				energyRecharge: 2.1916808812288084,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 58.27999970599687,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.6660009352830688,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 19101.3789071767,
				atk: 1585.6243905751376,
				def: 948.60205170795
			}
		}
	},
	{
		key: 'Wanderer',
		level: 80,
		constellation: 0,
		ascension: 6,
		talent: { auto: 8, skill: 7, burst: 6 },
		element: 'Anemo',
		stars: 5,
		weapon: { key: 'SolarPearl', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'atk', value: 53 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'critDMG_', value: 14.8 },
					{ key: 'critRate_', value: 6.6 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'def_', value: 5.8 },
					{ key: 'critDMG_', value: 20.2 },
					{ key: 'def', value: 72 },
					{ key: 'critRate_', value: 3.1 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'hp_', value: 10.5 },
					{ key: 'critDMG_', value: 21 },
					{ key: 'hp', value: 239 },
					{ key: 'atk', value: 37 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critDMG_',
				substats: [
					{ key: 'critRate_', value: 7.4 },
					{ key: 'atk', value: 14 },
					{ key: 'atk_', value: 5.3 },
					{ key: 'enerRech_', value: 20.7 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'anemo_dmg_',
				substats: [
					{ key: 'hp_', value: 8.7 },
					{ key: 'def_', value: 5.8 },
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'hp', value: 717 }
				]
			}
		]
	},
	{
		key: 'Tighnari',
		level: 80,
		constellation: 3,
		ascension: 6,
		talent: { auto: 9, skill: 1, burst: 8 },
		element: 'Dendro',
		stars: 5,
		weapon: { key: 'PolarStar', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'WanderersTroupe',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'atk', value: 16 },
					{ key: 'atk_', value: 4.1 },
					{ key: 'critRate_', value: 10.5 },
					{ key: 'critDMG_', value: 28.7 }
				]
			},
			{
				setKey: 'WanderersTroupe',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'atk_', value: 9.3 },
					{ key: 'eleMas', value: 33 },
					{ key: 'enerRech_', value: 18.1 }
				]
			},
			{
				setKey: 'WanderersTroupe',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				substats: [
					{ key: 'enerRech_', value: 16.2 },
					{ key: 'def', value: 42 },
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'atk_', value: 10.5 }
				]
			},
			{
				setKey: 'WanderersTroupe',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'atk_', value: 8.7 },
					{ key: 'def', value: 81 },
					{ key: 'hp_', value: 4.1 },
					{ key: 'hp', value: 299 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'dendro_dmg_',
				substats: [
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'hp_', value: 10.5 },
					{ key: 'critRate_', value: 13.6 },
					{ key: 'atk', value: 16 }
				]
			}
		],
		ranking: {
			name: 'Quicken/Spread Team Combo, Avg DMG',
			details:
				"Combo: E Q 3CA. C1 Tighnari + C0R1 Deepwood Nahida + electro flex + electro flex. Tighnari's A1 buffs only CAs. Enemy has pre-existing Quicken aura. Nahida's A1 buff is maxed and lasts entire combo. ",
			weapon: 'Skyward Harp',
			weaponStars: 5,
			ranking: 15520,
			outOf: 49727,
			stats: {
				critRate: 0.9328683812452149,
				critDamage: 1.113800426228125,
				energyRecharge: 1.3433003623319457,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 299.1400150258375,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0.7540003259015869,
				electroDamageBonus: 0,
				maxHp: 16635.6171878774,
				atk: 1479.093506236775,
				def: 708.6028446156813
			}
		}
	},
	{
		key: 'SangonomiyaKokomi',
		level: 80,
		constellation: 0,
		ascension: 6,
		talent: { auto: 7, skill: 9, burst: 8 },
		element: 'Hydro',
		stars: 5,
		weapon: { key: 'ThrillingTalesOfDragonSlayers', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'enerRech_', value: 16.8 },
					{ key: 'hp_', value: 5.8 },
					{ key: 'def_', value: 7.3 },
					{ key: 'def', value: 53 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'heal_',
				substats: [
					{ key: 'critRate_', value: 3.1 },
					{ key: 'atk', value: 19 },
					{ key: 'def', value: 51 },
					{ key: 'hp_', value: 15.7 }
				]
			},
			{
				setKey: 'MaidenBeloved',
				slotKey: 'sands',
				level: 18,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'def_', value: 11.7 },
					{ key: 'eleMas', value: 19 },
					{ key: 'critRate_', value: 5.4 },
					{ key: 'hp', value: 478 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'plume',
				level: 16,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critDMG_', value: 5.4 },
					{ key: 'hp_', value: 11.1 },
					{ key: 'enerRech_', value: 17.5 },
					{ key: 'atk_', value: 5.8 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'goblet',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'def', value: 39 },
					{ key: 'atk_', value: 11.7 },
					{ key: 'atk', value: 33 },
					{ key: 'critDMG_', value: 6.2 }
				]
			}
		],
		ranking: {
			name: 'Heal + ER balance formula',
			details:
				"(((E_DMG / 5500) + (E_HEAL / 5000) + (ER / 150)) * 5000) + SET_BONUS. +6500 ToTM, +6000 OHC, +6000 Deepwood, +5000 Noblesse, +4000 Maiden. Please keep in mind custom 'balance formulas' are completely feelscrafted unlike proper avg dmg formulas.",
			weapon: 'Everlasting Moonglow',
			weaponStars: 3,
			ranking: 95596,
			outOf: 260997,
			stats: {
				critRate: -0.8644990685717224,
				critDamage: 0.616600894616449,
				energyRecharge: 1.3433009025319458,
				healingBonus: 0.6090008851750732,
				incomingHealingBonus: 0,
				elementalMastery: 18.650000536130275,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.28800090520223387,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 38976.4765634176,
				atk: 1038.03076263635,
				def: 870.200928651975
			}
		}
	},
	{
		key: 'Diluc',
		level: 80,
		constellation: 4,
		ascension: 6,
		talent: { auto: 9, skill: 7, burst: 7 },
		element: 'Pyro',
		stars: 5,
		weapon: { key: 'TheBell', level: 40, ascension: 1, refinement: 5 },
		artifacts: [
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critRate_', value: 6.2 },
					{ key: 'atk_', value: 19.8 },
					{ key: 'critDMG_', value: 7 },
					{ key: 'hp', value: 538 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'def', value: 39 },
					{ key: 'eleMas', value: 61 },
					{ key: 'critRate_', value: 3.9 },
					{ key: 'critDMG_', value: 13.2 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'pyro_dmg_',
				substats: [
					{ key: 'def', value: 53 },
					{ key: 'critDMG_', value: 11.7 },
					{ key: 'enerRech_', value: 11.7 },
					{ key: 'hp_', value: 8.7 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critDMG_',
				substats: [
					{ key: 'def_', value: 6.6 },
					{ key: 'enerRech_', value: 9.1 },
					{ key: 'critRate_', value: 3.1 },
					{ key: 'hp', value: 1076 }
				]
			},
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critRate_', value: 3.9 },
					{ key: 'critDMG_', value: 33.4 },
					{ key: 'atk', value: 16 },
					{ key: 'eleMas', value: 40 }
				]
			}
		]
	},
	{
		key: 'Kachina',
		level: 80,
		constellation: 0,
		ascension: 5,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Geo',
		stars: 4,
		weapon: { key: 'FootprintOfTheRainbow', level: 60, ascension: 3, refinement: 1 }
	},
	{
		key: 'Gorou',
		level: 80,
		constellation: 6,
		ascension: 5,
		talent: { auto: 1, skill: 6, burst: 6 },
		element: 'Geo',
		stars: 4,
		weapon: { key: 'FavoniusWarbow', level: 70, ascension: 4, refinement: 5 },
		artifacts: [
			{
				setKey: 'HuskOfOpulentDreams',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'def_', value: 12.4 },
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'atk_', value: 16.9 }
				]
			},
			{
				setKey: 'HuskOfOpulentDreams',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'def_',
				substats: [
					{ key: 'atk', value: 19 },
					{ key: 'critDMG_', value: 14 },
					{ key: 'enerRech_', value: 24 },
					{ key: 'def', value: 16 }
				]
			},
			{
				setKey: 'HuskOfOpulentDreams',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'atk', value: 33 },
					{ key: 'def_', value: 10.2 },
					{ key: 'hp', value: 299 },
					{ key: 'enerRech_', value: 16.8 }
				]
			}
		]
	},
	{
		key: 'Noelle',
		level: 80,
		constellation: 6,
		ascension: 5,
		talent: { auto: 8, skill: 5, burst: 7 },
		element: 'Geo',
		stars: 4,
		weapon: { key: 'SerpentSpine', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'def_', value: 27 },
					{ key: 'hp', value: 508 },
					{ key: 'critRate_', value: 6.6 },
					{ key: 'critDMG_', value: 7 }
				]
			},
			{
				setKey: 'HuskOfOpulentDreams',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 14 },
					{ key: 'def', value: 32 },
					{ key: 'hp_', value: 9.9 },
					{ key: 'critRate_', value: 10.5 }
				]
			},
			{
				setKey: 'HuskOfOpulentDreams',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'def', value: 37 },
					{ key: 'enerRech_', value: 12.3 },
					{ key: 'critRate_', value: 9.3 },
					{ key: 'critDMG_', value: 12.4 }
				]
			},
			{
				setKey: 'HuskOfOpulentDreams',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'def_', value: 18.2 },
					{ key: 'enerRech_', value: 11 },
					{ key: 'atk_', value: 10.5 },
					{ key: 'hp_', value: 9.3 }
				]
			},
			{
				setKey: 'HuskOfOpulentDreams',
				slotKey: 'goblet',
				level: 6,
				rarity: 5,
				mainStatKey: 'def_',
				substats: [
					{ key: 'hp', value: 269 },
					{ key: 'def', value: 19 },
					{ key: 'eleMas', value: 21 },
					{ key: 'atk', value: 16 }
				]
			}
		],
		ranking: {
			name: 'Hyper Mono Geo NA combo, Avg DMG',
			details: 'N1 + N2 + N3 + N4. Team: Noelle C6, Gorou C6, Yunjin C6, Zhongli C0',
			weapon: 'Serpent Spine',
			weaponStars: 4,
			ranking: 2050,
			outOf: 21664,
			stats: {
				critRate: 0.7417400555316711,
				critDamage: 1.7826999501888061,
				energyRecharge: 1.3628000096980835,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 39.62999726101797,
				physicalDamageBonus: 0,
				geoDamageBonus: 0.46599999830167543,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 18158.8632812576,
				atk: 1023.0875244216625,
				def: 1645.2703857497875
			}
		}
	},
	{
		key: 'ShikanoinHeizou',
		level: 80,
		constellation: 4,
		ascension: 5,
		talent: { auto: 6, skill: 8, burst: 6 },
		element: 'Anemo',
		stars: 4,
		weapon: { key: 'TheWidsith', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'atk', value: 14 },
					{ key: 'hp_', value: 9.9 },
					{ key: 'def', value: 19 },
					{ key: 'critDMG_', value: 36.5 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'flower',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'def', value: 53 },
					{ key: 'critRate_', value: 5.4 },
					{ key: 'hp_', value: 8.7 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'plume',
				level: 16,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critRate_', value: 3.9 },
					{ key: 'eleMas', value: 58 },
					{ key: 'critDMG_', value: 12.4 },
					{ key: 'def_', value: 5.1 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'sands',
				level: 6,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'critRate_', value: 3.5 },
					{ key: 'hp', value: 299 },
					{ key: 'def', value: 23 },
					{ key: 'eleMas', value: 19 }
				]
			}
		]
	},
	{
		key: 'Sayu',
		level: 80,
		constellation: 6,
		ascension: 5,
		talent: { auto: 2, skill: 4, burst: 7 },
		element: 'Anemo',
		stars: 4,
		weapon: { key: 'FavoniusGreatsword', level: 70, ascension: 4, refinement: 5 },
		artifacts: [
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'enerRech_', value: 9.7 },
					{ key: 'def', value: 37 },
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'eleMas', value: 42 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'eleMas', value: 40 },
					{ key: 'critDMG_', value: 10.9 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'hp', value: 866 }
				]
			},
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'enerRech_', value: 11.7 },
					{ key: 'atk', value: 35 },
					{ key: 'hp_', value: 19.2 },
					{ key: 'def', value: 21 }
				]
			},
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'plume',
				level: 16,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'hp', value: 448 },
					{ key: 'eleMas', value: 58 },
					{ key: 'atk_', value: 5.8 },
					{ key: 'critRate_', value: 5.8 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'flower',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'atk_', value: 14.6 },
					{ key: 'enerRech_', value: 10.4 },
					{ key: 'critRate_', value: 6.2 }
				]
			}
		]
	},
	{
		key: 'Diona',
		level: 80,
		constellation: 6,
		ascension: 5,
		talent: { auto: 1, skill: 7, burst: 8 },
		element: 'Cryo',
		stars: 4,
		weapon: { key: 'TheViridescentHunt', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'goblet',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'hp', value: 777 },
					{ key: 'atk_', value: 8.2 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'critRate_', value: 6.2 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'sands',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'def_', value: 13.9 },
					{ key: 'enerRech_', value: 11.7 },
					{ key: 'def', value: 37 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'circlet',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'atk_', value: 5.8 },
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'atk', value: 49 },
					{ key: 'eleMas', value: 40 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'flower',
				level: 12,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 14 },
					{ key: 'hp_', value: 5.8 },
					{ key: 'def_', value: 10.9 },
					{ key: 'enerRech_', value: 6.5 }
				]
			}
		]
	},
	{
		key: 'Fischl',
		level: 80,
		constellation: 6,
		ascension: 6,
		talent: { auto: 1, skill: 10, burst: 5 },
		element: 'Electro',
		stars: 4,
		weapon: { key: 'TheStringless', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'GoldenTroupe',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critDMG_', value: 14 },
					{ key: 'enerRech_', value: 10.4 },
					{ key: 'critRate_', value: 7.4 },
					{ key: 'atk', value: 31 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'hp_', value: 4.7 },
					{ key: 'eleMas', value: 16 },
					{ key: 'hp', value: 687 },
					{ key: 'atk_', value: 17.5 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'eleMas', value: 16 },
					{ key: 'critRate_', value: 7.4 },
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'enerRech_', value: 15.5 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'def', value: 37 },
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'eleMas', value: 37 },
					{ key: 'enerRech_', value: 16.8 }
				]
			},
			{
				setKey: 'DeepwoodMemories',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'electro_dmg_',
				substats: [
					{ key: 'critRate_', value: 7.8 },
					{ key: 'def', value: 39 },
					{ key: 'atk_', value: 13.4 },
					{ key: 'critDMG_', value: 13.2 }
				]
			}
		],
		ranking: {
			name: 'Raw Oz Avg DMG',
			details:
				'4x Oz hits. no buffs, talent level 13. One Oz hit does not benefit from the Thundersoother (75% uptime). Polar Star at 3 stacks.',
			weapon: 'Polar Star',
			weaponStars: 5,
			ranking: 29227,
			outOf: 222226,
			stats: {
				critRate: 0.9756687331958557,
				critDamage: 1.2537007380290772,
				energyRecharge: 1.2720007944865968,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 60.61000133045156,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0.46600071080167543,
				maxHp: 13332.9003913451,
				atk: 1991.3085944701,
				def: 741.86084056385
			}
		}
	},
	{
		key: 'KukiShinobu',
		level: 80,
		constellation: 1,
		ascension: 5,
		talent: { auto: 1, skill: 6, burst: 4 },
		element: 'Electro',
		stars: 4,
		weapon: { key: 'ToukabouShigure', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'GildedDreams',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'hp', value: 747 },
					{ key: 'eleMas', value: 16 },
					{ key: 'critRate_', value: 3.1 },
					{ key: 'critDMG_', value: 24.1 }
				]
			},
			{
				setKey: 'MaidenBeloved',
				slotKey: 'circlet',
				level: 16,
				rarity: 5,
				mainStatKey: 'heal_',
				substats: [
					{ key: 'def_', value: 13.9 },
					{ key: 'hp_', value: 5.8 },
					{ key: 'eleMas', value: 58 },
					{ key: 'enerRech_', value: 12.3 }
				]
			}
		]
	},
	{
		key: 'Beidou',
		level: 80,
		constellation: 6,
		ascension: 5,
		talent: { auto: 1, skill: 1, burst: 8 },
		element: 'Electro',
		stars: 4,
		weapon: { key: 'LuxuriousSeaLord', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'atk', value: 14 },
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'critDMG_', value: 18.7 },
					{ key: 'def_', value: 16.8 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'enerRech_', value: 15.5 },
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'def_', value: 12.4 },
					{ key: 'atk', value: 58 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'electro_dmg_',
				substats: [
					{ key: 'critRate_', value: 3.1 },
					{ key: 'enerRech_', value: 18.1 },
					{ key: 'def', value: 58 },
					{ key: 'hp', value: 239 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'sands',
				level: 16,
				rarity: 5,
				mainStatKey: 'enerRech_',
				substats: [
					{ key: 'eleMas', value: 23 },
					{ key: 'hp_', value: 4.7 },
					{ key: 'atk', value: 31 },
					{ key: 'atk_', value: 15.2 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'plume',
				level: 12,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'def', value: 23 },
					{ key: 'critDMG_', value: 5.4 },
					{ key: 'def_', value: 12.4 },
					{ key: 'critRate_', value: 6.6 }
				]
			}
		]
	},
	{
		key: 'Xiangling',
		level: 80,
		constellation: 6,
		ascension: 6,
		talent: { auto: 3, skill: 6, burst: 10 },
		element: 'Pyro',
		stars: 4,
		weapon: { key: 'TheCatch', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'critRate_', value: 6.2 },
					{ key: 'atk_', value: 14.6 },
					{ key: 'def_', value: 5.1 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'enerRech_',
				substats: [
					{ key: 'def', value: 19 },
					{ key: 'critDMG_', value: 33.4 },
					{ key: 'critRate_', value: 7.8 },
					{ key: 'hp', value: 269 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'pyro_dmg_',
				substats: [
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'hp_', value: 10.5 },
					{ key: 'def', value: 37 },
					{ key: 'critRate_', value: 12.8 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'hp_', value: 5.8 },
					{ key: 'def', value: 63 },
					{ key: 'critDMG_', value: 11.7 },
					{ key: 'atk', value: 33 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'def', value: 46 },
					{ key: 'critDMG_', value: 11.7 },
					{ key: 'enerRech_', value: 22 },
					{ key: 'critRate_', value: 3.5 }
				]
			}
		]
	},
	{
		key: 'Thoma',
		level: 80,
		constellation: 6,
		ascension: 5,
		talent: { auto: 1, skill: 1, burst: 8 },
		element: 'Pyro',
		stars: 4,
		weapon: { key: 'SkywardSpine', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'NoblesseOblige',
				slotKey: 'plume',
				level: 17,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'hp_', value: 10.5 },
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'atk_', value: 10.5 },
					{ key: 'critDMG_', value: 12.4 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'sands',
				level: 16,
				rarity: 5,
				mainStatKey: 'enerRech_',
				substats: [
					{ key: 'critDMG_', value: 12.4 },
					{ key: 'def', value: 39 },
					{ key: 'eleMas', value: 21 },
					{ key: 'atk_', value: 8.7 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'circlet',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'def_', value: 5.1 },
					{ key: 'critRate_', value: 6.2 },
					{ key: 'enerRech_', value: 14.9 },
					{ key: 'def', value: 16 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'flower',
				level: 12,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'atk_', value: 10.5 },
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'atk', value: 51 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'goblet',
				level: 12,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'eleMas', value: 23 },
					{ key: 'def', value: 39 },
					{ key: 'enerRech_', value: 11 },
					{ key: 'hp', value: 239 }
				]
			}
		]
	},
	{
		key: 'Aloy',
		level: 70,
		constellation: 0,
		ascension: 4,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Cryo',
		stars: 5,
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Barbara',
		level: 70,
		constellation: 6,
		ascension: 5,
		talent: { auto: 5, skill: 8, burst: 4 },
		element: 'Hydro',
		stars: 4,
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Amber',
		level: 70,
		constellation: 6,
		ascension: 4,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Pyro',
		stars: 4,
		weapon: { key: 'FadingTwilight', level: 90, ascension: 6, refinement: 5 },
		artifacts: [
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'atk_', value: 21 },
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'critRate_', value: 2.7 },
					{ key: 'enerRech_', value: 12.3 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'enerRech_', value: 13 },
					{ key: 'critDMG_', value: 14.8 },
					{ key: 'eleMas', value: 63 },
					{ key: 'def_', value: 13.1 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'hp', value: 538 },
					{ key: 'def', value: 19 },
					{ key: 'critDMG_', value: 14.8 },
					{ key: 'atk_', value: 14 }
				]
			},
			{
				setKey: 'OceanHuedClam',
				slotKey: 'goblet',
				level: 16,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'eleMas', value: 65 },
					{ key: 'atk', value: 19 },
					{ key: 'atk_', value: 5.8 }
				]
			}
		]
	},
	{
		key: 'Sucrose',
		level: 60,
		constellation: 6,
		ascension: 3,
		talent: { auto: 1, skill: 3, burst: 3 },
		element: 'Anemo',
		stars: 4,
		weapon: { key: 'ThrillingTalesOfDragonSlayers', level: 1, ascension: 0, refinement: 5 },
		artifacts: [
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'sands',
				level: 14,
				rarity: 4,
				mainStatKey: 'enerRech_',
				substats: [
					{ key: 'def', value: 17 },
					{ key: 'hp_', value: 7.9 },
					{ key: 'eleMas', value: 28 },
					{ key: 'critDMG_', value: 5 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'flower',
				level: 10,
				rarity: 4,
				mainStatKey: 'hp',
				substats: [
					{ key: 'def', value: 15 },
					{ key: 'enerRech_', value: 4.7 },
					{ key: 'atk_', value: 3.3 },
					{ key: 'critRate_', value: 2.5 }
				]
			}
		]
	},
	{
		key: 'Razor',
		level: 50,
		constellation: 6,
		ascension: 2,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Electro',
		stars: 4,
		weapon: { key: 'WasterGreatsword', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Gaming',
		level: 50,
		constellation: 4,
		ascension: 2,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Pyro',
		stars: 4,
		weapon: { key: 'WasterGreatsword', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Kaeya',
		level: 45,
		constellation: 5,
		ascension: 2,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Cryo',
		stars: 4,
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Jean',
		level: 40,
		constellation: 2,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Anemo',
		stars: 5,
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Mona',
		level: 40,
		constellation: 1,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Hydro',
		stars: 5,
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'YunJin',
		level: 40,
		constellation: 2,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Geo',
		stars: 4,
		weapon: { key: 'FavoniusLance', level: 1, ascension: 0, refinement: 4 }
	},
	{
		key: 'Ningguang',
		level: 40,
		constellation: 6,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Geo',
		stars: 4,
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Yanfei',
		level: 40,
		constellation: 4,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Pyro',
		stars: 4,
		weapon: { key: 'FavoniusCodex', level: 40, ascension: 1, refinement: 5 },
		artifacts: [
			{
				setKey: 'Berserker',
				slotKey: 'plume',
				level: 6,
				rarity: 4,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critRate_', value: 3.1 },
					{ key: 'def', value: 19 },
					{ key: 'enerRech_', value: 4.1 }
				]
			},
			{
				setKey: 'Berserker',
				slotKey: 'goblet',
				level: 6,
				rarity: 4,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'atk', value: 11 },
					{ key: 'hp', value: 215 },
					{ key: 'enerRech_', value: 3.6 }
				]
			}
		]
	},
	{
		key: 'Lisa',
		level: 30,
		constellation: 4,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Electro',
		stars: 4,
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Qiqi',
		level: 20,
		constellation: 3,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Cryo',
		stars: 5,
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Keqing',
		level: 20,
		constellation: 1,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Electro',
		stars: 5,
		weapon: { key: 'BlackcliffLongsword', level: 90, ascension: 6, refinement: 1 }
	},
	{
		key: 'Chongyun',
		level: 20,
		constellation: 6,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Cryo',
		stars: 4,
		weapon: { key: 'SacrificialGreatsword', level: 1, ascension: 0, refinement: 5 }
	},
	{
		key: 'KujouSara',
		level: 20,
		constellation: 3,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Electro',
		stars: 4,
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Yaoyao',
		level: 20,
		constellation: 0,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Dendro',
		stars: 4,
		weapon: { key: 'BalladOfTheFjords', level: 1, ascension: 0, refinement: 5 },
		artifacts: [
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'enerRech_', value: 11.7 },
					{ key: 'atk_', value: 4.1 },
					{ key: 'atk', value: 62 },
					{ key: 'critDMG_', value: 14 }
				]
			}
		]
	},
	{
		key: 'Collei',
		level: 20,
		constellation: 4,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Dendro',
		stars: 4,
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Candace',
		level: 20,
		constellation: 1,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Hydro',
		stars: 4,
		weapon: { key: 'BeginnersProtector', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Xinyan',
		level: 20,
		constellation: 6,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Pyro',
		stars: 4,
		weapon: { key: 'WasterGreatsword', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Lynette',
		level: 1,
		constellation: 6,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Anemo',
		stars: 4,
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Charlotte',
		level: 1,
		constellation: 1,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Cryo',
		stars: 4,
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Mika',
		level: 1,
		constellation: 0,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Cryo',
		stars: 4,
		weapon: { key: 'BeginnersProtector', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Layla',
		level: 1,
		constellation: 1,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Cryo',
		stars: 4,
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Rosaria',
		level: 1,
		constellation: 6,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Cryo',
		stars: 4,
		weapon: { key: 'BeginnersProtector', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Sethos',
		level: 1,
		constellation: 0,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Electro',
		stars: 4,
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Dori',
		level: 1,
		constellation: 3,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		element: 'Electro',
		stars: 4,
		weapon: { key: 'WasterGreatsword', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Arlecchino',
		level: 90,
		constellation: 1,
		ascension: 6,
		talent: { auto: 10, skill: 6, burst: 6 },
		element: 'Pyro',
		stars: 5,
		weapon: { key: 'StaffOfHoma', level: 90, ascension: 6, refinement: 1 },
		artifacts: [
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				substats: [
					{ key: 'critRate_', value: 16.3 },
					{ key: 'def_', value: 6.6 },
					{ key: 'atk', value: 14 },
					{ key: 'critDMG_', value: 5.4 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				substats: [
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'critRate_', value: 2.7 },
					{ key: 'atk_', value: 19.2 },
					{ key: 'def_', value: 5.8 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				substats: [
					{ key: 'hp', value: 448 },
					{ key: 'critDMG_', value: 21 },
					{ key: 'def_', value: 11.7 },
					{ key: 'critRate_', value: 5.8 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				substats: [
					{ key: 'enerRech_', value: 12.3 },
					{ key: 'critDMG_', value: 5.4 },
					{ key: 'hp', value: 926 },
					{ key: 'def', value: 21 }
				]
			},
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'pyro_dmg_',
				substats: [
					{ key: 'atk', value: 37 },
					{ key: 'hp', value: 538 },
					{ key: 'critRate_', value: 10.1 },
					{ key: 'critDMG_', value: 7.8 }
				]
			}
		],
		ranking: {
			name: 'Overload Combo, Avg DMG',
			details:
				'C0 Arlecchino + C6 Chevreuse @ 40k HP + Electro Flex + C6R1 Aquila Bennett @ 4p Noblesse. Combo: E .. CA 5N3. Majority of potential buffs such as 4p Shimenawa / 4p HoD / 4p CW wear off before 5N3 starts due to long setup. Chevreuse stacks for CA 5N3: 0/1/1/1/2/2/2/3/3/3/... Arlecchino is below 50% HP. BoL value after using CA: 130%. 4p Whimsy stacks for CA 5N3: 1/1/2/3/... ',
			weapon: 'Staff of Homa',
			weaponStars: 5,
			ranking: 46026,
			outOf: 369252,
			stats: {
				critRate: 0.7109004966784362,
				critDamage: 2.136036645608032,
				energyRecharge: 1.1231005303431396,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 0,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0.46600047870167544,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 22415.771484863,
				atk: 2287.569580566125,
				def: 969.4547734372187
			}
		}
	},
	{
		key: 'Kirara',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 6, burst: 1 },
		element: 'Dendro',
		stars: 4,
		weapon: { key: 'CinnabarSpindle', level: 20, ascension: 0, refinement: 5 },
		artifacts: [
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				substats: [
					{ key: 'def_', value: 12.4 },
					{ key: 'hp', value: 299 },
					{ key: 'critRate_', value: 6.2 },
					{ key: 'critDMG_', value: 18.7 }
				]
			}
		]
	}
];
export default characters;
export { elementToBuildStatKey };
export type { GenshinCharacter, BuildStatKey, Element };
