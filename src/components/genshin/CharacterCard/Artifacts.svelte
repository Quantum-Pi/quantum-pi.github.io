<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import { getArtifactImage, type ArtifactCacheKey } from '$lib/genshin_cache';
	import type { CharacterResource } from './CharacterCard.svelte';

	export let character: GenshinCharacter;
	export let resources: CharacterResource['artifact'];

	const artifacts = character.artifacts ?? [];
	// const key = artifact.setKey as ArtifactCacheKey;
	// const img = getArtifactImage(key, artifact.slotKey);
</script>

<div class="w-1/3 h-full relative z-10">
	{#each artifacts as artifact}
		<!-- {@const icon = await getArtifactImage(artifact.setKey, artifact.slotKey)} -->
		<div class="flex text-white">
			<!-- TODO: may not be defined -->
			<div class="relative">
				<enhanced:img
					class="w-20 h-20"
					src={resources[artifact.slotKey]}
					sizes="(min-width: 512px) 512px"
					alt={`Elemental background`}
				/>
				<div class="absolute z-10">
					<i class={`icon-${artifact.mainStatKey} align-middle text-sm`} style="">
						<span class="path1" /><span class="path2" />
					</i>
					<span>{artifact.mainStatKey}</span>
					<span>+{artifact.level}</span>
				</div>
			</div>
			<div>
				{artifact.substats[0].value}
			</div>
		</div>
	{/each}
</div>
