<script lang="ts">
	import EldenRing from './ER/Overview_ER.svelte';
	import ElderScrollsOnline from './ESO/Overview_ESO.svelte';
	import ER from '../svg/ER.svelte';
	import Eso from '../svg/ESO.svelte';

	type Mode = 'ESO' | 'ER';

	let previous: Mode | '' = '';
	let mode: Mode = 'ESO';

	$: isHidden = (m: Mode) => (!(m === mode || m === previous) ? 'hidden' : '');
	$: isFadeIn = (m: Mode) => (m === mode ? 'fadein' : '');
	$: isFadeOut = (m: Mode) => (m === previous ? 'fadeout' : '');

	$: setMode = (m: Mode) => {
		if (m === mode) return;
		previous = mode;
		mode = m;
	};
</script>

<div class="text-white text-lg flex gap-8 w-full justify-center mb-4">
	<button class="cursor-pointer" on:click={() => setMode('ESO')} tabindex="0">
		<Eso --size="48px" --color={mode === 'ESO' ? '#8F865E' : 'white'} />
	</button>
	<button class="cursor-pointer" on:click={() => setMode('ER')} tabindex="0">
		<ER --size="48px" --color={mode === 'ER' ? '#ffbc75' : 'white'} />
	</button>
</div>

<div class="relative w-full h-screen">
	<div class={`absolute ${isHidden('ESO')} ${isFadeIn('ESO')} ${isFadeOut('ESO')}`}>
		<ElderScrollsOnline />
	</div>
	<div class={`absolute ${isHidden('ER')} ${isFadeIn('ER')} ${isFadeOut('ER')}`}>
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
