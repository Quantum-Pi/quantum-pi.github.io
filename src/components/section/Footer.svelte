<script lang="ts">
	import { profile } from '$lib/steam_agg';
	import { isEnhancedImage } from '$lib/index';
	import GitHub from 'virtual:icons/fa6-brands/github';
	import Steam from 'virtual:icons/fa6-brands/steam';
	import Discord from 'virtual:icons/fa6-brands/discord';
	import BattleNet from 'virtual:icons/fa6-brands/battle-net';
	import Reddit from 'virtual:icons/fa6-brands/reddit-alien';
	import Twitch from 'virtual:icons/fa6-brands/twitch';
	import YouTube from 'virtual:icons/fa6-brands/youtube';
	import Genshin from 'virtual:icons/arcticons/genshin-assistant';
	import WoW from '../svg/WoW.svelte';
	import { getProfilePicture } from '$lib/cache';

	const pfp = getProfilePicture(profile.avatar);
	const hoursPlayed = profile.hoursPlayed.toLocaleString('en-US', { maximumFractionDigits: 1 });
</script>

<div
	class="grid grid-areas-footer sm:grid-areas-footer-sm md:grid-areas-footer-md pt-24 gap-y-4 gap-x-12 text-white"
>
	<div class="[grid-area:a] flex flex-col items-center">
		{#if isEnhancedImage(pfp)}
			<enhanced:img src={pfp} alt="pfp" class="rounded-full w-36 border-black border-4" />
		{:else}
			<img src={pfp} alt="pfp" class="rounded-full w-36 border-black border-4" />
		{/if}

		<div class="ml-2 text-5xl">{profile.username}</div>
		<div class="mt-2 text-center">
			{hoursPlayed} hours played across {profile.gamesOwned} games
		</div>
	</div>
	<div class="[grid-area:b] flex flex-col md:justify-center items-center gap-4">
		<div class="text-xl">Socials:</div>
		<div class="grid grid-cols-3 grid-rows-2 gap-4 text-3xl text-white">
			<a
				class="transition-all hover:text-purple-600"
				href="https://github.com/Quantum-Pi"
				aria-label="View QuantumPie's GitHub"
			>
				<GitHub />
			</a>
			<a
				class="transition-all hover:text-blue-900"
				href="https://steamcommunity.com/id/QuantumPie/"
				aria-label="View QuantumPie's Steam"
			>
				<Steam />
			</a>
			<!-- <Discord />
			<BattleNet /> -->
			<a
				class="transition-all hover:text-red-700"
				href="https://www.youtube.com/channel/UCkSJ8-WQSbrZDNgRyeT6THA"
				aria-label="View QuantumPie's YouTube"
			>
				<YouTube />
			</a>
			<a
				class="transition-all hover:text-purple-600"
				href="https://www.twitch.tv/quantumpie_"
				aria-label="View QuantumPie's Twitch"
			>
				<Twitch />
			</a>
		</div>
	</div>
	<div class="[grid-area:c] flex flex-col md:justify-center items-center gap-4">
		<div class="text-xl">Games:</div>
		<div class="grid grid-cols-3 grid-rows-2 gap-4 text-3xl text-white">
			<a
				class="transition-all hover:text-blue-400"
				title="Genshin Impact"
				href="https://enka.network/u/605452914/"
				aria-label="View QuantumPie's Genshin banner"
			>
				<!-- href="https://act.hoyolab.com/app/community-game-records-sea/index.html?bbs_presentation_style=fullscreen&bbs_auth_required=true&gid=2&user_id=41199855&utm_source=share&utm_medium=link&lang=en-us&bbs_theme=dark&bbs_theme_device=1&utm_campaign=web#/ys" -->
				<Genshin />
			</a>
			<a
				class="transition-all filter-white hover:filter-none"
				title="World of Warcraft"
				href="https://worldofwarcraft.blizzard.com/en-us/character/us/area-52/quantumpie"
				aria-label="View QuantumPie's WoW main"
			>
				<WoW />
			</a>
		</div>
	</div>
</div>
