<template>
	<div id="app">
		<div class="page-wrapper">
			<Header></Header>
			<!-- menu -->
			<router-view></router-view>
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