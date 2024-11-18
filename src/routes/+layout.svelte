<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
  <!-- Icons -->
  <link rel="icon" href="/favicon.png" />

  <!-- SEO Meta Tags -->
  <meta name="author" content="Matthew DeGuzman" />
  <link rel="icon" href="/favicon.png" />

  <!-- Open Graph / Facebook -->
  <meta property="og:title" content="Final Review Snacks" />
  <meta property="og:description" content="Voting for COP3530 Final Review snacks." />
  <meta property="og:image" content="https://vote.matthewdeguzman.info/favicon.png" />
  <meta property="og:url" content="https://vote.matthewdeguzman.info" />
  <meta property="og:type" content="website" />
</svelte:head>

{@render children()}
