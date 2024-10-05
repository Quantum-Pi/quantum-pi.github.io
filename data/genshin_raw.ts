import { IGOOD, CharacterData, ArtifactData, ArtifactSet, WeaponData } from 'enka-network-api';
import Akasha from 'akasha-system.js';
export interface EnkaData {
	characters: CharacterData[];
	artifactSets: ArtifactSet[];
	weapons: WeaponData[];
	artifacts: ArtifactData[];
}

export interface MiniAkashaSystemStat {
	name: string;
	icon: string;
	calculations: {
		short: string;
		name: string;
		details: string;
		weapon: string;
		ranking: number;
		outOf: number;
	};
	weapon: {
		weaponStats: { stat: string; statValue: number }[];
		name: string;
		icon: string;
	};
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
			calculations: {
				short: 'BURST',
				name: 'Burst DMG vs Frozen, Mona variant, Avg DMG',
				details:
					'Soumetsu Cutting average DMG, Ayaka c0r5, TTDS Mona c0r5, Kazuha c0r1, c6r5 Diona. TTDS, 4p ToTM and 4p Noblesse active. Enemy is frozen',
				weapon: 'Amenoma Kageuchi',
				ranking: 182967,
				outOf: 530903
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 454 },
					{ stat: 'FIGHT_PROP_ATTACK_PERCENT', statValue: 55.1 }
				],
				name: 'Amenoma Kageuchi',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Bakufu_Awaken.png'
			}
		},
		{
			name: 'Xingqiu',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Xingqiu.png',
			calculations: {
				short: 'BURST',
				name: 'Sword Rain, Avg DMG',
				details: "4p Nymph's Dream is set to very optimistic 3 stacks.",
				weapon: 'Sacrificial Sword',
				ranking: 37475,
				outOf: 127197
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 608 },
					{ stat: 'FIGHT_PROP_CHARGE_EFFICIENCY', statValue: 55.1 }
				],
				name: 'Skyward Blade',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Dvalin_Awaken.png'
			}
		},
		{
			name: 'Xiao',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Xiao.png',
			calculations: {
				short: 'HYPER',
				name: 'Hyper Xiao, Avg DMG',
				details:
					"Combo that includes A4/VHA/PJWS/CQ stacking, Bennett, Noblesse and Elegy uptimes, 2E and 11HP with collision damage. 4p Noblese Aquila C6 Bennett, 4p ToTM Elegy C6 Faruzan, Zhongli. Faruzan's A4 is disabled for a bit of simplicity (it's also pretty weak anyways)",
				weapon: 'Staff of Homa',
				ranking: 83606,
				outOf: 351597
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 608 },
					{ stat: 'FIGHT_PROP_CRITICAL_HURT', statValue: 66.2 }
				],
				name: 'Staff of Homa',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Homa_Awaken.png'
			}
		},
		{
			name: 'Zhongli',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Zhongli.png',
			calculations: {
				short: 'MAX HP',
				name: 'Shieldbot, Max HP',
				details: '---',
				weapon: 'Black Tassel',
				ranking: 46289,
				outOf: 546799
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 354 },
					{ stat: 'FIGHT_PROP_HP_PERCENT', statValue: 46.9 }
				],
				name: 'Black Tassel',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Noire_Awaken.png'
			}
		},
		{
			name: 'Fischl',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Fischl.png',
			calculations: {
				short: 'OZ',
				name: 'Raw Oz Avg DMG',
				details:
					'4x Oz hits. no buffs, talent level 13. One Oz hit does not benefit from the Thundersoother (75% uptime)',
				weapon: 'The Stringless',
				ranking: 59323,
				outOf: 211638
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 510 },
					{ stat: 'FIGHT_PROP_ELEMENT_MASTERY', statValue: 165 }
				],
				name: 'The Stringless',
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Troupe_Awaken.png'
			}
		},
		{
			name: 'Tartaglia',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Tartaglia.png',
			calculations: {
				short: 'COMBO',
				name: 'Childe International, Avg DMG',
				details:
					"1 rQ (vape) + 1 E + N2C * 6 + mSlash * 4. c0r1 Kazuha + c6r1 Xiangling + c6r1 Bennett. Most buffs expire after 3N2C. Shimenawa's burst damage is halved.",
				weapon: 'Aqua Simulacra',
				ranking: 17783,
				outOf: 152419
			},
			weapon: {
				weaponStats: [{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 23 }],
				name: "Hunter's Bow",
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Hunters_Awaken.png'
			}
		},
		{
			name: 'Noelle',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Noel.png',
			calculations: {
				short: 'HYPER',
				name: 'Hyper Mono Geo NA combo, Avg DMG',
				details: 'N1 + N2 + N3 + N4. Team: Noelle C6, Gorou C6, Yunjin C6, Zhongli C0',
				weapon: 'Serpent Spine',
				ranking: 1982,
				outOf: 20589
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 510 },
					{ stat: 'FIGHT_PROP_CRITICAL', statValue: 27.6 }
				],
				name: 'Serpent Spine',
				icon: 'https://enka.network/ui/UI_EquipIcon_Claymore_Kione_Awaken.png'
			}
		},
		{
			name: 'Hu Tao',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Hutao.png',
			calculations: {
				short: 'HYPER',
				name: 'VV Swirl Hyper Tao Combo, Avg DMG',
				details:
					'Average DMG for 11N1CD + Q combo. elegy instructor amber c0r1. kazuha c2r1 @ 1000EM(1420). 4p SR burst uptime 1/3, other sets: 2/3. ',
				weapon: 'Ballad of the Fjords',
				ranking: 114819,
				outOf: 511346
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 741 },
					{ stat: 'FIGHT_PROP_ATTACK_PERCENT', statValue: 16.5 }
				],
				name: 'Calamity Queller',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Santika_Awaken.png'
			}
		},
		{
			name: 'Kaedehara Kazuha',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Kazuha.png',
			calculations: {
				short: 'EM+ER+CR',
				name: 'EM + ER (+ CR) balance formula',
				details:
					'Assumes Favonius Sword R5 (EM / 1000 + ER / 500) * 5000 + (vv ? 2000 : 0) + (CR > 15% ? (CR * 1500) : 0)',
				weapon: 'Favonius Sword',
				ranking: 375088,
				outOf: 731633
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 454 },
					{ stat: 'FIGHT_PROP_CHARGE_EFFICIENCY', statValue: 61.3 }
				],
				name: 'Favonius Sword',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Zephyrus_Awaken.png'
			}
		},
		{
			name: 'Raiden Shogun',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Shougun.png',
			calculations: {
				short: 'TASER',
				name: 'Double Hydro Burst, Avg DMG',
				details:
					"c0 Raiden, c2 Furina, c0 Yelan, c0 4p VV Jean. Combo: Q 3N5. Furina's Fanfare at 400 stacks. Yelan's A4 at 8s seconds. ",
				weapon: 'Staff of the Scarlet Sands',
				ranking: 745549,
				outOf: 857387
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 454 },
					{ stat: 'FIGHT_PROP_ELEMENT_MASTERY', statValue: 221 }
				],
				name: "Dragon's Bane",
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Stardust_Awaken.png'
			}
		},
		{
			name: 'Sangonomiya Kokomi',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Kokomi.png',
			calculations: {
				short: 'HEAL+ER',
				name: 'Heal + ER balance formula',
				details:
					"(((E_DMG / 5500) + (E_HEAL / 5000) + (ER / 150)) * 5000) + SET_BONUS. +6500 ToTM, +6000 OHC, +6000 Deepwood, +5000 Noblesse, +4000 Maiden. Please keep in mind custom 'balance formulas' are completely feelscrafted unlike proper avg dmg formulas.",
				weapon: 'Everlasting Moonglow',
				ranking: 92691,
				outOf: 251673
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 401 },
					{ stat: 'FIGHT_PROP_HP_PERCENT', statValue: 35.2 }
				],
				name: 'Thrilling Tales of Dragon Slayers',
				icon: 'https://enka.network/ui/UI_EquipIcon_Catalyst_Pulpfic_Awaken.png'
			}
		},
		{
			name: 'Yelan',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Yelan.png',
			calculations: {
				short: 'C6 COMBO',
				name: 'C6 Combo with C4 Mona, Avg DMG',
				details:
					"Frontloaded average DMG for c6r5 Aqua Yelan Combo: 2x E + 2x BTB + 3x C2 + 5x C6 + 24x Q. Team: c0r5 fs Kazuha @ 1000 EM vv hydro swirl + Zhongli shield up + c4 Mona burst up. Yelan's A4 set to 10s, C4 2 stacks, 18% HP from A1. 4p Nymph's Dream is set to 3 stacks.",
				weapon: 'Aqua Simulacra',
				ranking: 16674,
				outOf: 439781
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 542 },
					{ stat: 'FIGHT_PROP_CRITICAL_HURT', statValue: 88.2 }
				],
				name: 'Aqua Simulacra',
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Kirin_Awaken.png'
			}
		},
		{
			name: 'Tighnari',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Tighnari.png',
			calculations: {
				short: 'SPREAD',
				name: 'Quicken/Spread Team Combo, Avg DMG',
				details:
					"Combo: E Q 3CA. C1 Tighnari + C0R1 Deepwood Nahida + electro flex + electro flex. Tighnari's A1 buffs only CAs. Enemy has pre-existing Quicken aura. Nahida's A1 buff is maxed and lasts entire combo. ",
				weapon: 'Skyward Harp',
				ranking: 14493,
				outOf: 45964
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 608 },
					{ stat: 'FIGHT_PROP_CRITICAL', statValue: 33.1 }
				],
				name: 'Polar Star',
				icon: 'https://enka.network/ui/UI_EquipIcon_Bow_Worldbane_Awaken.png'
			}
		},
		{
			name: 'Nahida',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Nahida.png',
			calculations: {
				short: 'OFF-FIELD',
				name: 'Off-field Tri-Karma Purification',
				details:
					'Off-field Tri-Karma Purification (non-spread) avg DMG. Example team: Nahida + Xingqiu + Kuki + non-dendro flex.',
				weapon: 'A Thousand Floating Dreams',
				ranking: 367122,
				outOf: 689350
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 454 },
					{ stat: 'FIGHT_PROP_ELEMENT_MASTERY', statValue: 221 }
				],
				name: 'Sacrificial Fragments',
				icon: 'https://enka.network/ui/UI_EquipIcon_Catalyst_Fossil_Awaken.png'
			}
		},
		{
			name: 'Furina',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Furina.png',
			calculations: {
				short: 'SKILL',
				name: 'Mademoiselle Crabaletta, Avg DMG',
				details:
					'Average DMG for Mademoiselle Crabaletta in a double hydro team. Number of characters who offered HP: 4. Fanfare stacks count: 200. Weapon stacks maxed when applicable. ',
				weapon: 'Fleuve Cendre Ferryman',
				ranking: 168529,
				outOf: 380391
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 510 },
					{ stat: 'FIGHT_PROP_CHARGE_EFFICIENCY', statValue: 45.9 }
				],
				name: 'Fleuve Cendre Ferryman',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Machination_Awaken.png'
			}
		},
		{
			name: 'Arlecchino',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Arlecchino.png',
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, Avg DMG',
				details:
					'C0 Arlecchino + C6 Chevreuse @ 40k HP + Electro Flex + C6R1 Aquila Bennett @ 4p Noblesse. Combo: E .. CA 5N3. Majority of potential buffs such as 4p Shimenawa / 4p HoD / 4p CW wear off before 5N3 starts due to long setup. Chevreuse stacks for CA 5N3: 0/1/1/1/2/2/2/3/3/3/... Arlecchino is below 50% HP. BoL value after using CA: 130%. 4p Whimsy stacks for CA 5N3: 1/1/2/3/... ',
				weapon: 'Staff of Homa',
				ranking: 40343,
				outOf: 338318
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 608 },
					{ stat: 'FIGHT_PROP_CRITICAL_HURT', statValue: 66.2 }
				],
				name: 'Staff of Homa',
				icon: 'https://enka.network/ui/UI_EquipIcon_Pole_Homa_Awaken.png'
			}
		},
		{
			name: 'Clorinde',
			icon: 'https://enka.network/ui/UI_AvatarIcon_Clorinde.png',
			calculations: {
				short: 'OVERLOAD',
				name: 'Overload Combo, DPS',
				details:
					"C0 Clorinde + C6 Fischl + 4p Noblesse C6 Chevreuse @ 40k HP + 4p Cinder C6 Thoma. Leaderboard ranks DPS based on 16s rotation using QEE 5N3E combo. Clorinde's A1 and A4 at full uptime for simplicity. Chevreuse's C6 stacks: QEE:0, N3E:1, N3E: 2, N3E:3, N3E:3, N3E: 3. 4pc Harmonic Whimsy stacks Q:1, EE:2, 5N3:3. Finale of the Deep's passive does not affect the burst. ",
				weapon: 'Finale of the Deep',
				ranking: 36211,
				outOf: 135727
			},
			weapon: {
				weaponStats: [
					{ stat: 'FIGHT_PROP_BASE_ATTACK', statValue: 565 },
					{ stat: 'FIGHT_PROP_ATTACK_PERCENT', statValue: 27.6 }
				],
				name: 'Finale of the Deep',
				icon: 'https://enka.network/ui/UI_EquipIcon_Sword_Vorpal_Awaken.png'
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
				setKey: 'GoldenTroupe',
				slotKey: 'flower',
				level: 20,
				rarity: 5,
				mainStatKey: 'hp',
				location: 'Faruzan',
				lock: false,
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
				setKey: 'TenacityOfTheMillelith',
				slotKey: 'sands',
				level: 20,
				rarity: 5,
				mainStatKey: 'enerRech_',
				location: 'Faruzan',
				lock: false,
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
				level: 90,
				ascension: 6,
				refinement: 5,
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
