<script lang="ts">
	import EldenRing from './ER/Overview_ER.svelte';
	import ElderScrollsOnline from './ESO/Overview_ESO.svelte';
	import ER from '../svg/ER.svelte';
	import Eso from '../svg/ESO.svelte';
	import { onMount, afterUpdate, beforeUpdate } from 'svelte';

	type Mode = 'ESO' | 'ER';

	let previous: Mode | '' = '';
	let mode: Mode = 'ESO';

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

	beforeUpdate(() => {
		const active = document.querySelector('#game-showcases div.active');
		if (active) {
			ro.unobserve(active);
		}
	});

	afterUpdate(() => {
		const active = document.querySelector('#game-showcases div.active');
		if (active) {
			ro.observe(active);
		}
		setTimeout(adjustContainerHeight, 1000);
	});

	$: isHidden = (m: Mode) => (!(m === mode || m === previous) ? 'hidden' : '');
	$: isFadeIn = (m: Mode) => (m === mode ? 'fadein' : '');
	$: isFadeOut = (m: Mode) => (m === previous ? 'fadeout' : '');
	$: isActive = (m: Mode) => (m === mode ? 'active' : '');

	$: setMode = (m: Mode) => {
		if (m === mode) return;
		previous = mode;
		mode = m;
	};
</script>

<div class="text-white text-lg flex gap-8 w-full justify-center mb-4">
	<button class="cursor-pointer" on:click={() => setMode('ESO')} tabindex="0" title="ESO Showcase">
		<Eso --size="48px" --color={mode === 'ESO' ? '#8F865E' : 'white'} />
	</button>
	<button
		class="cursor-pointer"
		on:click={() => setMode('ER')}
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
