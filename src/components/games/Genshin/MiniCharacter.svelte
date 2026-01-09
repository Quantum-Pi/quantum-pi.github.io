<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import { getCharacterImage } from '$lib/genshin_cache';
	import { globalState } from '../../../state/state.svelte';
	import CharacterCard from './CharacterCard/CharacterCard.svelte';

	interface Props {
		character: GenshinCharacter;
	}

	let { character }: Props = $props();

	const hasStats = character.ranking?.stats !== undefined;

	const getResources = async () => ({
		icon: await getCharacterImage(character.key, 'characterIcon')
	});

	const openCharacter = () => {
		if (hasStats) {
			globalState.imagePreview = preview;
		}
	};
</script>

{#snippet preview()}
	<CharacterCard {character} />
{/snippet}

{#await getResources() then resources}
	<svelte:element
		this={hasStats ? 'button' : 'div'}
		style:--element={`var(--${character?.element ?? 'Pyro'}_Dark)`}
		class={`text-white ${hasStats ? 'hoverable' : ''} text-xs`}
		onclick={openCharacter}
		role="link"
		tabindex="-1"
	>
		<div class="mini-character w-[76px] relative rounded-t-xs">
			<enhanced:img
				class="w-[76px]"
				src={resources.icon}
				sizes="(min-width: 256px) 256px"
				alt={`con 0 icon`}
				loading="lazy"
				decoding="async"
			/>
			<div
				class={`${character.constellation == 6 ? 'text-amber-300' : 'text-white'} constellation flex justify-center items-center rounded-tl-xs absolute bottom-0 right-0 text-xs`}
			>
				C{character.constellation}
			</div>
		</div>
		<div class="stats w-[76px] flex justify-between relative rounded-b-xs px-[1.5px]">
			<span class={character.level == 90 ? 'text-amber-300' : ''}>L{character.level}</span>
			<span>
				<span class={character.talent.auto == 10 ? 'text-amber-300' : ''}
					>{character.talent.auto}</span
				>/<span class={character.talent.skill == 10 ? 'text-amber-300' : ''}
					>{character.talent.skill}</span
				>/<span class={character.talent.burst == 10 ? 'text-amber-300' : ''}
					>{character.talent.burst}</span
				>
			</span>
		</div>
	</svelte:element>
{/await}

<style>
	.mini-character {
		background: var(--element);

		& :global(picture) {
			filter: drop-shadow(3px 3px 3px #222);
		}
	}

	.hoverable {
		transition: 0.2s all;

		&:hover {
			transform: scale(1.05);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	.stats {
		background: rgba(0, 0, 0, 0.7);

		&::before {
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
	}

	.constellation {
		background: rgba(0, 0, 0, 0.8);
		width: 21px;
		height: 21px;
	}
</style>
