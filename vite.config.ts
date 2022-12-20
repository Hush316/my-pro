import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [vue(), unocss()],
	server: {
		port: 8080,
		hmr: {
			host: '127.0.0.1',
			port: 8080,
		},
		proxy: {
			'/api': {
				target: 'http://codercba.com:1888/api',
				changeOrigin: true,
				rewrite: (path: string) => path.replace(/^\/api/, ''),
			},
		},
	},
});
