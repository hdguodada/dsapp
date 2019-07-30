new Vue({
    el: '#app',
    data: {
        tab_now: '首页',
        search_bar_focus: false, // 搜索栏是否聚焦，true 隐藏其他元素， 否则同时显示
        banner_list: null, // 轮播图列表
        dataEnd: false, // 数据是否加载完成
        nav_list: null, // 导航栏列表
        free_experience: null, //免费体验视频的data
    },
    async created() {
        this.dataEnd = false;
        this.banner_list = await this.getBanner();
        this.nav_list = await this.getNav();
        const res = await this.getIndex();
        this.free_experience = res.free_experience;
        this.dataEnd = true;
    },
    mounted() {

    },
    watch: {
        dataEnd(val) {
            if (val) {
                console.log('app.js');
            }
        }
    },
    computed: {},
    methods: {
        ...API,
        search_focus: function (e) {
            this.search_bar_focus = true;
        },
        cancal_search_bar_focus: function (e) {
            this.search_bar_focus = false;
        }
    }
});
