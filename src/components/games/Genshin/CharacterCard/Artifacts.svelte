<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import { getArtifactImage, type ArtifactCacheKey } from '$lib/genshin_cache';
	import { mainStatToValue } from '$lib/genshin_data';
	import type { CharacterResource } from './CharacterCard.svelte';

	export let character: GenshinCharacter;
	export let resources: CharacterResource['artifact'];

	const artifacts = character.artifacts ?? [];
</script>

<div
	style:--artifact-height={'calc(70px * var(--scale))'}
	class="w-1/3 h-full flex flex-col gap-y-1 md:gap-y-2 justify-center relative z-10"
>
	{#each artifacts as artifact}
		<div class="artifact flex text-white ounded-sm">
			<!-- TODO: may not be defined -->
			<div class="artifact-ms relative overflow-hidden">
				<enhanced:img
					class="artifact-img h-full w-[70px] scale-[1.75]"
					src={resources[artifact.slotKey]}
					sizes="(min-width: 512px) 512px"
					alt={`Elemental background`}
				/>
				<div
					class="artifact-ms__info absolute z-10 flex flex-col gap-y-[2px] justify-center items-end right-0 top-0 h-full"
				>
					<i class={`icon-${artifact.mainStatKey} text-end`} style="">
						<span class="path1" /><span class="path2" />
					</i>
					<div>
						{mainStatToValue[artifact.mainStatKey][artifact.level]}{artifact.mainStatKey.endsWith(
							'_'
						)
							? '%'
							: ''}
					</div>
					<div class="flex justify-end items-center">
						<div style:--rarity={artifact.rarity} class="rarity mr-1" />
						<div class="level-bubble text-end w-fit px-[2px] rounded-sm">+{artifact.level}</div>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-2 grid-rows-2 w-full ml-3">
				{#each artifact.substats as substat}
					<div class="flex items-center">
						<i class={`icon-${substat.key} text-end text-sm mr-2`} style="">
							<span class="path1" /><span class="path2" />
						</i>
						<div>
							+{substat.value}{substat.key.endsWith('_') ? '%' : ''}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
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

		&__info {
			row-gap: calc(16px * calc(var(--scale) - 1));

			& i {
				font-size: calc(14px * calc(var(--scale) / 1.15));
				line-height: calc(20px * calc(var(--scale) / 2));
			}
		}
	}

	.level-bubble {
		background: rgba(0, 0, 0, 0.6);
		font-size: calc(10px * calc(var(--scale) / 1.25));
		line-height: calc(14px * calc(var(--scale) / 1.25));
	}

	.artifact-img {
		mask-image: linear-gradient(90deg, white 0%, white 15%, transparent 100%);
		transform: scale(1.75) translateX(-10%);
		width: var(--artifact-height);
		height: var(--artifact-height);
	}
</style>
