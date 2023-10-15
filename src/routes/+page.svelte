<script lang="ts">
	import Footer from '../components/section/Footer.svelte';
	import Friends from '../components/section/Friends.svelte';
	import Hero from '../components/section/Hero.svelte';
	import MostPlayed from '../components/section/MostPlayed.svelte';
	import RecentGames from '../components/section/RecentGames.svelte';
</script>

<!-- <div id="content" class="h-[1500px]"> -->
<Hero />
<div id="content" class="px-8 flex flex-col items-center">
	<RecentGames />
	<MostPlayed />
	<Friends />
	<Footer />
</div>

<!-- </div> -->

<style>
	#content {
		background: linear-gradient(#0b0032, #000000);
	}
</style>
