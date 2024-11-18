<script lang="ts">
	let {
		name,
		emoji,
		votes,
		allVotes
	}: { name: string; emoji: string; votes: number; allVotes: number } = $props();
</script>

<div
	class="flex flex-row items-center gap-4 rounded-xl border border-solid border-white px-6 py-2"
	style="--fill-percentage: {(votes / allVotes) *
		100}%; background: linear-gradient(to right, rgba(210, 210, 210, 0.5) var(--fill-percentage), transparent var(--fill-percentage));"
>
	<h1>{emoji}</h1>
	<h1 class="grow">{name}</h1>
	<h1>{votes}</h1>
</div>
