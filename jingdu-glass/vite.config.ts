import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // Optional: Log to console to verify key is loaded (masked for security)
  if (env.API_KEY) {
    console.log(`✅ API_KEY loaded: ${env.API_KEY.substring(0, 5)}...`);
  } else {
    console.log("⚠️ API_KEY not found in environment variables. AI features will run in Demo Mode.");
  }

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})
