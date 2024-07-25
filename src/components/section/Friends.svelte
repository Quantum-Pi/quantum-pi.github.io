<script lang="ts">
	import { isEnhancedImage } from '$lib';
	import { getProfilePicture } from '$lib/cache';
	import { profile } from '$lib/profile';
</script>

<div class="w-3/4 flex flex-col items-center">
	<div class="text-white text-4xl mb-4">My Friends</div>
	<div class="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-12 gap-4">
		{#each profile.friends.sort((a, b) => a.friend_since - b.friend_since) as friend}
			{@const img = getProfilePicture(friend.avatar)}
			<a
				href={`https://steamcommunity.com/profiles/${friend.steamid}`}
				title={friend.username}
				class="profile-picture"
			>
				{#if isEnhancedImage(img)}
					<enhanced:img src={img} alt={`${friend.username}'s pfp`} />
				{:else}
					<img src={img} alt={`${friend.username}'s pfp`} />
				{/if}
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
