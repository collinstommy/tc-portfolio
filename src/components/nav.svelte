<script>
	const navItems = [
		{ link: '#work', text: 'Work' },
		{ link: '#projects', text: 'Projects' },
		{ link: 'https://blog.tcollins.dev', text: 'Blog' }
	];

	let open = false;

	const toggleMenu = () => {
		open = !open;
		document.querySelector('body').classList.toggle('overflow-hidden');
	};
</script>

<style>
	.mobile-nav {
		position: fixed;
		top: 70px;
		left: auto;
		right: 0;
		z-index: 99;
		background: white;
		width: 100%;
		height: calc(100% - 70px);
		max-width: 280px;
		margin-right: -100%;
		transition: 0.35s margin;
	}

	.open {
		margin-right: 0;
	}
</style>

<header class="hidden md:block">
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
<header class="shadow py-4 px-3 text-lg md:hidden flex justify-between fixed w-full bg-white">
	<p />
	<button on:click={toggleMenu} aria-label={open ? 'Open Menu' : 'Close Menu'}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
			><path fill="none" d="M0 0h24v24H0z" /><path
				d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
			/></svg
		></button
	>
	<ul class="mobile-nav shadow" class:open>
		{#each navItems as item}
			<li class="ml-12 my-3">
				<a class="text-gray-500 hover:text-gray-900 text-sm" href={item.link}>{item.text}</a>
			</li>
		{/each}
	</ul>
</header>
