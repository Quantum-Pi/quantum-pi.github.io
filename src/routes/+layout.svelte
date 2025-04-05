<script lang="ts">
	import '../app.css';
	import '$lib/override';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}

<style>
	:global(:root) {
		--Cryo: #55ddff;
		--Electro: #b380ff;
		--Geo: #fc0;
		--Dendro: #a5c83b;
		--Pyro: #f95;
		--Hydro: #3e99ff;
		--Anemo: #80ffe6;

		--Cryo_Dark: #0088aa;
		--Electro_Dark: rgb(133.1606299213, 51.4, 255);
		--Geo_Dark: rgb(204, 163.2, 0);
		--Dendro_Dark: rgb(132.9051792829, 161.7976095618, 45.4023904382);
		--Pyro_Dark: rgb(187, 74.8, 0);
		--Hydro_Dark: rgb(0, 97.1531088083, 206.05);
		--Anemo_Dark: rgb(0, 153.2, 123.042519685);
		/* --Cryo: linear-gradient(180deg, #{app.$cryo-dark} 50%, #{app.$cryo} 100%); */
		/* --Electro: linear-gradient(180deg, #{app.$electro-dark} 50%, #{app.$electro} 100%); */
		/* --Geo: linear-gradient(180deg, #{app.$geo-dark} 50%, #{app.$geo} 100%); */
		/* --Dendro: linear-gradient(180deg, #{app.$dendro-dark} 50%, #{app.$dendro} 100%); */
		/* --Pyro: linear-gradient(180deg, #{app.$pyro-dark} 50%, #{app.$pyro} 100%); */
		/* --Hydro: linear-gradient(180deg, #{app.$hydro-dark} 50%, #{app.$hydro} 100%); */
		/* --Anemo: linear-gradient(180deg, #{app.$anemo-dark} 50%, #{app.$anemo} 100%); */

		--common: #fff;
		--uncommon: #1eff00;
		--rare: #0070dd;
		--epic: #a335ee;
		--legendary: #ff8000;
		--mythic: #00e1ff;
	}
</style>
