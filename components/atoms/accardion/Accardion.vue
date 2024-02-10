<template>
    <div class="border border-#E5E7EB rounded-xl divide-y divide-#E5E7EB">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const show = ref<string | null>()
const toggle = (name: string) => {
    if (show.value === name) return show.value = null
    show.value = name
}
provide('accardion', {
    show: readonly(show),
    toggle
})
</script>