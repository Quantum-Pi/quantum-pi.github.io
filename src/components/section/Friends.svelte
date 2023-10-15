<script lang="ts">
	import { profile } from '$lib/profile';
</script>

<div class="w-3/4 flex flex-col items-center">
	<div class="text-white text-4xl mb-4">My Friends</div>
	<div class="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-12 gap-4">
		{#each profile.friends.sort((a, b) => a.friend_since - b.friend_since) as friend}
			<div>
				<img
					src={`https://avatars.steamstatic.com/${friend.avatar}`}
					alt={`${friend.username}'s pfp`}
				/>
			</div>
		{/each}
	</div>
</div>
