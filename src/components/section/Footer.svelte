<script lang="ts">
	import { profile } from '$lib/profile';
	import GitHub from 'virtual:icons/fa6-brands/github';
	import Steam from 'virtual:icons/fa6-brands/steam';
	import Discord from 'virtual:icons/fa6-brands/discord';
	import BattleNet from 'virtual:icons/fa6-brands/battle-net';
	import Reddit from 'virtual:icons/fa6-brands/reddit-alien';
	import YouTube from 'virtual:icons/fa6-brands/youtube';

	const hoursPlayed = (
		profile.games.reduce((prev, { playtime }) => prev + playtime, 0) / 60
	).toLocaleString('en-US', { maximumFractionDigits: 1 });
</script>

<div class="grid grid-cols-1 md:grid-cols-2 p-24 gap-y-4 text-white">
	<div class="flex flex-col items-center">
		<img
			src={`https://avatars.steamstatic.com/${profile.avatar}`}
			alt="pfp"
			class="rounded-full w-36 border-black border-4"
		/>
		<div class="ml-2 text-5xl">{profile.username}</div>
		<div class="mt-2 text-center">
			{hoursPlayed} hours played across {profile.games.length} games
		</div>
	</div>
	<div class="flex flex-col justify-center items-center gap-4">
		<div class="text-xl">Socials:</div>
		<div class="grid grid-cols-3 gap-4 text-3xl text-white">
			<a class="transition-all hover:text-purple-600" href="https://github.com/Quantum-Pi">
				<GitHub />
			</a>
			<a
				class="transition-all hover:text-blue-900"
				href="https://steamcommunity.com/id/QuantumPie/"
			>
				<Steam />
			</a>
			<!-- <Discord />
			<BattleNet /> -->
			<a
				class="transition-all hover:text-red-700"
				href="https://www.youtube.com/channel/UCkSJ8-WQSbrZDNgRyeT6THA"
			>
				<YouTube />
			</a>
		</div>
	</div>
</div>
