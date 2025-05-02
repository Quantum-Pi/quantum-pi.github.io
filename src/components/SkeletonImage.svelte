<script lang="ts">
	import type { Picture } from "vite-imagetools";

    type Props = {
        src: Promise<Picture>;
        class?: string;
        ariaLabel?: string;
        sizes: string
        alt?: string;
        skeletonSize?: string;
    };

    let {src, ariaLabel, class: className, sizes, alt, skeletonSize}: Props = $props();

    const src2 = new Promise<Picture>((resolve) => {
       
    });
</script>

{#await src}
    <div class={`loading ${skeletonSize ?? "w-full h-full"}`}>
        <div class="flex items-center justify-center w-full h-full rounded-sm">
            <svg class="max-w-10 w-1/2 max-h-10 h-1/2 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
    </div>
{:then image} 
    <enhanced:img
        src={image}
        aria-labelledby={ariaLabel}
        sizes={sizes}
        alt={alt}
        class={className}
    />
{/await}

<style>
    @keyframes loading {
        0% {
            background: rgba(0, 0, 0, 0.3);
        }
        50% {
            background: rgba(0, 0, 0, 0.5);
        }
        100% {
            background: rgba(0, 0, 0, 0.3);
        }
    }

    .loading {
        animation: loading 2s infinite;
    }
</style>