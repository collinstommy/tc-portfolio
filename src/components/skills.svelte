<script>
	import i18n from '../config/i18n';

	const {
		tech: { production, side }
	} = i18n;
</script>

<style>
</style>

<div class="py-10 flex flex-col items-start">
	<h2 class="section-heading">Technolgy</h2>
  <div class="grid inline-grid grid-cols-2 mt-10 gap-8">
    <div>
      <h3>Production</h3>
      <ul>
        {#each production as item}
           <li>{item}</li>
        {/each}
      </ul>
    </div>
    <div>
      <h3>Side Projects</h3>
      <ul>
        {#each side as item}
           <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>


