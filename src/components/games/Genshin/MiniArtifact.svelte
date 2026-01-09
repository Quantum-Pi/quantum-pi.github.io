<script lang="ts">
	import type { GenshinArtifact } from '$lib/genshin_agg';
	import { getArtifactImage, getCharacterImage, type CharacterCacheKey } from '$lib/genshin_cache';
	import { getStatRollRarity } from '$lib/genshin_helper';
	import StatIcon from './StatIcon.svelte';

	interface Props {
		artifact: GenshinArtifact;
	}

	let { artifact }: Props = $props();

	const getResources = async () => ({
		icon: await getArtifactImage(artifact.setKey, artifact.slotKey),
		characterIcon: artifact.location
			? await getCharacterImage(artifact.location, 'characterIcon')
			: undefined
	});

	const rarity =
		artifact.cv >= 49
			? 'mythic'
			: artifact.cv >= 40
				? 'legendary'
				: artifact.cv >= 30
					? 'epic'
					: '';
</script>

{#await getResources() then resources}
	<div style:--rarity={`var(--${rarity})`} class="text-white text-xs">
		<div class="mini-artifact w-[100px] relative rounded-t-xs">
			<enhanced:img
				class="w-[100px]"
				src={resources.icon}
				sizes="(min-width: 256px) 256px"
				alt={`con 0 icon`}
				loading="lazy"
				decoding="async"
			/>
			<div
				class="cv flex justify-center items-center text-white rounded-tl-xs absolute bottom-0 right-0 text-xs"
			>
				CV {artifact.cv}
			</div>
			{#if resources.characterIcon}
				<div
					class="character flex justify-center items-center text-white rounded-tl-xs absolute bottom-0 left-0 text-xs rounded-br-xs"
				>
					<enhanced:img
						class="w-[72px]"
						src={resources.characterIcon}
						sizes="(min-width: 256px) 256px"
						alt={`con 0 icon`}
						loading="lazy"
						decoding="async"
					/>
				</div>
			{/if}
		</div>
		<div class="stats w-[100px] grid grid-cols-2 relative rounded-b-xs px-[1.5px]">
			{#each artifact.substats as ss}
				<div class="flex justify-between items-center">
					<StatIcon color={getStatRollRarity(ss.value, ss.key)} stat={ss.key} />
					<div class="mr-1">
						{ss.value}{ss.key.endsWith('_') ? '%' : ''}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/await}

<style>
	.mini-artifact {
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
			/* background: var(); */
			background: #7c7c7cb0;
			border-top-left-radius: 0.125rem;
			border-top-right-radius: 0.125rem;
			border: 3px solid var(--rarity);
			border-bottom: none;
		}

		& :global(picture) {
			filter: drop-shadow(3px 3px 3px #222);
		}
	}

	.stats {
		background: rgba(0, 0, 0, 0.7);
		font-size: 11px;
	}

	.cv {
		background: rgba(0, 0, 0, 0.8);
		/* width: 28px; */
		color: var(--rarity);
		height: 21px;
		padding: 0 4px;
	}

	.character {
		/* background: rgba(0, 0, 0, 0.8); */
		width: 30px;
		height: 30px;
	}
</style>
