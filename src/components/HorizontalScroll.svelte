<script lang="ts">
	import { onMount } from 'svelte';
	import LeftIcon from '~icons/teenyicons/left-solid';
	import RightIcon from '~icons/teenyicons/right-solid';

	interface Props {
		i: number;
		className?: string;
		maxWidth?: number;
		maxHeight?: number;
		children?: import('svelte').Snippet;
	}

	let {
		i = $bindable(),
		className = '',
		maxWidth = $bindable(-1),
		maxHeight = $bindable(-1),
		children
	}: Props = $props();

	let elems: HTMLCollection | undefined = undefined;
	let n = $state(0);

	onMount(() => {
		elems =
			document.querySelector('#h-scroll-container')?.children ??
			document.createDocumentFragment().children;
		n = elems?.length ?? 0;

		if (maxHeight === -1 || maxWidth === -1) {
			for (let j = 0; j < n; j++) {
				const h = elems.item(j)?.clientHeight ?? 0;
				maxHeight = maxHeight < h ? h : maxHeight;
				const w = elems.item(j)?.clientWidth ?? 0;
				maxWidth = maxWidth < w ? w : maxWidth;
				if (j !== i) {
					elems?.item(j)?.classList.add('hidden');
				}
			}
		}
		document
			.querySelector('#h-scroll-container')
			?.setAttribute('style', `height: ${maxHeight}px; width: ${maxWidth}px`);

		document
			.querySelectorAll('#h-scroll-container picture')
			.forEach((ele) => ele.classList.add('absolute'));
	});

	const adjustStyles = (prev: number) => {
		for (let j = 0; j < n; j++) {
			if (j === i) {
				elems?.item(j)?.classList.remove('hidden');
				elems?.item(j)?.classList.remove('fadeout');
				elems?.item(j)?.classList.add('fadein');
			} else if (j === prev) {
				elems?.item(j)?.classList.remove('hidden');
				elems?.item(j)?.classList.remove('fadein');
				elems?.item(j)?.classList.add('fadeout');
			} else {
				elems?.item(j)?.classList.add('hidden');
				elems?.item(j)?.classList.remove('fadeout');
				elems?.item(j)?.classList.remove('fadein');
			}
		}
	};

	let inc = $derived(() => {
		let prev = i;
		if (i >= n - 1) {
			i = 0;
		} else {
			i++;
		}
		adjustStyles(prev);
	});
	let dec = $derived(() => {
		let prev = i;
		if (i === 0) {
			i = n - 1;
		} else {
			i--;
		}
		adjustStyles(prev);
	});
</script>

<div class={`flex gap-4 items-center ${className}`}>
	<button class="cursor-pointer text-white hover:text-yellow-300" onclick={inc} title="Scroll Left">
		<LeftIcon />
	</button>
	<div id="h-scroll-container" class="flex flex-col relative">
		{@render children?.()}
	</div>
	<button
		class="cursor-pointer text-white hover:text-yellow-300"
		onclick={dec}
		title="Scroll Right"
	>
		<RightIcon />
	</button>
</div>

<style>
	:global(#h-scroll-container picture) {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	:global(#h-scroll-container picture.hidden) {
		display: none;
	}

	:global(.fadein) {
		animation: slide-in-up 1s forwards;
	}

	:global(.fadeout) {
		animation: slide-out-down 1s forwards;
	}

	@keyframes slide-in-up {
		from {
			top: 110%;
			opacity: 0;
		}

		to {
			top: 0%;
			opacity: 1;
		}
	}
	@keyframes slide-out-down {
		0% {
			top: 0%;
			opacity: 1;
		}

		99% {
			top: -110%;
			opacity: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
		}
		100% {
			height: 0;
			width: 0;
			/* opacity: 0; */
			z-index: -10;
		}
	}
</style>
