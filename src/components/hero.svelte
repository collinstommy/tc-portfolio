<script>
	import i18n from '../config/i18n';
	import Cta from './cta.svelte';

	const {
		hero: { description }
	} = i18n;
</script>

<div
	class="
  flex
  flex-col
  items-center
  py-14
  md:px-20

  md:flex-row
"
>
	<div class="image-border rounded-full p-4 mb-6 md:mr-10 image-border md:w-5/12">
		<img class="profile rounded-full" src="profile.jpg" alt="Tom Collins" />
	</div>
	<div class="flex flex-col items-center md:items-start md:w-7/12">
		<p class="text-gray-400 text-sm">Web Developer</p>
		<h1 class="font-bold text-3xl my-2">Tom Collins</h1>
		<p class="my-3 text-gray-500 text-sm leading-relaxed">
			{description}
		</p>
		<div class="flex flex-col items-center md:flex-row">
			<Cta href="https://www.google.com">Contact</Cta>
		</div>
	</div>
</div>

<style>
	.image-border {
		box-shadow: 0 0 40px 0 rgb(0 0 0 / 10%);
	}

	.profile {
	}
</style>
