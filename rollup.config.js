import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import copy from 'rollup-plugin-copy'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
	    file: 'public/litdevcomponents.js',
	    format: 'iife', // immediately-invoked function expression — suitable for <script> tags,
	    inlineDynamicImports : true,
        name: 'MTApplication',
	    sourcemap: false
	},
	plugins: [
	    css({
	    	output: 'litdevcomponents.css'
		}),
		copy({
			targets: [
				{src: 'src/index.html', dest: 'public'},
				{src: 'src/assets/*', dest: 'public/assets'},
				{src: 'data/json/*', dest: 'public/json'}
			]
		}),
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser() // minify, but only in production
	]
};





