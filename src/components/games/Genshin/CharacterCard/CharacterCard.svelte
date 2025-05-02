<script module lang="ts">
	export type Resources = {
		character: {
			con_0: Promise<Picture>;
			con_1: Promise<Picture>;
			con_2: Promise<Picture>;
			con_3: Promise<Picture>;
			con_4: Promise<Picture>;
			con_5: Promise<Picture>;
			normal: Promise<Picture>;
			skill: Promise<Picture>;
			burst: Promise<Picture>;
			splashImage: Promise<Picture>;
		};
		weapon?: {
			baseIcon: Promise<Picture>;
		};
		artifact: {
			flower: Promise<Picture>;
			plume: Promise<Picture>;
			sands: Promise<Picture>;
			goblet: Promise<Picture>;
			circlet: Promise<Picture>;
		};
	};
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
	import Character from './Character/Character.svelte';
	import WeaponStats from './Stats/WeaponStats.svelte';
	import type { SlotKey } from 'enka-network-api';

	interface Props {
		character: GenshinCharacter;
	}

	let { character }: Props = $props();
	const artifacts = character.artifacts ?? [];
	const artifactBySlot = artifacts.reduce(
		(prev, curr) => ({
			...prev,
			[curr.slotKey]: curr.setKey
		}),
		{} as Record<SlotKey, ArtifactCacheKey>
	);

	const resources: Resources = {
		character: {
			con_0: getCharacterImage(character.key, 'con_0'),
			con_1: getCharacterImage(character.key, 'con_1'),
			con_2: getCharacterImage(character.key, 'con_2'),
			con_3: getCharacterImage(character.key, 'con_3'),
			con_4: getCharacterImage(character.key, 'con_4'),
			con_5: getCharacterImage(character.key, 'con_5'),
			normal: getCharacterImage(character.key, 'normal'),
			skill: getCharacterImage(character.key, 'skill'),
			burst: getCharacterImage(character.key, 'burst'),
			splashImage: getCharacterImage(character.key, 'splashImage')
		},
		weapon: character.weapon
			? {
					baseIcon: getWeaponImage(character.weapon.key, 'baseIocn')
				}
			: undefined,
		artifact: {
			flower: getArtifactImage(artifactBySlot['flower'], 'flower'),
			plume: getArtifactImage(artifactBySlot['plume'], 'plume'),
			sands: getArtifactImage(artifactBySlot['sands'], 'sands'),
			goblet: getArtifactImage(artifactBySlot['goblet'], 'goblet'),
			circlet: getArtifactImage(artifactBySlot['circlet'], 'circlet')
		}
	};
</script>

<div class="character-card-container">

	<div
		style:--element={`var(--${character.element ?? 'Pyro'})`}
		class="character-card flex justify-start md:justify-center overflow-x-auto overflow-y-hidden"
	>
		<div style:--width={'975px'} style:--height={'406px'} class="flex relative">
			<Character {character} resources={resources.character} />
			<WeaponStats {character} resources={resources.weapon} />
			<Artifacts {character} resources={resources.artifact} />
			<div class="bg absolute top-0 left-0 gradient">
				<enhanced:img
					class={'card-bg'}
					src={elementBGs[character.element ?? 'Hydro']}
					sizes="(min-width: 1280px) 1280px"
					alt={`Elemental background`}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	@media (min-width: 0px) {
		/* sm */
		.character-card > div {
			--scale: 0.8;
		}
	}

	@media (min-width: 640px) {
		/* sm */
		.character-card > div {
			--scale: 0.9;
		}
	}

	@media (min-width: 768px) {
		/* md */
		.character-card > div {
			--scale: 0.785;
		}
	}

	@media (min-width: 1024px) {
		/* lg */
		.character-card > div {
			--scale: 1;
		}
	}

	@media (min-width: 1280px) {
		/* xl */
		.character-card > div {
			--scale: 1;
		}
	}

	@media (min-width: 1536px) {
		/* 2xl */
		.character-card > div {
			--scale: 1;
		}
	}

	.bg {
		z-index: -1;

		& .card-bg {
			height: calc(var(--scale) * var(--height));
			width: 100%;
		}
		
		&::before {
		content: '';
		position: absolute;
		z-index: 20;
		display: block;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25));
	}
	}

	.character-card > div {
		border: 1px solid var(--element);
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
		min-width: calc(var(--scale) * var(--width));
		height: calc(var(--scale) * var(--height));
		font-size: calc(16px * var(--scale));
	}
</style>
