import { join } from 'path';
import type { Config } from 'tailwindcss';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {
			screens: {
				'4k': '2561px',
			},
		}
	},
	plugins: []
} satisfies Config;

export default config;
