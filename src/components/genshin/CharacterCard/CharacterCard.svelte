<script lang="ts">
	import { type GenshinCharacter } from '$lib/genshin_agg';
	import { elementBGs } from '$lib/genshin_cache';
	import Character from './Character.svelte';
	import WeaponStats from './WeaponStats.svelte';

	export let character: GenshinCharacter;
</script>

<div
	style:--element={`var(--${character.ranking?.element ?? 'Pyro'})`}
	class="character-card w-screen overflow-y-scroll"
>
	<div class="flex relative w-[1234px] h-[390px]">
		<Character {character} />
		<WeaponStats {character} />
		<div class="bg absolute top-0 left-0 z-0 gradient">
			<enhanced:img
				class="h-[390px]"
				src={elementBGs[character.ranking?.element ?? 'Hydro']}
				sizes="(min-width: 1280px) 1280px"
				alt={`Elemental background`}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.bg::before {
		content: '';
		position: absolute;
		z-index: 20;
		display: block;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25));
	}

	.character-card div {
		border: 1px solid var(--element);
	}
</style>
