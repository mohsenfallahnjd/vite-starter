<script setup lang="ts">
/* eslint-disable @intlify/vue-i18n/no-raw-text */
/* eslint-disable require-jsdoc */
    import { useRegisterSW } from 'virtual:pwa-register/vue';

    const {
        offlineReady,
        needRefresh,
        updateServiceWorker,
    }: any = useRegisterSW();

    const close = async () => {
        offlineReady.value = false;
        needRefresh.value = false;
    };
</script>

<template>
    <div
        v-if="offlineReady || needRefresh"
        class="pwa-toast"
        role="alert"
    >
        <div class="message">
            <span v-if="offlineReady">
                App ready to work offline
            </span>
            <span v-else>
                New content available, click on reload button to update.
            </span>
        </div>
        <button
            v-if="needRefresh"
            @click="updateServiceWorker"
        >
            Reload
        </button>
        <button @click="close">
            Close
        </button>
    </div>
</template>

<style src="./index.scss" lang="scss" />
