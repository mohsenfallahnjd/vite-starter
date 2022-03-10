<script setup lang="ts">
    import { useMeta } from 'vue-meta';
    import { ref, Ref } from 'vue';
    import { ReloadPWA } from '@components/index.ts';

    const webTitle: Ref<string> = ref('Mohsen Fallahnejad officials website');

    useMeta({
        title    : 'Front-end developer',
        htmlAttrs: {
            lang: 'en',
            amp : true,
        },
    });
</script>

<template>
    <div id="app">
        <ReloadPWA />

        <metainfo>
            <template #title="{ content }">
                {{ content ? `${webTitle} | ${content}`: webTitle }}
            </template>
        </metainfo>

        <router-view />
    </div>
</template>

<style src="@/assets/scss/style.scss" lang="scss" />
