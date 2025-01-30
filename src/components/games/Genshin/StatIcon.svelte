<script lang="ts">
	import type { StatKey } from 'enka-network-api';

	interface Props {
		stat: StatKey; // export let style: string = '';
	}

	let { stat }: Props = $props();
</script>

<i class={`icon-${stat}`} style="">
	<span class="path1"></span><span class="path2"></span>
</i>
