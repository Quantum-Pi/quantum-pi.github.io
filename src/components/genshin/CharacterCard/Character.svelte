<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import { getCharacterImage, type CharacterCacheKey } from '$lib/genshin_cache';

	export let character: GenshinCharacter;
	export let name = character.key as CharacterCacheKey;

	getCharacterImage(name, 'burst');

	const getConClass = (con: number) => (con <= 4 ? 'unlocked' : 'locked');

	const ranking = (
		((character.ranking?.ranking ?? 0) / (character.ranking?.outOf ?? 1)) *
		100
	).toFixed(1);
</script>

<div class="w-1/3 h-full relative">
	<div class="absolute z-10 pl-4 pt-4 text-white flex flex-col">
		<span>{character.key}</span>
		<span>Lv. {character.level}</span>
		<span>Fr. TODO</span>
		<span>Top {ranking}%</span>
	</div>
	<div class="flex flex-col gap-y-3 absolute z-10 pl-4 pb-4 top-full -translate-y-full">
		<enhanced:img
			class={`skill ${getConClass(1)} w-6`}
			src={getCharacterImage(name, 'con_0')}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(2)} w-6`}
			src={getCharacterImage(name, 'con_1')}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(3)} w-6`}
			src={getCharacterImage(name, 'con_2')}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(4)} w-6`}
			src={getCharacterImage(name, 'con_3')}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(5)} w-6`}
			src={getCharacterImage(name, 'con_4')}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(6)} w-6`}
			src={getCharacterImage(name, 'con_5')}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
	</div>
	<div class="flex flex-col gap-y-4 absolute z-10 right-0 bottom-[55%] translate-y-full">
		<div style:--level={character.talent.auto}>
			<enhanced:img
				class="skill level w-6"
				src={getCharacterImage(name, 'normal')}
				sizes="(min-width: 128px) 128px"
				alt={`con 0 icon`}
			/>
		</div>
		<div style:--level={character.talent.skill + (character.constellation >= 3 ? 3 : 0)}>
			<enhanced:img
				class="skill level w-6"
				src={getCharacterImage(name, 'skill')}
				sizes="(min-width: 128px) 128px"
				alt={`con 0 icon`}
			/>
		</div>
		<div style:--level={character.talent.burst + (character.constellation >= 5 ? 3 : 0)}>
			<enhanced:img
				class="skill level w-6"
				src={getCharacterImage(name, 'burst')}
				sizes="(min-width: 128px) 128px"
				alt={`con 0 icon`}
			/>
		</div>
	</div>
	<enhanced:img
		id="splash"
		class="w-full h-full absolute object-cover scale-150"
		src={getCharacterImage(name, 'splashImage')}
		sizes="(min-width: 600px) 600px"
		alt={`con 0 icon`}
	/>
</div>

<style>
	.skill {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		position: relative;
	}

	.skill.locked {
		filter: brightness(50%);
		box-shadow: 0px 0px 1px 1px rgba(45, 178, 255, 1);
	}

	picture:has(> .skill.locked) {
		position: relative;
	}

	picture:has(> .skill.locked)::before {
		content: '';
		background: url(lock.svg);
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		height: 24px;
		filter: invert(100%);
		transform: scale(0.4);
		z-index: 10;
	}

	.skill.unlocked {
		box-shadow: 0px 0px 3px 2px rgba(45, 178, 255, 0.9);
	}

	.skill.level {
		box-shadow: 0px 0px 1px 0.5px rgba(255, 255, 255, 0.9);
	}

	div:has(> picture .skill.level)::before {
		counter-reset: variable var(--level);
		content: counter(variable);
		display: block;
		height: 12px;
		font-size: 12px;
		line-height: 11px;
		position: absolute;
		color: white;
		background-color: rgba(0, 0, 0, 0.9);
		border-radius: 25%;
		padding: 0px 2px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 75%);
		z-index: 10;
	}
	div:has(> picture .skill.level) {
		position: relative;
	}

	picture:has(> #splash) {
		position: absolute;
		top: 0;
		left: 0;
		min-height: 100%;
		min-width: 100%;
		z-index: 0;
		mask-image: linear-gradient(90deg, transparent 0%, white 30%, white 70%, transparent 100%);
	}
</style>
