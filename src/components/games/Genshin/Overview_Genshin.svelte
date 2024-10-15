<script>
	import characters from '$lib/genshin_agg';
	import CharacterCard from '../../genshin/CharacterCard/CharacterCard.svelte';
</script>

<div>
	<CharacterCard character={characters.find((c) => c.key === 'Yelan') ?? characters[0]} />
</div>
