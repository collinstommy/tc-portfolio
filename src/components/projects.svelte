<script>
	import i18n from '../config/i18n';
	const { projects } = i18n;
</script>

<h2 id="projects" class="scroll  section-heading">Projects</h2>
<ul class="grid gap-6 mb-28 mt-10 md:grid-cols-3">
	{#each projects as { name, url, tech, description }}
		<li class="shadow px-8 py-6">
			<h3>{name}</h3>
			<p class="my-4">{description}</p>
			<div class="flex flex-wrap mb-3">
				{#each tech as item}
					<span class="bg-blue-100 text-blue-900 px-2 mr-2 mb-2 rounded">{item}</span>
				{/each}
			</div>
			<a href={url} class="text-blue-700 hover:underline">Visit</a>
		</li>
	{/each}
</ul>
