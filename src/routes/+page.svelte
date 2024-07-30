<script lang="ts">
	import Achievements from '../components/section/Achievements.svelte';
	import Eso from '../components/games/ESO/Overview_ESO.svelte';
	import Footer from '../components/section/Footer.svelte';
	import Friends from '../components/section/Friends.svelte';
	import Hero from '../components/section/Hero.svelte';
	import MostPlayed from '../components/section/MostPlayed.svelte';
	import RecentGames from '../components/section/RecentGames.svelte';
	import GameSelector from '../components/games/GameSelector.svelte';
</script>

<Hero />
<div id="content" class="px-8 flex flex-col items-center">
	<div class="mb-24">
		<RecentGames />
	</div>
	<div class="mb-24">
		<MostPlayed />
	</div>
	<div class="mb-24">
		<Achievements />
	</div>
</div>
<div class="bg-black px-8 flex flex-col items-center">
	<div class="mb-24 w-full">
		<GameSelector />
		<!-- <div class="mb-24 mx-[-2rem]"> -->
	</div>
	<Friends />
	<Footer />
</div>

<style>
	#content {
		background: linear-gradient(#0b0032, #000000);
	}
</style>
