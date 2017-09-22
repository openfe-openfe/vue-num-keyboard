import Vue from 'vue'
import App from './App'

import KeyBoard from './vue-num-keyboard';
Vue.use(KeyBoard);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
