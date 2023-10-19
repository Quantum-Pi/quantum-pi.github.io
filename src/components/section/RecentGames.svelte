<script lang="ts">
	import { profile } from '$lib/profile';
	import Game from '../Game.svelte';

	const recentGames = profile.games
		.filter((game) => game.playtime_2weeks && game.playtime_2weeks > 10)
		.sort((a, b) => (b.playtime_2weeks ?? 0) - (a.playtime_2weeks ?? 0));
</script>

<div class="flex flex-col items-center p-8 text-white">
	<div class="text-4xl mb-8">Currently Playing</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
		{#each recentGames as game}
			{#if game.playtime_2weeks}
				<Game {game} />
			{/if}
		{/each}
	</div>
</div>
