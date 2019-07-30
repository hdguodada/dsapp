const API = {
    async getBanner() {
        let res = await $fetch('banner');
        return res.data;
    },
    async getNav() {
        let res = await $fetch('nav');
        return res.data;
    },
    async getIndex() {
        let res = await $fetch('index');
        return res.data;
    }
};