<script lang="ts">
	import { profile } from '$lib/profile';
	import Game from '../Game.svelte';

	let mostPlayed = profile.games.sort((a, b) => (b.playtime ?? 0) - (a.playtime ?? 0));
	if (mostPlayed.length > 6) {
		mostPlayed = mostPlayed.slice(0, 6);
	}
</script>

<div class="flex flex-col items-center p-8 text-white">
	<div class="text-4xl mb-8">Most Played</div>
	<div id="game-grid" class="grid gap-8">
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
