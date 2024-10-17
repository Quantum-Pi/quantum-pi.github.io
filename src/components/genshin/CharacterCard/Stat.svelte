<script lang="ts">
	export let name: string;
	export let icon: string;
	export let value: string | undefined;

	const valueNum = value ? parseFloat(value.replace(/[^0-9]/g, '')) : undefined;
	const isEleDmgBonus = icon.includes('DamageBonus') && !icon.includes('physical');
</script>

{#if valueNum && valueNum > 0}
	<span class="mb-2"
		><i
			class={`${icon} align-middle text-sm`}
			style={`color: ${isEleDmgBonus ? 'var(--element)' : 'white'}`}
		>
			<span class="path1" /><span class="path2" />
		</i>{name}</span
	>
	<span>{value}</span>
{/if}
