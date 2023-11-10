import { defineConfig } from 'vite'
import viteTsconfigPaths from "vite-tsconfig-paths"
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), vanillaExtractPlugin()],
})
