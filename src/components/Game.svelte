<script lang="ts">
	import { getGameHero, getGameIcon } from '$lib/cache';
	import { isEnhancedImage } from '$lib';
	import MaterialSymbolsTrophyOutline from '~icons/material-symbols/trophy-outline';
	import MageHourGlass from '~icons/mage/hour-glass';

	type SteamGame = {
		appid: number;
		name: string;
		playtime: number;
		playtime_2weeks?: number;
		last_played: number;
		icon_url: string;
		num_achievements?: number;
		achievements?: {
			name: string;
			icon: string;
			description: string;
			percent: number;
		}[];
		nonSteam?: false;
	};

	type NonSteamGame = Omit<
		SteamGame,
		'appid' | 'achievements' | 'icon_url' | 'last_played' | 'nonSteam'
	> & {
		nonSteam: true;
		appid: string;
		playtime_recorded?: number;
		last_played?: number;
		achievements?: undefined;
		icon_url?: undefined;
	};

	type Game = SteamGame | NonSteamGame;

	interface Props {
		game: Game;
		show2Weeks?: boolean;
		showRareAchievement?: boolean;
	}

	let { game, show2Weeks = true, showRareAchievement = false }: Props = $props();

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
			<enhanced:img src={bannerImg} fetchpriority="high" alt={`${game.name} header image`} />
		{:else}
			<img src={bannerImg} alt={`${game.name} header image`} />
		{/if}
	</header>
	<div class="p-4 space-y-4 h-full flex flex-col justify-between">
		<div class="h3 lg:h4">{game.name}</div>
		<div class="flex justify-between items-center md:items-start">
			<div class="flex items-center md:block">
				<MageHourGlass class="text-2xl mr-4 block md:hidden" />
				<div class="h4 hidden md:block">Playtime</div>
				<div class="h5">
					{#if show2Weeks && game.playtime_2weeks}
						2 weeks: {(game.playtime_2weeks / 60).toFixed(1)}h <br />
					{/if}
					{show2Weeks ? 'total: ' : ''}
					{(game.playtime / 60).toFixed(1)}h <!-- <span class="text-sm italic">{game.nonSteam && game.playtime_recorded ? ` as of ${new Date(game.playtime_recorded).toLocaleDateString('en-US')}`: ''}</span> -->
				</div>
			</div>
			<div>
				{#if game.num_achievements}
					<div class="flex items-center md:block">
						<MaterialSymbolsTrophyOutline class="text-2xl mr-4 block md:hidden" />
						<div class="h4 hidden md:block">Achievements</div>
						<div class="h5">{game.achievements?.length} / {game.num_achievements}</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
	{#if showRareAchievement && rareAchievement}
		<div class="flex gap-4 justify-start items-center m-2 max-w-[444px]">
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
		{#if game.last_played}
			<div>Last played {new Date(game.last_played * 1000).toLocaleDateString('en-US')}</div>
		{:else if game.nonSteam && game.playtime_recorded}
			<div>
				Playtime recorded {new Date(game.playtime_recorded * 1000).toLocaleDateString('en-US')}
			</div>
		{/if}
	</footer>
</a>

<style>
	.game-icon {
		background-color: rgb(31 41 55 / var(--tw-bg-opacity));
	}

	.game-icon > img {
		mix-blend-mode: lighten;
	}

	.card-hover {
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.02);
		}
	}
</style>
