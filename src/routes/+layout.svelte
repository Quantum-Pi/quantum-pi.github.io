<script>
	import '../app.scss';
	import '$lib/override';
</script>

<slot />

<style lang="scss">
	@use '../app.scss';

	:global(:root) {
		--Cryo: #{app.$cryo};
		--Electro: #{app.$electro};
		--Geo: #{app.$geo};
		--Dendro: #{app.$dendro};
		--Pyro: #{app.$pyro};
		--Hydro: #{app.$hydro};
		--Anemo: #{app.$anemo};
		// --Cryo: linear-gradient(180deg, #{app.$cryo-dark} 50%, #{app.$cryo} 100%);
		// --Electro: linear-gradient(180deg, #{app.$electro-dark} 50%, #{app.$electro} 100%);
		// --Geo: linear-gradient(180deg, #{app.$geo-dark} 50%, #{app.$geo} 100%);
		// --Dendro: linear-gradient(180deg, #{app.$dendro-dark} 50%, #{app.$dendro} 100%);
		// --Pyro: linear-gradient(180deg, #{app.$pyro-dark} 50%, #{app.$pyro} 100%);
		// --Hydro: linear-gradient(180deg, #{app.$hydro-dark} 50%, #{app.$hydro} 100%);
		// --Anemo: linear-gradient(180deg, #{app.$anemo-dark} 50%, #{app.$anemo} 100%);

		--common: #{app.$common};
		--uncommon: #{app.$uncommon};
		--rare: #{app.$rare};
		--epic: #{app.$epic};
		--legendary: #{app.$legendary};
	}
</style>
