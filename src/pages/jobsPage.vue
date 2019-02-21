<template>
	<div class="page">
		<!--Page Title-->
		<section class="page-title" style="background-color:#333333">
			<div class="auto-container">
				<h1>Oferte de Lucru</h1>
				<ul class="page-breadcrumb">
					<li><a href="/">Acasa</a></li>
					<li>Oferte de Lucru</li>
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
					<h2>Oferte de lucru</h2>
					<div class="seperater"></div>
				</div>
				<!--MixitUp Galery-->
				<div class="mixitup-gallery">
					<div class="filter-list row clearfix">
						
						<!--Project Block-->
						
						
						<!--Project Block-->
						<div id="visible" class="project-block mix all renovation isolation col-md-6 col-sm-12 col-xs-12">
							<div class="inner-box">
								<div class="image">
									<img src="../assets/flags/ro.png" alt="" />
									<div class="overlay-box">
										<div class="content">
											<h2 id="offer">Oferte din Romania</h2>
											
										</div>
									</div>
									<!--Overlay Two-->
									<div class="overlay-two">
										<div class="overlay-two-inner">
											<div class="overlay-two-content">
												<h2><router-link to="/oferte-de-munca-ro" class="see-more">Ofertele din Romania</router-link></h2>
												<div class="text">Vezi toate ofertele de munca din Romania.</div>
												<router-link to="/oferte-de-munca-ro" class="see-more">Arata Ofertele <span class="fa fa-angle-right"></span></router-link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>		
                        <div id="visible" class="project-block mix all renovation isolation col-md-6 col-sm-12 col-xs-12">
							<div class="inner-box">
								<div class="image">
									<img src="../assets/flags/eu.png" alt="" />
									<div class="overlay-box">
										<div class="content">
											<h2 id="offer">Oferte din UE</h2>
											
										</div>
									</div>
									<!--Overlay Two-->
									<div class="overlay-two">
										<div class="overlay-two-inner">
											<div class="overlay-two-content">
												<h2><router-link to="/oferte-de-munca-eu" class="see-more">Ofertele din Uniunea Europeana</router-link></h2>
												<div class="text">Vezi toate ofertele de munca din Uniunea Europeana.</div>
												
                                                <router-link to="/oferte-de-munca-eu" class="see-more">Arata Ofertele <span class="fa fa-angle-right"></span></router-link>
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
	name:'Jobs',
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
<style scoped>
.show{
	display: block;
}
#offer{
    color:#fff;
}
</style>

