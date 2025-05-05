<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { globalState } from '../../state/state.svelte';
	import SkeletonImage from './SkeletonImage.svelte';

	type Props = {
		image: Promise<Picture>;
		imageFull?: Promise<Picture>;
		ariaLabel: string;
		skeletonSize?: string;
		preivewClass?: string;
		thumbnailSizes: string;
	};

	let { image, imageFull, ariaLabel, preivewClass, thumbnailSizes, skeletonSize }: Props = $props();
</script>

{#snippet preview()}
    <SkeletonImage 
        src={imageFull ?? image}
        skeletonSize={'w-64'}
        sizes="(min-width:1440px) 1600px, (min-width:1080px) 1280px, (min-width:750px) 720px"
        class="w-auto max-h-[98vh]"
    />
{/snippet}

<button onclick={() => (globalState.imagePreview = preview)} aria-label={ariaLabel}>
	<SkeletonImage 
        src={image}
        sizes={thumbnailSizes}
        skeletonSize={skeletonSize}
        class={preivewClass}
    />
</button>

<style>
	button {
		transition: 0.2s;
		&:hover {
			transform: scale(1.01);
		}
		&:active {
			transform: scale(0.99);
		}
	}
</style>
