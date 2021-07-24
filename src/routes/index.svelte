<script>
	import Hero from '../components/hero.svelte';
	import Nav from '../components/nav.svelte';
</script>

<style>
	.main {
		max-width: 1320px;
	}
	
	@media (min-width: 768px) {
		.main {
			border-radius: 40px;
		}
	}

</style>

<div
	class="
  main
  bg-white
  w-full
  
	md:mt-14
	md:mx-10
  md:px-12
"
>
	<Nav />
	<main class="px-12">
		<Hero />
	</main>
</div>

