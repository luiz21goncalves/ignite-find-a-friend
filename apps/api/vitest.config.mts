import tsconfigPath from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPath()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['lcov', 'text', 'text-summary'],
    },
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
  },
})
