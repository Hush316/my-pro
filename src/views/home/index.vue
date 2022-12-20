<template>
    <div class="title">
        HOME BIUBIU
        <div class="title-msg">msg</div>
    </div>
    <UseVueUse></UseVueUse>
</template>
<script setup lang="ts">
import UseVueUse from '@/components/useVueUse';
</script>
<style lang="less" scoped>
.title {
    font-weight: bolder;

    &-msg {
        font-size: 40px;
    }
}
</style>
