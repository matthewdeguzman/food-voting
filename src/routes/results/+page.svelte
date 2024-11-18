<script lang="ts">
	import Result from '$lib/components/result/Result.svelte';
	let { data }: { data: PageData } = $props();
	const categories = data.categories;
	let allVotes = $state(0);
	categories.forEach((d) => (allVotes += d.votes));
</script>

<svelte:head>
    <title>
        Final Review | Results
    </title>
</svelte:head>

<div class="grid h-screen grid-cols-[auto_350px_auto] bg-black text-white">
	<div class="col-start-2 flex h-full items-center">
		<div class="flex flex-col gap-4">
			<h1 class="text-center text-4xl font-bold">Results</h1>
			<p class="mb-8 text-center">Thank you for voting! Here are the results :)</p>
			{#each categories as { name, emoji, votes }}
				<Result {name} {emoji} {votes} {allVotes} />
			{/each}
		</div>
	</div>
</div>
