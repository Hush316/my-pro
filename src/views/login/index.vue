<template>
    <div h-2200>
        <h2 ref="target">hello world</h2>
    </div>
    <button @click="show = !show">changeStatus</button>
    <h2 v-if="show" class="title" w-200 h-200 bg-blue text-44>APP</h2>
</template>
<script setup lang="ts">
import { useElementVisibility, useFps, useWindowScroll } from '@vueuse/core';
import { onMounted, ref } from 'vue';
const target = ref<HTMLElement>();
const targetIsVisible = useElementVisibility(target);
const { x, y } = useWindowScroll();

const fps = useFps();
const value = ref('string');
const show = ref(false);
console.log(value.value);

onMounted(() => {
    console.log(fps.value, 'fps');
    window.addEventListener('scroll', () => {
        console.log('正在滚动', targetIsVisible.value);
        console.log('滚动值', x.value, y.value);
    });
});
</script>
<style scoped>
@keyframes titleIn {
    from {
        transform: translateY(150px);
    }

    to {
        transform: translateY(0px);
    }
}

.title {
    animation: titleIn 1s;
}
</style>
