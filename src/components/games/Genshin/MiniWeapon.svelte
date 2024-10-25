<script lang="ts">
	import type { GenshinCharacter, GenshinWeapon } from '$lib/genshin_agg';
	import { getCharacterImage, getWeaponImage, type CharacterCacheKey } from '$lib/genshin_cache';
	import type { CharacterResource } from './CharacterCard/CharacterCard.svelte';

	export let weapon: GenshinWeapon;

	const getResources = async () => ({
		icon: await getWeaponImage(weapon.key, weapon.refinement >= 5 ? 'awakenIcon' : 'baseIocn'),
		characterIcon: weapon.location
			? await getCharacterImage(weapon.location as CharacterCacheKey, 'characterIcon')
			: undefined
	});
</script>

{#await getResources() then resources}
	<div
		style:--rarity={`var(--${
			weapon.stars === 5 ? 'legendary' : weapon.stars === 4 ? 'epic' : 'rare'
		})`}
		class="text-white text-xs"
	>
		<div class="mini-weapon w-[72px] relative rounded-t-sm">
			<enhanced:img
				class="w-[72px]"
				src={resources.icon}
				sizes="(min-width: 256px) 256px"
				alt={`con 0 icon`}
			/>
			{#if resources.characterIcon}
				<div
					class="character flex justify-center items-center text-white rounded-tl-sm absolute bottom-0 right-0 text-xs rounded-br-sm"
				>
					<enhanced:img
						class="w-[72px]"
						src={resources.characterIcon}
						sizes="(min-width: 256px) 256px"
						alt={`con 0 icon`}
					/>
				</div>
			{/if}

			<!-- <div
				class="refinement flex justify-center items-center text-white rounded-tl-sm absolute bottom-0 right-0 text-xs rounded-br-sm"
			>
				R{weapon.refinement}
			</div>
			<div
				class="level flex justify-center items-center text-white rounded-tl-sm absolute bottom-0 left-0 text-xs rounded-bl-sm"
			>
				L{weapon.level}
			</div> -->
		</div>
		<div class="stats w-[72px] flex justify-between relative rounded-b-sm px-[1.5px]">
			<span>L{weapon.level}</span>
			<span>R{weapon.refinement}</span>
		</div>
	</div>
{/await}

<style lang="scss">
	.mini-weapon {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			z-index: -10;
			filter: brightness(70%);
			width: 100%;
			height: 100%;
			background: var(--rarity);
		}
		& picture {
			filter: drop-shadow(3px 3px 3px #222);
		}
	}

	.stats {
		background: rgba(0, 0, 0, 0.7);
	}

	.character {
		// background: rgba(0, 0, 0, 0.8);
		width: 21px;
		height: 21px;
	}
</style>
