import Vue from 'vue';

import Header from '../components/layouts/Header.vue';

const app = new Vue({
    el: '.app',
    components: {
        'nav-bar': Header
    }
})