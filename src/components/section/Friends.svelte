<script lang="ts">
	import { profile } from '$lib/profile';
</script>

<div class="w-3/4 flex flex-col items-center">
	<div class="text-white text-4xl mb-4">My Friends</div>
	<div class="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-12 gap-4">
		{#each profile.friends.sort((a, b) => a.friend_since - b.friend_since) as friend}
			<a
				href={`https://steamcommunity.com/profiles/${friend.steamid}`}
				title={friend.username}
				class="profile-picture"
			>
				<img
					src={`https://avatars.steamstatic.com/${friend.avatar}`}
					alt={`${friend.username}'s pfp`}
				/>
			</a>
		{/each}
	</div>
</div>

<style>
	.profile-picture {
		transition: 0.25s;
	}
	.profile-picture:hover {
		transform: scale(1.05);
	}
	.profile-picture:active {
		transform: scale(0.95);
	}
</style>
