<script lang="ts">
	interface Props {
		name: string;
		icon: string;
		value: string | undefined;
	}

	let { name, icon, value }: Props = $props();

	const valueNum = value ? parseFloat(value.replace(/[^0-9]/g, '')) : undefined;
	const isEleDmgBonus = icon.includes('DamageBonus') && !icon.includes('physical');
</script>

{#if valueNum && valueNum > 0}
	<span class="mb-2"
		><i
			class={`${icon} align-middle text-sm`}
			style={`color: ${isEleDmgBonus ? 'var(--element)' : 'white'}`}
		>
			<span class="path1"></span><span class="path2"></span>
		</i>{name}</span
	>
	<span class="ml-3">{value}</span>
{/if}
