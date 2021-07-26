<script>
	import i18n from '../config/i18n';
	const { projects } = i18n;
</script>

<style>
</style>

<h2 class="section-heading">Projects</h2>
<ul class="grid gap-6 mb-14 mt-10 md:grid-cols-3 ">
	{#each projects as { name, url, tech, description }}
		<li class="shadow px-8 py-6">
			<h3>{name}</h3>
      <p class="my-4">{description}</p>
      <div class="flex flex-wrap mb-3">
        {#each tech as item}
           <span class="bg-blue-100 text-blue-900 px-2 mr-2 mb-2 rounded">{item}</span>
        {/each}
      </div>
      <a href={url} class="text-blue-500 hover:underline">Visit</a>
		</li>
	{/each}
</ul>
