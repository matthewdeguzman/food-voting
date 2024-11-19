<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import { selectedCategory } from '$lib/stores';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { fly } from 'svelte/transition';
	import Category from '$lib/components/category/Category.svelte';
	let { data }: { data: PageData } = $props();
	const categories = data.categories;
	let otherChecked = $state(false);
	let formResponse = null;

	$effect(() => {
		if (otherChecked) selectedCategory.set('');
	});
</script>

<svelte:head>
    <title>
        Final Review | Vote
    </title>
</svelte:head>

<div class="grid h-screen grid-cols-[auto_350px_auto] bg-black text-white mt-8">
	<div class="col-start-2 flex h-full items-center">
		<form class="flex flex-col gap-6" method="POST">
			<h1 class="text-center text-4xl font-bold">Final Review Snacks</h1>
			<p class="mb-6 text-center">
				Please select your desired snack for the final exam review this Wednesday. If you cannot
				eat any/don't like the available options, please enter a snack in the other category!
			</p>
			{#each categories as { name, emoji }}
				<Category {name} {emoji} selected={name === $selectedCategory} />
			{/each}

			<input
				type="text"
				name="category"
				id="category"
				class="hidden"
				bind:value={$selectedCategory}
			/>

			<div class="mt-4 flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<Checkbox id="other" bind:checked={otherChecked} />
					<Label
						for="other"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>Add other category</Label
					>
				</div>
				<input
					class:invisible={!otherChecked}
					type="text"
					oninput={(e) => {
						selectedCategory.set(e.target.value);
					}}
					class="w-full rounded-2xl border border-solid border-white bg-transparent px-4 py-2 text-white"
					placeholder="Other"
				/>
			</div>

			<div class:invisible={$selectedCategory === ''} class="mt-8 flex flex-col items-center">
				<button
					class="w-fit rounded-full border border-solid border-white px-6 py-2 hover:bg-white hover:text-black"
					>Submit</button
				>
			</div>
		</form>
	</div>
</div>
