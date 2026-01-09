<script lang="ts">
	import { onMount } from 'svelte';
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import type { Component } from 'svelte';

	interface Props {
		character: GenshinCharacter;
		width?: number;
	}

	let { character, width = 975 }: Props = $props();
	let containerElement: HTMLDivElement;
	let isVisible = $state(false);
	let CharacterCard: Component<Props> | null = $state(null);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isVisible) {
						isVisible = true;
						// Dynamically import CharacterCard only when it becomes visible
						import('./CharacterCard.svelte').then((module) => {
							CharacterCard = module.default;
						});
						observer.disconnect();
					}
				});
			},
			{
				rootMargin: '400px' // Start loading 400px before it comes into view
			}
		);

		observer.observe(containerElement);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={containerElement} class="w-full">
	{#if CharacterCard}
		{@const Component = CharacterCard}
		<Component {character} {width} />
	{:else}
		<div class="w-full h-101.5 flex items-center justify-center bg-gray-800 rounded-lg">
			<div class="text-gray-400">Loading character card...</div>
		</div>
	{/if}
</div>
