import tsupConfig from '@jointorg/tsup-config'

export default tsupConfig({
  entry: ['src/index.ts', 'src/enums.ts'],
  splitting: true,
})
