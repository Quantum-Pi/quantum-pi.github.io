<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import type { CharacterResource } from '../CharacterCard.svelte';
	import Skill from './Skill.svelte';

	interface Props {
		character: GenshinCharacter;
		resources: CharacterResource['character'];
	}

	let { character, resources }: Props = $props();

	const ranking = (
		((character.ranking?.ranking ?? 0) / (character.ranking?.outOf ?? 1)) *
		100
	).toFixed(1);
</script>

<div class="w-1/3 h-full relative z-10">
	<div class="info absolute z-10 pl-4 pt-3 text-white flex flex-col">
		<span>{character.key}</span>
		<span>Lv. {character.level}</span>
		<!-- <span>Fr. TODO</span> -->
		<span>Top {ranking}%</span>
	</div>
	<div class="flex flex-col gap-y-3 absolute z-10 pl-4 pb-4 top-full -translate-y-full">
		<Skill info={{ type: 'constellation', image: resources.con_0, constellation: 1 }} {character} />
		<Skill info={{ type: 'constellation', image: resources.con_1, constellation: 2 }} {character} />
		<Skill info={{ type: 'constellation', image: resources.con_2, constellation: 3 }} {character} />
		<Skill info={{ type: 'constellation', image: resources.con_3, constellation: 4 }} {character} />
		<Skill info={{ type: 'constellation', image: resources.con_4, constellation: 5 }} {character} />
		<Skill info={{ type: 'constellation', image: resources.con_5, constellation: 6 }} {character} />
	</div>
	<div class="flex flex-col gap-y-4 absolute z-10 right-[5%] bottom-[56%] translate-y-full">
		<Skill
			info={{ type: 'talent', image: resources.normal, level: character.talent.auto }}
			{character}
		/>
		<Skill
			info={{
				type: 'talent',
				image: resources.skill,
				level: character.talent.skill + (character.constellation >= 3 ? 3 : 0)
			}}
			{character}
		/>
		<Skill
			info={{
				type: 'talent',
				image: resources.burst,
				level: character.talent.burst + (character.constellation >= 5 ? 3 : 0)
			}}
			{character}
		/>
	</div>
	<enhanced:img
		id="splash"
		class="w-full h-full absolute object-cover scale-125 -translate-y-2"
		src={resources.splashImage}
		sizes="(min-width: 1024px) 1024px"
		alt={`con 0 icon`}
	/>
</div>

<style>
	.info {
		row-gap: calc(16px * calc(var(--scale) - 1));
	}

	:global(picture:has(> #splash)) {
		position: absolute;
		top: 0;
		left: 0;
		min-height: 100%;
		min-width: 100%;
		z-index: 0;
		mask-image: linear-gradient(90deg, transparent 0%, white 30%, white 70%, transparent 100%);
	}
</style>
