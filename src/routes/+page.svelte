<script lang="ts">
	import Achievements from '../components/section/Achievements.svelte';
	import Footer from '../components/section/Footer.svelte';
	import Friends from '../components/section/Friends.svelte';
	import Hero from '../components/section/Hero.svelte';
	import MostPlayed from '../components/section/MostPlayed.svelte';
	import RecentGames from '../components/section/RecentGames.svelte';
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
	<Friends />
	<Footer />
</div>

<style>
	#content {
		background: linear-gradient(#0b0032, #000000);
	}
</style>
