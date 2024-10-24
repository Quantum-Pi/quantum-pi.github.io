<script lang="ts">
	import EldenRing from './ER/Overview_ER.svelte';
	import Genshin from './Genshin/Overview_Genshin.svelte';
	import ER from '../svg/ER.svelte';
	import Eso from '../svg/ESO.svelte';
	import { onMount, afterUpdate, beforeUpdate } from 'svelte';

	type Mode = 'GI' | 'ER';

	let previous: Mode | '' = '';
	let mode: Mode = 'GI';

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

	beforeUpdate(() => {
		const active = document.querySelector('#game-showcases-casual div.active');
		if (active) {
			ro.unobserve(active);
		}
	});

	afterUpdate(() => {
		const active = document.querySelector('#game-showcases-casual div.active');
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
	<button class="cursor-pointer" on:click={() => setMode('GI')} tabindex="0" title="GI Showcase">
		<Eso --size="48px" --color={mode === 'GI' ? '#8F865E' : 'white'} />
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

<div id="game-showcases-casual" class="relative w-full">
	<div
		class={`absolute min-h-screen ${isActive('GI')} ${isHidden('GI')} ${isFadeIn('GI')} ${isFadeOut(
			'GI'
		)}`}
	>
		<Genshin />
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
