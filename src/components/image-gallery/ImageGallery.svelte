<script lang="ts">
	import { screenshotImageDict, type ScreenshotImageDictKey } from '$lib/screenshot_agg';
	import SkeletonPreviewImage from '../image/SkeletonPreviewImage.svelte';

	const keyToName: Record<ScreenshotImageDictKey, string> = {
		acs: "Assassin's Creed Shadows",
		genshin: 'Genshin Impact',
		hfw: 'Horizon Zero Dawn'
	};
	const keyToCols: Record<ScreenshotImageDictKey, { gallery: string; container: string }> = {
		acs: { gallery: 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4', container: '' },
		genshin: { gallery: 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4', container: '' },
		hfw: {
			gallery: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8',
			container: 'col-span-1 lg:col-span-2'
		}
	};
</script>

<div class="mx-12 2xl:mx-32 grid grid-cols-1 lg:grid-cols-2">
	<!-- TODO: fix sort -->
	{#each Object.entries(screenshotImageDict).sort((a, b) => a.length - b.length) as [key, value]}
		<div class={`m-4 ${keyToCols[key as ScreenshotImageDictKey].container}`}>
			<div class="text-2xl lg:text-3xl mb-4">{keyToName[key as ScreenshotImageDictKey]}</div>
			<div class={`grid ${keyToCols[key as ScreenshotImageDictKey].gallery} gap-4 grid-flow-dense`}>
				{#each value as image}
					<SkeletonPreviewImage
						image={image.thumbnail()}
						imageFull={image.full()}
						ariaLabel={`${key} ${image}`}
						thumbnailSizes={`(min-width:1440px) ${image.aspectRatio > 4 ? '920px' : '540px'}, (min-width:1080px) ${image.aspectRatio > 4 ? '540px' : '360px'}`}
						thumbnailClass="w-full h-full rounded-md"
					/>
				{/each}
			</div>
		</div>
	{/each}
</div>
