<script lang="ts">
	import { getGameHero, getGameIcon } from '$lib/cache';
	import { isEnhancedImage } from '$lib';
	import { recentGames } from '$lib/profile_agg';

	type Game = (typeof recentGames)[0];

	export let game: Game;
	export let show2Weeks = true;
	export let showRareAchievement = false;

	const bannerImg = getGameHero(game.appid);
	const iconImg = getGameIcon(game.appid, game.icon_url);

	const rareAchievement = game.achievements?.sort((a, b) => a.percent - b.percent)[0];
</script>

<a
	href={`https://store.steampowered.com/app/${game.appid}/`}
	class="card card-hover flex flex-col text-white bg-gray-800"
>
	<header>
		{#if isEnhancedImage(bannerImg)}
			<enhanced:img src={bannerImg} alt={`${game.name} header image`} />
		{:else}
			<img src={bannerImg} alt={`${game.name} header image`} />
		{/if}
	</header>
	<div class="p-4 space-y-4 h-full flex flex-col justify-between">
		<div class="h3 lg:h4">{game.name}</div>
		<div class="flex justify-between">
			<div>
				<div class="h4">Playtime</div>
				<div class="h5">
					{#if show2Weeks && game.playtime_2weeks}
						2 weeks: {(game.playtime_2weeks / 60).toFixed(1)}h
					{/if}
					{show2Weeks ? 'total: ' : ''}
					{(game.playtime / 60).toFixed(1)}h
				</div>
			</div>
			<div>
				{#if game.num_achievements}
					<div class="h4">Achievements</div>
					<div class="h5">{game.achievements?.length} / {game.num_achievements}</div>
				{/if}
			</div>
		</div>
	</div>
	{#if showRareAchievement && rareAchievement}
		<div class="flex gap-4 justify-center items-center m-2">
			<img
				class="w-16 h-16 border-gray-600 border-2"
				src={`https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/${game.appid}/${rareAchievement.icon}`}
				alt={`Achievement icon for ${rareAchievement.name}`}
			/>
			<div class="flex flex-col justify-center">
				<div>
					{rareAchievement.name} ({rareAchievement.percent}%)
				</div>
				<div class="text-gray-400 text-sm">
					{rareAchievement.description}
				</div>
			</div>
		</div>
	{/if}
	<hr class="opacity-50" />
	<footer class="flex items-center space-x-4 p-2">
		<div class="game-icon">
			{#if isEnhancedImage(iconImg)}
				<enhanced:img src={iconImg} alt={`${game.name} icon`} class="w-[32px]" />
			{:else}
				<img src={iconImg} alt={`${game.name} icon`} class="w-[32px]" />
			{/if}
		</div>
		<div>Last played {new Date(game.last_played * 1000).toLocaleDateString('en-US')}</div>
	</footer>
</a>

<style>
	.game-icon {
		background-color: rgb(31 41 55 / var(--tw-bg-opacity));
	}

	.game-icon > img {
		mix-blend-mode: lighten;
	}
</style>
