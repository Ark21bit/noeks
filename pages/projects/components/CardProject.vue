<template>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-15 text-gray-dark">
        <div class="flex flex-col gap-4 justify-between">
            <h2 class="text-2xl leading-1.4 font-Montserrat font-bold">{{ title }}</h2>
            <p class="text-2xl leading-1.4 font-medium">{{ year }}</p>
        </div>
        <div class="lg:col-span-3 flex flex-col gap-5">
            <p class="text-lg leading-1.6">{{ description }}</p>
            <NuxtImg :src="img" format="webp" width="885" quality="100" height="446" alt="" class="h-82 lg:h-111.5 w-full object-cover" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProjectInfo } from '~/types/projects';

defineProps<ProjectInfo>()
</script>