import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
import adapterStatic from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapterStatic({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
