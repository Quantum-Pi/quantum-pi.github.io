<script lang="ts">
	import { mostPlayed } from '$lib/profile_agg';
	import Game from '../Game.svelte';
</script>

<div class="flex flex-col items-center p-8 text-white">
	<div class="text-4xl mb-8">Most Played</div>
	<div class="grid gap-8 grid-areas-pyramid-sm md:grid-areas-pyramid-md lg:grid-areas-pyramid-lg">
		{#each mostPlayed as game, i}
			<div style={`grid-area: ${String.fromCharCode(97 + i)}`}>
				<Game {game} show2Weeks={false} />
			</div>
		{/each}
	</div>
</div>

<style>
	#game-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-template-areas:
			'. . a a . .'
			'. b b c c .'
			'd d e e f f';
	}
</style>
