<template>
    <div>
        <h2>{{ userStore.name }}</h2>
        <button @click="changeName">changeName</button>
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();

const changeName = () => {
    userStore.updateName('nb');
};
</script>
<style scoped></style>
