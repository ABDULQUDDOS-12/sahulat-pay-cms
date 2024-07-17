import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      globalModulePaths: ['src/components/Non-reusable Components/Dashboard Overview Card/Index.module.css'],
    },
  },
})
  