<script>
	import i18n from '../config/i18n';

	const { work, education } = i18n;
</script>

<style lang="scss">
	.experience {
		max-width: 700px;
		margin: 0 auto;
	}
</style>

<!-- <div class="md:px-10 md:grid grid-cols-2 gap-x-10"> -->

<div class="py-10">
	<h2 class="section-heading">Experience</h2>
	<div class="md:grid grid-cols-2 gap-x-28">
		{#each work as { company, duration, title, duties }}
			<div class="mt-9">
				<div class="flex justify-between items-baseline">
					<span class="text-black text-lg">{company}</span>
					<span class="ml-4">{duration}</span>
				</div>

				<div class="mt-2">
					<h3 class="my-1">{title}</h3>
					<ul class="list-disc list-inside">
						{#each duties as duty}
							<li class="my-1">{duty}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mt-10 mb-14">
	<h2 class="section-heading">Education</h2>
	<div class="md:grid grid-cols-2 gap-x-28">
		{#each education as { course, college, result }}
			<div class="mt-6">
				<div class="mt-2">
					<h3 class="my-1">{course}</h3>
				</div>
				<p class="text-black text-lg">{college}</p>
				<p class="">{result}</p>
			</div>
		{/each}
	</div>
</div>
