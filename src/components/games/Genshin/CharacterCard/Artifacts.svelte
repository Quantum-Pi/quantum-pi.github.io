<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import { getArtifactImage, type ArtifactCacheKey } from '$lib/genshin_cache';
	import { mainStatToValue } from '$lib/genshin_data';
	import SkeletonImage from '../../../image/SkeletonImage.svelte';
	import { getStatRollRarity } from '$lib/genshin_helper';
	import type { Resources } from './CharacterCard.svelte';

	interface Props {
		character: GenshinCharacter;
		resources: Resources['artifact'];
	}

	let { character, resources }: Props = $props();

	const artifacts = character.artifacts ?? [];
</script>

<div
	style:--artifact-height={'calc(70px * var(--scale))'}
	class="genshin-artifact w-1/3 h-full flex flex-col gap-y-1 md:gap-y-2 justify-center relative z-10"
>
	{#each artifacts as artifact}
		<div class="artifact flex text-white ounded-sm">
			<!-- TODO: may not be defined -->
			<div class="artifact-ms relative overflow-hidden">
				<SkeletonImage
					class="artifact-img h-full w-[70px] scale-[1.75]"
					src={resources[artifact.slotKey]}
					sizes="(min-width: 512px) 512px"
					alt={`Elemental background`}
				/>
				<div
					class="artifact-ms__info absolute z-10 flex flex-col gap-y-[2px] justify-center items-end right-0 top-0 h-full"
				>
					<i class={`icon-${artifact.mainStatKey} text-end`} style="">
						<span class="path1"></span><span class="path2"></span>
					</i>
					<div>
						{mainStatToValue[artifact.mainStatKey][artifact.level]}{artifact.mainStatKey.endsWith(
							'_'
						)
							? '%'
							: ''}
					</div>
					<div class="flex justify-end items-center">
						<div style:--rarity={artifact.rarity} class="rarity mr-1"></div>
						<div class="level-bubble text-end w-fit px-[2px] rounded-xs">+{artifact.level}</div>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-2 grid-rows-2 w-full ml-3">
				{#each artifact.substats as substat}
					<div class="flex items-center">
						<i class={`icon-${substat.key} text-end text-sm mr-2`}>
							<span class="path1"></span><span class="path2"></span>
						</i>
						<div
							class="w-1/2"
							style={`border-bottom: 1px solid ${getStatRollRarity(substat.value, substat.key)}`}
						>
							+{substat.value}{substat.key.endsWith('_') ? '%' : ''}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.rarity {
		--star-width: calc(7px * var(--scale));
		--width: calc(var(--star-width) * var(--rarity));
		background-image: url(/star.svg);
		width: var(--width);
		height: var(--star-width);
	}
	.artifact {
		background: rgba(0, 0, 0, 0.5);
		width: calc(293px * var(--scale));
		height: var(--artifact-height);
	}

	.artifact-ms {
		min-width: var(--artifact-height);
		height: var(--artifact-height);
	}

	.level-bubble {
		background: rgba(0, 0, 0, 0.6);
		font-size: calc(10px * calc(var(--scale) / 1.25));
		line-height: calc(14px * calc(var(--scale) / 1.25));
	}

	.genshin-artifact :global(.artifact-img) {
		mask-image: linear-gradient(90deg, white 0%, white 15%, transparent 100%);
		/* transform: scale(1.75) translateX(-10%); */
		width: var(--artifact-height);
		height: var(--artifact-height);
	}
</style>
