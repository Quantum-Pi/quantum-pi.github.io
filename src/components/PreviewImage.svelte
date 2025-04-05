<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { globalState } from '../state/state.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		image: Picture;
        ariaLabel: string;
        preivewClass: string;
	};

	let { image, ariaLabel, preivewClass }: Props = $props();
</script>

{#snippet preview()}
    <enhanced:img
        src={image}
        sizes="(min-width:1440px) 1600px, (min-width:1080px) 1280px, (min-width:750px) 640px"
        alt="Background image"
        class="w-auto max-h-[95vh]"
    />
{/snippet}

<button onclick={() => (globalState.imagePreview = preview)} aria-label={ariaLabel}> 
    <enhanced:img
        src={image}
        aria-labelledby={ariaLabel}
        sizes="(min-width:1440px) 1600px, (min-width:1080px) 1280px, (min-width:750px) 640px"
        alt="Background image"
        class={preivewClass}
    />
</button>

<style>
    button {
        transition: 0.2s;
        &:hover {
            transform: scale(1.01);
        }
        &:active {
            transform: scale(0.99);
        }
    }
</style>