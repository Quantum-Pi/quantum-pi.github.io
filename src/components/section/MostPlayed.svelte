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
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
		{#each mostPlayed as game}
			<Game {game} />
		{/each}
	</div>
</div>
