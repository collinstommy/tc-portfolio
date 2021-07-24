import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
import adapterStatic from '@sveltejs/adapter-static';

const config = {
	kit: {
		target: 'body',
	},
	preprocess: [
		preprocess({
			"postcss": true
		}),
	],
};

export default config;
