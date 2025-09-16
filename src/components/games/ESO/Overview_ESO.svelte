<script lang="ts">
	import BGDesktop from '../../../assets/bg-eso.png?enhanced&w=3840;2560;1800&blur=3&effort=max&fit=cover&format=webp';
	import BGMobile from '../../../assets/bg-eso-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';
	import DungeonAchievements from '../../../assets/eso/eso-dungeon.png?enhanced&w=400&format=webp';
	import TrialAchievements from '../../../assets/eso/eso-trial.png?enhanced&w=550&format=webp';
	import Overview from '../Overview.svelte';
</script>

<Overview bgDesktop={BGDesktop} bgMobile={BGMobile}>
	<div class="w-[95%] h-full">
		<div
			class="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-x-4 gap-y-16 h-full"
		>
			<enhanced:img
				src={TrialAchievements}
				alt="ESO Trial Achievements"
				class="w-[340px] sm:w-[400px] md:w-[550px]"
			/>
			<enhanced:img
				src={DungeonAchievements}
				alt="ESO Dungeon Achievements"
				class="w-[360px] md:w-[400px]"
			/>
			<div class="md:col-span-2">
				<iframe
					class="h-[198px] w-[352px] sm:h-[270px] sm:w-[480px] md:h-[315px] md:w-[560px] mr-4"
					src="https://www.youtube.com/embed/q0TVbQts-A0?si=sPy0KfZAMU0gFfuI"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
			<div class="md:col-span-2 xl:col-span-1">
				<iframe
					class="h-[198px] w-[352px] sm:h-[270px] sm:w-[480px] md:h-[315px] md:w-[560px] mr-4"
					src="https://www.youtube.com/embed/tZsMJ6sXQgY?si=QYz54yvAuzqfnVtR"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
			<div class="md:col-span-2 xl:col-span-1">
				<iframe
					class="h-[198px] w-[352px] sm:h-[270px] sm:w-[480px] md:h-[315px] md:w-[560px] mr-4"
					src="https://www.youtube.com/embed/qYPWKfWWkh8?si=wc7BqemrdnLbfQvn"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
</Overview>
