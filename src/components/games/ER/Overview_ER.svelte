<script lang="ts">
	import BGDesktop from '../../../assets/bg-er.png?enhanced&w=3840;2560;1800&blur=3&effort=max&fit=cover&format=webp';
	import BGMobile from '../../../assets/bg-er-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';
</script>

<div>
	<div class="background sticky top-0 left-0 -z-10">
		<enhanced:img
			src={BGDesktop}
			sizes="(min-width:2700px) 3840px, (min-width:2100px) 2560px, (min-width:768px) 1800px"
			alt="Background"
			class="hidden md:block"
		/>
		<enhanced:img
			src={BGMobile}
			sizes="(min-width:1440px) 1600px, (min-width:1080px) 1280px, (min-width:750px) 640px"
			alt="Background"
			class="md:hidden"
		/>
	</div>
	<div
		class="game-content w-full mt-[-90vh] pb-[10vh] flex justify-center items-center flex-col sm:flex-row"
	>
		<div class="w-[95%] h-full">
			<div>TODO</div>
		</div>
	</div>
</div>

<style>
	.background {
		& :global(img) {
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
					rgba(0, 0, 0, 0) 20%,
					rgba(0, 0, 0, 0) 80%,
					rgba(0, 0, 0, 1) 100%
				);
		}
	}

</style>
