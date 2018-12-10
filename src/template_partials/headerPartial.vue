<template>
	<!-- Main Header / Header Style Five-->
	<header class="main-header header-style-five">

		<!--Header-Upper-->
		<div class="header-upper">
			<div class="auto-container">
				<div class="clearfix">
					
					<div class="pull-left logo-box">
						<a href="/" class="img-responsive"><img src="../assets/jtv_logo.png" alt="" title=""></a>
					</div>
					
					<div class="pull-right upper-right clearfix">
						
						<!--Info Box-->
						<div class="upper-column info-box">
							<div class="icon-box"><span class="flaticon-clock"></span></div>
							<ul>
								<li><strong>ON AIR</strong></li>
								<li>Intra cu noi IN DIRECT</li>
							</ul>
						</div>
						
						<!--Info Box-->
						<div class="upper-column info-box">
							<div class="icon-box"><span class="flaticon-phone-call"></span></div>
							<ul>
								<li><strong>+40 741 330 100</strong></li>
								<li>Contact</li>
							</ul>
						</div>
						
						<!--Info Box-->
						<div class="upper-column info-box">
							<div class="icon-box"><span class="flaticon-placeholder-1"></span></div>
							<ul>
								<li><strong>BUCURESTI</strong></li>
								<li>Mendeleev 37, sect. 1</li>
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
						
						<div id="col-target" class="navbar-collapse collapse clearfix">
							<ul class="navigation clearfix">
								<li class="dropdown" v-on:click="collapse"><router-link to="/despre-noi">Despre Noi</router-link></li>
								<li class="dropdown" v-on:click="collapse"><router-link to="/program">Program TV</router-link></li>
								<li class="dropdown" ><a id="drop" href="">Oferte de munca</a>
									<ul>
                                        <li v-on:click="collapse"><router-link to="/oferte-de-munca-eu">Uniunea Europeana</router-link></li>
                                        <li v-on:click="collapse"><router-link to="/oferte-de-munca-ro">Romania</router-link></li>
                                    </ul>
								</li>
								<li class="dropdown" v-on:click="collapse"><a href="#">Aplica CV</a></li>
								<li class="dropdown" v-on:click="collapse"><router-link to="/echipa">Echipa</router-link></li>
								<li class="dropdown" v-on:click="collapse"><router-link to="/contact">Contact</router-link></li>
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
					<a href="/" class="img-responsive"><img src="../assets/jtv_logo_small.png" alt="" title=""></a>
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
						
						<div id="col-target" class="navbar-collapse collapse clearfix">
							<ul class="navigation clearfix">
								<li class="dropdown" v-on:click="collapse"><router-link to="/despre-noi">Despre Noi</router-link></li>
								<li class="dropdown" v-on:click="collapse"><router-link to="/program">Program TV</router-link></li>
								<li class="dropdown" ><a id="drop" href="">Oferte de munca</a>
									<ul>
                                        <li v-on:click="collapse"><router-link to="/oferte-de-munca-eu">Uniunea Europeana</router-link></li>
                                        <li v-on:click="collapse"><router-link to="/oferte-de-munca-ro">Romania</router-link></li>
                                    </ul>
								</li>
								<li class="dropdown" v-on:click="collapse"><a href="#">Aplica CV</a></li>
								<li class="dropdown" v-on:click="collapse"><router-link to="/echipa">Echipa</router-link></li>
								<li class="dropdown" v-on:click="collapse"><router-link to="/contact">Contact</router-link></li>
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
	data: function(){
		return {
			selected: undefined
		}
	},
	methods: {
		collapse: (e)=>{
			document.getElementById('col-target').classList.remove('in')
		}
	}
};
</script>
<style>
#drop{
	pointer-events: none;
	cursor: pointer;
}
</style>
