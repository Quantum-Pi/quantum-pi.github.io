<script lang="ts">
	import BGDesktop from '../../../assets/bg-genshin.jpg?enhanced&w=3840;2560;1800&blur=3&effort=max&fit=cover&format=webp';
	import BGMobile from '../../../assets/bg-eso-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';

	import characters from '$lib/genshin_agg';
	import CharacterCard from '../../genshin/CharacterCard/CharacterCard.svelte';
	import MiniCharacter from '../../genshin/MiniCharacter.svelte';
	import type { GenshinCharacter } from '$lib/genshin_agg';

	const sortMiniCharacter = (a: GenshinCharacter, b: GenshinCharacter) => {
		// 1) Rarity
		// 2) Level
		// 3) Constellation
		if (a.stars === b.stars) {
			if (a.level === b.level) {
				return b.constellation - a.constellation;
			}
			return b.level - a.level;
		}
		return b.stars - a.stars;
	};
</script>

<div>
	<div class="background sticky top-0 left-0 -z-10">
		<enhanced:img
			src={BGDesktop}
			sizes="(min-width:2700px) 3840px, (min-width:2100px) 2560px, (min-width:768px) 1800px"
			alt="Background image"
			class="hidden md:block"
		/>
		<enhanced:img
			src={BGMobile}
			sizes="(min-width:1440px) 1600px, (min-width:1080px) 1280px, (min-width:750px) 640px"
			alt="Background image"
			class="md:hidden"
		/>
	</div>
	<div class=" w-full mt-[-90vh] pb-[10vh] flex justify-center items-center flex-col">
		<div class="w-fit h-full grid gap-6 grid-cols-7 mb-8">
			{#each characters.sort(sortMiniCharacter) as c}
				<MiniCharacter character={c} />
			{/each}
		</div>
		<div class="character-grid w-[95%] h-full grid gap-y-8 grid-cols-1">
			{#each characters as c}
				{#if c.key === 'Yelan' || c.key === 'Arlecchino' || c.key === 'Xiao'}
					<CharacterCard character={c} />
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	@media (min-width: 1900px) {
		.character-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.background img {
		position: relative;
		object-fit: cover;
		width: 100vw;
		height: 102vh;
	}

	.background::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background: linear-gradient(
				90deg,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 0) 10%,
				rgba(0, 0, 0, 0) 90%,
				rgba(0, 0, 0, 1) 100%
			),
			linear-gradient(
				0deg,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 0) 15%,
				rgba(0, 0, 0, 0) 85%,
				rgba(0, 0, 0, 1) 100%
			);
	}
</style>
