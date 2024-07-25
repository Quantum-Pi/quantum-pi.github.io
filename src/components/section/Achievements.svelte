<script lang="ts">
	import { profile, type Profile } from '$lib/profile';
	import Game from '../Game.svelte';

	const gamesWithAchievements = profile.games.filter(
		(game) => game.achievements !== undefined && game.achievements.length > 0
	);

	// console.log(
	// 	gamesWithAchievements
	// 		.sort((a, b) => b.playtime - a.playtime)
	// 		.map((game) => ({
	// 			...game,
	// 			achievements: game.achievements?.sort((a, b) => a.percent - b.percent)
	// 		}))
	// );

	const perfectGames = gamesWithAchievements
		.filter((game) => game.achievements && game.num_achievements === game.achievements?.length)
		.sort((a, b) => (b.achievements?.length ?? 0) - (a.achievements?.length ?? 0));

	// type Achievement = NonNullable<Profile['games'][0]['achievements']>;
	// const rarestAchievements = profile.games
	// 	.filter((game) => game.achievements !== undefined)
	// 	.map((game) => ({
	// 		...game,
	// 		achievements: game.achievements?.reduce(
	// 			(prev, curr) => (curr.percent < prev[0].percent ? [curr] : prev),
	// 			[{ percent: Number.MAX_SAFE_INTEGER }] as Achievement
	// 		)
	// 	}))
	// 	.sort((a, b) => (a.achievements?.[0]?.percent ?? 0) - (b.achievements?.[0]?.percent ?? 0));
</script>

<div class="p-8">
	<div class="flex flex-col items-center">
		<div class="text-white text-4xl mb-8">Perfect Games</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			{#each perfectGames as game}
				<Game {game} show2Weeks={false} showRareAchievement={true} />
			{/each}
		</div>
		<!-- <div class="text-white text-4xl mb-8">Rarest Achievement</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			{#each rarestAchievements as game}
				<Game {game} show2Weeks={false} showRareAchievement={true} />
			{/each}
		</div> -->
	</div>
</div>
