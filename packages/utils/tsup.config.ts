import tsupConfig from '@jointorg/tsup-config'

export default tsupConfig({
  entry: ['src/**/*.ts'],
  splitting: true,
})
