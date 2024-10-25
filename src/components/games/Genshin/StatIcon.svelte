<script lang="ts">
	import type { StatKey } from 'enka-network-api';

	export let stat: StatKey;
	// export let style: string = '';
</script>

<i class={`icon-${stat}`} style="">
	<span class="path1" /><span class="path2" />
</i>
