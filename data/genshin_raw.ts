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
	element: string;
	stats: Record<string, number>;
	calculations: {
		short: string;
		name: string;
		details: string;
		weapon: string;
		ranking: number;
		outOf: number;
	};
	weapon: {
		weaponStats: Record<StatKey, number>;
		name: string;
		icon: string;
	};
	character: Record<StatKey, number>;
}

export type AkashaSystemStats = Awaited<ReturnType<Akasha['getCalculationsForUser']>>['data'];
export interface GenshinProfile {
	akasha: MiniAkashaSystemStat[];
	good: IGOOD;
}

export const genshinProfile: GenshinProfile = {
	akasha: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
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
				mainStatKey: 'critDMG_',
				location: 'Yelan',
				lock: false,
				substats: [
					{ key: 'enerRech_', value: 9.7 },
					{ key: 'hp', value: 448 },
					{ key: 'atk_', value: 15.2 },
					{ key: 'critRate_', value: 7 }
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
