<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    window.addEventListener('keydown', (e) => {
        if (e.metaKey && e.key === 'k') {
            console.log('search', e);
        }
    });
});
</script>

<template>
    <div
        w-20
        h-300
        bg-blue
        transform
        transition-all-500
        hover:rotate-90
        hover:w-300
    ></div>
    <div w-200 h-30 transform rotate-90>你猜我猜不猜</div>
    <div class="view_port">
        <div class="polling_message">Listening for dispatches</div>
        <div class="cylon_eye"></div>
    </div>

    <RouterView />
</template>

<style scoped>
.polling_message {
    color: white;
    float: left;
    margin-right: 2%;
}

.view_port {
    background-color: black;
    height: 25px;
    width: 100%;
    overflow: hidden;
}

.cylon_eye {
    background-color: red;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9) 25%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.9) 75%
    );
    color: white;
    height: 100%;
    width: 20%;

    -webkit-animation: 4s linear 0s infinite alternate move_eye;
    animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye {
    from {
        margin-left: -20%;
    }
    to {
        margin-left: 100%;
    }
}
@keyframes move_eye {
    from {
        margin-left: -20%;
    }
    to {
        margin-left: 100%;
    }
}
</style>
