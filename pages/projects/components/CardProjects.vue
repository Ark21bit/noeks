<template>
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-15 text-gray-dark">
        <div class="flex-1 flex flex-col lg:flex-row gap-4 justify-between">
            <p class="text-lg leading-1.4 font-bold">{{ year }}</p>
            <NuxtImg :src="previewImg" format="webp" sizes="calc(100vw-2rem) lg:376px" width="376" quality="100" height="376" alt="" class="h-94 lg:max-w-94 w-full object-cover" />
        </div>
        <div class="flex-1 flex flex-col gap-5">
            <h2 class="text-2xl leading-1.4 font-Montserrat font-bold">{{ title }}</h2>
            <p class="text-lg leading-1.6 grow">{{ description }}</p>
            <NuxtLink class="mt-1 lg:mt-6 text-sm text-orange font-bold underline uppercase hover:opacity-80 transition-opacity" :to="slug">Подробнее</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/projects';

defineProps<Pick<Project, 'description' | 'previewImg' | 'title' | 'year'> & { slug?: string }>()
</script>