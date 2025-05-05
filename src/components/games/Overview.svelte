<script lang="ts">
	import type { Snippet } from 'svelte';
    import type { Picture } from 'vite-imagetools';

    type Props = {
        bgDesktop: Picture
        bgMobile: Picture
        children: Snippet
    }
    const {bgDesktop, bgMobile, children}: Props = $props();
</script>

<div>
	<div class="background sticky top-0 left-0 -z-10">
		<enhanced:img
			src={bgDesktop}
			sizes="(min-width:2700px) 3840px, (min-width:2100px) 2560px, (min-width:768px) 1800px"
			alt="Background image"
			class="hidden md:block"
			fetchpriority="high"
		/>
		<enhanced:img
			src={bgMobile}
			sizes="(min-width:1440px) 1600px, (min-width:1080px) 1280px, (min-width:750px) 640px"
			alt="Background image"
			class="md:hidden"
			fetchpriority="high"
		/>
	</div>
	<div class=" w-full mt-[-90vh] pb-[10vh] flex justify-center items-center flex-col">
		{@render children()}
	</div>
</div>

<style>
	.background {
		:global(img) {
			position: relative;
			object-fit: cover;
			width: 100vw;
			height: 102vh;
		}

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			background: linear-gradient(
					90deg,
					rgba(0, 0, 0, 1) 0%,
					rgba(0, 0, 0, 0) 10%,
					rgba(0, 0, 0, 0) 90%,
					rgba(0, 0, 0, 1) 100%
				),
				linear-gradient(
					0deg,
					rgba(0, 0, 0, 1) 0%,
					rgba(0, 0, 0, 0) 15%,
					rgba(0, 0, 0, 0) 85%,
					rgba(0, 0, 0, 1) 100%
				);
		}	
	}
</style>
