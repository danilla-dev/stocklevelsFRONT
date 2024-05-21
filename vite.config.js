import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/stocklevelsFRONT/',
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'https://stocklevels-d7391a6e76fd.herokuapp.com',
				changeOrigin: true,
				rewrite: path => path.replace(`/^\/api/, ''`),
			},
		},
	},
})
