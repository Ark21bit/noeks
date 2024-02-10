import { defineConfig, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup, presetIcons } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                Montserrat: { name: "Montserrat", weights: [400, 500, 600, 700] }
            },
        }),
        presetIcons({
            collections: {
                custom: FileSystemIconLoader(
                    './assets/iconsUnoCSS',
                    svg => svg.replace(/#fff/, 'currentColor')
                )
            },
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
                'flex-shrink': '0',
            },
        })
    ],
    blocklist: [
        'container'
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ],
    theme: {
        colors: {
            gray: {
                dark: '#393939',
                DEFAULT: '#e5e5e5'
            },
            orange: '#cda177'
        }
    },
    rules: [
        [/^leading-([\.\d]+)$/, ([_, num]) => ({ "line-height": `${num}` })]
    ]
})