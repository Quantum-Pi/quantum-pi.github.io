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
};

const characters: GenshinCharacter[] = [
	{
		key: 'Yelan',
		level: 90,
		constellation: 6,
		ascension: 6,
		talent: { auto: 10, skill: 10, burst: 10 },
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
			ranking: 17189,
			outOf: 453111,
			stats: {
				critRate: 0.7591000105271485,
				critDamage: 2.578648140562549,
				energyRecharge: 1.40720002902843,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 0,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.4660000409016754,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 32107.7734375502,
				atk: 1183.8574219252,
				def: 722.3638916517625
			},
			element: 'Hydro'
		}
	},
	{
		key: 'Clorinde',
		level: 80,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 9, burst: 7 },
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
			ranking: 39666,
			outOf: 146252,
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
			},
			element: 'Electro'
		}
	},
	{
		key: 'Xiao',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 10, skill: 8, burst: 10 },
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
			ranking: 85539,
			outOf: 361207,
			stats: {
				critRate: 0.45980065795910646,
				critDamage: 2.389536556930664,
				energyRecharge: 1.058300671310547,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 69.94000309440625,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0.46600064370167543,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 22057.781250653,
				atk: 2167.821625653,
				def: 1060.7581793639374
			},
			element: 'Anemo'
		}
	},
	{
		key: 'KamisatoAyaka',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 10, skill: 8, burst: 10 },
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
			ranking: 186215,
			outOf: 542371,
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
			},
			element: 'Cryo'
		}
	},
	{
		key: 'HuTao',
		level: 90,
		constellation: 1,
		ascension: 6,
		talent: { auto: 10, skill: 10, burst: 8 },
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
			ranking: 117368,
			outOf: 523222,
			stats: {
				critRate: 0.6293008483833862,
				critDamage: 1.7543009675926757,
				energyRecharge: 1.097100869554956,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 34.970002070803126,
				physicalDamageBonus: 0,
				geoDamageBonus: 0.1200008501,
				cryoDamageBonus: 0.1200008501,
				pyroDamageBonus: 0.7360008467621398,
				anemoDamageBonus: 0.1200008501,
				hydroDamageBonus: 0.1200008501,
				dendroDamageBonus: 0.1200008501,
				electroDamageBonus: 0.1200008501,
				maxHp: 31640.8730477251,
				atk: 1420.9364022172874,
				def: 981.719483271975
			},
			element: 'Pyro'
		}
	},
	{
		key: 'Venti',
		level: 80,
		constellation: 0,
		ascension: 5,
		talent: { auto: 1, skill: 4, burst: 7 },
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
			ranking: 18116,
			outOf: 155919,
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
			},
			element: 'Hydro'
		}
	},
	{
		key: 'Zhongli',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 9, burst: 7 },
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
			ranking: 47802,
			outOf: 560796,
			stats: {
				critRate: 0.11220032094261322,
				critDamage: 0.5000003141,
				energyRecharge: 1.148900346143457,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 135.21000702796718,
				physicalDamageBonus: 0,
				geoDamageBonus: 0.2880003017022339,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 55159.7734378141,
				atk: 991.6034549039438,
				def: 1141.1004641812874
			},
			element: 'Geo'
		}
	},
	{
		key: 'Xianyun',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 6, burst: 9 },
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
			ranking: 389502,
			outOf: 760896,
			stats: {
				critRate: 0.05000098244505806,
				critDamage: 0.7176009696837036,
				energyRecharge: 2.0399327558394043,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 770.280030278575,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0.1500009876604645,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 23476.1328134817,
				atk: 1214.641358403575,
				def: 984.1942758840438
			},
			element: 'Anemo'
		}
	},
	{
		key: 'RaidenShogun',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 9, burst: 8 },
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
			ranking: 771197,
			outOf: 888377,
			stats: {
				critRate: 0.3572009371098236,
				critDamage: 0.6943009362992004,
				energyRecharge: 1.7669008837517457,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 946.261963831025,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0.30676091774069825,
				maxHp: 18213.8046884404,
				atk: 1397.4862069950875,
				def: 1034.8646249638375
			},
			element: 'Electro'
		}
	},
	{
		key: 'Nahida',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 6, skill: 10, burst: 8 },
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
			ranking: 376336,
			outOf: 707549,
			stats: {
				critRate: 0.32990065611908875,
				critDamage: 0.8497006336600585,
				energyRecharge: 1.2590007225425048,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 988.4519659916313,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0.15000066556046449,
				electroDamageBonus: 0,
				maxHp: 17215.0781256596,
				atk: 1141.32568425335,
				def: 885.8529669681938
			},
			element: 'Dendro'
		}
	},
	{
		key: 'Furina',
		level: 90,
		constellation: 1,
		ascension: 6,
		talent: { auto: 1, skill: 10, burst: 10 },
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
			ranking: 175573,
			outOf: 396189,
			stats: {
				critRate: 0.6191005025322632,
				critDamage: 1.2382004771645263,
				energyRecharge: 1.7509005580361083,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 144.52999930719687,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 39560.1718755279,
				atk: 1170.37646537165,
				def: 797.3916631255563
			},
			element: 'Hydro'
		}
	},
	{
		key: 'Faruzan',
		level: 90,
		constellation: 6,
		ascension: 6,
		talent: { auto: 1, skill: 6, burst: 10 },
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
			ranking: 38641,
			outOf: 131191,
			stats: {
				critRate: 0.5760006185091125,
				critDamage: 1.277100669912158,
				energyRecharge: 2.1916805382288085,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 58.279999362996875,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.6660005922830688,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 19101.3789068337,
				atk: 1585.6243902321376,
				def: 948.60205136495
			},
			element: 'Hydro'
		}
	},
	{
		key: 'Wanderer',
		level: 80,
		constellation: 0,
		ascension: 6,
		talent: { auto: 8, skill: 7, burst: 6 },
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
			ranking: 15118,
			outOf: 48370,
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
			},
			element: 'Dendro'
		}
	},
	{
		key: 'SangonomiyaKokomi',
		level: 80,
		constellation: 0,
		ascension: 6,
		talent: { auto: 7, skill: 9, burst: 8 },
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
			ranking: 94503,
			outOf: 257489,
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
			},
			element: 'Hydro'
		}
	},
	{
		key: 'Diluc',
		level: 80,
		constellation: 4,
		ascension: 6,
		talent: { auto: 9, skill: 7, burst: 7 },
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
		weapon: { key: 'FootprintOfTheRainbow', level: 60, ascension: 3, refinement: 1 }
	},
	{
		key: 'Gorou',
		level: 80,
		constellation: 6,
		ascension: 5,
		talent: { auto: 1, skill: 6, burst: 6 },
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
			ranking: 2027,
			outOf: 21281,
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
			},
			element: 'Geo'
		}
	},
	{
		key: 'ShikanoinHeizou',
		level: 80,
		constellation: 4,
		ascension: 5,
		talent: { auto: 6, skill: 8, burst: 6 },
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
				'4x Oz hits. no buffs, talent level 13. One Oz hit does not benefit from the Thundersoother (75% uptime)',
			weapon: 'The Stringless',
			weaponStars: 4,
			ranking: 61614,
			outOf: 218384,
			stats: {
				critRate: 0.5866006794266785,
				critDamage: 0.9662006678872193,
				energyRecharge: 1.42740066674281,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 235.32400580075313,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0.46600066450167543,
				maxHp: 14418.5957037988,
				atk: 1826.9306647363,
				def: 629.0607306542687
			},
			element: 'Electro'
		}
	},
	{
		key: 'KukiShinobu',
		level: 80,
		constellation: 1,
		ascension: 5,
		talent: { auto: 1, skill: 6, burst: 4 },
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
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Barbara',
		level: 70,
		constellation: 6,
		ascension: 5,
		talent: { auto: 5, skill: 8, burst: 4 },
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Amber',
		level: 70,
		constellation: 6,
		ascension: 4,
		talent: { auto: 1, skill: 1, burst: 1 },
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
		weapon: { key: 'WasterGreatsword', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Gaming',
		level: 50,
		constellation: 4,
		ascension: 2,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'WasterGreatsword', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Kaeya',
		level: 45,
		constellation: 5,
		ascension: 2,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Jean',
		level: 40,
		constellation: 2,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Mona',
		level: 40,
		constellation: 1,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'YunJin',
		level: 40,
		constellation: 2,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'FavoniusLance', level: 1, ascension: 0, refinement: 4 }
	},
	{
		key: 'Ningguang',
		level: 40,
		constellation: 6,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Yanfei',
		level: 40,
		constellation: 4,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
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
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Qiqi',
		level: 20,
		constellation: 3,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Keqing',
		level: 20,
		constellation: 1,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'BlackcliffLongsword', level: 90, ascension: 6, refinement: 1 }
	},
	{
		key: 'Chongyun',
		level: 20,
		constellation: 6,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'SacrificialGreatsword', level: 1, ascension: 0, refinement: 5 }
	},
	{
		key: 'KujouSara',
		level: 20,
		constellation: 3,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Yaoyao',
		level: 20,
		constellation: 0,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
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
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Candace',
		level: 20,
		constellation: 1,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'BeginnersProtector', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Xinyan',
		level: 20,
		constellation: 6,
		ascension: 1,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'WasterGreatsword', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Lynette',
		level: 1,
		constellation: 6,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Charlotte',
		level: 1,
		constellation: 1,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'ApprenticesNotes', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Mika',
		level: 1,
		constellation: 0,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'BeginnersProtector', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Layla',
		level: 1,
		constellation: 1,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'DullBlade', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Rosaria',
		level: 1,
		constellation: 6,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'BeginnersProtector', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Sethos',
		level: 1,
		constellation: 0,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'HuntersBow', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Dori',
		level: 1,
		constellation: 3,
		ascension: 0,
		talent: { auto: 1, skill: 1, burst: 1 },
		weapon: { key: 'WasterGreatsword', level: 1, ascension: 0, refinement: 1 }
	},
	{
		key: 'Arlecchino',
		level: 90,
		constellation: 1,
		ascension: 6,
		talent: { auto: 10, skill: 6, burst: 6 },
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
			ranking: 44047,
			outOf: 357519,
			stats: {
				critRate: 0.7109001296784363,
				critDamage: 2.136036278608032,
				energyRecharge: 1.1231001633431397,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 0,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0.46600011170167543,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 22415.771484496,
				atk: 2287.569580199125,
				def: 969.4547730702187
			},
			element: 'Pyro'
		}
	},
	{
		key: 'Kirara',
		level: 90,
		constellation: 0,
		ascension: 6,
		talent: { auto: 1, skill: 6, burst: 1 },
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
