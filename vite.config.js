

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Book-Sphere/', // Adjust to your repo name, if it is "todo-app"
});

