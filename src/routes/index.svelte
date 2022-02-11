<script>
	import PokemonCard from '../components/PokemonCard.svelte';
	import { pokemon, fetchPokemon, team, addPokemonToTeam } from '../store/pokestore';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokemon) => {
				const included = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
				return included;
			});
		} else {
			filteredPokemon = [...$pokemon];
		}
	}

	const onFavorite = (id) => {
		addPokemonToTeam(id);
	};

	fetchPokemon();
</script>

<svelte:head>
	<title>Pokedex with SvelteKit</title>
</svelte:head>

<div class="container mx-auto">
	<h1 class="text-4xl text-center my-8 uppercase">Pokedex with SvelteKit</h1>
	<input
		bind:value={searchTerm}
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
		placeholder="Search Pokemon"
	/>
	<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
		{#each filteredPokemon as poke}
			<PokemonCard pokemon={poke} onClick={onFavorite} />
		{/each}
	</div>
</div>
