<script module lang="ts">
	import type { GenshinCharacter } from '$lib/genshin_agg';
	import type { Picture } from 'vite-imagetools';

	type Info =
		| {
				type: 'constellation';
				image: Picture;
				constellation: number;
		  }
		| {
				type: 'talent';
				image: Picture;
				level: number;
		  };
</script>

<script lang="ts">
	interface Props {
		info: Info;
		character: GenshinCharacter;
	}

	let { info, character }: Props = $props();

	const getConClass = (con: number) =>
		info.type === 'constellation'
			? con <= character.constellation
				? 'unlocked'
				: 'locked'
			: 'locked';
</script>

{#if info.type === 'constellation'}
	<enhanced:img
		class={`skill ${getConClass(info.constellation)}`}
		src={info.image}
		sizes="(min-width: 128px) 128px"
		alt={`Constellation ${info.constellation} icon`}
	/>
{:else}
	<div>
		<enhanced:img
			class="skill level w-6"
			src={info.image}
			sizes="(min-width: 128px) 128px"
			alt={`Talent icon`}
		/>
		<div class="level-bubble">
			{info.level}
		</div>
	</div>
{/if}

<style>
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
		&:has(:global(> .skill.locked)) {
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

	div:has(:global(> picture .skill.level)) {
		position: relative;
	}
</style>
