<script lang="ts">
	import { profile } from '$lib/profile';
</script>

<div id="background" />
<div
	class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center flex-col sm:flex-row"
>
	<img
		src={`https://avatars.steamstatic.com/${profile.avatar}`}
		alt="pfp"
		class="rounded-full w-52 border-black border-4"
	/>
	<div class="ml-2 text-6xl text-white">{profile.username}</div>
</div>

<style>
	#background::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(1.25px);
		pointer-events: none;
	}
	#background {
		position: relative;
		background-image: url(/bg.png);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 102vh;
	}
</style>
