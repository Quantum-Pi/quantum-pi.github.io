<script lang="ts">
	import BGDesktop from '../../../assets/bg-eso.png?enhanced&w=3840;2560;1800&blur=3&effort=max&fit=cover&format=webp';
	import BGMobile from '../../../assets/bg-eso-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';
	import DungeonAchievements from '../../../assets/eso/eso-dungeon.png?enhanced&w=400&format=webp';
	import TrialAchievements from '../../../assets/eso/eso-trial.png?enhanced&w=550&format=webp';
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
	<div class=" w-full mt-[-90vh] pb-[10vh] flex justify-center items-center flex-col sm:flex-row">
		<div class="w-[95%] h-full">
			<div
				class="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-x-4 gap-y-16 h-full"
			>
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
				<div>
					<iframe
						class="h-[198px] w-[352px] sm:h-[270px] sm:w-[480px] md:h-[315px] md:w-[560px] mr-4"
						src="https://www.youtube.com/embed/tZsMJ6sXQgY?si=QYz54yvAuzqfnVtR"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					/>
				</div>
				<div>
					<iframe
						class="h-[198px] w-[352px] sm:h-[270px] sm:w-[480px] md:h-[315px] md:w-[560px] mr-4"
						src="https://www.youtube.com/embed/qYPWKfWWkh8?si=wc7BqemrdnLbfQvn"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					/>
				</div>
			</div>
		</div>
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
