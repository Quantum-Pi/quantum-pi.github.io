import type { StatKey } from "enka-network-api";
// TODO: 5 star only
const statValues: Record<StatKey, number[]> = {
    "hp": [209.13, 239.00, 268.88, 298.75],
    "atk": [13.62, 15.56, 17.51, 19.45],
    "def": [16.20, 18.52, 20.83, 23.15],
    "hp_": [4.08, 4.66, 5.25, 5.83],
    "atk_": [4.08, 4.66, 5.25, 5.83],
    "def_": [5.10, 5.83, 6.56, 7.29],
    "eleMas": [16.32, 18.65, 20.98, 23.31],
    "enerRech_": [4.53, 5.18, 5.83, 6.48],
    "critRate_": [2.72, 3.11, 3.50, 3.89],
    "critDMG_": [5.44, 6.22, 6.99, 7.77],
    anemo_dmg_: [0, 0, 0, 0],
    geo_dmg_: [0, 0, 0, 0],
    electro_dmg_: [0, 0, 0, 0],
    hydro_dmg_: [0, 0, 0, 0],
    pyro_dmg_: [0, 0, 0, 0],
    cryo_dmg_: [0, 0, 0, 0],
    physical_dmg_: [0, 0, 0, 0],
    dendro_dmg_: [0, 0, 0, 0],
    heal_: [0, 0, 0, 0],
};

export function getStatRolls(value: number, stat: StatKey): number {
    const maxRoll = Math.max(...statValues[stat]);

    for (let i = 1; i <= 6; i++) {
        if (maxRoll * i >= value) {
            return i;
        }
    }
    return 6;
}

export function getStatRollRarity(value: number, stat: StatKey) {
    const styleVars = ['#fff', '#17c900', '#0078f0', '#a335ee', '#ff8000', '#00e1ff'];
    return styleVars[getStatRolls(value, stat) - 1] ?? '--common';
}