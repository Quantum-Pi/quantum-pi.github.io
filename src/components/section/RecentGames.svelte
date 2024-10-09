<script lang="ts">
	import { recentGames } from '$lib/steam_agg';
	import Game from '../Game.svelte';
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
