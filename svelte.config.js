import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
		// adapter: adapterStatic({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// })
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
