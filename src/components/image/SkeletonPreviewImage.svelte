<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import SkeletonImage from './SkeletonImage.svelte';

	type Props = {
		image: Promise<Picture>;
		imageFull?: Promise<Picture>;
		aspectRatio?: number;
		ariaLabel: string;
		skeletonDimension?: string;
		thumbnailClass?: string;
		thumbnailSizes: string;
		previewSizes?: string;
	};

	let { image, imageFull, ariaLabel, aspectRatio, thumbnailClass, thumbnailSizes, skeletonDimension, previewSizes = "(min-width:2560px) 2560px, (min-width:1920px) 1920px, (min-width:1280px) 1280px, 1080px" }: Props = $props();
</script>

{#snippet preview()}
    <SkeletonImage 
        src={imageFull ?? image}
        skeletonDimension={'w-64'}
        sizes={previewSizes}
        class="w-auto max-h-[98vh]"
    />
{/snippet}

<SkeletonImage 
	preview={preview}
	src={image}
	aspectRatio={aspectRatio}
	sizes={thumbnailSizes}
	skeletonDimension={skeletonDimension}
	class={thumbnailClass}
/>
