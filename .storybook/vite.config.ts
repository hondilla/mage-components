import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { UserConfigExport } from 'vite'

export default async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react()],
  })
}
