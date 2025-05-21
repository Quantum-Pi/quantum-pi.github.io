<script lang="ts">
	import type { StatKey } from 'enka-network-api';

	interface Props {
		stat: StatKey; // export let style: string = '';
		color?: string;
	}

	let { stat, color = '#fff' }: Props = $props();
</script>

<i class={`icon-${stat}`} style={`color: ${color}`}>
	<span class="path1"></span><span class="path2"></span>
</i>
