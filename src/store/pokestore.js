import { writable } from 'svelte/store';

export const pokemon = writable([]);
export const team = writable([]);

const pokemonDetails = {};
let loaded = false;

export const fetchPokemon = async () => {
	if (loaded) return;

	const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
	const res = await fetch(url);
	const data = await res.json();

	const loadedPokemon = data.results.map((data, index) => {
		const { name } = data;
		const id = index + 1;
		return {
			id,
			name: name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	});

	pokemon.set(loadedPokemon);
};

export const getPokemonById = async (id) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const addPokemonToTeam = (id) => {
	team.update((oldTeam) => {
		const isIncluded = oldTeam.includes(id);
		if (!isIncluded && oldTeam.length <= 5) {
			return [...oldTeam, id];
		}
		return oldTeam;
	});
};
