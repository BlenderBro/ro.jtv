<template>
	<div class="page">
		<!--Page Title-->
		<section class="page-title" style="background-color:#333333">
			<div class="auto-container">
				<h1>Program TV</h1>
				<ul class="page-breadcrumb">
					<li><a href="/">Acasa</a></li>
					<li>Program TV</li>
				</ul>
			</div>
		</section>
		<!--End Page Title-->
		
		<!--Faq Section-->
		<section class="faq-page-section">
			<div class="auto-container">
				<div class="row clearfix">
									
				</div>
			</div>
		</section>
		<!--End Faq Section-->   
	</div>
</template>
<script>
export default {
	name:'SchedulePage',
	mounted: function(){

		//remove current active
		// let activeRoute = document.querySelectorAll('li.dropdown');
		// console.log(activeRoute)
		// if(activeRoute.length > 0){
		// 	for(let i=0; i<activeRoute.length; i++){
		// 		activeRoute[i].classList.remove('current');
		// 	}
			
		// }
		// console.log(activeRoute)

		// // show as active in menu
		// let activeRouteParent = document.querySelector('.router-link-active').closest('li');
		// activeRouteParent.classList.add('current');
		// console.log('program')
	}
}
</script>


