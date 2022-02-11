<script>
	import FaHeart from 'svelte-icons/fa/FaHeart.svelte';
	import { team } from '../store/pokestore';

	export let pokemon;
	export let onClick;
	let isSelected = false;

	$: {
		console.log($team);
		isSelected = $team.includes(pokemon.id);
	}
</script>

<div
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center relative"
>
	<img src={pokemon.image} alt={pokemon.name} />
	<a href={`/pokemon/${pokemon.id}`}
		><h2 class="uppercase text-xl hover:underline">{pokemon.name}</h2></a
	>
	<div class="absolute top-6 right-6">
		<button
			on:click={() => onClick(pokemon.id)}
			class={`w-6 h-6  ${isSelected ? 'text-red-600' : 'text-gray-400'}`}
		>
			<FaHeart />
		</button>
	</div>
</div>
