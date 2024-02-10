import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    build: {
      target: 'esnext',
    },
    define: {
      __NAME__: JSON.stringify('dynamic'),
    },
  };
});
