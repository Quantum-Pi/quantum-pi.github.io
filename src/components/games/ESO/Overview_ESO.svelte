<script lang="ts">
	import BGDesktop from '../../../assets/bg-eso.png?enhanced&w=2000;1600;1280&blur=3&effort=max&fit=cover&format=webp';
	import BGMobile from '../../../assets/bg-eso-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';
	import DungeonAchievements from '../../../assets/eso/eso-dungeon.png?enhanced&w=400&format=webp';
	import TrialAchievements from '../../../assets/eso/eso-trial.png?enhanced&w=550&format=webp';
	import VerticalScroll from '../../VerticalScroll.svelte';
	import { writable } from 'svelte/store';
	import HorizontalScroll from '../../HorizontalScroll.svelte';

	const iTracker = writable(0);

	iTracker.subscribe((v) => console.log(v));
</script>

<div class="relative">
	<div class="background">
		<enhanced:img
			src={BGDesktop}
			sizes="(min-width:2560px) 2000px, (min-width:1920px) 1600px, (min-width:1080px) 1280px"
			alt="Background image"
			class="hidden md:block"
		/>
		<enhanced:img
			src={BGMobile}
			sizes="(min-width:1440px) 1600px, (min-width:1080px) 1280px, (min-width:750px) 640px"
			alt="Background image"
			class="md:hidden"
		/>
	</div>
	<div
		class="absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-col sm:flex-row"
	>
		<!-- <div>
			<div class="flex items-center gap-4">
				<VerticalScroll bind:i={$iTracker}>
					<enhanced:img src={TrialAchievements} alt="Background image" class="" />
					<enhanced:img src={DungeonAchievements} alt="Background image" class="" />
				</VerticalScroll>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/tZsMJ6sXQgY?si=QYz54yvAuzqfnVtR"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				/>
			</div>
		</div> -->
		<div class="w-[95%] overflow-x-scroll hide-scrollbar">
			<div class="flex items-center justify-center gap-4 w-max xl:w-full">
				<VerticalScroll bind:i={$iTracker} maxWidth={560} maxHeight={420}>
					<enhanced:img
						src={TrialAchievements}
						alt="Background image"
						class="w-[340px] sm:w-[400px] md:w-[550px]"
					/>
					<enhanced:img
						src={DungeonAchievements}
						alt="Background image"
						class="w-[360px] md:w-[400px]"
					/>
				</VerticalScroll>
				<div class="h-[198px] w-[352px] sm:h-[270px] sm:w-[480px] md:h-[315px] md:w-[560px] mr-4">
					<iframe
						class="w-full h-full"
						src="https://www.youtube.com/embed/tZsMJ6sXQgY?si=QYz54yvAuzqfnVtR"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					/>
				</div>
			</div>
		</div>
		<!-- <div class="overflow-y-scroll h-full hide-scrollbar">
			<div class="flex flex-col items-center gap-4">
				<HorizontalScroll className="" bind:i={$iTracker}>
					<enhanced:img src={TrialAchievements} alt="Background image" class="" />
					<enhanced:img src={DungeonAchievements} alt="Background image" class="" />
				</HorizontalScroll>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/tZsMJ6sXQgY?si=QYz54yvAuzqfnVtR"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				/>
			</div>
		</div> -->
	</div>
</div>

<style>
	.background img {
		position: relative;
		object-fit: cover;
		width: 100vw;
		height: 102vh;
	}

	.background::after {
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
</style>
