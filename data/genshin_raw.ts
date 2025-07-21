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
	stats: Record<BuildStatKey, number> | {};
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
				critRate: 0.29110013367700194,
				critDamage: 2.1431001317696534,
				energyRecharge: 1.155400146265503,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 0,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0.6160001051621399,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 20785.2734376085,
				atk: 2326.708740342875,
				def: 1048.1278077256875
			},
			calculations: {
				short: 'FREEZE',
				name: 'Basic Team vs Frozen, Avg DMG',
				details:
					'C0 Ayaka, C0R5 TTDS Mona @ 4pc Tenacity, C0R1 Kazuha @ 4pc VV 1000 EM, C6R5 Diona @ 4pc Noblesse. Combo: Dash (N1) QE 3N1CD. Enemy is frozen.',
				weapon: 'Amenoma Kageuchi',
				ranking: 161846,
				outOf: 554322
			},
			weapon: {
				weaponStats: { atk: 565, atk_: 27.6 },
				stars: 4,
				name: 'Finale of the Deep',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Vorpal_Awaken.png'
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
			name: 'Xiangling',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Xiangling.png',
			stats: {
				critRate: 0.6643003768094299,
				critDamage: 1.2615002340443848,
				energyRecharge: 2.4429005331166502,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 96.0000003523,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0.4660003430016754,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 16822.5292972273,
				atk: 1168.0058597273,
				def: 818.6485599226125
			},
			calculations: {
				short: 'MONO',
				name: 'Mono Pyro Pyronado Avg DMG',
				details: 'c6r5 Xiangling, c6r1 Bennett, c0r1 Kazuha with 1000EM, flex pyro',
				weapon: '"The Catch"',
				ranking: 26004,
				outOf: 137622
			},
			weapon: {
				weaponStats: { atk: 510, enerRech_: 45.9 },
				stars: 4,
				name: '"The Catch"',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Mori_Awaken.png'
			},
			character: {
				hp: 10874.914859,
				atk: 225.14102152,
				def: 668.8710945,
				critRate_: 5,
				critDMG_: 50,
				eleMas: 96
			}
		},
		{
			name: 'Xingqiu',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Xingqiu.png',
			stats: {
				critRate: 0.5915008013690185,
				critDamage: 1.4170008128131104,
				energyRecharge: 2.0880806868518067,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 58.27999953679687,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.6660007660830688,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 15975.5136726325,
				atk: 1822.3375251715624,
				def: 948.60205153875
			},
			calculations: {
				short: 'BURST',
				name: 'Sword Rain, Avg DMG',
				details: "4p Nymph's Dream is set to very optimistic 3 stacks.",
				weapon: 'Sacrificial Sword',
				ranking: 23354,
				outOf: 264771
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
				critRate: 0.5414002330541565,
				critDamage: 2.568236091876025,
				energyRecharge: 1.155400255465503,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 16.319999912524217,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0.46600020840167544,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 21239.7773439677,
				atk: 2242.9934142802,
				def: 941.1942140848874
			},
			calculations: {
				short: 'FFXX',
				name: 'FFXX Premium Team, Avg DMG',
				details:
					"Combo that includes A4/VHA/PJWS/CQ stacking and all buff uptimes. 2E and 11HP with collision damage. 4p ToTM Elegy C6 Faruzan, 4p Noblese C0R1 Xianyun @ 3800 ATK (4445 post-buff ATK), C0 Furina. Faruzan's A4 is disabled for a bit of simplicity (it's also pretty weak anyways). 4-pc Long Night's Oath stacks are pretty sweaty: 2/3/4/3/4/5/5/... ER% categories beyond 120% are dropped because FFXX has much lower ER% requirements. There is no N1C in the calculated combo but 4-pc DPC results assume N1C (without actually adding it to the result) start for the sake of set buff and it not being too hard to perform. ",
				weapon: 'Staff of Homa',
				ranking: 6189,
				outOf: 385675
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
				ranking: 77639,
				outOf: 830188
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
				critRate: 0.9600689178420166,
				critDamage: 1.331400848002539,
				energyRecharge: 1.1684009796095947,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 60.61000154075156,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0.4660009211016754,
				maxHp: 13332.9003915554,
				atk: 2091.642823196025,
				def: 741.86084077415
			},
			calculations: {
				short: 'OZ',
				name: 'Raw Oz Avg DMG',
				details:
					'4x Oz hits. no buffs, talent level 13. One Oz hit does not benefit from the Thundersoother (75% uptime). Polar Star at 3 stacks.',
				weapon: 'Polar Star',
				ranking: 19866,
				outOf: 344889
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
				ranking: 24295,
				outOf: 209965
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
				ranking: 2574,
				outOf: 29721
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
				critRate: 0.6021009181865845,
				critDamage: 2.6179367994198,
				energyRecharge: 1.045300910366455,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 69.94000334490624,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0.4660008942016754,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 33914.8359384035,
				atk: 1491.5794305910001,
				def: 1000.239502856625
			},
			calculations: {
				short: 'HYPER',
				name: 'VV Swirl Hyper Tao Combo, Avg DMG',
				details:
					'Average DMG for 11N1CD + Q combo. elegy instructor amber c0r1. kazuha c2r1 @ 1000EM(1420). 4p SR burst uptime 1/3, other sets: 2/3. ',
				weapon: 'Staff of Homa',
				ranking: 236005,
				outOf: 826561
			},
			weapon: {
				weaponStats: { atk: 608, critDMG_: 66.2 },
				stars: 5,
				name: 'Staff of Homa',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Homa_Awaken.png'
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
				ranking: 564284,
				outOf: 1125966
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
			stats: {},
			calculations: {
				short: 'TASER',
				name: 'Double Hydro Burst, Avg DMG',
				details:
					"c0 Raiden, c2 Furina, c0 Yelan, c0 4p VV Jean. Combo: Q 3N5. Furina's Fanfare at 400 stacks. Yelan's A4 at 8s seconds. ",
				weapon: 'Staff of the Scarlet Sands',
				ranking: 1071356,
				outOf: 1268367
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
				ranking: 117260,
				outOf: 336814
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
				critRate: 0.7824006793116516,
				critDamage: 2.5865485784625,
				energyRecharge: 1.4072007057284301,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 32.640000116548435,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.46600071760167544,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 32107.7734382269,
				atk: 1096.791748773775,
				def: 748.5885627386187
			},
			calculations: {
				short: 'C6 COMBO',
				name: 'C6 Combo with C4 Mona, Avg DMG',
				details:
					"Frontloaded average DMG for c6r5 Aqua Yelan Combo: 2x E + 2x BTB + 3x C2 + 5x C6 + 24x Q. Team: c0r5 fs Kazuha @ 1000 EM vv hydro swirl + Zhongli shield up + c4 Mona burst up. Yelan's A4 set to 10s, C4 2 stacks, 18% HP from A1. 4p Nymph's Dream is set to 3 stacks.",
				weapon: 'Aqua Simulacra',
				ranking: 12470,
				outOf: 622952
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
				ranking: 22033,
				outOf: 73796
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
			stats: {},
			calculations: {
				short: 'OFF-FIELD',
				name: 'Off-field Tri-Karma Purification',
				details:
					'Off-field Tri-Karma Purification (non-spread) avg DMG. Example team: Nahida + Xingqiu + Kuki + non-dendro flex.',
				weapon: 'A Thousand Floating Dreams',
				ranking: 500409,
				outOf: 1066910
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
			name: 'Wanderer',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Wanderer.png',
			stats: {
				critRate: 0.6891003929797058,
				critDamage: 1.7428802930537108,
				energyRecharge: 1.194200464409912,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 81.58999676339063,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0.6160004221621399,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 16516.5507816755,
				atk: 1759.385010191125,
				def: 617.717041441125
			},
			calculations: {
				short: 'HYPER',
				name: 'Hyper Wanderer, Avg DMG',
				details:
					"(Q) [C] E 6N3 N1C with DPC. (Q) E 6N3 C with everything else. c0r1 Wanderer, c6 TOTM Faruzan, c6r1 NO Bennett, Zhongli. Faruzan's A4 is ignored. 4p Shimenawa has their Q DMG halved (simulating burst every second rotation). If you see any way to improve the formula please contact me through Discord",
				weapon: "Tulaytullah's Remembrance",
				ranking: 118054,
				outOf: 338283
			},
			weapon: {
				weaponStats: { atk: 510, critDMG_: 55.1 },
				stars: 4,
				name: 'The Widsith',
				icon: 'https://enka.network/ui/UI_EquipIcon_Catalyst_Troupe_Awaken.png'
			},
			character: {
				hp: 10164.1058884,
				atk: 327.6743806,
				def: 607.1579523,
				critRate_: 24.2,
				critDMG_: 50
			}
		},
		{
			name: 'Furina',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Furina.png',
			stats: {
				critRate: 0.8407006990221985,
				critDamage: 2.2367487084177977,
				energyRecharge: 1.3238006960658082,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 20.98000027053633,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0.4660007190016754,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 32456.9648444783,
				atk: 1127.9217536579874,
				def: 973.6201789509563
			},
			calculations: {
				short: 'C2 SKILL',
				name: 'Elemental Skill with C2 buffs, Avg DMG',
				details:
					'Average DMG for Mademoiselle Crabaletta in a double hydro team. Number of characters who offered HP: 4. Maxed Fanfare stacks and maxed C2 stacks (easy to achieve in for example Neuvilette teams). Weapon stacks maxed when applicable. ',
				weapon: 'Splendor of Tranquil Waters',
				ranking: 10292,
				outOf: 590221
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
				critRate: 0.818712951283136,
				critDamage: 2.104300917725244,
				energyRecharge: 1.045300902466455,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 34.97000211630313,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0.4660008863016754,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 17883.1250008956,
				atk: 2208.10302823935,
				def: 900.5267342940375
			},
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, Avg DMG',
				details:
					'C0 Arlecchino + C6 Chevreuse @ 40k HP + Electro Flex + C6R1 Aquila Bennett @ 4p Noblesse. Combo: E .. CA 5N3. Majority of potential buffs such as 4p Shimenawa / 4p HoD / 4p CW wear off before 5N3 starts due to long setup. Chevreuse stacks for CA 5N3: 0/1/1/1/2/2/2/3/3/3/... BoL value after using CA: 155%. 4p Whimsy stacks for CA 5N3: 1/2/3/3/... ',
				weapon: "Crimson Moon's Semblance",
				ranking: 39439,
				outOf: 769863
			},
			weapon: {
				weaponStats: { atk: 674, critRate_: 22.1 },
				stars: 5,
				name: "Crimson Moon's Semblance",
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_BloodMoon_Awaken.png'
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
				critRate: 0.8213008072499939,
				critDamage: 2.2133249070768066,
				energyRecharge: 1.0906008508329101,
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
				electroDamageBonus: 0.4660008278016754,
				maxHp: 20499.4160164621,
				atk: 2253.0332039621,
				def: 932.4793099191312
			},
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, DPS',
				details:
					"C0 Clorinde + C6 Fischl + 4p Noblesse C6 Chevreuse @ 40k HP + 4p Cinder C6 Thoma. Leaderboard ranks DPS based on 16s rotation using QEE 5N3E combo. Clorinde's A1 and A4 at full uptime for simplicity. Chevreuse's C6 stacks: QEE:0, N3E:1, N3E: 2, N3E:3, N3E:3, N3E: 3. 4pc Harmonic Whimsy stacks Q:1, EE:2, 5N3:3. Absolution same stacks as Whimsy. ",
				weapon: 'Absolution',
				ranking: 12423,
				outOf: 328083
			},
			weapon: {
				weaponStats: { atk: 674, critDMG_: 44.1 },
				stars: 5,
				name: 'Absolution',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Estoc_Awaken.png'
			},
			character: {
				hp: 12956.17307445,
				atk: 337.2415138,
				def: 783.9254574,
				critRate_: 24.2,
				critDMG_: 50
			}
		},
		{
			name: 'Mavuika',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Mavuika.png',
			stats: {
				critRate: 0.6838006016755677,
				critDamage: 1.6145006057763671,
				energyRecharge: 1.00000056,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 215.15599116058593,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0,
				pyroDamageBonus: 0.4660005507016754,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 19747.07421931,
				atk: 1794.131104075625,
				def: 1175.996338450625
			},
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, Avg DMG',
				details:
					"C0 Mavuika + C6 Chevreuse + Ororon @ 4p Cinder + C6R1 Aquila Bennett @ 4p Noblesse. Combo: E .. Q 8CAF. Mavuika at 200 Fighting Spirit. A4 DMG Bonus starts at 40% for the burst and falls off to 26% for the final charged attack. 4-pc Obsidian Codex's critrate buff stops after 6th Cyclic CA hit. ",
				weapon: 'Mailed Flower',
				ranking: 182694,
				outOf: 434407
			},
			weapon: {
				weaponStats: { atk: 565, eleMas: 110 },
				stars: 4,
				name: 'Mailed Flower',
				icon: 'https://enka.network/ui/UI_EquipIcon_Claymore_Fleurfair_Awaken.png'
			},
			character: {
				hp: 12552.058567,
				atk: 358.76757,
				def: 791.6110011,
				critRate_: 5,
				critDMG_: 88.4
			}
		},
		{
			name: 'Escoffier',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Escoffier.png',
			stats: {
				critRate: 0.8817205020612671,
				critDamage: 1.5805005618757202,
				energyRecharge: 1.2137006112760498,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 23.310000021142383,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0.4660005459016754,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 19208.1855474302,
				atk: 1807.12451227395,
				def: 833.8946538755125
			},
			calculations: {
				short: 'FREEZE',
				name: 'Skill + Burst Combo, Avg DMG',
				details:
					'1x E cast + 20x E ticks + 1x Q. C2 Furina at max (400) fanfare. 4-pc Blizzard Strayer assumes 50% freeze uptime (e.g. one rotation against freezable enemy and one rotation against a boss). ',
				weapon: 'Deathmatch',
				ranking: 15208,
				outOf: 120077
			},
			weapon: {
				weaponStats: { atk: 454, critRate_: 36.8 },
				stars: 4,
				name: 'Deathmatch',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Gladiator_Awaken.png'
			},
			character: {
				hp: 13348.0427932,
				atk: 346.808651,
				def: 731.66376024,
				critRate_: 24.2,
				critDMG_: 50
			}
		},
		{
			name: 'Skirk',
			icon: 'https://enka.network/ui/UI_AvatarIcon_SkirkNew.png',
			stats: {
				critRate: 0.7455403257453919,
				critDamage: 1.8086003113830567,
				energyRecharge: 1.058300380810547,
				healingBonus: 0,
				incomingHealingBonus: 0,
				elementalMastery: 48.95999944697266,
				physicalDamageBonus: 0,
				geoDamageBonus: 0,
				cryoDamageBonus: 0.46600035320167543,
				pyroDamageBonus: 0,
				anemoDamageBonus: 0,
				hydroDamageBonus: 0,
				dendroDamageBonus: 0,
				electroDamageBonus: 0,
				maxHp: 17400.3964847375,
				atk: 1805.86084020625,
				def: 1062.08886755
			},
			calculations: {
				short: 'COMBO',
				name: 'Double Hydro, Avg DMG',
				details:
					"C0 Skirk, C0R1 Escoffier, C0 Furina @ max fanfare, C0 Yelan. Combo: E Q 2N5 CA 2N5. Q absorbs 3 Void Rifts. Escoffier's Fork at full uptime for simplicity. For Yelan A4 stacks check the Damage Distribution table. Target has hydro aura and is unfreezable. ",
				weapon: 'Azurelight',
				ranking: 118727,
				outOf: 212900
			},
			weapon: {
				weaponStats: { atk: 510, critRate_: 27.6 },
				stars: 4,
				name: 'Wolf-Fang',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Boreas_Awaken.png'
			},
			character: {
				hp: 12417.3538435,
				atk: 358.76757,
				def: 806.21353413,
				critRate_: 5,
				critDMG_: 88.4
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
				constellation: 2,
				ascension: 6,
				talent: { auto: 10, skill: 8, burst: 6 }
			},
			{
				key: 'Xilonen',
				level: 80,
				constellation: 0,
				ascension: 6,
				talent: { auto: 1, skill: 10, burst: 9 }
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
				constellation: 2,
				ascension: 6,
				talent: { auto: 1, skill: 6, burst: 10 }
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
				constellation: 6,
				ascension: 6,
				talent: { auto: 10, skill: 10, burst: 10 }
			},
			{
				key: 'Clorinde',
				level: 90,
				constellation: 1,
				ascension: 6,
				talent: { auto: 1, skill: 10, burst: 9 }
			},
			{
				key: 'Mavuika',
				level: 90,
				constellation: 0,
				ascension: 6,
				talent: { auto: 1, skill: 8, burst: 9 }
			},
			{
				key: 'Chevreuse',
				level: 90,
				constellation: 6,
				ascension: 6,
				talent: { auto: 1, skill: 9, burst: 3 }
			},
			{
				key: 'Ororon',
				level: 80,
				constellation: 6,
				ascension: 6,
				talent: { auto: 1, skill: 6, burst: 9 }
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
					{ key: 'critDMG_', value: 13.2 },
					{ key: 'critRate_', value: 12 },
					{ key: 'def', value: 23 },
					{ key: 'eleMas', value: 35 }
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
					{ key: 'critRate_', value: 7.4 },
					{ key: 'critDMG_', value: 25.6 },
					{ key: 'atk', value: 16 },
					{ key: 'def', value: 21 }
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
				setKey: 'EchoesOfAnOffering',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critDMG_',
				location: 'Arlecchino',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'critRate_', value: 9.3 },
					{ key: 'atk_', value: 15.7 },
					{ key: 'atk', value: 18 }
				]
			},
			{
				setKey: 'ScrollOfTheHeroOfCinderCity',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Xilonen',
				lock: false,
				substats: [
					{ key: 'def', value: 37 },
					{ key: 'def_', value: 19 },
					{ key: 'enerRech_', value: 10.4 },
					{ key: 'critRate_', value: 6.6 }
				]
			},
			{
				setKey: 'ScrollOfTheHeroOfCinderCity',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Xilonen',
				lock: false,
				substats: [
					{ key: 'hp', value: 299 },
					{ key: 'def_', value: 23.3 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'hp_', value: 14.6 }
				]
			},
			{
				setKey: 'ScrollOfTheHeroOfCinderCity',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'def_',
				location: 'Xilonen',
				lock: false,
				substats: [
					{ key: 'eleMas', value: 16 },
					{ key: 'critRate_', value: 7.4 },
					{ key: 'enerRech_', value: 15.5 },
					{ key: 'critDMG_', value: 15.5 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'def_',
				location: 'Xilonen',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 11 },
					{ key: 'eleMas', value: 89 },
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'critRate_', value: 5.8 }
				]
			},
			{
				setKey: 'ScrollOfTheHeroOfCinderCity',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'def_',
				location: 'Xilonen',
				lock: false,
				substats: [
					{ key: 'eleMas', value: 65 },
					{ key: 'critRate_', value: 7 },
					{ key: 'atk_', value: 4.1 },
					{ key: 'enerRech_', value: 11 }
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
					{ key: 'critRate_', value: 5.8 },
					{ key: 'critDMG_', value: 21.8 },
					{ key: 'def_', value: 12.4 },
					{ key: 'eleMas', value: 33 }
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
				setKey: 'WanderersTroupe',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Xiao',
				lock: false,
				substats: [
					{ key: 'atk', value: 16 },
					{ key: 'atk_', value: 4.1 },
					{ key: 'critRate_', value: 10.5 },
					{ key: 'critDMG_', value: 28.7 }
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
					{ key: 'critRate_', value: 5.4 },
					{ key: 'critDMG_', value: 21 },
					{ key: 'eleMas', value: 16 },
					{ key: 'hp', value: 657 }
				]
			},
			{
				setKey: 'MarechausseeHunter',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'anemo_dmg_',
				location: 'Xiao',
				lock: false,
				substats: [
					{ key: 'atk_', value: 14.6 },
					{ key: 'def', value: 37 },
					{ key: 'enerRech_', value: 9.7 },
					{ key: 'critDMG_', value: 6.2 }
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
				setKey: 'EmblemOfSeveredFate',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Xianyun',
				lock: false,
				substats: [
					{ key: 'atk_', value: 21 },
					{ key: 'critDMG_', value: 6.2 },
					{ key: 'critRate_', value: 2.7 },
					{ key: 'enerRech_', value: 12.3 }
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
					{ key: 'critDMG_', value: 5.4 },
					{ key: 'def_', value: 13.1 },
					{ key: 'critRate_', value: 6.6 },
					{ key: 'atk_', value: 20.4 }
				]
			},
			{
				setKey: 'ViridescentVenerer',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				location: 'Xianyun',
				lock: false,
				substats: [
					{ key: 'def_', value: 16.8 },
					{ key: 'enerRech_', value: 15.5 },
					{ key: 'critRate_', value: 3.1 },
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
					{ key: 'def', value: 39 },
					{ key: 'atk', value: 37 },
					{ key: 'enerRech_', value: 16.8 },
					{ key: 'critDMG_', value: 7.8 }
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
					{ key: 'hp_', value: 9.9 },
					{ key: 'critRate_', value: 8.6 },
					{ key: 'critDMG_', value: 14.8 },
					{ key: 'eleMas', value: 21 }
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
				mainStatKey: 'hydro_dmg_',
				location: 'Furina',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 14.8 },
					{ key: 'hp_', value: 5.8 },
					{ key: 'critRate_', value: 13.6 },
					{ key: 'enerRech_', value: 11 }
				]
			},
			{
				setKey: 'WanderersTroupe',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				location: 'Furina',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 21 },
					{ key: 'enerRech_', value: 10.4 },
					{ key: 'hp_', value: 4.7 },
					{ key: 'def_', value: 11.7 }
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
					{ key: 'critRate_', value: 9.3 },
					{ key: 'hp', value: 239 },
					{ key: 'critDMG_', value: 28 },
					{ key: 'hp_', value: 5.8 }
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
					{ key: 'hp', value: 448 },
					{ key: 'critDMG_', value: 21 },
					{ key: 'def_', value: 11.7 },
					{ key: 'critRate_', value: 5.8 }
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
				mainStatKey: 'critRate_',
				location: 'Clorinde',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 9.1 },
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'hp_', value: 4.7 },
					{ key: 'hp', value: 418 }
				]
			},
			{
				setKey: 'ObsidianCodex',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Mavuika',
				lock: false,
				substats: [
					{ key: 'atk_', value: 9.3 },
					{ key: 'critRate_', value: 10.5 },
					{ key: 'def_', value: 12.4 },
					{ key: 'critDMG_', value: 5.4 }
				]
			},
			{
				setKey: 'ObsidianCodex',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Mavuika',
				lock: false,
				substats: [
					{ key: 'atk_', value: 4.7 },
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'critRate_', value: 11.3 },
					{ key: 'eleMas', value: 23 }
				]
			},
			{
				setKey: 'ObsidianCodex',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				location: 'Mavuika',
				lock: false,
				substats: [
					{ key: 'eleMas', value: 40 },
					{ key: 'critRate_', value: 6.6 },
					{ key: 'hp_', value: 13.4 },
					{ key: 'critDMG_', value: 13.2 }
				]
			},
			{
				setKey: 'UnfinishedReverie',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'pyro_dmg_',
				location: 'Mavuika',
				lock: false,
				substats: [
					{ key: 'def', value: 56 },
					{ key: 'def_', value: 11.7 },
					{ key: 'critDMG_', value: 19.4 },
					{ key: 'critRate_', value: 3.9 }
				]
			},
			{
				setKey: 'ObsidianCodex',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				location: 'Mavuika',
				lock: false,
				substats: [
					{ key: 'critDMG_', value: 15.5 },
					{ key: 'def_', value: 17.5 },
					{ key: 'hp_', value: 5.8 },
					{ key: 'eleMas', value: 42 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Chevreuse',
				lock: false,
				substats: [
					{ key: 'atk', value: 70 },
					{ key: 'enerRech_', value: 11 },
					{ key: 'hp_', value: 5.3 },
					{ key: 'critRate_', value: 3.5 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'plume',
				level: 0,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Chevreuse',
				lock: false,
				substats: [
					{ key: 'hp_', value: 5.3 },
					{ key: 'hp', value: 269 },
					{ key: 'enerRech_', value: 6.5 }
				]
			},
			{
				setKey: 'GildedDreams',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				location: 'Chevreuse',
				lock: false,
				substats: [
					{ key: 'hp', value: 747 },
					{ key: 'eleMas', value: 16 },
					{ key: 'critRate_', value: 3.1 },
					{ key: 'critDMG_', value: 24.1 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp_',
				location: 'Chevreuse',
				lock: false,
				substats: [
					{ key: 'def', value: 39 },
					{ key: 'critRate_', value: 9.3 },
					{ key: 'hp', value: 508 },
					{ key: 'enerRech_', value: 5.8 }
				]
			},
			{
				setKey: 'NoblesseOblige',
				slotKey: 'circlet',
				level: 8,
				rarity: 5,
				mainStatKey: 'hp_',
				location: 'Chevreuse',
				lock: false,
				substats: [
					{ key: 'hp', value: 269 },
					{ key: 'atk', value: 16 },
					{ key: 'critDMG_', value: 7 },
					{ key: 'critRate_', value: 5.8 }
				]
			},
			{
				setKey: 'ScrollOfTheHeroOfCinderCity',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Ororon',
				lock: false,
				substats: [
					{ key: 'critRate_', value: 7.8 },
					{ key: 'critDMG_', value: 31.9 },
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'atk', value: 18 }
				]
			},
			{
				setKey: 'ScrollOfTheHeroOfCinderCity',
				slotKey: 'plume',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk',
				location: 'Ororon',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 5.8 },
					{ key: 'critRate_', value: 2.7 },
					{ key: 'eleMas', value: 35 },
					{ key: 'critDMG_', value: 26.4 }
				]
			},
			{
				setKey: 'ScrollOfTheHeroOfCinderCity',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'atk_',
				location: 'Ororon',
				lock: false,
				substats: [
					{ key: 'critRate_', value: 8.6 },
					{ key: 'hp_', value: 5.8 },
					{ key: 'eleMas', value: 21 },
					{ key: 'critDMG_', value: 25.7 }
				]
			},
			{
				setKey: 'FragmentOfHarmonicWhimsy',
				slotKey: 'goblet',
				level: 20,
				rarity: 5,
				mainStatKey: 'electro_dmg_',
				location: 'Ororon',
				lock: false,
				substats: [
					{ key: 'eleMas', value: 19 },
					{ key: 'atk_', value: 14 },
					{ key: 'critRate_', value: 10.5 },
					{ key: 'enerRech_', value: 6.5 }
				]
			},
			{
				setKey: 'ScrollOfTheHeroOfCinderCity',
				slotKey: 'circlet',
				level: 20,
				rarity: 5,
				mainStatKey: 'critRate_',
				location: 'Ororon',
				lock: false,
				substats: [
					{ key: 'atk', value: 49 },
					{ key: 'hp', value: 209 },
					{ key: 'enerRech_', value: 4.5 },
					{ key: 'hp_', value: 14 }
				]
			}
		],
		weapons: [
			{
				key: 'CrimsonMoonsSemblance',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'Arlecchino',
				lock: false
			},
			{
				key: 'PeakPatrolSong',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'Xilonen',
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
				key: 'SkywardAtlas',
				level: 90,
				ascension: 6,
				refinement: 1,
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
				key: 'Absolution',
				level: 90,
				ascension: 6,
				refinement: 1,
				location: 'Clorinde',
				lock: false
			},
			{
				key: 'MailedFlower',
				level: 90,
				ascension: 6,
				refinement: 5,
				location: 'Mavuika',
				lock: false
			},
			{
				key: 'DialoguesOfTheDesertSages',
				level: 90,
				ascension: 6,
				refinement: 5,
				location: 'Chevreuse',
				lock: false
			},
			{
				key: 'ChainBreaker',
				level: 90,
				ascension: 6,
				refinement: 3,
				location: 'Ororon',
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
		Mavuika: { element: 'Pyro', stars: 5, weaponType: 'WEAPON_CLAYMORE' },
		Citlali: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_CATALYST' },
		LanYan: { element: 'Anemo', stars: 4, weaponType: 'WEAPON_CATALYST' },
		YumemizukiMizuki: { element: 'Anemo', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Iansan: { element: 'Electro', stars: 4, weaponType: 'WEAPON_POLE' },
		Varesa: { element: 'Electro', stars: 5, weaponType: 'WEAPON_CATALYST' },
		Escoffier: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_POLE' },
		Ifa: { element: 'Anemo', stars: 4, weaponType: 'WEAPON_CATALYST' },
		Skirk: { element: 'Cryo', stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
		Dahlia: { element: 'Hydro', stars: 4, weaponType: 'WEAPON_SWORD_ONE_HAND' }
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
		Azurelight: { stars: 5, weaponType: 'WEAPON_SWORD_ONE_HAND' },
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
		AThousandBlazingSuns: { stars: 5, weaponType: 'WEAPON_CLAYMORE' },
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
		TamayurateiNoOhanashi: { stars: 4, weaponType: 'WEAPON_POLE' },
		StaffOfHoma: { stars: 5, weaponType: 'WEAPON_POLE' },
		SkywardSpine: { stars: 5, weaponType: 'WEAPON_POLE' },
		VortexVanquisher: { stars: 5, weaponType: 'WEAPON_POLE' },
		PrimordialJadeWingedSpear: { stars: 5, weaponType: 'WEAPON_POLE' },
		CalamityQueller: { stars: 5, weaponType: 'WEAPON_POLE' },
		EngulfingLightning: { stars: 5, weaponType: 'WEAPON_POLE' },
		StaffOfTheScarletSands: { stars: 5, weaponType: 'WEAPON_POLE' },
		CrimsonMoonsSemblance: { stars: 5, weaponType: 'WEAPON_POLE' },
		LumidouceElegy: { stars: 5, weaponType: 'WEAPON_POLE' },
		SymphonistOfScents: { stars: 5, weaponType: 'WEAPON_POLE' },
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
		StarcallersWatch: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		SunnyMorningSleepIn: { stars: 5, weaponType: 'WEAPON_CATALYST' },
		VividNotions: { stars: 5, weaponType: 'WEAPON_CATALYST' },
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
		SequenceOfSolitude: { stars: 4, weaponType: 'WEAPON_BOW' },
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
