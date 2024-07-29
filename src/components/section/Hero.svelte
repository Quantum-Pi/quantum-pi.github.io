<script lang="ts">
	import { isEnhancedImage } from '$lib';
	import { getProfilePicture } from '$lib/cache';
	import { profile } from '$lib/profile_agg';
	import HeroDesktop from '../../assets/bg-desktop.png?enhanced&w=2000;1600;1280&blur=1.25&effort=max&fit=cover&format=webp';
	import HeroMobile from '../../assets/bg-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';

	const pfp = getProfilePicture(profile.avatar);
</script>

<div>
	<div class="background">
		<enhanced:img
			src={HeroDesktop}
			sizes="(min-width:2560px) 2000px, (min-width:1920px) 1600px, (min-width:1080px) 1280px"
			alt="Background image"
			class="hidden md:block"
		/>
		<enhanced:img
			src={HeroMobile}
			sizes="(min-width:1440px) 1600px, (min-width:1080px) 1280px, (min-width:750px) 640px"
			alt="Background image"
			class="md:hidden"
		/>
	</div>
	<div
		class="absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-col sm:flex-row"
	>
		{#if isEnhancedImage(pfp)}
			<enhanced:img src={pfp} alt="pfp" class="rounded-full w-[184px] border-black border-4" />
		{:else}
			<img src={pfp} alt="pfp" class="rounded-full w-[184px] border-black border-4" />
		{/if}
		<div class="ml-2 text-6xl text-white">{profile.username}</div>
	</div>
</div>

<style>
	.background img {
		position: relative;
		object-fit: cover;
		width: 100vw;
		height: 102vh;
	}
</style>
