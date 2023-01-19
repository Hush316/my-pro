<script setup lang="ts">
import UseVueUse from '@/components/useVueUse';
import { useDark, useToggle } from '@vueuse/core';
import { watch } from 'vue';
console.log(UseVueUse);

const isDark = useDark();
const toggleDark = useToggle(isDark);
watch(
    () => isDark.value,
    (values) => {
        console.log('变了', values);
    },
);

const sum = () => {
    let a = 0.1;
    let b = 0.2;
    return (a * 10 + b * 10) / 10;
};
</script>

<template>
    <h2>{{ sum() }}</h2>
    <div i-mdi:account-child-circle color-blue text-size-20px></div>
    <div i-icon-park-twotone-winking-face colo text-size-20px color-blue></div>
    <main px-16 py-40 text-center>
        <i i-logos-unocss text-48 inline-block color-blue />
        <p mt-15 text-20 font-bold color-gray-400>UnoCSS</p>
        <p text-16 mt-15 inline-flex gap-10>
            <i icon-btn dark:i-carbon-moon i-carbon-sun @click="toggleDark()" />
            <a
                icon-btn
                i-carbon-logo-github
                href="https://github.com/zclzone"
                target="_blank"
                title="GitHub"
            />
        </p>
        <section
            mt-20
            w-360
            mx-auto
            flex
            flex-wrap
            justify-around
            p-10
            card-shadow
            rounded-10
            dark:b
        >
            <div w-50 h-50 b-1 rounded-5 f-c-c p-10 m-20>
                <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            </div>
            <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
                <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                <span w-6 h-6 rounded-3 self-end bg-black dark:bg-white />
            </div>
            <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
                <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                <span w-6 h-6 rounded-3 self-center bg-black dark:bg-white />
                <span w-6 h-6 rounded-3 self-end bg-black dark:bg-white />
            </div>
            <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
                <div flex-col justify-between>
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                </div>
                <div flex-col justify-between>
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                </div>
            </div>
            <div
                w-50
                h-50
                b-1
                rounded-5
                flex-col
                justify-between
                items-center
                p-10
                m-20
            >
                <div flex w-full justify-between>
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                </div>
                <div w-6 h-6 rounded-3 bg-black dark:bg-white />
                <div flex w-full justify-between>
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                </div>
            </div>
            <div w-50 h-50 b-1 rounded-5 flex-col justify-between p-10 m-20>
                <div flex w-full justify-between>
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                </div>
                <div flex w-full justify-between>
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                </div>
                <div flex w-full justify-between>
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                    <span w-6 h-6 rounded-3 bg-black dark:bg-white />
                </div>
            </div>
        </section>

        <p mt-20 text-14 color-gray-400>Flex骰子</p>
    </main>
</template>
