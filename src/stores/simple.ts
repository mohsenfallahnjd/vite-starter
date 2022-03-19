// @ts-check
// https://pinia.vuejs.org/
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useSimpleStore = defineStore({
    id: 'simple',

    state: () => ({
        /**
         * @type {string[]}
         */
        rawItems: [],
    }),

    getters: {
        /**
         * @param {*} state
         * @returns {Array<{ name: string; amount: number }>}
         */
        items: (state: any): Array<{ name: string; amount: number; }> => state.rawItems.reduce((items: { name: any; amount: number; }[], item: any) => {
            const existingItem = items.find((it: { name: any; }) => it.name === item);

            if (!existingItem) {
                items.push({ name: item, amount: 1 });
            } else {
                // eslint-disable-next-line no-plusplus
                existingItem.amount++;
            }

            return items;
        }, []),
    },

    actions: {
        /**
         * Add item to the cart
         *
         * @param {string} name
         */
        addItem(name: any) {
            if (name) {
                this.rawItems.push(name);
            }
        },

        /**
         * Remove item from the cart
         *
         * @param {string} name
         */
        removeItem(name: any) {
            const i = this.rawItems.lastIndexOf(name);
            if (i > -1) {
                this.rawItems.splice(i, 1);
            }
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSimpleStore, import.meta.hot));
}
