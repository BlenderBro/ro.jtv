<template>
<div>
	<!-- <MainSliderComp></MainSliderComp> -->
	<StreamComp></StreamComp>
	
	<!--About Section-->
	<section class="about-section">
		<div class="auto-container">
			<div class="row clearfix">
				
				<!--Content Column-->
				<div class="content-column col-md-6 col-sm-12 col-xs-12">
					<div class="inner-column">
						<div class="sec-title">
							<div class="title">About Us</div>
							<h2>We Are The Leader in The Architectura!</h2>
						</div>
						<div class="bold-text">36 Years Experience Working</div>
						<div class="text">For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other</div>
						<a href="#" class="theme-btn btn-style-one">Read More</a>
					</div>
				</div>
				
				<!--Image Column-->
				<div class="image-column col-md-6 col-sm-12 col-xs-12">
					<div class="inner-column">
						<div class="image wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
							<img src="static/images/resource/about.jpg" alt="" />
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	<!--End About Section-->
</div>	
</template>

<script>
import MainSliderComp from '@/components/MainSliderComponent'
import StreamComp from '@/components/StreamComponent'
export default {
	name: 'Home',
  	components: {
		  MainSliderComp,
		  StreamComp
	  }
}
</script>
