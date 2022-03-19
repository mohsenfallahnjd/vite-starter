<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import { HelloWorld } from '@components/index.ts';
    import { ref, Ref } from 'vue';
    import { useMeta } from 'vue-meta';
    import { useSimpleStore } from '@/stores/simple.ts';

    const inputValue : Ref<number|string> = ref();
    const store = useSimpleStore();

    useMeta({
        title: 'Home page',
    });
</script>

<template>
    <div>
        <img
            alt="Vue logo"
            src="@/assets/logo.png"
        >
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

        <h3>{{ $t('home.pinia') }}</h3>
        <button
            :disabled="!store.rawItems.length"
            @click="store.rawItems = []"
        >
            <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
            {{ `Clear all` }}
        </button>
        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
        <input
            v-model="inputValue"
            type="text"
            @keyup.enter="store.addItem(inputValue); inputValue = ''"
        >
        <button @click="store.addItem(inputValue); inputValue = ''">
            <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
            {{ `Add` }}
        </button>
        <ul>
            <li
                v-for="item in store.items"
                :key="`${item.name}-${item.amount}`"
            >
                <button @click="store.removeItem(item.name)">
                    <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
                    {{ `decrease` }}
                </button>
                {{ `Name item: ${item.name}\t | \t Amount: ${item.amount}` }}
            </li>
        </ul>
    </div>
</template>

<style src="@/modules/home/scss/home.scss" lang="scss" />
