import { defineConfig, presetIcons, presetTypography, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetTypography(),
    presetUno()
  ],
  transformers: [
    transformerVariantGroup()
  ]
})
