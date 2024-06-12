<script>
	import Work from '../components/work.svelte';
	import Hero from '../components/hero.svelte';
	import Nav from '../components/nav.svelte';
	import Projects from '../components/projects.svelte';
import Skills from '../components/skills.svelte';
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
  
	md:my-14
	md:mx-10
  md:px-10
  md:pb-12
"
>
	<Nav />
	<main class="px-8">
		<Hero />
		<Projects />
		<Work />
		<Skills />
	</main>
</div>
