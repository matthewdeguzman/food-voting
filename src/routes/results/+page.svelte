<script lang="ts">
	import Result from '$lib/components/result/Result.svelte';
	let { data }: { data: PageData } = $props();
	const categories = data.categories;
	let allVotes = $state(0);
	categories.forEach((d) => allVotes += d.votes);
</script>


<div class="grid h-screen grid-cols-[auto_350px_auto] bg-black text-white">
	<div class="col-start-2 h-full flex items-center">
		<div class="flex flex-col gap-4">
		<h1 class="text-4xl font-bold text-center">Results</h1>
		<p class="text-center mb-8">Thank you for voting! Here are the results :)</p>
			{#each categories as { name, emoji, votes }}
				<Result {name} {emoji} {votes} {allVotes} />
			{/each}
		</div>
	</div>
</div>
