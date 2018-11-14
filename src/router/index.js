import Vue from 'vue'
import Router from 'vue-router'

// import pages here
import Home from '@/pages/homePage'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', name: 'Home', component: Home }
	]
})
