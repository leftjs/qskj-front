import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Router from 'vue-router'
/* eslint-disable no-new */

Vue.use(Router)

var router = new Router()

router.map({
	'/': {
		component: Home
	}
})

router.redirect({
	'*': "/"
})

router.start(App, "#app")
