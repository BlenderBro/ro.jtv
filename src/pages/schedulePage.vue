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
					<div class="sec-title">
						<h2>De luni pana vineri:</h2>
					</div>
					<div class="col-md-4 col-xs-4 title">
						<span class="hours">06:00 - 08:00</span> 
						<p>NEAȚA COOLINARĂ</p>
					</div>
					<div class="col-md-8 col-xs-8 desc">
						<p>Emisiune care prezintă pregătirea unui meniu, interviuri si recomandări ale unor chefi bucătari depre cantitatea de proteine și vitamine din alimentație, în functie de munca pe care o desfașurăm. 
Anunțuri de angajare în domeniul Horecca</p>
					</div>			
				</div>
			</div>
		</section>
		<!--End Faq Section-->   
	</div>
</template>
<script>
export default {
	name:'SchedulePage',
}
</script>
<style scoped>
span.hours{
	color:coral;
	font-size: 1.1em;
}
.title p{
	font-weight: 600;
	font-size: 1.2em;
}
.desc p{
	font-size: 1em;
}
</style>



