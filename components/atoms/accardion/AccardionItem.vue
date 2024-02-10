<template>
    <div class="text-#1E293B text-base leading-normal grid transition-all duration-400 overflow-hidden" :class="isShow ? 'grid-rows-[min-content_1fr]' : 'grid-rows-[min-content_0fr]'">
        <div @click="toggle(IName)" class="flex gap-5 py-4 px-5 hover:text-#4F46E5 font-semibold cursor-pointer" :class="{ 'text-#4F46E5': isShow }">
            <svg class="text-#4F46E5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <defs>
                    <clipPath id="clip2_17277">
                        <rect id="icon" width="20" height="20" fill="white" fill-opacity="0" />
                    </clipPath>
                </defs>
                <rect id="icon" width="20" height="20" fill="#FFFFFF" fill-opacity="0" />
                <g clip-path="url(#clip2_17277)">
                    <path id="Vector" d="M4.16666 10L15.8333 10" stroke="currentColor" stroke-opacity="1" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
                </g>
            </svg>
            <slot name="header" :header="header">
                {{ header }}
            </slot>
        </div>
        <Transition leave-active-class="delay-400">
            <div class="min-h-0" v-show="isShow">
                <div class="mb-4 pl-12 pr-5">
                    <slot :text="text">
                        {{ text }}
                    </slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    header: String,
    text: String,
    name: String,
})

const IName = computed(() => {
    if (props.name) return props.name
    return useId()
})

const { show, toggle } = inject<any>('accardion')
const isShow = computed(() => show.value === IName.value)
/* const isShow = ref(false)
const toggle = () => isShow.value = !isShow.value */
</script>