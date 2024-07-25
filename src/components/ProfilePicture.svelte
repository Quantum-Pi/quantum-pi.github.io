<script lang="ts">
	export let src: string;
	export let rounded: boolean = false;
	export let size: number = 128;
</script>

<img
	{src}
	alt="pfp"
	style={`width: ${size}px; height: ${size}px`}
	class={`${rounded ? 'rounded-full' : ''}`}
/>
