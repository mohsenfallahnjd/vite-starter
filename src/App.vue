<script setup lang="ts">
    import { useMeta } from 'vue-meta';
    import { ref, Ref } from 'vue';
    import { ReloadPWA } from '@components/index.ts';
    import { useI18n } from 'vue-i18n';

    const { locale } = useI18n();
    const webTitle: Ref<string> = ref('Your website base title');

    useMeta({
        title    : '',
        htmlAttrs: {
            lang: locale.value,
            amp : true,
        },
        charset    : 'UTF-8',
        description: '',
        og         : {
            site_name  : webTitle.value,
            title      : '',
            description: '',
            image      : [''],
            url        : '',
        },
        twitter: {
            title      : '',
            description: '',
            image      : [''],
            creator    : '',
            card       : '',
            url        : '',
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
