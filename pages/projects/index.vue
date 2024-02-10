<template>
    <div class="flex flex-col gap-15">
        <div class="flex gap-4 justify-between">
            <h1 class="text-gray-dark text-5xl leading-1.2 uppercase font-Montserrat font-bold">Проекты</h1>
            <button class="flex gap-5 items-center text-gray-dark text-lg leading-1.4 font-bold">
                <span class="i-custom:arrow-long w-13 h-3"></span>
                На главную
            </button>
        </div>
        <div class="pt-15 border-t border-gray">
            <CardProjects v-for="project in projects" v-bind="project" class="py-15 border-t border-gray first:pt-0 first:border-t-none" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import type { Project } from '~/types/projects';

const { data: projects } = await useAsyncData(() => queryContent<Project & ParsedContent>('projects').only(['title', 'description', 'previewImg', 'year', '_path']).find(), {
    transform: (data) => data.map(a => ({
        title: a.title,
        description: a.description,
        slug: a._path,
        previewImg: a.previewImg,
        year: a.year,
    }))
})
</script>