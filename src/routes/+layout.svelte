<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	 
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	let { children } = $props();
</script>

<svelte:head>
  <!-- SEO Meta Tags -->
  <meta name="author" content="Matthew DeGuzman" />

  <!-- Open Graph / Facebook -->
  <meta property="og:title" content="Final Review Snacks" />
  <meta property="og:description" content="Voting for COP3530 Final Review snacks." />
  <meta property="og:image" content="https://vote.matthewdeguzman.info/favicon.png" />
  <meta property="og:url" content="https://vote.matthewdeguzman.info" />
  <meta property="og:type" content="website" />
</svelte:head>

{@render children()}
