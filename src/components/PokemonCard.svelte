<script>
	export let pokemon;
</script>

<a
	href={`/pokemon/${pokemon.id}`}
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<img src={pokemon.image} alt={pokemon.name} />
	<h2 class="uppercase text-xl">{pokemon.name}</h2>
</a>
