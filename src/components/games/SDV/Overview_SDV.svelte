<script lang="ts">
	import BGDesktop from '../../../assets/bg-sdv.png?enhanced&w=3840;2560;1800&blur=3&effort=max&fit=cover&format=webp';
	import BGMobile from '../../../assets/bg-er-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';

	import FarmDay from '../../../assets/sdv/farm_day.jpeg?enhanced&w=3840;2560;1800&effort=max&fit=cover&format=webp';
	import FarmNight from '../../../assets/sdv/farm_night.jpeg?enhanced&w=3840;2560;1800&effort=max&fit=cover&format=webp';
	import PreviewImage from '../../image/PreviewImage.svelte';
	import Overview from '../Overview.svelte';
</script>


<Overview
	bgDesktop={BGDesktop}
	bgMobile={BGMobile}
>
	<div class="flex flex-col xl:flex-row gap-8">
		<PreviewImage
			image={FarmDay}
			preivewClass="max-w-[90vw] lg:max-w-2xl border-4 border-amber-950 rounded-lg shadow-lg"
			ariaLabel="farm-day"
		/>
		<PreviewImage
			image={FarmNight}
			preivewClass="max-w-[90vw] lg:max-w-2xl border-4 border-amber-950 rounded-lg shadow-lg"
			ariaLabel="farm-night"
		/>
	</div>
</Overview>

<style>

</style>
