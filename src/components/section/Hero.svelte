<script lang="ts">
	import { isEnhancedImage } from '$lib';
	import { getProfilePicture } from '$lib/cache';
	import { profile } from '$lib/profile';

	const pfp = getProfilePicture(profile.avatar);

	let innerWidth = 0;
	let innerHeight = 0;

	$: isLandscape = innerWidth >= innerHeight;
</script>

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
		{#if isEnhancedImage(pfp)}
			<enhanced:img src={pfp} alt="pfp" class="rounded-full w-52 border-black border-4" />
		{:else}
			<img src={pfp} alt="pfp" class="rounded-full w-52 border-black border-4" />
		{/if}
		<div class="ml-2 text-6xl text-white">{profile.username}</div>
	</div>
</div>
