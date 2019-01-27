<template>
	<!--Main Footer-->
	<footer class="main-footer">

		<div class="auto-container">
		
			<!--Widgets Section-->
			<div class="widgets-section">
				<div class="row clearfix">
					
					<!--big column-->
					<div class="big-column col-md-6 col-sm-12 col-xs-12">
						<div class="row clearfix">
						
							<!--Footer Column-->
							<div class="footer-column col-md-7 col-sm-6 col-xs-12">
								<div class="footer-widget logo-widget">
									<div class="logo">
										<a href="index.html"><img src="../assets/jtv_logo.png" alt="" /></a>
									</div>
									<div class="text">Thewebmax ipsum amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore agna aliquam erat. ipsum dolor sit amet, consectetuer adipiscing. ipsum dolor sit .</div>
								</div>
							</div>
							
							<!--Footer Column-->
							<div class="footer-column col-md-5 col-sm-6 col-xs-12">
								<div class="footer-widget links-widget">
									<h2>Working Hours</h2>
									<ul class="list-style-one">
										<li><span class="icon fa fa-envelope"></span>185, Pickton Near Street, Los Angeles, USA</li>
										<li><span class="icon fa fa-phone"></span>info@sentiment.com</li>
										<li><span class="icon fa fa-map-marker"></span>support@sentiment.com</li>
										<li><span class="icon fa fa-clock-o"></span>1-800-985-357</li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
					
					<!--big column-->
					<div class="big-column col-md-6 col-sm-12 col-xs-12">
						<div class="row clearfix">
						
							<!--Footer Column-->
							<div class="footer-column col-md-6 col-sm-6 col-xs-12">
								<div class="footer-widget news-widget">
									<h2>Latest News</h2>
									<!--News Widget Block-->
									<div class="news-widget-block">
										<div class="widget-inner">
											<div class="image">
												<img src="static/images/resource/news-image-1.jpg" alt="" />
											</div>
											<h3><a href="blog-detail.html">Planning Process Needs to improve your Business.</a></h3>
											<div class="post-date">28 Dec, 2017</div>
										</div>
									</div>
									
									<!--News Widget Block-->
									<div class="news-widget-block">
										<div class="widget-inner">
											<div class="image">
												<img src="static/images/resource/news-image-2.jpg" alt="" />
											</div>
											<h3><a href="blog-detail.html">7 Tips To Move Your Project Move Forward.</a></h3>
											<div class="post-date">13 Oct, 2017</div>
										</div>
									</div>
									
								</div>
							</div>
							
							<!--Footer Column-->
							<div class="footer-column col-md-6 col-sm-6 col-xs-12">
								<div class="footer-widget map-widget">
									<h2>Our Branches</h2>
									<div class="image">
										<img src="static/images/resource/map.png" alt="" />
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
		
		<!--Footer Bottom-->
		<div class="footer-bottom">
			<div class="auto-container">
				<div class="row clearfix">
					<div class="column col-md-6 col-sm-12 col-xs-12">
						<div class="copyright">©JobTV {{year}}. Toate drepturile rezervate</div>
					</div>
					<div class="column col-md-6 col-sm-12 col-xs-12">
						<ul class="footer-nav">
							<li><a href="#">Termeni si Conditii</a></li>
							<li><a href="#">ANPC</a></li>
							<li><a href="#">Cookies</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
	</footer>    
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			year: ''
		}
	},
	created: function(){
		let year = new Date().getFullYear()
		this.year = year
	}
}
</script>
<style>
footer .footer-bottom .copyright{
	font-size: 12px;
}
footer .footer-bottom .footer-nav li a{
	font-size: 12px;
}
</style>


