import Vue from 'vue'
import Router from 'vue-router'

// import pages here
import PageNotFound from '@/pages/404'
import Success from '@/pages/success'
import Home from '@/pages/homePage'
import About from '@/pages/aboutPage'
import Schedule from '@/pages/schedulePage'
import Jobs from '@/pages/jobsPage'
import EUjobs from '@/pages/euJobsPage'
import ROjobs from '@/pages/roJobsPage'
import WatchStream from '@/pages/watchStreamPage'
import CV from '@/pages/cvPage'
import Team from '@/pages/teamPage'
import Blog from '@/pages/blogPage'
import Contact from '@/pages/contactPage'
import Terms from '@/pages/termsPage'
import Skype from '@/pages/skype'

// single for testing only
import Single from '@/pages/singleBlogPage'
import RoJobSingle from '@/pages/roJobSingle' 
import EuJobSingle from '@/pages/euJobSingle' 



Vue.use(Router)

// const adminPath = window.location.replace("http://stackoverflow.com");

export default new Router({
	// mode: 'history',
	base: __dirname,
	scrollBehavior(){
		return {x:0, y:0};
	},
	routes: [
		{path: '*', name:'404', component: PageNotFound},
		{path: '/success', name:'success', component: Success},
		{ path: '/', name: 'Home', component: Home },
		{ path: '/despre-noi', name: 'About', component: About },
		{ path: '/program', name: 'Schedule', component: Schedule },
		{ path: '/oferte-de-munca', name: 'Jobs', component: Jobs },
		{ path: '/oferte-de-munca-eu', name: 'EUjobs', component: EUjobs },
		{ path: '/oferte-de-munca-eu/:slug', name: 'EuJobSingle', component: EuJobSingle },
		{ path: '/oferte-de-munca-ro', name: 'ROjobs', component: ROjobs },
		{ path: '/oferte-de-munca-ro/:slug', name: 'RoJobSingle', component: RoJobSingle },
		{ path: '/echipa', name: 'Team', component: Team },
		{ path: '/adauga-cv', name: 'CV', component: CV },
		{ path: '/contact', name: 'Contact', component: Contact },
		{ path: '/stiri', name: 'News', component: Blog },
		{ path: '/articol/:slug', name: 'Single', component: Single },
		{ path: '/live', name: 'WatchStream', component: WatchStream },
		{ path: '/politica-de-confidentialitate', name: 'Terms', component: Terms },
		{ path: '/intra-in-direct', name: 'Skype', component: Skype }
		// { path: '/admin', name: 'WatchStream', redirect: adminPath}
	]
})
