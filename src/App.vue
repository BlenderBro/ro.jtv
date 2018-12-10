<template>
	<div id="app">
		<div class="page-wrapper">
			<Header></Header>
			<!-- menu -->
			<transition name="page" mode="out-in">
    			<router-view></router-view>
  			</transition>
			<!-- <router-view></router-view> -->
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Header from '@/template_partials/headerPartial'
import Footer from '@/template_partials/footerPartial'

export default {
	name: "app",
	components: {
		Header,
		Footer
	}  
}
</script>
<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s, transform .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  /* transform: translateX(-30%); */
}
</style>
