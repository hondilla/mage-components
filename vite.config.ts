import react from '@vitejs/plugin-react'
import { resolve }  from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

export default async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
				outDir: ['dist'],
				include: ['src/**/*.{ts,tsx}'],
				exclude: ['src/**/_*.{ts,tsx}', 'src/**/*.{test,spec,stories}.{ts,tsx}'],
      }),
      typescriptPaths({ preserveExtensions: true })
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/components/index.ts'),
        name: 'MageComponents',
        formats: ['es', 'umd'],
        fileName: (format) => `mage-components.${format}.js`,
      },
      rollupOptions: {
				external: ["react", "react-dom", "react/jsx-runtime", "@emotion/styled", "@emotion/react"],
        output: {
					globals: {
						react: "React",
						"react-dom": "ReactDOM",
						"react/jsx-runtime": "react/jsx-runtime"
					},
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
			include: ['src/**/*.{test,spec}.{ts,tsx}'],
			setupFiles: ['./tests/setup.js']
    },
  })
}
