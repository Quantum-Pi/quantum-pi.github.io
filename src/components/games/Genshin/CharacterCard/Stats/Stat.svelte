<script lang="ts">
	interface Props {
		name: string;
		icon: string;
		value: string | undefined;
	}

	let { name, icon, value }: Props = $props();

	const valueNum = value ? parseFloat(value.replace(/[^0-9]/g, '')) : undefined;
	const isEleDmgBonus = icon.includes('DamageBonus') && !icon.includes('physical');

	const statNameCondencer = (name: string, extra: boolean = false) => {
		let newName = name.replace('DMG Bonus', 'Bonus');
		return extra
			? newName.replace('Energy Recharge', 'ER').replace('Elemental Mastery', 'EM')
			: newName;
	};
</script>

{#if valueNum && valueNum > 0}
	<span class="mb-2 flex items-center"
		><i
			class={`${icon} align-middle text-md mr-2 mt-[2px]`}
			style={`color: ${isEleDmgBonus ? 'var(--element)' : 'white'}`}
		>
			<span class="path1"></span><span class="path2"></span>
		</i>
		<span>{statNameCondencer(name, true)}</span>
	</span>
	<span class="ml-3">{value}</span>
{/if}
