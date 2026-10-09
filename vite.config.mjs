
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
root: '.',
build: {
outDir: 'dist',
emptyOutDir: true,
rollupOptions: {
input: {
inicio: resolve(process.cwd(), 'html/index.html'),
cadastro: resolve(process.cwd(), 'html/cadastro.html'),
projeto: resolve(process.cwd(), 'html/projeto.html')
}
}
}
});
