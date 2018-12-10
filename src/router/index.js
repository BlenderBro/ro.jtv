import Vue from 'vue'
import Router from 'vue-router'

// import pages here
import PageNotFound from '@/pages/404'
import Home from '@/pages/homePage'
import Schedule from '@/pages/schedulePage'
import EUjobs from '@/pages/euJobsPage'
import ROjobs from '@/pages/roJobsPage'
import WatchStream from '@/pages/watchStreamPage'
import Team from '@/pages/teamPage'
import Contact from '@/pages/contactPage'



Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	scrollBehavior(){
		return {x:0, y:0};
	},
	routes: [
		{path: '*', name:'404', component: PageNotFound},
		{ path: '/', name: 'Home', component: Home },
		{ path: '/program', name: 'Schedule', component: Schedule },
		{ path: '/oferte-de-munca-eu', name: 'EUjobs', component: EUjobs },
		{ path: '/oferte-de-munca-ro', name: 'ROjobs', component: ROjobs },
		{ path: '/echipa', name: 'Team', component: Team },
		{ path: '/contact', name: 'Contact', component: Contact },
		{ path: '/live', name: 'WatchStream', component: WatchStream }
	]
})
