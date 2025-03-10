import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			gridTemplateAreas: {
				'pyramid-lg': ['. . a a . .', '. b b c c .', 'd d e e f f'],
				'pyramid-md': ['a b', 'c d', 'e f'],
				'pyramid-sm': ['a', 'b', 'c', 'd', 'e', 'f'],
				'footer-md': ['b a c'],
				'footer-sm': ['a a', 'b c'],
				footer: ['a', 'b', 'c']
			},
			gridTemplateColumns: {
				'pyramid-lg': 'repeat(6, 1fr)',
				'pyramid-md': 'repeat(2, 1fr)',
				'pyramid-sm': 'repeat(1, 1fr)',
				'footer-md': 'repeat(3, 1fr)',
				'footer-sm': 'repeat(2, 1fr)',
				footer: '1fr',
				'16': 'repeat(16, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				'pyramid-lg': 'repeat(3, 1fr)',
				'pyramid-md': 'repeat(4, 1fr)',
				'pyramid-sm': 'repeat(6, 1fr)',
				'footer-sm': 'repeat(2, 1fr)',
				footer: 'repeat(3, 1fr)'
			},
			screens: {
				'4k': '2561px',
			},
		}
	},
	plugins: [
		skeleton({
			themes: { preset: ['skeleton'] }
		}),
		// require('@savvywombat/tailwindcss-grid-areas')
	]
} satisfies Config;

export default config;
