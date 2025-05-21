<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { globalState } from '../../state/state.svelte';
	import SkeletonImage from './SkeletonImage.svelte';

	type Props = {
		image: Promise<Picture>;
		imageFull?: Promise<Picture>;
		ariaLabel: string;
		skeletonDimension?: string;
		thumbnailClass?: string;
		thumbnailSizes: string;
		previewSizes?: string;
	};

	let { image, imageFull, ariaLabel, thumbnailClass, thumbnailSizes, skeletonDimension, previewSizes = "(min-width:2160px) 2160px, (min-width:1440px) 1440px, (min-width:1080px) 1080px" }: Props = $props();
</script>

{#snippet preview()}
    <SkeletonImage 
        src={imageFull ?? image}
        skeletonDimension={'w-64'}
        sizes={previewSizes}
        class="w-auto max-h-[98vh]"
    />
{/snippet}

<button onclick={() => (globalState.imagePreview = preview)} aria-label={ariaLabel}>
	<SkeletonImage 
        src={image}
        sizes={thumbnailSizes}
        skeletonDimension={skeletonDimension}
        class={thumbnailClass}
    />
</button>

<style>
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
