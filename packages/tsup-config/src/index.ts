import { defineConfig, type Options } from 'tsup'

const configBase: Options = {
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: true,
  outDir: 'build',
}

type Config = ReturnType<typeof defineConfig>

const config = (options?: Options) =>
  ({
    ...configBase,
    ...(options ?? {}),
  }) as Config

export default config
export type { Config, Options }
