<script lang="ts">
	import BGDesktop from '../../../assets/bg-er.png?enhanced&w=3840;2560;1800&blur=3&effort=max&fit=cover&format=webp';
	import BGMobile from '../../../assets/bg-er-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';

	import FarmDay from '../../../assets/sdv/farm_day.jpeg?enhanced&w=3840;2560;1800&effort=max&fit=cover&format=webp';
	import FarmNight from '../../../assets/sdv/farm_night.jpeg?enhanced&w=3840;2560;1800&effort=max&fit=cover&format=webp';
	import PreviewImage from '../../PreviewImage.svelte';
</script>

<div>
	<div class="background sticky top-0 left-0 -z-10">
		<enhanced:img
			src={BGDesktop}
			sizes="(min-width:2700px) 3840px, (min-width:2100px) 2560px, (min-width:768px) 1800px"
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
		class="game-content w-full mt-[-90vh] pb-[10vh] flex justify-center items-center flex-col sm:flex-row"
	>
		<div class="flex gap-8">
			<PreviewImage
				image={FarmDay}
				preivewClass="max-w-2xl border-4 border-amber-950 rounded-lg shadow-lg"
				ariaLabel="farm-day"
			/>
			<PreviewImage
				image={FarmNight}
				preivewClass="max-w-2xl border-4 border-amber-950 rounded-lg shadow-lg"
				ariaLabel="farm-night"
			/>
		</div>
	</div>
</div>

<style>
	:global(.background img) {
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
				rgba(0, 0, 0, 0) 20%,
				rgba(0, 0, 0, 0) 80%,
				rgba(0, 0, 0, 1) 100%
			);
	}
</style>
