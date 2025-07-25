<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { globalState } from '../../state/state.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		src: Promise<Picture>;
		class?: string;
		ariaLabel?: string;
		sizes: string;
		alt?: string;
		skeletonDimension?: string;
		preview?: Snippet;
	};

	let { src, ariaLabel, class: className, sizes, alt, skeletonDimension, preview }: Props = $props();

	const getColSpan = (w: number, h: number): { colSpan: number; rowSpan: number; ratio: number } => {
		const ratio = w / h;
		const spanRatio = ((ratio / (16 / 9)));
		const span = (((spanRatio - 1.0) / 0.25) + 1).toFixed(0)
		if (spanRatio.toFixed(2) !== '1.00') {
			console.log(`spanRatio: ${spanRatio} ratio: ${ratio.toFixed(2)}`);
		}
		// return '1'
		if (ratio > 1.78) {
			return {
				colSpan: 2,
				rowSpan: 1,
				ratio: 3.676
			}
		} else if (Math.abs(1.0 - ratio) < 0.01) {
			return {
				colSpan: 2,
				rowSpan: 2,
				ratio: 1.69
			}
		}
		return {
			colSpan: 1,
			rowSpan: 1,
			ratio: 1.778
		}
	};
</script>

{#await src}
	<div class={`skeleton ${skeletonDimension ?? 'w-full h-full'}`}>
		<div class="flex items-center justify-center w-full h-full rounded-sm">
			<svg
				class="max-w-10 w-1/2 max-h-10 h-1/2 text-gray-600"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 18"
			>
				<path
					d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
				/>
			</svg>
		</div>
	</div>
{:then image}
    {#if !image}
    {@debug image, src}
    {/if}
	{#if preview}
		{@const { colSpan, rowSpan, ratio } = getColSpan(image.img.w, image.img.h)}
		<button onclick={() => (globalState.imagePreview = preview)} aria-label={ariaLabel} style={`grid-column: span ${colSpan}; grid-row: span ${rowSpan}; aspect-ratio: ${ratio}`}>
			<enhanced:img src={image} aria-labelledby={ariaLabel} {sizes} {alt} class={`${className} object-cover`} />
		</button>
	{:else}
   		<enhanced:img src={image} aria-labelledby={ariaLabel} {sizes} {alt} class={className} />
	{/if}
{/await}

<style>
	@keyframes loading {
		0% {
			background: rgba(0, 0, 0, 0.3);
		}
		50% {
			background: rgba(0, 0, 0, 0.5);
		}
		100% {
			background: rgba(0, 0, 0, 0.3);
		}
	}

	.skeleton {
		animation: loading 2s infinite;
	}

	button {
		transition: 0.2s;
		&:hover {
			transform: scale(1.05);
		}
		&:active {
			transform: scale(0.99);
		}
	}
</style>
