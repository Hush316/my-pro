<template>
    <div>
        <h3>MOUSE:{{ x }} and{{ y }}</h3>
    </div>
</template>
<script setup lang="ts">
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
</script>
<style scoped></style>
