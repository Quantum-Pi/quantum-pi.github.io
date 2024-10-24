<script lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import { getCharacterImage, type CharacterCacheKey } from '$lib/genshin_cache';
	import type { CharacterResource } from './CharacterCard.svelte';

	export let character: GenshinCharacter;
	export let resources: CharacterResource['character'];
	export let name = character.key as CharacterCacheKey;

	getCharacterImage(name, 'burst');

	const getConClass = (con: number) => (con <= 4 ? 'unlocked' : 'locked');

	const ranking = (
		((character.ranking?.ranking ?? 0) / (character.ranking?.outOf ?? 1)) *
		100
	).toFixed(1);
</script>

<div class="w-1/3 h-full relative z-10">
	<div class="info absolute z-10 pl-4 pt-3 text-white flex flex-col">
		<span>{character.key}</span>
		<span>Lv. {character.level}</span>
		<span>Fr. TODO</span>
		<span>Top {ranking}%</span>
	</div>
	<div class="flex flex-col gap-y-3 absolute z-10 pl-4 pb-4 top-full -translate-y-full">
		<enhanced:img
			class={`skill ${getConClass(1)}`}
			src={resources.con_0}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(2)}`}
			src={resources.con_1}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(3)}`}
			src={resources.con_2}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(4)}`}
			src={resources.con_3}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(5)}`}
			src={resources.con_4}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
		<enhanced:img
			class={`skill ${getConClass(6)}`}
			src={resources.con_5}
			sizes="(min-width: 128px) 128px"
			alt={`con 0 icon`}
		/>
	</div>
	<div class="flex flex-col gap-y-4 absolute z-10 right-[5%] bottom-[56%] translate-y-full">
		<div style:--level={character.talent.auto}>
			<enhanced:img
				class="skill level w-6"
				src={resources.normal}
				sizes="(min-width: 128px) 128px"
				alt={`con 0 icon`}
			/>
			<div class="level-bubble">
				{character.talent.auto}
			</div>
		</div>
		<div style:--level={character.talent.skill + (character.constellation >= 3 ? 3 : 0)}>
			<enhanced:img
				class="skill level w-6"
				src={resources.skill}
				sizes="(min-width: 128px) 128px"
				alt={`con 0 icon`}
			/>
			<div class="level-bubble">
				{character.talent.skill + (character.constellation >= 3 ? 3 : 0)}
			</div>
		</div>
		<div style:--level={character.talent.burst + (character.constellation >= 5 ? 3 : 0)}>
			<enhanced:img
				class="skill level w-6"
				src={resources.burst}
				sizes="(min-width: 128px) 128px"
				alt={`con 0 icon`}
			/>
			<div class="level-bubble">
				{character.talent.burst + (character.constellation >= 5 ? 3 : 0)}
			</div>
		</div>
	</div>
	<enhanced:img
		id="splash"
		class="w-full h-full absolute object-cover scale-150"
		src={resources.splashImage}
		sizes="(min-width: 1024px) 1024px"
		alt={`con 0 icon`}
	/>
</div>

<style lang="scss">
	.info {
		row-gap: calc(16px * calc(var(--scale) - 1));
	}
	.skill {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		position: relative;
		width: calc(24px * var(--scale));
		height: calc(24px * var(--scale));

		&.locked {
			filter: brightness(50%);
			box-shadow: 0px 0px 1px 1px var(--element);
		}

		&.unlocked {
			box-shadow: 0px 0px 3px 2px var(--element);
		}

		&.level {
			box-shadow: 0px 0px 1px 0.5px rgba(255, 255, 255, 0.9);
		}
	}

	.level-bubble {
		color: white;
		display: flex;
		position: absolute;
		color: white;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 40%;
		padding: 0px 2px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
		z-index: 10;
		font-size: 8px;
		line-height: normal;
	}

	picture {
		&:has(> .skill.locked) {
			position: relative;

			&::before {
				content: '';
				background: url(/lock.svg);
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: calc(24px * var(--scale));
				height: calc(24px * var(--scale));
				filter: invert(100%);
				transform: scale(0.4);
				z-index: 10;
			}
		}
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
