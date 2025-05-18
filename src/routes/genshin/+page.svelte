<script lang="ts">
	import BGDesktop from '../../assets/bg-genshin.jpg?enhanced&w=3840;2560;1800&blur=3&effort=max&fit=cover&format=webp';
	import BGMobile from '../../assets/bg-eso-mobile.png?enhanced&w=1600;1280;640&blur=1.25&effort=max&fit=cover&format=webp';

	import characters, { artifacts, weapons } from '$lib/genshin_agg';
	import type { GenshinCharacter, GenshinWeapon } from '$lib/genshin_agg';
	import type { CharacterCacheKey, WeaponCacheKey } from '$lib/genshin_cache';
	import Overview from '../../components/games/Overview.svelte';
	import MiniCharacter from '../../components/games/Genshin/MiniCharacter.svelte';
	import MiniWeapon from '../../components/games/Genshin/MiniWeapon.svelte';
	import CharacterCard from '../../components/games/Genshin/CharacterCard/CharacterCard.svelte';
	import MiniArtifact from '../../components/games/Genshin/MiniArtifact.svelte';
	import PreviewImageContainer from '../../components/PreviewImageContainer.svelte';

	const characterMap: Record<CharacterCacheKey, GenshinCharacter> = characters.reduce(
		(acc, character) => {
			acc[character.key] = character;
			return acc;
		},
		{} as Record<CharacterCacheKey, GenshinCharacter>
	);

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

	const sortMiniWeapon = (a: GenshinWeapon, b: GenshinWeapon) => {
		// 1) Rarity
		// 2) Level
		// 3) Refinement
		if (a.stars === b.stars) {
			if (a.level === b.level) {
				return b.refinement - a.refinement;
			}
			return b.level - a.level;
		}
		return b.stars - a.stars;
	};

	const weaponMaxCache = new Map<
		WeaponCacheKey,
		{ level: number; refinement: number; added: boolean }
	>();

	const filterMiniWeapon = (w: GenshinWeapon) => {
		let valid = false;
		if (w.stars === 3 && w.level > 1) valid = true;
		if (w.stars >= 4) valid = true;

		if (valid) {
			if (weaponMaxCache.has(w.key)) {
				const cache = weaponMaxCache.get(w.key);
				if (
					cache &&
					(cache.level < w.level || (cache.level === w.level && cache.refinement < w.refinement))
				) {
					weaponMaxCache.set(w.key, { level: w.level, refinement: w.refinement, added: false });
				}
			} else {
				weaponMaxCache.set(w.key, { level: w.level, refinement: w.refinement, added: false });
			}
		}
		return valid;
	};

	const filterDuplicateWeapons = (w: GenshinWeapon) => {
		const cache = weaponMaxCache.get(w.key);
		if (cache) {
			if (w.location) {
				return true;
			}
			if (cache.level === w.level && cache.refinement === w.refinement && !cache.added) {
				cache.added = true;
				weaponMaxCache.set(w.key, cache);
				return true;
			}
			return false;
		}
	};
</script>

<Overview bgDesktop={BGDesktop} bgMobile={BGMobile}>
	<div class="flex flex-col items-center justify-center">
		<div
			class="w-fit h-full grid gap-6 grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-10 mb-8"
		>
			{#each characters.sort(sortMiniCharacter) as c}
				<MiniCharacter character={c} />
			{/each}
		</div>
		<div
			class="w-fit h-full grid gap-6 grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-10 mb-8"
		>
			{#each weapons
				.filter(filterMiniWeapon)
				.sort(sortMiniWeapon)
				.filter(filterDuplicateWeapons) as w}
				<MiniWeapon weapon={w} />
			{/each}
		</div>
		<div class="w-[95vw] md:w-[90vw] h-full overflow-x-scroll">
			<div class="flex gap-x-4 mb-12">
				<CharacterCard width={950} character={characterMap['Arlecchino']} />
				<CharacterCard width={950} character={characterMap['Yelan']} />
				<CharacterCard width={950} character={characterMap['Xingqiu']} />
				<CharacterCard width={950} character={characterMap['Xilonen']} />
			</div>
			<div class="flex gap-x-4 mb-12">
				<CharacterCard width={950} character={characterMap['Xiao']} />
				<CharacterCard width={950} character={characterMap['Xianyun']} />
				<CharacterCard width={950} character={characterMap['Faruzan']} />
				<CharacterCard width={950} character={characterMap['Furina']} />
			</div>
			<div class="flex gap-x-4 mb-4">
				<CharacterCard width={950} character={characterMap['Clorinde']} />
				<CharacterCard width={950} character={characterMap['Fischl']} />
				<CharacterCard width={950} character={characterMap['Chevreuse']} />
				<CharacterCard width={950} character={characterMap['Mavuika']} />
			</div>
		</div>
		<!-- <div class="character-grid w-[90%] sm:w-[95%] h-full grid gap-y-8 grid-cols-1">
			{#each characters as c}
				{#if c.key === 'Yelan' || c.key === 'Arlecchino' || c.key === 'Xiao' || c.key === 'Furina'}
					<CharacterCard character={c} />
				{/if}
			{/each}
		</div> -->
		<div
			class="w-fit h-full grid gap-6 grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 mt-8"
		>
			{#each artifacts as a}
				<MiniArtifact artifact={a} />
			{/each}
		</div>
	</div>
</Overview>
<PreviewImageContainer />

<style>
	@media (min-width: 1950px) {
		.character-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
