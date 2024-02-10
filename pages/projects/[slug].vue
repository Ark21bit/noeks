<template>
    <div class="flex flex-col gap-22.5">
        <div class="flex gap-4 justify-between">
            <h1 class="text-gray-dark text-5xl leading-1.2 uppercase font-Montserrat font-bold">{{ project?.title }}</h1>
            <button class="flex gap-5 items-center text-gray-dark text-lg leading-1.4 font-bold">
                <span class="i-custom:arrow-long w-13 h-3"></span>
                На главную
            </button>
        </div>
        <div class="pt-15 border-t border-gray">
            <CardProject v-for="item in project?.info" v-bind="item" class="py-15 border-t border-gray first:pt-0 first:border-t-none" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import type { Project } from '~/types/projects';
const route = useRoute()

const { data: project } = await useAsyncData(() => queryContent<Project & ParsedContent>(route.path).only(['title', 'info', 'seo']).findOne(), {
    transform: (data) => ({
        title: data.title,
        info: data.info,
        seo: data.seo,
    })
})

useServerSeoMeta({
    ...project.value?.seo,
})
</script>