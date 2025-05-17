import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    fs: {
      strict: true,
      allow: ['.']
    }
  },
  base: './',
  assetsInclude: ['**/*.pdf'],
  build: {
    rollupOptions: {
      output: {
        sanitizeFileName(name) {
          try {
            // Remove spaces and special characters, replace with hyphens
            const sanitized = name
              .replace(/[^\w\-\.]/g, '-')
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-');
            return encodeURIComponent(sanitized);
          } catch {
            // Fallback: remove all non-alphanumeric chars
            return name.replace(/[^\w\-\.]/g, '');
          }
        }
      }
    }
  }
});