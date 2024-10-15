<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import {
		getCharacterImage,
		getWeaponImage,
		type CharacterCacheKey,
		type WeaponCacheKey
	} from '$lib/genshin_cache';
	import type { StatKey } from 'enka-network-api';
	import Character from './Character.svelte';

	export let character: GenshinCharacter;

	const name = character.key as CharacterCacheKey;
	const weapon = character.weapon?.key as WeaponCacheKey;
	getCharacterImage(name, 'burst');
	console.log(character);

	const getAscensionLevel = (ascension: number) =>
		20 + (ascension === 1 ? 20 : 10 + ascension * 10);

	const statMap: Record<StatKey, number> = {
		atk: 0,
		atk_: 0,
		def: 0,
		def_: 0,
		hp: 0,
		hp_: 0,
		critDMG_: 0,
		critRate_: 0,
		enerRech_: 0,
		heal_: 0,
		eleMas: 0,
		anemo_dmg_: 0,
		cryo_dmg_: 0,
		dendro_dmg_: 0,
		electro_dmg_: 0,
		geo_dmg_: 0,
		hydro_dmg_: 0,
		physical_dmg_: 0,
		pyro_dmg_: 0
	};
</script>

<div class="w-screen overflow-y-scroll">
	<div class="flex w-[1234px] h-[390px] border border-blue-500">
		<!-- <div class="flex"> -->
		<Character {character} />
		<div class="w-1/3 h-full relative text-white">
			<div class="flex">
				<enhanced:img
					class={`w-16`}
					src={getWeaponImage(weapon, 'baseIocn')}
					sizes="(min-width: 128px) 128px"
					alt={`con 0 icon`}
				/>
				<div class="flex flex-col justify-center ml-2">
					<div>
						{weapon.split(/(?=[A-Z])/).join(' ')}
					</div>
					<div>
						<span>
							R{character.weapon?.refinement}
						</span>
						&nbsp;
						<span>
							Lv. {character.weapon?.level}<span class="text-gray-500"
								>/{getAscensionLevel(character.weapon?.ascension ?? 0)}</span
							>
						</span>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-2">
				<span>Max HP</span>
				<span>10000</span>
				<span>ATK</span>
				<span>10000</span>
				<span>DEF</span>
				<span>10000</span>
				<span>Crit Rate</span>
				<span>70%</span>
				<span>Crit DMG</span>
				<span>250%</span>
				<span>Energy Recharge</span>
				<span>140%</span>
				<span>Hydro DMG Bonus</span>
				<span>46%</span>
			</div>
		</div>
		<!-- </div> -->
	</div>
</div>

<style>
</style>
