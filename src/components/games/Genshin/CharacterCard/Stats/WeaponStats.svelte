<script lang="ts">
	import { elementToBuildStatKey, type GenshinCharacter } from '$lib/genshin_agg';
	import { getWeaponImage, type CharacterCacheKey, type WeaponCacheKey } from '$lib/genshin_cache';
	import type { CharacterResource } from '../CharacterCard.svelte';
	import Stat from './Stat.svelte';

	interface Props {
		character: GenshinCharacter;
		resources: CharacterResource['weapon'];
	}

	let { character, resources }: Props = $props();

	const weapon = character.weapon?.key as WeaponCacheKey;
	const stats = character.ranking?.stats;

	const getAscensionLevel = (ascension: number) =>
		20 + (ascension === 1 ? 20 : 10 + ascension * 10);

	const getElementalBonusPercent = () => {
		// TODO fix undefined to remove coalese
		const element = character.element ?? 'Anemo';
		const statKey = elementToBuildStatKey[element];
		if (stats) {
			const elemBonus = {
				title: `${element} DMG Bonus`,
				value: stats[statKey],
				icon: `icon-${statKey}`
			};
			const hasElem = elemBonus.value > 0;
			const physBonus = {
				title: `Physical DMG Bonus`,
				value: stats['physicalDamageBonus'],
				icon: 'icon-physicalDamageBonus'
			};
			const hasPhys = physBonus.value > 0;
			if (hasElem && hasPhys) {
				return [elemBonus, physBonus];
			} else if (!(hasElem || hasPhys)) {
				return [];
			} else {
				return hasElem ? [elemBonus] : [physBonus];
			}
		}
		return [];
	};

	const toPercent = (v: number) => `${(v * 100).toFixed(1)}%`;
</script>

<div style:--img-size={'calc(64px * var(--scale))'} class="w-1/3 h-full relative text-white z-10">
	<div class="flex mt-3">
		{#if resources}
			<div style:--weapon-rarity={character.ranking?.weaponStars} class="weapon-img">
				<enhanced:img
					src={resources.baseIcon}
					sizes="(min-width: 128px) 128px"
					alt={`con 0 icon`}
				/>
			</div>
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
		{/if}
	</div>
	<div class="stats grid grid-cols-2 mx-2 mt-2">
		<Stat name="Max HP" icon="icon-maxHp" value={stats?.maxHp.toFixed(0)} />
		<Stat name="ATK" icon="icon-atk" value={stats?.atk.toFixed(0)} />
		<Stat name="DEF" icon="icon-def" value={stats?.def.toFixed(0)} />
		<Stat name="Crit Rate" icon="icon-critRate" value={toPercent(stats?.critRate ?? 0)} />
		<Stat name="Crit DMG" icon="icon-critDamage" value={toPercent(stats?.critDamage ?? 0)} />
		<Stat
			name="Energy Recharge"
			icon="icon-energyRecharge"
			value={toPercent(stats?.energyRecharge ?? 0)}
		/>
		<Stat
			name="Elemental Mastery"
			icon="icon-elementalMastery"
			value={stats?.elementalMastery.toFixed(0)}
		/>
		<Stat name="Healing Bonus" icon="icon-healingBonus" value={stats?.healingBonus.toFixed(0)} />
		{#each getElementalBonusPercent() as { title, value, icon }}
			<Stat name={title} {icon} value={toPercent(value)} />
		{/each}
	</div>
</div>

<style>
	.weapon-img {
		width: var(--img-size);
		position: relative;

		&::after {
			content: '';
			--star-width: calc(9px * var(--scale));
			--width: calc(var(--star-width) * var(--weapon-rarity));
			background-image: url(/star.svg);
			display: block;
			position: absolute;
			top: var(--img-size);
			left: calc(32px * var(--scale));
			width: var(--width);
			height: var(--star-width);
			transform: translate(-50%, -50%);
			z-index: 10;
		}
	}

	.stats {
		height: calc(100% - calc(128px * var(--scale)));
	}
</style>
