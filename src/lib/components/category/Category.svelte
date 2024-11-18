<script lang="ts">
	import { selectedCategory } from '$lib/stores';
	let { name, emoji, selected } = $props();
</script>

<button
	type="button"
	class="flex flex items-center gap-2 rounded-2xl border border-solid border-white px-4 py-2 hover:bg-white hover:text-black"
	class:bg-white={selected}
	class:text-black={selected}
	onclick={() => selectedCategory.set(name)}
>
	<h1>{emoji}</h1>
	<h1 class="text-lg font-medium">{name}</h1>
</button>
