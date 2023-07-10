/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mirage: ['MADE Mirage', 'sans-serif']
			},
			keyframes: {
				blob: {
					'0%': {
						'border-radius': '50% 50% 50% 50%',
						transform: 'rotate(0deg)',
						scale: '1'
					},
					'25%': {
						'border-radius': '60% 40% 50% 50%',
						transform: 'rotate(45deg)'
					},
					'50%': {
						'border-radius': '50% 50% 40% 60%',
						transform: 'rotate(90deg)',
						scale: '1.2'
					},
					'75%': {
						'border-radius': '50% 50% 60% 40%',
						transform: 'rotate(135deg)'
					},
					'100%': {
						'border-radius': '50% 50% 50% 50%',
						transform: 'rotate(360deg)',
						scale: '1'
					}
				}
			},
			animation: {
				blob: 'blob 8s ease-in-out infinite'
			}
		},
		plugins: []
	}
}
