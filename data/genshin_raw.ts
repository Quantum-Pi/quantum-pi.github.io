import {
	IGOOD,
	CharacterData,
	ArtifactData,
	ArtifactSet,
	WeaponData,
	StatKey,
	WeaponType
} from 'enka-network-api';
import Akasha from 'akasha-system.js';
export interface EnkaData {
	characters: CharacterData[];
	artifactSets: ArtifactSet[];
	weapons: WeaponData[];
	artifacts: ArtifactData[];
}

export type BuildStatKey =
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

export interface MiniAkashaSystemStat {
	name: string;
	icon: string;
	stats: Record<BuildStatKey, number>;
	calculations: {
		short: string;
		name: string;
		details: string;
		weapon: string;
		ranking: number;
		outOf: number;
	};
	weapon: {
		weaponStats: Partial<Record<StatKey, number>>;
		name: string;
		stars: number;
		icon: string;
	};
	character: Partial<Record<StatKey, number>>;
}

export interface CharacterRecord {
	element?: string;
	stars: number;
	weaponType: WeaponType;
}

export interface WeaponRecord {
	stars: number;
	weaponType: WeaponType;
}

export type AkashaSystemStats = Awaited<ReturnType<Akasha['getCalculationsForUser']>>['data'];
export interface GenshinProfile {
	akasha: MiniAkashaSystemStat[];
	good: IGOOD;
	characters: Record<string, CharacterRecord>;
	weapons: Record<string, WeaponRecord>;
}

export const genshinProfile: GenshinProfile = {
	akasha: [
		{
			name: 'Kamisato Ayaka',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Ayaka.png',
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
			calculations: {
				short: 'FREEZE',
				name: 'Basic Team vs Frozen, Avg DMG',
				details:
					'C0 Ayaka, C0R5 TTDS Mona @ 4pc Tenacity, C0R1 Kazuha @ 4pc VV 1000 EM, C6R5 Diona @ 4pc Noblesse. Combo: Dash (N1) QE 3N1CD. Enemy is frozen.',
				weapon: 'Amenoma Kageuchi',
				ranking: 199265,
				outOf: 588010
			},
			weapon: {
				weaponStats: { atk: 454, atk_: 55.1 },
				stars: 4,
				name: 'Amenoma Kageuchi',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Bakufu_Awaken.png'
			},
			character: {
				hp: 12858.206654,
				atk: 342.0250874,
				def: 783.9254574,
				critRate_: 5,
				critDMG_: 88.4
			}
		},
		{
			name: 'Xingqiu',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Xingqiu.png',
			stats: {
				critRate: 0.5915008872690185,
				critDamage: 1.4170008987131104,
				energyRecharge: 2.0880807727518067,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 58.27999962269688,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.6660008519830688,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 15975.5136727184,
				atk: 1822.3375252574624,
				def: 948.60205162465
			},
			calculations: {
				short: 'BURST',
				name: 'Sword Rain, Avg DMG',
				details: "4p Nymph's Dream is set to very optimistic 3 stacks.",
				weapon: 'Sacrificial Sword',
				ranking: 17837,
				outOf: 200211
			},
			weapon: {
				weaponStats: { atk: 608, enerRech_: 55.1 },
				stars: 5,
				name: 'Skyward Blade',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Dvalin_Awaken.png'
			},
			character: {
				hp: 10222.42024244,
				atk: 201.7773324,
				def: 757.59889275,
				critRate_: 5,
				critDMG_: 50,
				atk_: 24,
				hydro_dmg_: 20
			}
		},
		{
			name: 'Xiao',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Xiao.png',
			stats: {
				critRate: 0.4909004839682068,
				critDamage: 2.5916364463591064,
				energyRecharge: 1.0583005222105468,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 48.95999958837265,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0.4660004946016754,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 20881.2656255039,
				atk: 2183.8916782382753,
				def: 1098.4959721835876
			},
			calculations: {
				short: 'HYPER',
				name: 'Hyper Xiao, Avg DMG',
				details:
					"Combo that includes A4/VHA/PJWS/CQ stacking, Bennett, Noblesse and Elegy uptimes, 2E and 11HP with collision damage. 4p Noblese Aquila C6 Bennett, 4p ToTM Elegy C6 Faruzan, Zhongli. Faruzan's A4 is disabled for a bit of simplicity (it's also pretty weak anyways)",
				weapon: 'Staff of Homa',
				ranking: 36898,
				outOf: 399911
			},
			weapon: {
				weaponStats: { atk: 608, critDMG_: 66.2 },
				stars: 5,
				name: 'Staff of Homa',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Homa_Awaken.png'
			},
			character: {
				hp: 12735.7472192,
				atk: 349.2004378,
				def: 799.2965448,
				critRate_: 24.2,
				critDMG_: 50
			}
		},
		{
			name: 'Zhongli',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Zhongli.png',
			stats: {},
			calculations: {
				short: 'MAX HP',
				name: 'Shieldbot, Max HP',
				details: '---',
				weapon: 'Black Tassel',
				ranking: 54561,
				outOf: 622625
			},
			weapon: {
				weaponStats: { atk: 354, hp_: 46.9 },
				stars: 3,
				name: 'Black Tassel',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Noire_Awaken.png'
			},
			character: {
				hp: 14695.093176,
				atk: 251.137289,
				def: 737.8121952,
				critRate_: 5,
				critDMG_: 50,
				geo_dmg_: 28.799999999999997
			}
		},
		{
			name: 'Fischl',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Fischl.png',
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
			},
			calculations: {
				short: 'OZ',
				name: 'Raw Oz Avg DMG',
				details:
					'4x Oz hits. no buffs, talent level 13. One Oz hit does not benefit from the Thundersoother (75% uptime). Polar Star at 3 stacks.',
				weapon: 'Polar Star',
				ranking: 34060,
				outOf: 248990
			},
			weapon: {
				weaponStats: { atk: 608, critRate_: 33.1 },
				stars: 5,
				name: 'Polar Star',
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Worldbane_Awaken.png'
			},
			character: {
				hp: 9189.3029266,
				atk: 244.2567708,
				def: 593.79372675,
				critRate_: 5,
				critDMG_: 50,
				atk_: 24
			}
		},
		{
			name: 'Tartaglia',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Tartaglia.png',
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
			calculations: {
				short: 'COMBO',
				name: 'Childe International, Avg DMG',
				details:
					"1 rQ (vape) + 1 E + N2C * 6 + mSlash * 4. c0r1 Kazuha + c6r1 Xiangling + c6r1 Bennett. Most buffs expire after 3N2C. Shimenawa's burst damage is halved.",
				weapon: 'Aqua Simulacra',
				ranking: 19851,
				outOf: 169431
			},
			weapon: {
				weaponStats: { atk: 23 },
				stars: 1,
				name: "Hunter's Bow",
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Hunters_Awaken.png'
			},
			character: {
				hp: 13103.1246236,
				atk: 301.3647568,
				def: 814.6676322,
				critRate_: 5,
				critDMG_: 50,
				hydro_dmg_: 28.799999999999997
			}
		},
		{
			name: 'Noelle',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Noel.png',
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
			calculations: {
				short: 'HYPER',
				name: 'Hyper Mono Geo NA combo, Avg DMG',
				details: 'N1 + N2 + N3 + N4. Team: Noelle C6, Gorou C6, Yunjin C6, Zhongli C0',
				weapon: 'Serpent Spine',
				ranking: 2136,
				outOf: 24091
			},
			weapon: {
				weaponStats: { atk: 510, critRate_: 27.6 },
				stars: 4,
				name: 'Serpent Spine',
				icon: 'https://enka.network/ui/UI_EquipIcon_Claymore_Kione_Awaken.png'
			},
			character: {
				hp: 12071.155412,
				atk: 191.1574728,
				def: 798.55018425,
				critRate_: 5,
				critDMG_: 50,
				def_: 30
			}
		},
		{
			name: 'Hu Tao',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Hutao.png',
			stats: {
				critRate: 0.6293009360833862,
				critDamage: 1.7543010552926759,
				energyRecharge: 1.0971009572549562,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 34.97000215850313,
				physicalDamageBonus: 0,
				geoDamageBonus: 0.1200009378,
				cryoDamageBonus: 0.1200009378,
				pyroDamageBonus: 0.7360009344621399,
				anemoDamageBonus: 0.1200009378,
				hydroDamageBonus: 0.1200009378,
				dendroDamageBonus: 0.1200009378,
				electroDamageBonus: 0.1200009378,
				maxHp: 31640.8730478128,
				atk: 1420.9364023049875,
				def: 981.719483359675
			},
			calculations: {
				short: 'HYPER',
				name: 'VV Swirl Hyper Tao Combo, Avg DMG',
				details:
					'Average DMG for 11N1CD + Q combo. elegy instructor amber c0r1. kazuha c2r1 @ 1000EM(1420). 4p SR burst uptime 1/3, other sets: 2/3. ',
				weapon: 'Ballad of the Fjords',
				ranking: 130718,
				outOf: 591543
			},
			weapon: {
				weaponStats: { atk: 741, atk_: 16.5 },
				stars: 5,
				name: 'Calamity Queller',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Santika_Awaken.png'
			},
			character: {
				hp: 15552.3066196,
				atk: 106.4343801,
				def: 876.1519818,
				critRate_: 5,
				critDMG_: 88.4
			}
		},
		{
			name: 'Kaedehara Kazuha',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Kazuha.png',
			stats: {},
			calculations: {
				short: 'EM+ER+CR',
				name: 'EM + ER (+ CR) balance formula',
				details:
					'Assumes Favonius Sword R5 (EM / 1000 + ER / 500) * 5000 + (vv ? 2000 : 0) + (CR > 15% ? (CR * 1500) : 0)',
				weapon: 'Favonius Sword',
				ranking: 444115,
				outOf: 872192
			},
			weapon: {
				weaponStats: { atk: 454, enerRech_: 61.3 },
				stars: 4,
				name: 'Favonius Sword',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Zephyrus_Awaken.png'
			},
			character: {
				hp: 13348.0427932,
				atk: 296.5811932,
				def: 806.9820885,
				critRate_: 5,
				critDMG_: 50,
				eleMas: 115.2
			}
		},
		{
			name: 'Raiden Shogun',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Shougun.png',
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
			},
			calculations: {
				short: 'TASER',
				name: 'Double Hydro Burst, Avg DMG',
				details:
					"c0 Raiden, c2 Furina, c0 Yelan, c0 4p VV Jean. Combo: Q 3N5. Furina's Fanfare at 400 stacks. Yelan's A4 at 8s seconds. ",
				weapon: 'Staff of the Scarlet Sands',
				ranking: 864954,
				outOf: 1001571
			},
			weapon: {
				weaponStats: { atk: 454, eleMas: 221 },
				stars: 4,
				name: "Dragon's Bane",
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Stardust_Awaken.png'
			},
			character: {
				hp: 12907.18973314,
				atk: 337.2415138,
				def: 789.30533799,
				critRate_: 5,
				critDMG_: 50,
				enerRech_: 32
			}
		},
		{
			name: 'Sangonomiya Kokomi',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Kokomi.png',
			stats: {},
			calculations: {
				short: 'HEAL+ER',
				name: 'Heal + ER balance formula',
				details:
					"(((E_DMG / 5500) + (E_HEAL / 5000) + (ER / 150)) * 5000) + SET_BONUS. +6500 ToTM, +6000 OHC, +6000 Deepwood, +5000 Noblesse, +4000 Maiden. Please keep in mind custom 'balance formulas' are completely feelscrafted unlike proper avg dmg formulas.",
				weapon: 'Everlasting Moonglow',
				ranking: 100870,
				outOf: 279246
			},
			weapon: {
				weaponStats: { atk: 401, hp_: 35.2 },
				stars: 3,
				name: 'Thrilling Tales of Dragon Slayers',
				icon: 'https://enka.network/ui/UI_EquipIcon_Catalyst_Pulpfic_Awaken.png'
			},
			character: {
				hp: 13470.501828,
				atk: 234.3948164,
				def: 657.11398635,
				critRate_: -95,
				critDMG_: 50,
				hydro_dmg_: 28.799999999999997,
				heal_: 25
			}
		},
		{
			name: 'Yelan',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Yelan.png',
			stats: {
				critRate: 0.7591005996271485,
				critDamage: 2.578648729662549,
				energyRecharge: 1.4072006181284302,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 0,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.4660006300016754,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 32107.7734381393,
				atk: 1183.8574225143,
				def: 722.3638922408625
			},
			calculations: {
				short: 'C6 COMBO',
				name: 'C6 Combo with C4 Mona, Avg DMG',
				details:
					"Frontloaded average DMG for c6r5 Aqua Yelan Combo: 2x E + 2x BTB + 3x C2 + 5x C6 + 24x Q. Team: c0r5 fs Kazuha @ 1000 EM vv hydro swirl + Zhongli shield up + c4 Mona burst up. Yelan's A4 set to 10s, C4 2 stacks, 18% HP from A1. 4p Nymph's Dream is set to 3 stacks.",
				weapon: 'Aqua Simulacra',
				ranking: 18917,
				outOf: 504926
			},
			weapon: {
				weaponStats: { atk: 542, critDMG_: 88.2 },
				stars: 5,
				name: 'Aqua Simulacra',
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Kirin_Awaken.png'
			},
			character: {
				hp: 14450.1749064,
				atk: 243.9619496,
				def: 547.97926581,
				critRate_: 24.2,
				critDMG_: 50
			}
		},
		{
			name: 'Tighnari',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Tighnari.png',
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
			calculations: {
				short: 'SPREAD',
				name: 'Quicken/Spread Team Combo, Avg DMG',
				details:
					"Combo: E Q 3CA. C1 Tighnari + C0R1 Deepwood Nahida + electro flex + electro flex. Tighnari's A1 buffs only CAs. Enemy has pre-existing Quicken aura. Nahida's A1 buff is maxed and lasts entire combo. ",
				weapon: 'Skyward Harp',
				ranking: 17922,
				outOf: 57873
			},
			weapon: {
				weaponStats: { atk: 608, critRate_: 33.1 },
				stars: 5,
				name: 'Polar Star',
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Worldbane_Awaken.png'
			},
			character: {
				hp: 10849.87711806,
				atk: 267.8797916,
				def: 630.2145834,
				critRate_: 5,
				critDMG_: 50,
				dendro_dmg_: 28.799999999999997
			}
		},
		{
			name: 'Nahida',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Nahida.png',
			stats: {
				critRate: 0.32990021521908874,
				critDamage: 0.8264002006755554,
				energyRecharge: 1.4274002116428102,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 1000.1119997304188,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0.15000022466046448,
				electroDamageBonus: 0,
				maxHp: 17215.0781252187,
				atk: 1194.101806859325,
				def: 720.484619359325
			},
			calculations: {
				short: 'OFF-FIELD',
				name: 'Off-field Tri-Karma Purification',
				details:
					'Off-field Tri-Karma Purification (non-spread) avg DMG. Example team: Nahida + Xingqiu + Kuki + non-dendro flex.',
				weapon: 'A Thousand Floating Dreams',
				ranking: 403006,
				outOf: 829569
			},
			weapon: {
				weaponStats: { atk: 454, eleMas: 221 },
				stars: 4,
				name: 'Sacrificial Fragments',
				icon: 'https://enka.network/ui/UI_EquipIcon_Catalyst_Fossil_Awaken.png'
			},
			character: {
				hp: 10360.0405293,
				atk: 298.972975,
				def: 630.2145834,
				critRate_: 5,
				critDMG_: 50,
				eleMas: 115.2
			}
		},
		{
			name: 'Furina',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Furina.png',
			stats: {
				critRate: 0.7202005304934509,
				critDamage: 2.197948507273389,
				energyRecharge: 1.2655005969645508,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 39.62999778171797,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 38907.7500005283,
				atk: 1258.313721231425,
				def: 936.5000615634563
			},
			calculations: {
				short: 'SKILL',
				name: 'Elemental Skill, Avg DMG',
				details:
					'Average DMG for Mademoiselle Crabaletta in a double hydro team. Number of characters who offered HP: 4. Fanfare stacks count: 200. Weapon stacks maxed when applicable. ',
				weapon: 'Splendor of Tranquil Waters',
				ranking: 112965,
				outOf: 537786
			},
			weapon: {
				weaponStats: { atk: 542, critDMG_: 88.2 },
				stars: 5,
				name: 'Uraku Misugiri',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Needle_Awaken.png'
			},
			character: {
				hp: 15307.38835,
				atk: 243.9619496,
				def: 695.54170485,
				critRate_: 24.2,
				critDMG_: 50
			}
		},
		{
			name: 'Arlecchino',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Arlecchino.png',
			stats: {
				critRate: 0.7070009695661377,
				critDamage: 2.3613369452131105,
				energyRecharge: 1.051800964988501,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 0,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0.4660009431016754,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 20951.8808603274,
				atk: 2285.5884364992753,
				def: 1025.0147714602124
			},
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, Avg DMG',
				details:
					'C0 Arlecchino + C6 Chevreuse @ 40k HP + Electro Flex + C6R1 Aquila Bennett @ 4p Noblesse. Combo: E .. CA 5N3. Majority of potential buffs such as 4p Shimenawa / 4p HoD / 4p CW wear off before 5N3 starts due to long setup. Chevreuse stacks for CA 5N3: 0/1/1/1/2/2/2/3/3/3/... Arlecchino is below 50% HP. BoL value after using CA: 130%. 4p Whimsy stacks for CA 5N3: 1/1/2/3/... ',
				weapon: 'Staff of Homa',
				ranking: 22506,
				outOf: 430809
			},
			weapon: {
				weaponStats: { atk: 608, critDMG_: 66.2 },
				stars: 5,
				name: 'Staff of Homa',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Homa_Awaken.png'
			},
			character: {
				hp: 13103.1246236,
				atk: 342.0250874,
				def: 764.71159815,
				critRate_: 5,
				critDMG_: 88.4
			}
		},
		{
			name: 'Clorinde',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Clorinde.png',
			stats: {
				critRate: 0.4831002835436096,
				critDamage: 1.8757002834482421,
				energyRecharge: 1.0000002865,
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
				electroDamageBonus: 0.4660002772016754,
				maxHp: 18452.0976565365,
				atk: 2303.85888700525,
				def: 1125.301513958375
			},
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, DPS',
				details:
					"C0 Clorinde + C6 Fischl + 4p Noblesse C6 Chevreuse @ 40k HP + 4p Cinder C6 Thoma. Leaderboard ranks DPS based on 16s rotation using QEE 5N3E combo. Clorinde's A1 and A4 at full uptime for simplicity. Chevreuse's C6 stacks: QEE:0, N3E:1, N3E: 2, N3E:3, N3E:3, N3E: 3. 4pc Harmonic Whimsy stacks Q:1, EE:2, 5N3:3. Finale of the Deep's passive does not affect the burst. ",
				weapon: 'Finale of the Deep',
				ranking: 53009,
				outOf: 184274
			},
			weapon: {
				weaponStats: { atk: 565, atk_: 27.6 },
				stars: 4,
				name: 'Finale of the Deep',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Vorpal_Awaken.png'
			},
			character: {
				hp: 12956.17307445,
				atk: 337.2415138,
				def: 783.9254574,
				critRate_: 24.2,
				critDMG_: 50
			}
		}
	],
	good: {
		format: 'GOOD',
		version: 2,
		source: 'yuko1101/enka-network-api',
		characters: [
			{
				key: 'Arlecchino',
				level: 90,
				constellation: 1,
				ascension: 6,
				talent: { auto: 10, skill: 6, burst: 6 }
			},
			{
				key: 'Zhongli',
				level: 90,
				constellation: 0,
				ascension: 6,
				talent: { auto: 1, skill: 10, burst: 7 }
			},
			{
				key: 'Yelan',
				level: 90,
				constellation: 6,
				ascension: 6,
				talent: { auto: 10, skill: 10, burst: 10 }
			},
			{
				key: 'Xingqiu',
				level: 81,
				constellation: 6,
				ascension: 6,
				talent: { auto: 1, skill: 7, burst: 10 }
			},
			{
				key: 'Xiao',
				level: 90,
				constellation: 0,
				ascension: 6,
				talent: { auto: 10, skill: 8, burst: 10 }
			},
			{
				key: 'Xianyun',
				level: 90,
				constellation: 0,
				ascension: 6,
				talent: { auto: 1, skill: 6, burst: 9 }
			},
			{
				key: 'Faruzan',
				level: 90,
				constellation: 6,
				ascension: 6,
				talent: { auto: 1, skill: 6, burst: 10 }
			},
			{
				key: 'Furina',
				level: 90,
				constellation: 1,
				ascension: 6,
				talent: { auto: 1, skill: 10, burst: 10 }
			},
			{
				key: 'Nahida',
				level: 90,
				constellation: 0,
				ascension: 6,
				talent: { auto: 6, skill: 10, burst: 8 }
			},
			{
				key: 'Clorinde',
				level: 80,
				constellation: 0,
				ascension: 6,
				talent: { auto: 1, skill: 9, burst: 7 }
			},
			{
				key: 'HuTao',
				level: 90,
				constellation: 1,
				ascension: 6,
				talent: { auto: 10, skill: 10, burst: 8 }
			},
			{
				key: 'Aloy',
				level: 80,
				constellation: 0,
				ascension: 5,
				talent: { auto: 3, skill: 8, burst: 8 }
			}
		],
		artifacts: [
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Arlecchino',
				lock: false,
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
				location: 'Arlecchino',
				lock: false,
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
				location: 'Arlecchino',
				lock: false,
				substats: [
					{ key: 'hp', value: 448 },
					{ key: 'critDMG_', value: 21 },
					{ key: 'def_', value: 11.7 },
					{ key: 'critRate_', value: 5.8 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'pyro_dmg_',
				location: 'Arlecchino',
				lock: false,
				substats: [
					{ key: 'critRate_', value: 9.7 },
					{ key: 'critDMG_', value: 15.5 },
					{ key: 'atk', value: 18 },
					{ key: 'def', value: 42 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				location: 'Arlecchino',
				lock: false,
				substats: [
					{ key: 'def', value: 35 },
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'critDMG_', value: 20.2 },
					{ key: 'atk', value: 29 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Zhongli',
				lock: false,
				substats: [
					{ key: 'eleMas', value: 58 },
					{ key: 'hp_', value: 9.9 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'def_', value: 10.9 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'plume',
				level: 16,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Zhongli',
				lock: false,
				substats: [
					{ key: 'hp_', value: 9.3 },
					{ key: 'def_', value: 17.5 },
					{ key: 'critRate_', value: 3.5 },
					{ key: 'enerRech_', value: 4.5 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				location: 'Zhongli',
				lock: false,
				substats: [
					{ key: 'eleMas', value: 54 },
					{ key: 'hp', value: 866 },
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'critRate_', value: 2.7 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				location: 'Zhongli',
				lock: false,
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
				location: 'Zhongli',
				lock: false,
				substats: [
					{ key: 'atk', value: 68 },
					{ key: 'hp', value: 418 },
					{ key: 'def_', value: 13.1 },
					{ key: 'atk_', value: 5.8 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Yelan',
				lock: false,
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
				location: 'Yelan',
				lock: false,
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
				location: 'Yelan',
				lock: false,
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
				location: 'Yelan',
				lock: false,
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
				location: 'Yelan',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 28 },
					{ key: 'hp_', value: 11.1 },
					{ key: 'hp', value: 209 },
					{ key: 'def', value: 42 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Xingqiu',
				lock: false,
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
				location: 'Xingqiu',
				lock: false,
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
				mainStatKey: 'atk_',
				location: 'Xingqiu',
				lock: false,
				substats: [
					{ key: 'critRate_', value: 5.4 },
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'critDMG_', value: 21 },
					{ key: 'hp_', value: 14 }
				]
			},
			{
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hydro_dmg_',
				location: 'Xingqiu',
				lock: false,
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
				location: 'Xingqiu',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 6.5 },
					{ key: 'hp', value: 269 },
					{ key: 'critDMG_', value: 27.2 },
					{ key: 'def_', value: 20.4 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Xiao',
				lock: false,
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
				location: 'Xiao',
				lock: false,
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
				location: 'Xiao',
				lock: false,
				substats: [
					{ key: 'def_', value: 6.6 },
					{ key: 'eleMas', value: 49 },
					{ key: 'critDMG_', value: 17.9 },
					{ key: 'def', value: 37 }
				]
			},
			{
				setKey: 'UnfinishedReverie',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'anemo_dmg_',
				location: 'Xiao',
				lock: false,
				substats: [
					{ key: 'hp', value: 299 },
					{ key: 'critRate_', value: 7 },
					{ key: 'critDMG_', value: 20.2 },
					{ key: 'def_', value: 13.1 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critDMG_',
				location: 'Xiao',
				lock: false,
				substats: [
					{ key: 'hp_', value: 4.1 },
					{ key: 'atk_', value: 10.5 },
					{ key: 'critRate_', value: 7 },
					{ key: 'atk', value: 64 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Xianyun',
				lock: false,
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
				location: 'Xianyun',
				lock: false,
				substats: [
					{ key: 'def', value: 67 },
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'atk_', value: 14 },
					{ key: 'enerRech_', value: 12.3 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				location: 'Xianyun',
				lock: false,
				substats: [
					{ key: 'critRate_', value: 2.7 },
					{ key: 'def', value: 37 },
					{ key: 'enerRech_', value: 16.8 },
					{ key: 'critDMG_', value: 13.2 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				location: 'Xianyun',
				lock: false,
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
				location: 'Xianyun',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 11.7 },
					{ key: 'hp', value: 627 },
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'eleMas', value: 33 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Faruzan',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 9.7 },
					{ key: 'atk', value: 35 },
					{ key: 'eleMas', value: 16 },
					{ key: 'critRate_', value: 10.1 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Faruzan',
				lock: false,
				substats: [
					{ key: 'def_', value: 5.1 },
					{ key: 'enerRech_', value: 9.7 },
					{ key: 'critRate_', value: 12 },
					{ key: 'hp_', value: 5.3 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'enerRech_',
				location: 'Faruzan',
				lock: false,
				substats: [
					{ key: 'critRate_', value: 15.9 },
					{ key: 'def', value: 39 },
					{ key: 'atk_', value: 4.1 },
					{ key: 'def_', value: 5.8 }
				]
			},
			{
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'anemo_dmg_',
				location: 'Faruzan',
				lock: false,
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
				location: 'Faruzan',
				lock: false,
				substats: [
					{ key: 'atk', value: 51 },
					{ key: 'def', value: 58 },
					{ key: 'atk_', value: 5.3 },
					{ key: 'hp_', value: 9.9 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Furina',
				lock: false,
				substats: [
					{ key: 'atk', value: 53 },
					{ key: 'critDMG_', value: 7 },
					{ key: 'enerRech_', value: 9.1 },
					{ key: 'critRate_', value: 10.1 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Furina',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'hp_', value: 10.5 },
					{ key: 'enerRech_', value: 11 },
					{ key: 'hp', value: 508 }
				]
			},
			{
				setKey: 'GoldenTroupe',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				location: 'Furina',
				lock: false,
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
				location: 'Furina',
				lock: false,
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
				location: 'Furina',
				lock: false,
				substats: [
					{ key: 'def', value: 44 },
					{ key: 'hp_', value: 14 },
					{ key: 'eleMas', value: 40 },
					{ key: 'critDMG_', value: 12.4 }
				]
			},
			{
				setKey: 'DeepwoodMemories',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Nahida',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 16.8 },
					{ key: 'atk_', value: 9.3 },
					{ key: 'eleMas', value: 58 },
					{ key: 'critDMG_', value: 5.4 }
				]
			},
			{
				setKey: 'DeepwoodMemories',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Nahida',
				lock: false,
				substats: [
					{ key: 'eleMas', value: 47 },
					{ key: 'atk_', value: 5.8 },
					{ key: 'hp', value: 747 },
					{ key: 'critRate_', value: 9.3 }
				]
			},
			{
				setKey: 'GildedDreams',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				location: 'Nahida',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 5.2 },
					{ key: 'critDMG_', value: 21.8 },
					{ key: 'critRate_', value: 9.7 },
					{ key: 'def', value: 23 }
				]
			},
			{
				setKey: 'DeepwoodMemories',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'eleMas',
				location: 'Nahida',
				lock: false,
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
				location: 'Nahida',
				lock: false,
				substats: [
					{ key: 'atk', value: 16 },
					{ key: 'def', value: 32 },
					{ key: 'critRate_', value: 8.9 },
					{ key: 'hp_', value: 8.7 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Clorinde',
				lock: false,
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
				location: 'Clorinde',
				lock: false,
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
				location: 'Clorinde',
				lock: false,
				substats: [
					{ key: 'def_', value: 24.8 },
					{ key: 'critRate_', value: 2.7 },
					{ key: 'critDMG_', value: 15.5 },
					{ key: 'hp_', value: 4.1 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'electro_dmg_',
				location: 'Clorinde',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'critRate_', value: 3.9 },
					{ key: 'atk_', value: 25.7 },
					{ key: 'hp', value: 299 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critDMG_',
				location: 'Clorinde',
				lock: false,
				substats: [
					{ key: 'def', value: 67 },
					{ key: 'hp', value: 299 },
					{ key: 'atk', value: 62 },
					{ key: 'critRate_', value: 3.5 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'HuTao',
				lock: false,
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
				location: 'HuTao',
				lock: false,
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
				location: 'HuTao',
				lock: false,
				substats: [
					{ key: 'eleMas', value: 16 },
					{ key: 'critRate_', value: 7 },
					{ key: 'def_', value: 10.2 },
					{ key: 'critDMG_', value: 19.4 }
				]
			},
			{
				setKey: 'ShimenawasReminiscence',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'pyro_dmg_',
				location: 'HuTao',
				lock: false,
				substats: [
					{ key: 'def', value: 16 },
					{ key: 'critDMG_', value: 28 },
					{ key: 'hp_', value: 9.9 },
					{ key: 'hp', value: 508 }
				]
			},
			{
				setKey: 'CrimsonWitchOfFlames',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				location: 'HuTao',
				lock: false,
				substats: [
					{ key: 'hp', value: 568 },
					{ key: 'atk_', value: 9.9 },
					{ key: 'critDMG_', value: 20.2 },
					{ key: 'eleMas', value: 19 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Aloy',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 7.8 },
					{ key: 'atk_', value: 19.8 },
					{ key: 'enerRech_', value: 10.4 },
					{ key: 'critRate_', value: 6.2 }
				]
			},
			{
				setKey: 'BlizzardStrayer',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Aloy',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 15.5 },
					{ key: 'atk_', value: 9.9 },
					{ key: 'critRate_', value: 8.9 },
					{ key: 'hp_', value: 4.1 }
				]
			},
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				location: 'Aloy',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 21 },
					{ key: 'critRate_', value: 6.6 },
					{ key: 'eleMas', value: 19 },
					{ key: 'def', value: 42 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'cryo_dmg_',
				location: 'Aloy',
				lock: false,
				substats: [
					{ key: 'atk', value: 37 },
					{ key: 'critRate_', value: 8.9 },
					{ key: 'critDMG_', value: 7 },
					{ key: 'eleMas', value: 61 }
				]
			},
			{
				setKey: 'GladiatorsFinale',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				location: 'Aloy',
				lock: false,
				substats: [
					{ key: 'atk_', value: 14.6 },
					{ key: 'def', value: 58 },
					{ key: 'critDMG_', value: 15.5 },
					{ key: 'hp_', value: 4.7 }
				]
			}
		],
		weapons: [
			{
				key: 'StaffOfHoma',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'Arlecchino',
				lock: false
			},
			{
				key: 'BlackTassel',
				level: 90,
				ascension: 6,
				refinement: 5,
				location: 'Zhongli',
				lock: false
			},
			{
				key: 'AquaSimulacra',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'Yelan',
				lock: false
			},
			{
				key: 'SkywardBlade',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'Xingqiu',
				lock: false
			},
			{ key: 'StaffOfHoma', level: 90, ascension: 6, refinement: 1, location: 'Xiao', lock: false },
			{
				key: 'OathswornEye',
				level: 90,
				ascension: 6,
				refinement: 5,
				location: 'Xianyun',
				lock: false
			},
			{
				key: 'FavoniusWarbow',
				level: 90,
				ascension: 6,
				refinement: 5,
				location: 'Faruzan',
				lock: false
			},
			{
				key: 'UrakuMisugiri',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'Furina',
				lock: false
			},
			{
				key: 'SacrificialFragments',
				level: 90,
				ascension: 6,
				refinement: 5,
				location: 'Nahida',
				lock: false
			},
			{
				key: 'FinaleOfTheDeep',
				level: 90,
				ascension: 6,
				refinement: 4,
				location: 'Clorinde',
				lock: false
			},
			{
				key: 'CalamityQueller',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'HuTao',
				lock: false
			},
			{
				key: 'SacrificialBow',
				level: 90,
				ascension: 6,
				refinement: 5,
				location: 'Aloy',
				lock: false
			}
		]
	},
	characters: {
		KamisatoAyaka: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Jean: { element: 'Anemo', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Traveler: { element: 'Dendro', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Lisa: { element: 'Electro', stars: 4, weaponType: 'WEAPON_CATALYST' },
		Barbara: { element: 'Hydro', stars: 4, weaponType: 'WEAPON_CATALYST' },
		Kaeya: { element: 'Cryo', stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Diluc: { element: 'Pyro', stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		Razor: { element: 'Electro', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Amber: { element: 'Pyro', stars: 4, weaponType: 'WEAPON_BOW' },
		Venti: { element: 'Anemo', stars: 5, weaponType: 'WEAPON_BOW' },
		Xiangling: { element: 'Pyro', stars: 4, weaponType: 'WEAPON_POLE' },
		Beidou: { element: 'Electro', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Xingqiu: { element: 'Hydro', stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Xiao: { element: 'Anemo', stars: 5, weaponType: 'WEAPON_POLE' },
		Ningguang: { element: 'Geo', stars: 4, weaponType: 'WEAPON_CATALYST' },
		Klee: { element: 'Pyro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Zhongli: { element: 'Geo', stars: 5, weaponType: 'WEAPON_POLE' },
		Fischl: { element: 'Electro', stars: 4, weaponType: 'WEAPON_BOW' },
		Bennett: { element: 'Pyro', stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Tartaglia: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_BOW' },
		Noelle: { element: 'Geo', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Qiqi: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Chongyun: { element: 'Cryo', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Ganyu: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_BOW' },
		Albedo: { element: 'Geo', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Diona: { element: 'Cryo', stars: 4, weaponType: 'WEAPON_BOW' },
		Mona: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Keqing: { element: 'Electro', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Sucrose: { element: 'Anemo', stars: 4, weaponType: 'WEAPON_CATALYST' },
		Xinyan: { element: 'Pyro', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Rosaria: { element: 'Cryo', stars: 4, weaponType: 'WEAPON_POLE' },
		HuTao: { element: 'Pyro', stars: 5, weaponType: 'WEAPON_POLE' },
		KaedeharaKazuha: { element: 'Anemo', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Yanfei: { element: 'Pyro', stars: 4, weaponType: 'WEAPON_CATALYST' },
		Yoimiya: { element: 'Pyro', stars: 5, weaponType: 'WEAPON_BOW' },
		Thoma: { element: 'Pyro', stars: 4, weaponType: 'WEAPON_POLE' },
		Eula: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		RaidenShogun: { element: 'Electro', stars: 5, weaponType: 'WEAPON_POLE' },
		Sayu: { element: 'Anemo', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		SangonomiyaKokomi: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Gorou: { element: 'Geo', stars: 4, weaponType: 'WEAPON_BOW' },
		KujouSara: { element: 'Electro', stars: 4, weaponType: 'WEAPON_BOW' },
		AratakiItto: { element: 'Geo', stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		YaeMiko: { element: 'Electro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		ShikanoinHeizou: { element: 'Anemo', stars: 4, weaponType: 'WEAPON_CATALYST' },
		Yelan: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_BOW' },
		Kirara: { element: 'Dendro', stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Aloy: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_BOW' },
		Shenhe: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_POLE' },
		YunJin: { element: 'Geo', stars: 4, weaponType: 'WEAPON_POLE' },
		KukiShinobu: { element: 'Electro', stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		KamisatoAyato: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Collei: { element: 'Dendro', stars: 4, weaponType: 'WEAPON_BOW' },
		Dori: { element: 'Electro', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Tighnari: { element: 'Dendro', stars: 5, weaponType: 'WEAPON_BOW' },
		Nilou: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Cyno: { element: 'Electro', stars: 5, weaponType: 'WEAPON_POLE' },
		Candace: { element: 'Hydro', stars: 4, weaponType: 'WEAPON_POLE' },
		Nahida: { element: 'Dendro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Layla: { element: 'Cryo', stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Wanderer: { element: 'Anemo', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Faruzan: { element: 'Anemo', stars: 4, weaponType: 'WEAPON_BOW' },
		Yaoyao: { element: 'Dendro', stars: 4, weaponType: 'WEAPON_POLE' },
		Alhaitham: { element: 'Dendro', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Dehya: { element: 'Pyro', stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		Mika: { element: 'Cryo', stars: 4, weaponType: 'WEAPON_POLE' },
		Kaveh: { element: 'Dendro', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Baizhu: { element: 'Dendro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Lynette: { element: 'Anemo', stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Lyney: { element: 'Pyro', stars: 5, weaponType: 'WEAPON_BOW' },
		Freminet: { element: 'Cryo', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Wriothesley: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Neuvillette: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Charlotte: { element: 'Cryo', stars: 4, weaponType: 'WEAPON_CATALYST' },
		Furina: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Chevreuse: { element: 'Pyro', stars: 4, weaponType: 'WEAPON_POLE' },
		Navia: { element: 'Geo', stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		Gaming: { element: 'Pyro', stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Xianyun: { element: 'Anemo', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Chiori: { element: 'Geo', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Sigewinne: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_BOW' },
		Arlecchino: { element: 'Pyro', stars: 5, weaponType: 'WEAPON_POLE' },
		Sethos: { element: 'Electro', stars: 4, weaponType: 'WEAPON_BOW' },
		Clorinde: { element: 'Electro', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Emilie: { element: 'Dendro', stars: 5, weaponType: 'WEAPON_POLE' },
		Kachina: { element: 'Geo', stars: 4, weaponType: 'WEAPON_POLE' },
		Kinich: { element: 'Dendro', stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		Mualani: { element: 'Hydro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Xilonen: { element: 'Geo', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Chasca: { element: 'Anemo', stars: 5, weaponType: 'WEAPON_BOW' },
		Ororon: { element: 'Electro', stars: 4, weaponType: 'WEAPON_BOW' },
		'Mavuika(Trial)': { element: 'Pyro', stars: 5, weaponType: 'WEAPON_CLAYMORE' }
	},
	weapons: {
		DullBlade: { stars: 1, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SilverSword: { stars: 2, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		CoolSteel: { stars: 3, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		HarbingerOfDawn: { stars: 3, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		TravelersHandySword: { stars: 3, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		DarkIronSword: { stars: 3, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		FilletBlade: { stars: 3, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SkyriderSword: { stars: 3, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		FavoniusSword: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		TheFlute: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SacrificialSword: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		RoyalLongsword: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		LionsRoar: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		PrototypeRancour: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		IronSting: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		BlackcliffLongsword: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		TheBlackSword: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		TheAlleyFlash: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SwordOfDescension: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		FesteringDesire: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		AmenomaKageuchi: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		CinnabarSpindle: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		KagotsurubeIsshin: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SapwoodBlade: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		XiphosMoonlight: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		ToukabouShigure: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		WolfFang: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		FinaleOfTheDeep: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		FleuveCendreFerryman: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		TheDockhandsAssistant: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SwordOfNarzissenkreuz: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SturdyBone: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		FluteOfEzpitzal: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		CalamityOfEshu: { stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		AquilaFavonia: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SkywardBlade: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		FreedomSworn: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SummitShaper: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		PrimordialJadeCutter: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		MistsplitterReforged: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		HaranGeppakuFutsu: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		KeyOfKhajNisut: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		LightOfFoliarIncision: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		SplendorOfTranquilWaters: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		UrakuMisugiri: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Absolution: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		PeakPatrolSong: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		WasterGreatsword: { stars: 1, weaponType: 'WEAPON_CLAYMORE' },
		OldMercsPal: { stars: 2, weaponType: 'WEAPON_CLAYMORE' },
		FerrousShadow: { stars: 3, weaponType: 'WEAPON_CLAYMORE' },
		BloodtaintedGreatsword: { stars: 3, weaponType: 'WEAPON_CLAYMORE' },
		WhiteIronGreatsword: { stars: 3, weaponType: 'WEAPON_CLAYMORE' },
		DebateClub: { stars: 3, weaponType: 'WEAPON_CLAYMORE' },
		SkyriderGreatsword: { stars: 3, weaponType: 'WEAPON_CLAYMORE' },
		FavoniusGreatsword: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		TheBell: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		SacrificialGreatsword: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		RoyalGreatsword: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Rainslasher: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		PrototypeArchaic: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Whiteblind: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		BlackcliffSlasher: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		SerpentSpine: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		LithicBlade: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		SnowTombedStarsilver: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		LuxuriousSeaLord: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		KatsuragikiriNagamasa: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		MakhairaAquamarine: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		Akuoumaru: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		ForestRegalia: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		MailedFlower: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		TalkingStick: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		TidalShadow: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		UltimateOverlordsMegaMagicSword: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		PortablePowerSaw: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		FruitfulHook: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		EarthShaker: { stars: 4, weaponType: 'WEAPON_CLAYMORE' },
		SkywardPride: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		WolfsGravestone: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		SongOfBrokenPines: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		TheUnforged: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		RedhornStonethresher: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		BeaconOfTheReedSea: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		Verdict: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		FangOfTheMountainKing: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		BeginnersProtector: { stars: 1, weaponType: 'WEAPON_POLE' },
		IronPoint: { stars: 2, weaponType: 'WEAPON_POLE' },
		WhiteTassel: { stars: 3, weaponType: 'WEAPON_POLE' },
		Halberd: { stars: 3, weaponType: 'WEAPON_POLE' },
		BlackTassel: { stars: 3, weaponType: 'WEAPON_POLE' },
		DragonsBane: { stars: 4, weaponType: 'WEAPON_POLE' },
		PrototypeStarglitter: { stars: 4, weaponType: 'WEAPON_POLE' },
		CrescentPike: { stars: 4, weaponType: 'WEAPON_POLE' },
		BlackcliffPole: { stars: 4, weaponType: 'WEAPON_POLE' },
		Deathmatch: { stars: 4, weaponType: 'WEAPON_POLE' },
		LithicSpear: { stars: 4, weaponType: 'WEAPON_POLE' },
		FavoniusLance: { stars: 4, weaponType: 'WEAPON_POLE' },
		RoyalSpear: { stars: 4, weaponType: 'WEAPON_POLE' },
		DragonspineSpear: { stars: 4, weaponType: 'WEAPON_POLE' },
		KitainCrossSpear: { stars: 4, weaponType: 'WEAPON_POLE' },
		TheCatch: { stars: 4, weaponType: 'WEAPON_POLE' },
		WavebreakersFin: { stars: 4, weaponType: 'WEAPON_POLE' },
		Moonpiercer: { stars: 4, weaponType: 'WEAPON_POLE' },
		MissiveWindspear: { stars: 4, weaponType: 'WEAPON_POLE' },
		BalladOfTheFjords: { stars: 4, weaponType: 'WEAPON_POLE' },
		RightfulReward: { stars: 4, weaponType: 'WEAPON_POLE' },
		DialoguesOfTheDesertSages: { stars: 4, weaponType: 'WEAPON_POLE' },
		ProspectorsDrill: { stars: 4, weaponType: 'WEAPON_POLE' },
		MountainBracingBolt: { stars: 4, weaponType: 'WEAPON_POLE' },
		FootprintOfTheRainbow: { stars: 4, weaponType: 'WEAPON_POLE' },
		StaffOfHoma: { stars: 5, weaponType: 'WEAPON_POLE' },
		SkywardSpine: { stars: 5, weaponType: 'WEAPON_POLE' },
		VortexVanquisher: { stars: 5, weaponType: 'WEAPON_POLE' },
		PrimordialJadeWingedSpear: { stars: 5, weaponType: 'WEAPON_POLE' },
		CalamityQueller: { stars: 5, weaponType: 'WEAPON_POLE' },
		EngulfingLightning: { stars: 5, weaponType: 'WEAPON_POLE' },
		StaffOfTheScarletSands: { stars: 5, weaponType: 'WEAPON_POLE' },
		CrimsonMoonsSemblance: { stars: 5, weaponType: 'WEAPON_POLE' },
		LumidouceElegy: { stars: 5, weaponType: 'WEAPON_POLE' },
		ApprenticesNotes: { stars: 1, weaponType: 'WEAPON_CATALYST' },
		PocketGrimoire: { stars: 2, weaponType: 'WEAPON_CATALYST' },
		MagicGuide: { stars: 3, weaponType: 'WEAPON_CATALYST' },
		ThrillingTalesOfDragonSlayers: { stars: 3, weaponType: 'WEAPON_CATALYST' },
		OtherworldlyStory: { stars: 3, weaponType: 'WEAPON_CATALYST' },
		EmeraldOrb: { stars: 3, weaponType: 'WEAPON_CATALYST' },
		TwinNephrite: { stars: 3, weaponType: 'WEAPON_CATALYST' },
		FavoniusCodex: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		TheWidsith: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		SacrificialFragments: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		RoyalGrimoire: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		SolarPearl: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		PrototypeAmber: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		MappaMare: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		BlackcliffAgate: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		EyeOfPerception: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		WineAndSong: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		Frostbearer: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		DodocoTales: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		HakushinRing: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		OathswornEye: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		WanderingEvenstar: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		FruitOfFulfillment: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		SacrificialJade: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		FlowingPurity: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		BalladOfTheBoundlessBlue: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		AshGravenDrinkingHorn: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		WaveridingWhirl: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		RingOfYaxche: { stars: 4, weaponType: 'WEAPON_CATALYST' },
		SkywardAtlas: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		LostPrayerToTheSacredWinds: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		MemoryOfDust: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		JadefallsSplendor: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		EverlastingMoonglow: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		KagurasVerity: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		AThousandFloatingDreams: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		TulaytullahsRemembrance: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		CashflowSupervision: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		TomeOfTheEternalFlow: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		CranesEchoingCall: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		SurfsUp: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		HuntersBow: { stars: 1, weaponType: 'WEAPON_BOW' },
		SeasonedHuntersBow: { stars: 2, weaponType: 'WEAPON_BOW' },
		RavenBow: { stars: 3, weaponType: 'WEAPON_BOW' },
		SharpshootersOath: { stars: 3, weaponType: 'WEAPON_BOW' },
		RecurveBow: { stars: 3, weaponType: 'WEAPON_BOW' },
		Slingshot: { stars: 3, weaponType: 'WEAPON_BOW' },
		Messenger: { stars: 3, weaponType: 'WEAPON_BOW' },
		FavoniusWarbow: { stars: 4, weaponType: 'WEAPON_BOW' },
		TheStringless: { stars: 4, weaponType: 'WEAPON_BOW' },
		SacrificialBow: { stars: 4, weaponType: 'WEAPON_BOW' },
		RoyalBow: { stars: 4, weaponType: 'WEAPON_BOW' },
		Rust: { stars: 4, weaponType: 'WEAPON_BOW' },
		PrototypeCrescent: { stars: 4, weaponType: 'WEAPON_BOW' },
		CompoundBow: { stars: 4, weaponType: 'WEAPON_BOW' },
		BlackcliffWarbow: { stars: 4, weaponType: 'WEAPON_BOW' },
		TheViridescentHunt: { stars: 4, weaponType: 'WEAPON_BOW' },
		AlleyHunter: { stars: 4, weaponType: 'WEAPON_BOW' },
		FadingTwilight: { stars: 4, weaponType: 'WEAPON_BOW' },
		MitternachtsWaltz: { stars: 4, weaponType: 'WEAPON_BOW' },
		WindblumeOde: { stars: 4, weaponType: 'WEAPON_BOW' },
		Hamayumi: { stars: 4, weaponType: 'WEAPON_BOW' },
		Predator: { stars: 4, weaponType: 'WEAPON_BOW' },
		MouunsMoon: { stars: 4, weaponType: 'WEAPON_BOW' },
		KingsSquire: { stars: 4, weaponType: 'WEAPON_BOW' },
		EndOfTheLine: { stars: 4, weaponType: 'WEAPON_BOW' },
		IbisPiercer: { stars: 4, weaponType: 'WEAPON_BOW' },
		ScionOfTheBlazingSun: { stars: 4, weaponType: 'WEAPON_BOW' },
		SongOfStillness: { stars: 4, weaponType: 'WEAPON_BOW' },
		Cloudforged: { stars: 4, weaponType: 'WEAPON_BOW' },
		RangeGauge: { stars: 4, weaponType: 'WEAPON_BOW' },
		FlowerWreathedFeathers: { stars: 4, weaponType: 'WEAPON_BOW' },
		ChainBreaker: { stars: 4, weaponType: 'WEAPON_BOW' },
		SkywardHarp: { stars: 5, weaponType: 'WEAPON_BOW' },
		AmosBow: { stars: 5, weaponType: 'WEAPON_BOW' },
		ElegyForTheEnd: { stars: 5, weaponType: 'WEAPON_BOW' },
		PolarStar: { stars: 5, weaponType: 'WEAPON_BOW' },
		AquaSimulacra: { stars: 5, weaponType: 'WEAPON_BOW' },
		ThunderingPulse: { stars: 5, weaponType: 'WEAPON_BOW' },
		HuntersPath: { stars: 5, weaponType: 'WEAPON_BOW' },
		TheFirstGreatMagic: { stars: 5, weaponType: 'WEAPON_BOW' },
		SilvershowerHeartstrings: { stars: 5, weaponType: 'WEAPON_BOW' },
		AstralVulturesCrimsonPlumage: { stars: 5, weaponType: 'WEAPON_BOW' }
	}
};