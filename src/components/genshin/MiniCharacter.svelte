<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import { getCharacterImage } from '$lib/genshin_cache';
	import type { CharacterResource } from './CharacterCard/CharacterCard.svelte';

	export let character: GenshinCharacter;

	const getResources = async () => ({
		icon: await getCharacterImage(character.key, 'characterIcon')
	});
</script>

{#await getResources() then resources}
	<div style:--element={`var(--${character?.element ?? 'Pyro'}_Dark)`} class="text-white text-xs">
		<div class="mini-character w-[72px] relative">
			<enhanced:img
				class="w-[72px]"
				src={resources.icon}
				sizes="(min-width: 256px) 256px"
				alt={`con 0 icon`}
			/>
			<div
				class="constellation flex justify-center items-center text-white rounded-tl-sm absolute bottom-0 right-0 text-xs"
			>
				C{character.constellation}
			</div>
			<!-- <div
				class="level flex justify-center items-center text-white rounded-tr-sm absolute bottom-0 left-0 text-xs"
			>
				L{character.level}
			</div> -->
		</div>
		<div class="stats w-[72px] flex justify-between relative">
			<span>L{character.level}</span>
			<span>{character.talent.auto}/{character.talent.skill}/{character.talent.burst}</span>
		</div>
	</div>
{/await}

<style lang="scss">
	.mini-character {
		background: var(--element);
	}

	.stats {
		background: rgba(0, 0, 0, 0.7);
	}

	.stats::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background: var(--element);
		width: 100%;
		height: 100%;
		z-index: -10;
	}

	.constellation {
		background: rgba(0, 0, 0, 0.8);
		width: 21px;
		height: 21px;
	}
	.level {
		background: rgba(0, 0, 0, 0.8);
		width: 21px;
		height: 21px;
	}
</style>
