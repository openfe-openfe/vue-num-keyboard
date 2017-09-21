import Vue from 'vue'

import shKeyboard from './KeyboardInput'

import './fonts/iconfont.css'

export default {
	install (Vue, options = {}) {
		Vue.component('shKeyboard', Vue.extend(shKeyboard));
	}
}