import type { NuxtPage } from "nuxt/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@unocss/nuxt', "@nuxt/image", '@nuxt/content'],
    components: [
        '~/components',
        { path: "~/components/atoms", pathPrefix: false },
        {
            path: '~/pages',
            pattern: '*/components/**',
            pathPrefix: false
        }
    ],
    css: ['~/assets/css/main.css'],
    hooks: {
        'pages:extend'(pages) {
            const pagesToRemove: NuxtPage[] = []
            pages.forEach((page) => {
                if (page.path.includes('component')) pagesToRemove.push(page)
            })

            pagesToRemove.forEach((page: NuxtPage) => {
                pages.splice(pages.indexOf(page), 1)
            })
        }
    },
    content: {
        contentHead: false,
        documentDriven: false,
        markdown: {
            mdc: false,
        },
        highlight: false,
    },
})