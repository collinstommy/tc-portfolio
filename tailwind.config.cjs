const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  // purge: [
  //   './src/**/*.svelte',
  //   './src/**/*.js',
  //   './public/*.html',
  // ],
  theme: {
    extend: {}
  },
  plugins: [],
};

module.exports = config;
