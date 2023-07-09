/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mirage: ['MADE Mirage', 'sans-serif']
			},
			colors: {
				background: '#252929'
			},
			keyframes: {
				'gradient-spin': {
					'0%': { rotate: '0deg' },
					'50%': { scale: '1 1.3' },
					'100%': { rotate: '360deg' }
				}
			},
			animation: {
				'gradient-spin': 'gradient-spin 6s ease-in-out infinite'
			}
		},
		plugins: []
	}
};
