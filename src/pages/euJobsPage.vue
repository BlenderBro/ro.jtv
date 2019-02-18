<template>
		<div class="page">
		<!--Page Title-->
		<section class="page-title" style="background-color:#333333">
			<div class="auto-container">
				<h1>Oferte de Lucru</h1>
				<ul class="page-breadcrumb">
					<li><a href="/">Acasa</a></li>
					<li>Oferte Uniunea Europeana</li>
				</ul>
			</div>
		</section>
		<!--End Page Title-->
		
		<!--Project Page Section-->
		<section class="project-page-section">
			<div class="auto-container">
				<!--Sec Title-->
				<div class="sec-title centered">
					<!-- <div class="title">Our Best Work</div> -->
					<h2>Oferte de lucru in Uniunea Europeana</h2>
					<div class="seperater"></div>
				</div>
				<!--MixitUp Galery-->
				<div class="mixitup-gallery">
					
					<!--Filter-->
					<!-- <div class="filters text-center clearfix">
						<ul class="filter-tabs filter-btns clearfix">
							<li class="active filter" data-role="button" v-on:click="filter('all')">All</li>
							<li class="filter" data-role="button" v-on:click="filter('renovation')">Renovation</li>
							<li class="filter" data-role="button" v-on:click="filter('isolation')">Isolation</li>
							<li class="filter" data-role="button" v-on:click="filter('construction')">Construction</li>
							<li class="filter" data-role="button" v-on:click="filter('architecture')">Architecutre</li>
						</ul>
					</div> -->
					
					<div class="filter-list row clearfix">
						
						<!--Project Block-->
						<div id="visible" class="project-block mix architecutre all col-md-3 col-sm-12 col-xs-12">
							<div class="inner-box">
								<div class="image">
									<img src="static/images/gallery/5.jpg" alt="" />
									<div class="overlay-box">
										<div class="content">
											<h3>Job</h3>
											<div class="see-project">Detalii <span class="fa fa-angle-right"></span></div>
										</div>
									</div>
									<!--Overlay Two-->
									<div class="overlay-two">
										<div class="overlay-two-inner">
											<div class="overlay-two-content">
												<h2><a href="#">Job</a></h2>
												<div class="text">
													Descriere scurta job
												</div>
												<a href="#" class="see-more">See Project <span class="fa fa-angle-right"></span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>		
						
					</div>
					
					<!--Btn Box-->
					<!-- <div class="btn-box text-center">
						<a href="projects-single.html" class="theme-btn btn-style-three">More Project</a>
					</div> -->
					
				</div>
			</div>
		</section>
		<!--End Project Page Section-->
	</div>
</template>
<script>
export default {
	name:'EUjobs',
	mounted: function(){
		this.filter('all')
	},
	methods: {
		filter: (item)=> {
			const itemList = document.querySelectorAll('div.'+item)		
			for(let i =0;i<itemList.length; i++){
				itemList[i].classList.toggle('show')
			}	
		}
	}
}
</script>

