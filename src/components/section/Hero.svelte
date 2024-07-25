<script lang="ts">
	import { profile } from '$lib/profile';
	// import BgImage from '../../assets/bg.png?enhanced';

	let innerWidth = 0;
	let innerHeight = 0;

	$: isLandscape = innerWidth >= innerHeight;
</script>

<!-- <div class="relative"> -->

<svelte:window bind:innerWidth bind:innerHeight />

<div>
	<div class="background">
		{#if isLandscape}
			<enhanced:img
				src="../../assets/bg-desktop.png?w=2000;1600;1280&blur=1.25&effort=max&fit=cover&format=webp"
				sizes="(min-width:2560px) 2000px, (min-width:1920px) 1600px, (min-width:1080px) 1280px"
				alt="Background image"
			/>
		{:else}
			<enhanced:img
				src="../../assets/bg-mobile.png?w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp"
				sizes="(min-width:1440px) 1600px, (min-width:1080) 1280px, (min-width:750px) 640px"
				alt="Background image"
			/>
		{/if}
	</div>
	<div
		class="absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-col sm:flex-row"
	>
		<img
			src={`https://avatars.steamstatic.com/${profile.avatar}`}
			alt="pfp"
			class="rounded-full w-52 border-black border-4"
		/>
		<div class="ml-2 text-6xl text-white">{profile.username}</div>
	</div>
</div>

<!-- </div> -->

<style>
	.background img {
		position: relative;
		/* background-image: url(/bg.png);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat; */
		/* width: 100vw; */
		object-fit: cover;
		width: min(auto, 100vw);
		height: 102vh;
	}
</style>
