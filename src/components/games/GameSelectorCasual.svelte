<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate and beforeUpdate. Please migrate by hand. -->
<script lang="ts">
	import Stardew from './SDV/Overview_SDV.svelte';
	import Genshin from './Genshin/Overview_Genshin.svelte';
	import SDVIcon from '../svg/SDV.svelte';
	import GenshinIcon from '../svg/GI.svelte';
	import { onMount } from 'svelte';

	type Mode = 'GI' | 'SDV';

	let previous: Mode | '' = $state('');
	let mode: Mode = $state('GI');

	const ro = new ResizeObserver((entries) => {
		const height = entries[0].target.clientHeight;
		const container = document.querySelector('#game-showcases-casual');
		container?.setAttribute('style', `height: ${height}px`);
	});

	const adjustContainerHeight = () => {
		const container = document.querySelector('#game-showcases-casual');
		const active = document.querySelector('#game-showcases-casual div.active');
		const height = active?.getBoundingClientRect().height;
		container?.setAttribute('style', `height: ${height}px`);
	};

	onMount(() => {
		adjustContainerHeight();
	});

	$effect.pre(() => {
		if (mode) {
			const active = document.querySelector('#game-showcases-casual div.active');
			if (active) {
				ro.unobserve(active);
			}
		}
	});

	$effect(() => {
		if (mode) {
			const active = document.querySelector('#game-showcases-casual div.active');
			if (active) {
				ro.observe(active);
			}
			setTimeout(adjustContainerHeight, 1000);
		}
	});

	const isHidden = (m: Mode) => (!(m === mode || m === previous) ? 'hidden' : '');
	const isFadeIn = (m: Mode) => (m === mode ? 'fadein' : '');
	const isFadeOut = (m: Mode) => (m === previous ? 'fadeout' : '');
	const isActive = (m: Mode) => (m === mode ? 'active' : '');

	const setMode = (m: Mode) => {
		if (m === mode) return;
		previous = mode;
		mode = m;
	};
</script>

<div class="text-white text-lg flex gap-8 w-full justify-center mb-4">
	<button class="cursor-pointer" onclick={() => setMode('GI')} tabindex="0" title="GI Showcase">
		<GenshinIcon
			--size="48px"
			--color={mode === 'GI'
				? 'linear-gradient(145deg, rgb(255, 0, 212) 0%, rgb(255, 255, 255) 50%, rgb(0, 247, 255) 100%)'
				: 'white'}
		/>
	</button>
	<button
		class="cursor-pointer"
		onclick={() => setMode('SDV')}
		tabindex="0"
		title="Elden Ring Showcase"
	>
		<SDVIcon --size="48px" --color={mode === 'SDV' ? '#ffbc75' : 'white'} />
	</button>
</div>

<div id="game-showcases-casual" class="relative w-full">
	<div
		class={`absolute min-h-screen ${isActive('GI')} ${isHidden('GI')} ${isFadeIn('GI')} ${isFadeOut(
			'GI'
		)}`}
	>
		<Genshin />
	</div>
	<div
		class={`absolute min-h-screen ${isActive('SDV')} ${isHidden('SDV')} ${isFadeIn(
			'SDV'
		)} ${isFadeOut('SDV')}`}
	>
		<Stardew />
	</div>
</div>

<style>
	.fadein {
		animation: slide-in-right 1s forwards;
	}

	.fadeout {
		animation: slide-out-left 1s forwards;
	}

	@keyframes slide-in-right {
		from {
			transform: translateX(105%);
		}

		to {
			transform: translateX(0%);
		}
	}
	@keyframes slide-out-left {
		0% {
			transform: translateX(0%);
		}

		99% {
			transform: translateX(-105%);
			opacity: 1;
			z-index: 1;
		}
		100% {
			display: none;
			opacity: 0;
			z-index: -10;
		}
	}
</style>
