import Vue from 'vue'
import Home from '@/pages/homePage'

describe('homePage.vue', () => {
	it('should render correct contents', () => {
		const Constructor = Vue.extend(Home)
		const vm = new Constructor().$mount()
		expect(vm.$el.querySelector('.title .text-center').textContent)
			.to.equal('Foo')
	})
})
