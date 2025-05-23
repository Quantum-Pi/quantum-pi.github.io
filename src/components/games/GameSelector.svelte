<script lang="ts">
	import EldenRing from './ER/Overview_ER.svelte';
	import ElderScrollsOnline from './ESO/Overview_ESO.svelte';
	import ER from '../svg/ER.svelte';
	import Eso from '../svg/ESO.svelte';
	import { onMount } from 'svelte';

	type Mode = 'ESO' | 'ER';

	let previous: Mode | '' = $state('');
	let mode: Mode = $state('ESO');

	const ro = new ResizeObserver((entries) => {
		const height = entries[0].target.clientHeight;
		const container = document.querySelector('#game-showcases');
		container?.setAttribute('style', `height: ${height}px`);
	});

	const adjustContainerHeight = () => {
		const container = document.querySelector('#game-showcases');
		const active = document.querySelector('#game-showcases div.active');
		const height = active?.getBoundingClientRect().height;
		container?.setAttribute('style', `height: ${height}px`);
	};

	onMount(() => {
		adjustContainerHeight();
	});

	$effect.pre(() => {
		if (mode) {
			const active = document.querySelector('#game-showcases div.active');
			if (active) {
				ro.unobserve(active);
			}
		}
	});

	$effect(() => {
		if (mode) {
			const active = document.querySelector('#game-showcases div.active');
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
	<button class={`pb-2 ${isActive('ESO') ? 'border-b-2 border-[#8F865E] cursor-default' : 'border-b-2 border-transparent hoverable'}`} onclick={() => setMode('ESO')} tabindex="0" title="ESO Showcase">
		<Eso --size="48px" --color={mode === 'ESO' ? '#8F865E' : 'white'} />
	</button>
	<button
		class={`pb-2 ${isActive('ER') ? 'border-b-2 border-[#ffbc75] cursor-default' : 'border-b-2 border-transparent hoverable'}`}
		onclick={() => setMode('ER')}
		tabindex="0"
		title="Elden Ring Showcase"
	>
		<ER --size="48px" --color={mode === 'ER' ? '#ffbc75' : 'white'} />
	</button>
</div>

<div id="game-showcases" class="relative w-full">
	<div
		class={`absolute min-h-screen ${isActive('ESO')} ${isHidden('ESO')} ${isFadeIn(
			'ESO'
		)} ${isFadeOut('ESO')}`}
	>
		<ElderScrollsOnline />
	</div>
	<div
		class={`absolute min-h-screen ${isActive('ER')} ${isHidden('ER')} ${isFadeIn('ER')} ${isFadeOut(
			'ER'
		)}`}
	>
		<EldenRing />
	</div>
</div>

<style>
	.hoverable {
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: scale(1.1);
			border-bottom: 2px solid rgba(255, 255, 255, 0.2);
		}
	}

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
