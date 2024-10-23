<script context="module" lang="ts">
	type GetResources = () => Promise<{
		character: {
			con_0: Picture;
			con_1: Picture;
			con_2: Picture;
			con_3: Picture;
			con_4: Picture;
			con_5: Picture;
			normal: Picture;
			skill: Picture;
			burst: Picture;
			splashImage: Picture;
		};
		weapon?: {
			baseIcon: Picture;
		};
		artifact: {
			flower: Picture;
			plume: Picture;
			sands: Picture;
			goblet: Picture;
			circlet: Picture;
		};
	}>;
	export type CharacterResource = Awaited<ReturnType<GetResources>>;
</script>

<script lang="ts">
	import { type GenshinCharacter } from '$lib/genshin_agg';
	import {
		elementBGs,
		getArtifactImage,
		getCharacterImage,
		getWeaponImage,
		type ArtifactCacheKey
	} from '$lib/genshin_cache';
	import type { Picture } from 'vite-imagetools';
	import Artifacts from './Artifacts.svelte';
	import Character from './Character.svelte';
	import WeaponStats from './WeaponStats.svelte';
	import type { SlotKey } from 'enka-network-api';

	export let character: GenshinCharacter;
	const artifacts = character.artifacts ?? [];
	const artifactBySlot = artifacts.reduce(
		(prev, curr) => ({
			...prev,
			[curr.slotKey]: curr.setKey
		}),
		{} as Record<SlotKey, ArtifactCacheKey>
	);

	const getResources: GetResources = async () => ({
		character: {
			con_0: await getCharacterImage(character.key, 'con_0'),
			con_1: await getCharacterImage(character.key, 'con_1'),
			con_2: await getCharacterImage(character.key, 'con_2'),
			con_3: await getCharacterImage(character.key, 'con_3'),
			con_4: await getCharacterImage(character.key, 'con_4'),
			con_5: await getCharacterImage(character.key, 'con_5'),
			normal: await getCharacterImage(character.key, 'normal'),
			skill: await getCharacterImage(character.key, 'skill'),
			burst: await getCharacterImage(character.key, 'burst'),
			splashImage: await getCharacterImage(character.key, 'splashImage')
		},
		weapon: character.weapon
			? {
					baseIcon: await getWeaponImage(character.weapon.key, 'baseIocn')
			  }
			: undefined,
		artifact: {
			flower: await getArtifactImage(artifactBySlot['flower'], 'flower'),
			plume: await getArtifactImage(artifactBySlot['plume'], 'plume'),
			sands: await getArtifactImage(artifactBySlot['sands'], 'sands'),
			goblet: await getArtifactImage(artifactBySlot['goblet'], 'goblet'),
			circlet: await getArtifactImage(artifactBySlot['circlet'], 'circlet')
		}
	});
</script>

<div
	style:--element={`var(--${character.ranking?.element ?? 'Pyro'})`}
	class="character-card flex justify-center"
>
	<div style:--width={'975px'} style:--height={'406px'} style:--scale={'1'} class="flex relative">
		{#await getResources() then resources}
			<Character {character} resources={resources.character} />
			<WeaponStats {character} resources={resources.weapon} />
			<Artifacts {character} resources={resources.artifact} />
		{/await}
		<div class="bg absolute top-0 left-0 z-0 gradient">
			<enhanced:img
				src={elementBGs[character.ranking?.element ?? 'Hydro']}
				sizes="(min-width: 1280px) 1280px"
				alt={`Elemental background`}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	// @media (min-width: 1700px) {
	// 	.character-card > div {
	// 		width: calc(975px * 1.25);
	// 		height: calc(406px * 1.25);
	// 		// transform: scale(1.25);
	// 	}
	// }

	// @media (min-width: 1920px) {
	// 	.character-card {
	// 		transform: scale(0.95);
	// 	}
	// }

	// @media (min-width: 2070px) {
	// 	.character-card {
	// 		transform: scale(1);
	// 	}
	// }

	.bg img {
		height: calc(var(--scale) * var(--height));
		width: 100%;
	}

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
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
		width: calc(var(--scale) * var(--width));
		height: calc(var(--scale) * var(--height));
		font-size: calc(16px * var(--scale));
		// line-height: 1.2;
	}
</style>
