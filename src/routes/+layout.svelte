<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../../styles/style.css'
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
  	<title>Tin Nguyen</title>
</svelte:head>

{@render children()}
