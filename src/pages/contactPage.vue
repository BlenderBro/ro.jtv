<template>
	<div class="page">
		<!--Page Title-->
		<section class="page-title" style="background-color:#333333">
			<div class="auto-container">
				<h1>Contact</h1>
				<ul class="page-breadcrumb">
					<li><router-link to="/"><a>Acasa</a></router-link></li>
					<li>Contact</li>
				</ul>
			</div>
		</section>
		<!--End Page Title-->
		
		<!--Contact Page Info Section-->
		<div class="contact-page-info-section">
		
			<div class="auto-container">
				<div class="row clearfix">
					
					<!--Info Column-->
					<div class="info-column col-md-6 col-sm-12 col-xs-12">
						<div class="inner-column">
							<div class="sec-title">
								<h2>Get in Touch</h2>
							</div>
							<div class="text">Thewebmax ipsum amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore agna aliquam erat. ipsum dolor sit amet, consectetuer adipiscing. ipsum dolor sit .</div>
							<ul class="list-style-two">
								<li><span class="icon fa fa-phone"></span>Sunati-ne la nr. +40 741 330 100</li>
								<li><span class="icon fa fa-envelope"></span>contact@jobtv.ro</li>
								<li><span class="icon fa fa-map-marker"></span>Open Hours 09:00 am - 06:00 pm</li>
								<li><span class="icon fa fa-clock-o"></span>Strada Mendeleev nr 37, sector 1, Bucuresti</li>
							</ul>
							<ul class="social-icon-two">
								<li class="follow">Suntem sociali: </li>
								<li><a href="#"><span class="fa fa-facebook"></span></a></li>
								<li><a href="#"><span class="fa fa-twitter"></span></a></li>
								<li><a href="#"><span class="fa fa-google-plus"></span></a></li>
								<li><a href="#"><span class="fa fa-instagram"></span></a></li>
								<li><a href="#"><span class="fa fa-dribbble"></span></a></li>
							</ul>
						</div>
					</div>
					
					<!--Map Column-->
					<div class="map-column col-md-6 col-sm-12 col-xs-12">
						<img src="../assets/map.jpg" alt="" srcset="">
					</div>
					
				</div>
			</div>
		</div>
		<!-- End Contact Page Info Section -->
	</div>
</template>
<script>
export default {
	name:'ContactPage',
}
</script>
<style scoped>
.contact-page-info-section{
	padding-top: 1.5em;
}
</style>


