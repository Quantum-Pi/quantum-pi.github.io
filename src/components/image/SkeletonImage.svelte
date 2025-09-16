<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { globalState } from '../../state/state.svelte';
	import type { Snippet } from 'svelte';
	import { breakpoint } from '$lib/stores/breakpoint';

	type Props = {
		src: Promise<Picture>;
		aspectRatio?: number;
		class?: string;
		ariaLabel?: string;
		sizes: string;
		alt?: string;
		skeletonDimension?: string;
		preview?: Snippet;
	};

	let { src, aspectRatio = 16/9, ariaLabel, class: className, sizes, alt, skeletonDimension, preview }: Props = $props();

	const getRatio = (span: number): number => {
		const gap = span - 1;
		// gapRatio is % of column width the gap occupies
		const gapRatio = 0.09043; // gap/column ratio you measured
		// const gapRatio = 0.07156; // gap/column ratio you measured
		// const gapRatio = 0.0678; // gap/column ratio you measured
		return (span + gap * gapRatio) * (16 / 9);
	};

	const getColSpan = (ratio: number, currentBreakpoint: string): { colSpan: number; rowSpan: number; ratio: number } => {
		const spanRatio = ((ratio / (16 / 9)));
		const span = (((spanRatio - 1.0) / 0.25) + 1).toFixed(0);
		const maxCols = currentBreakpoint === 'xl' ? 4 : currentBreakpoint === 'md' ? 3 : 2;
		// console.log(this);
		/**
		 * 4 images, 3 gaps between them
		 * 4-column span aspect ratio = (4 × column_width + 3 × gap) / column_height
		 * Width = 4 × column_width + 3 × (0.0678 × column_width)
		 *	     = 4 × column_width + 0.2034 × column_width
		 *		 = 4.2034 × column_width
		 * Height = column_width × 9/16 (same as 1-column to maintain consistent row height)
		 * Aspect ratio = 4.2034 / (9/16) = 4.2034 × 16/9 = 7.474
		 * (4 + 3 × 0.0678) × 16/9 = 4.2034 × 1.778 = 7.474
		*/
		if (ratio > 4) {
			const colSpan = Math.min(maxCols, 4);
			return {
				colSpan,
				rowSpan: 1,
				ratio: getRatio(colSpan)
			}
		}
		if (ratio > 1.78) {
			const colSpan = Math.min(maxCols, 2);
			return {
				colSpan,
				rowSpan: 1,
				ratio: getRatio(colSpan)
			}
		} else if (Math.abs(1.0 - ratio) < 0.065) {
			const colSpan = Math.min(maxCols, 2);
			return {
				colSpan,
				rowSpan: 2,
				ratio: 1.69
			}
		}
		return {
			colSpan: 1,
			rowSpan: 1,
			ratio: 1.778 // 16/9
		}
	};
</script>

{#await src}
	{@const { colSpan, rowSpan, ratio } = getColSpan(aspectRatio, $breakpoint)}
	<div style={`grid-column: span ${colSpan}; grid-row: span ${rowSpan}; aspect-ratio: ${ratio}`}>
		<div class={`placeholder animate-pulse ${skeletonDimension ?? 'w-full h-full'}`}>
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
	</div>
{:then image}
	{#if preview}
		{@const { colSpan, rowSpan, ratio } = getColSpan(image.img.w / image.img.h, $breakpoint)}
		<button onclick={() => (globalState.imagePreview = preview)} aria-label={ariaLabel} style={`grid-column: span ${colSpan}; grid-row: span ${rowSpan}; aspect-ratio: ${ratio}`}>
			<enhanced:img src={image} aria-labelledby={ariaLabel} {sizes} {alt} class={`${className} object-cover`} />
		</button>
	{:else}
   		<enhanced:img src={image} aria-labelledby={ariaLabel} {sizes} {alt} class={className} />
	{/if}
{/await}

<style>
	/* @keyframes loading {
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
	} */

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
