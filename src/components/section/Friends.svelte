<script lang="ts">
	import { isEnhancedImage } from '$lib';
	import { getProfilePicture } from '$lib/cache';
	import { friends } from '$lib/steam_agg';
</script>

<div class="w-3/4 flex flex-col items-center">
	<div class="text-white text-4xl mb-4">My Friends</div>
	<div class="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-12 4k:grid-cols-16 gap-4">
		{#each friends as friend}
			{@const img = getProfilePicture(friend.avatar)}
			<a
				href={`https://steamcommunity.com/profiles/${friend.steamid}`}
				title={friend.username}
				class="profile-picture"
			>
				{#if isEnhancedImage(img)}
					<enhanced:img
						src={img}
						sizes="(min-width: 600px) 128px, 64px
						"
						alt={`${friend.username}'s pfp`}
					/>
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
