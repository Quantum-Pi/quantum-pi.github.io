<script lang="ts">
	import Achievements from '../components/section/Achievements.svelte';
	import Footer from '../components/section/Footer.svelte';
	import Friends from '../components/section/Friends.svelte';
	import Hero from '../components/section/Hero.svelte';
	import MostPlayed from '../components/section/MostPlayed.svelte';
	import RecentGames from '../components/section/RecentGames.svelte';
	import GameSelector from '../components/games/GameSelector.svelte';
	import GameSelectorCasual from '../components/games/GameSelectorCasual.svelte';
</script>

<Hero />
<div id="content">
	<div class="px-8 flex flex-col items-center">
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
</div>
<div class="bg-black">
	<div class="bg-black mb-24 w-full">
		<GameSelector />
	</div>
	<div class="bg-black mb-24 w-full">
		<GameSelectorCasual />
	</div>
	<div class="bg-black px-8 flex flex-col items-center">
		<Friends />
		<Footer />
	</div>
</div>

<style>
	#content {
		background: linear-gradient(#040436, #000000);
	}
</style>
