import {
	IGOOD,
	CharacterData,
	ArtifactData,
	ArtifactSet,
	WeaponData,
	StatKey
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
	element: string;
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

export type AkashaSystemStats = Awaited<ReturnType<Akasha['getCalculationsForUser']>>['data'];
export interface GenshinProfile {
	akasha: MiniAkashaSystemStat[];
	good: IGOOD;
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
			element: 'Cryo',
			calculations: {
				short: 'BURST',
				name: 'Burst DMG vs Frozen, Mona variant, Avg DMG',
				details:
					'Soumetsu Cutting average DMG, Ayaka c0r5, TTDS Mona c0r5, Kazuha c0r1, c6r5 Diona. TTDS, 4p ToTM and 4p Noblesse active. Enemy is frozen',
				weapon: 'Amenoma Kageuchi',
				ranking: 187332,
				outOf: 546454
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
			element: 'Hydro',
			calculations: {
				short: 'BURST',
				name: 'Sword Rain, Avg DMG',
				details: "4p Nymph's Dream is set to very optimistic 3 stacks.",
				weapon: 'Sacrificial Sword',
				ranking: 39027,
				outOf: 132491
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
			element: 'Anemo',
			calculations: {
				short: 'HYPER',
				name: 'Hyper Xiao, Avg DMG',
				details:
					"Combo that includes A4/VHA/PJWS/CQ stacking, Bennett, Noblesse and Elegy uptimes, 2E and 11HP with collision damage. 4p Noblese Aquila C6 Bennett, 4p ToTM Elegy C6 Faruzan, Zhongli. Faruzan's A4 is disabled for a bit of simplicity (it's also pretty weak anyways)",
				weapon: 'Staff of Homa',
				ranking: 86255,
				outOf: 364667
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
			element: 'Geo',
			calculations: {
				short: 'MAX HP',
				name: 'Shieldbot, Max HP',
				details: '---',
				weapon: 'Black Tassel',
				ranking: 48336,
				outOf: 565825
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
			element: 'Electro',
			calculations: {
				short: 'OZ',
				name: 'Raw Oz Avg DMG',
				details:
					'4x Oz hits. no buffs, talent level 13. One Oz hit does not benefit from the Thundersoother (75% uptime)',
				weapon: 'The Stringless',
				ranking: 62298,
				outOf: 220485
			},
			weapon: {
				weaponStats: { atk: 510, eleMas: 165 },
				stars: 4,
				name: 'The Stringless',
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Troupe_Awaken.png'
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
			element: 'Hydro',
			calculations: {
				short: 'COMBO',
				name: 'Childe International, Avg DMG',
				details:
					"1 rQ (vape) + 1 E + N2C * 6 + mSlash * 4. c0r1 Kazuha + c6r1 Xiangling + c6r1 Bennett. Most buffs expire after 3N2C. Shimenawa's burst damage is halved.",
				weapon: 'Aqua Simulacra',
				ranking: 18279,
				outOf: 157248
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
			element: 'Geo',
			calculations: {
				short: 'HYPER',
				name: 'Hyper Mono Geo NA combo, Avg DMG',
				details: 'N1 + N2 + N3 + N4. Team: Noelle C6, Gorou C6, Yunjin C6, Zhongli C0',
				weapon: 'Serpent Spine',
				ranking: 2032,
				outOf: 21485
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
			element: 'Pyro',
			calculations: {
				short: 'HYPER',
				name: 'VV Swirl Hyper Tao Combo, Avg DMG',
				details:
					'Average DMG for 11N1CD + Q combo. elegy instructor amber c0r1. kazuha c2r1 @ 1000EM(1420). 4p SR burst uptime 1/3, other sets: 2/3. ',
				weapon: 'Ballad of the Fjords',
				ranking: 118192,
				outOf: 527410
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
			element: 'Anemo',
			calculations: {
				short: 'EM+ER+CR',
				name: 'EM + ER (+ CR) balance formula',
				details:
					'Assumes Favonius Sword R5 (EM / 1000 + ER / 500) * 5000 + (vv ? 2000 : 0) + (CR > 15% ? (CR * 1500) : 0)',
				weapon: 'Favonius Sword',
				ranking: 394255,
				outOf: 770501
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
			element: 'Electro',
			calculations: {
				short: 'TASER',
				name: 'Double Hydro Burst, Avg DMG',
				details:
					"c0 Raiden, c2 Furina, c0 Yelan, c0 4p VV Jean. Combo: Q 3N5. Furina's Fanfare at 400 stacks. Yelan's A4 at 8s seconds. ",
				weapon: 'Staff of the Scarlet Sands',
				ranking: 779503,
				outOf: 898272
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
			element: 'Hydro',
			calculations: {
				short: 'HEAL+ER',
				name: 'Heal + ER balance formula',
				details:
					"(((E_DMG / 5500) + (E_HEAL / 5000) + (ER / 150)) * 5000) + SET_BONUS. +6500 ToTM, +6000 OHC, +6000 Deepwood, +5000 Noblesse, +4000 Maiden. Please keep in mind custom 'balance formulas' are completely feelscrafted unlike proper avg dmg formulas.",
				weapon: 'Everlasting Moonglow',
				ranking: 95148,
				outOf: 259548
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
			element: 'Hydro',
			calculations: {
				short: 'C6 COMBO',
				name: 'C6 Combo with C4 Mona, Avg DMG',
				details:
					"Frontloaded average DMG for c6r5 Aqua Yelan Combo: 2x E + 2x BTB + 3x C2 + 5x C6 + 24x Q. Team: c0r5 fs Kazuha @ 1000 EM vv hydro swirl + Zhongli shield up + c4 Mona burst up. Yelan's A4 set to 10s, C4 2 stacks, 18% HP from A1. 4p Nymph's Dream is set to 3 stacks.",
				weapon: 'Aqua Simulacra',
				ranking: 17323,
				outOf: 457870
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
			element: 'Dendro',
			calculations: {
				short: 'SPREAD',
				name: 'Quicken/Spread Team Combo, Avg DMG',
				details:
					"Combo: E Q 3CA. C1 Tighnari + C0R1 Deepwood Nahida + electro flex + electro flex. Tighnari's A1 buffs only CAs. Enemy has pre-existing Quicken aura. Nahida's A1 buff is maxed and lasts entire combo. ",
				weapon: 'Skyward Harp',
				ranking: 15344,
				outOf: 49152
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
			element: 'Dendro',
			calculations: {
				short: 'OFF-FIELD',
				name: 'Off-field Tri-Karma Purification',
				details:
					'Off-field Tri-Karma Purification (non-spread) avg DMG. Example team: Nahida + Xingqiu + Kuki + non-dendro flex.',
				weapon: 'A Thousand Floating Dreams',
				ranking: 379640,
				outOf: 714006
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
			element: 'Hydro',
			calculations: {
				short: 'SKILL',
				name: 'Mademoiselle Crabaletta, Avg DMG',
				details:
					'Average DMG for Mademoiselle Crabaletta in a double hydro team. Number of characters who offered HP: 4. Fanfare stacks count: 200. Weapon stacks maxed when applicable. ',
				weapon: 'Fleuve Cendre Ferryman',
				ranking: 178285,
				outOf: 402002
			},
			weapon: {
				weaponStats: { atk: 510, enerRech_: 45.9 },
				stars: 4,
				name: 'Fleuve Cendre Ferryman',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Machination_Awaken.png'
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
			element: 'Pyro',
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, Avg DMG',
				details:
					'C0 Arlecchino + C6 Chevreuse @ 40k HP + Electro Flex + C6R1 Aquila Bennett @ 4p Noblesse. Combo: E .. CA 5N3. Majority of potential buffs such as 4p Shimenawa / 4p HoD / 4p CW wear off before 5N3 starts due to long setup. Chevreuse stacks for CA 5N3: 0/1/1/1/2/2/2/3/3/3/... Arlecchino is below 50% HP. BoL value after using CA: 130%. 4p Whimsy stacks for CA 5N3: 1/1/2/3/... ',
				weapon: 'Staff of Homa',
				ranking: 45140,
				outOf: 364343
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
			element: 'Electro',
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, DPS',
				details:
					"C0 Clorinde + C6 Fischl + 4p Noblesse C6 Chevreuse @ 40k HP + 4p Cinder C6 Thoma. Leaderboard ranks DPS based on 16s rotation using QEE 5N3E combo. Clorinde's A1 and A4 at full uptime for simplicity. Chevreuse's C6 stacks: QEE:0, N3E:1, N3E: 2, N3E:3, N3E:3, N3E: 3. 4pc Harmonic Whimsy stacks Q:1, EE:2, 5N3:3. Finale of the Deep's passive does not affect the burst. ",
				weapon: 'Finale of the Deep',
				ranking: 40677,
				outOf: 149673
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
				key: 'RaidenShogun',
				level: 90,
				constellation: 0,
				ascension: 6,
				talent: { auto: 1, skill: 9, burst: 8 }
			},
			{
				key: 'KaedeharaKazuha',
				level: 90,
				constellation: 0,
				ascension: 6,
				talent: { auto: 7, skill: 9, burst: 9 }
			},
			{
				key: 'HuTao',
				level: 90,
				constellation: 1,
				ascension: 6,
				talent: { auto: 10, skill: 10, burst: 8 }
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
				setKey: 'GladiatorsFinale',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'pyro_dmg_',
				location: 'Arlecchino',
				lock: false,
				substats: [
					{ key: 'atk', value: 37 },
					{ key: 'hp', value: 538 },
					{ key: 'critRate_', value: 10.1 },
					{ key: 'critDMG_', value: 7.8 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				location: 'Arlecchino',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 12.3 },
					{ key: 'critDMG_', value: 5.4 },
					{ key: 'hp', value: 926 },
					{ key: 'def', value: 21 }
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
				mainStatKey: 'hp_',
				location: 'Xingqiu',
				lock: false,
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
				location: 'Furina',
				lock: false,
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
				setKey: 'GildedDreams',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'RaidenShogun',
				lock: false,
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
				location: 'RaidenShogun',
				lock: false,
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
				location: 'RaidenShogun',
				lock: false,
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
				location: 'RaidenShogun',
				lock: false,
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
				location: 'RaidenShogun',
				lock: false,
				substats: [
					{ key: 'def', value: 60 },
					{ key: 'critRate_', value: 5.8 },
					{ key: 'critDMG_', value: 12.4 },
					{ key: 'hp_', value: 4.1 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'KaedeharaKazuha',
				lock: false,
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
				location: 'KaedeharaKazuha',
				lock: false,
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
				location: 'KaedeharaKazuha',
				lock: false,
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
				location: 'KaedeharaKazuha',
				lock: false,
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
				location: 'KaedeharaKazuha',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 11 },
					{ key: 'def_', value: 10.2 },
					{ key: 'critDMG_', value: 21.8 },
					{ key: 'hp', value: 209 }
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
				key: 'FleuveCendreFerryman',
				level: 90,
				ascension: 6,
				refinement: 3,
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
				key: 'DragonsBane',
				level: 90,
				ascension: 6,
				refinement: 5,
				location: 'RaidenShogun',
				lock: false
			},
			{
				key: 'FavoniusSword',
				level: 1,
				ascension: 0,
				refinement: 3,
				location: 'KaedeharaKazuha',
				lock: false
			},
			{
				key: 'CalamityQueller',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'HuTao',
				lock: false
			}
		]
	}
};
