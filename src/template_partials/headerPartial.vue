<template>
	<!-- Main Header / Header Style Five-->
	<header class="main-header header-style-five">

		<!--Header-Upper-->
		<div class="header-upper">
			<div class="auto-container">
				<div class="clearfix">
					
					<div class="pull-left logo-box">
						<div class="logo"><a href="index.html"><img src="../assets/jtv_logo.png" alt="" title=""></a></div>
					</div>
					
					<div class="pull-right upper-right clearfix">
						
						<!--Info Box-->
						<div class="upper-column info-box">
							<div class="icon-box"><span class="flaticon-clock"></span></div>
							<ul>
								<li><strong>09:00 am - 06:00 pm</strong></li>
								<li>We Serve with Pleasure</li>
							</ul>
						</div>
						
						<!--Info Box-->
						<div class="upper-column info-box">
							<div class="icon-box"><span class="flaticon-phone-call"></span></div>
							<ul>
								<li><strong>(01) 98 756 321 01</strong></li>
								<li>Discuss any Queries</li>
							</ul>
						</div>
						
						<!--Info Box-->
						<div class="upper-column info-box">
							<div class="icon-box"><span class="flaticon-placeholder-1"></span></div>
							<ul>
								<li><strong>location</strong></li>
								<li>185, Los Angeles, USA</li>
							</ul>
						</div>
						
					</div>
					
				</div>
			</div>
		</div>
		<!--End Header Upper-->
		
		<!--Header Lower-->
		<div class="header-lower">
			
			<div class="auto-container">
				<div class="nav-outer clearfix">
					<!-- Main Menu -->
					<nav class="main-menu">
						<div class="navbar-header">
							<!-- Toggle Button -->    	
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							</button>
						</div>
						
						<div class="navbar-collapse collapse clearfix">
							<ul class="navigation clearfix">
								<li class="current dropdown"><a href="#">Item1</a></li>
								<li class="dropdown"><a href="#">Item 2</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</nav>
					<!-- Main Menu End-->
					<!-- <div class="outer-box clearfix">
						
						<ul class="options">
							<li class="dropdown search-box-outer">
								<button class="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-search"></span></button>
								<ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
									<li class="panel-outer">
										<div class="form-container">
											<form method="post" action="blog.html">
												<div class="form-group">
													<input type="search" name="field-name" value="" placeholder="Search Here" required>
													<button type="submit" class="search-btn"><span class="fa fa-search"></span></button>
												</div>
											</form>
										</div>
									</li>
								</ul>
							</li>
							<li><a href="#"><span class="fa fa-cart-plus"></span></a></li>
						</ul>
						
					</div> -->
				</div>
			</div>
		</div>
		<!--End Header Lower-->
		
		<!--Sticky Header-->
		<div class="sticky-header">
			<div class="auto-container clearfix">
				<!--Logo-->
				<div class="logo pull-left">
					<a href="index.html" class="img-responsive"><img src="../assets/jtv_logo_small.png" alt="" title=""></a>
				</div>
				
				<!--Right Col-->
				<div class="right-col pull-right">
					<!-- Main Menu -->
					<nav class="main-menu">
						<div class="navbar-header">
							<!-- Toggle Button -->    	
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						
						<div class="navbar-collapse collapse clearfix">
							<ul class="navigation clearfix">
								<li class="current dropdown"><a href="#">Item 1</a></li>
								<li class="dropdown"><a href="#">Item 2</a></li>								
								<li><a href="contact.html">Contact us</a></li>
							</ul>
						</div>
					</nav><!-- Main Menu End-->
				</div>
				
			</div>
		</div>
		<!--End Sticky Header-->
	
	</header>
	<!--End Main Header -->
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			//nothing for now...
		};
	}
};
</script>