<script lang="ts">
	import { globalState } from '../state/state.svelte';
</script>

{#if globalState.imagePreview}
    <button class="btn preset-filled-primary-500 fixed top-8 left-16 z-20" onclick={() => (globalState.imagePreview=undefined)}>Close</button>
    <div class="img-container fixed top-0 left-0 w-screen h-screen">
        <div class="flex justify-center items-center w-full h-full">
            {@render globalState.imagePreview()}
        </div>
    </div>
{/if}

<style>
    .img-container {
        background-color: rgba(0, 0, 0, 0.925);
        z-index: 10;
    }
</style>

