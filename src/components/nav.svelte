<script>
	const navItems = [
		{ link: '/about', text: 'About' },
		{ link: '/work', text: 'Work' },
		{ link: '/projects', text: 'Projects' },
		{ link: '/contact', text: 'Contact' },
		{ link: '/blog', text: 'Blog' }
	];
</script>

<header
	class="hidden md:block"
>
	<nav class="flex justify-between	mt-10">
		<div />
		<ul class="flex">
			{#each navItems as item}
				<li class="ml-12">
					<a class="text-gray-500 hover:text-gray-900 text-sm" href={item.link}>{item.text}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
<header class="shadow py-4 px-3 text-lg md:hidden">
	<span class="font-bold">Tom</span> Collins
</header>
