<script lang="ts">
	interface Props {
		src: string;
		rounded?: boolean;
		size?: number;
	}

	let { src, rounded = false, size = 128 }: Props = $props();
</script>

<img
	{src}
	alt="pfp"
	style={`width: ${size}px; height: ${size}px`}
	class={`${rounded ? 'rounded-full' : ''}`}
/>
