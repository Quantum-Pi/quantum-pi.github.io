<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import { getCharacterImage } from '$lib/genshin_cache';

	interface Props {
		character: GenshinCharacter;
	}

	let { character }: Props = $props();

	const getResources = async () => ({
		icon: await getCharacterImage(character.key, 'characterIcon')
	});
</script>

{#await getResources() then resources}
	<div style:--element={`var(--${character?.element ?? 'Pyro'}_Dark)`} class="text-white text-xs">
		<div class="mini-character w-[72px] relative rounded-t-sm">
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
		<div class="stats w-[72px] flex justify-between relative rounded-b-sm px-[1.5px]">
			<span>L{character.level}</span>
			<span>{character.talent.auto}/{character.talent.skill}/{character.talent.burst}</span>
		</div>
	</div>
{/await}

<style>
	.mini-character {
		background: var(--element);

		& picture {
			filter: drop-shadow(3px 3px 3px #222);
		}
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
		border-bottom-left-radius: 0.125rem;
		border-bottom-right-radius: 0.125rem;
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
