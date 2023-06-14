<script>
	import '../app.postcss';
	import '../app.css';
	import Mynavbar from '$lib/components/Mynavbar.svelte';
</script>

<div class="flex flex-col flex-grow">
	<Mynavbar />
</div>
<slot />
