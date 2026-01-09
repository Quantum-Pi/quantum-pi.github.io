<script lang="ts">
	import { screenshotImageDict, type ScreenshotImageDictKey } from '$lib/screenshot_agg';
	import SkeletonPreviewImage from '../image/SkeletonPreviewImage.svelte';
	import { onMount } from 'svelte';

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

	const CHUNK_SIZE = 24;
	let visibleCounts = $state<Record<string, number>>({});
	
	Object.keys(screenshotImageDict).forEach((key) => {
		visibleCounts[key] = CHUNK_SIZE;
	});

	function loadMore(key: string) {
		visibleCounts[key] = Math.min(
			visibleCounts[key] + CHUNK_SIZE,
			screenshotImageDict[key as ScreenshotImageDictKey].length
		);
	}

	onMount(() => {
		const autoLoadTimer = setTimeout(() => {
			if ('requestIdleCallback' in window) {
				requestIdleCallback(() => {
					console.log('Auto-loading remaining screenshots during idle time');
					autoLoadAll();
				}, { timeout: 2000 });
			} else {
				setTimeout(autoLoadAll, 1000);
			}
		}, 2000);

		return () => clearTimeout(autoLoadTimer);
	});

	function autoLoadAll() {
		Object.keys(screenshotImageDict).forEach((key) => {
			visibleCounts[key] = screenshotImageDict[key as ScreenshotImageDictKey].length;
		});
	}
</script>

<div class="mx-12 2xl:mx-32 grid grid-cols-1 lg:grid-cols-2">
	<!-- TODO: fix sort -->
	{#each Object.entries(screenshotImageDict).sort((a, b) => a.length - b.length) as [key, value]}
		<div class={`m-4 ${keyToCols[key as ScreenshotImageDictKey].container}`}>
			<div class="text-2xl lg:text-3xl mb-4">{keyToName[key as ScreenshotImageDictKey]}</div>
			<div class={`grid ${keyToCols[key as ScreenshotImageDictKey].gallery} gap-4 grid-flow-dense`}>
				{#each value.slice(0, visibleCounts[key]) as image}
					<SkeletonPreviewImage
						image={image.thumbnail()}
						imageFull={image.full()}
						aspectRatio={image.aspectRatio}
						ariaLabel={`${key} ${image}`}
						thumbnailSizes={`(min-width:1440px) ${image.aspectRatio > 4 ? '920px' : '540px'}, (min-width:1080px) ${image.aspectRatio > 4 ? '540px' : '360px'}`}
						thumbnailClass="w-full h-full rounded-md"
					/>
				{/each}
			</div>
			{#if visibleCounts[key] < value.length}
				<div class="flex justify-center mt-6">
					<button
						onclick={() => loadMore(key)}
						class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
					>
						Load More ({value.length - visibleCounts[key]} remaining)
					</button>
				</div>
			{/if}
		</div>
	{/each}
</div>
