<template>
	<div class="page">
		<!--Page Title-->
		<section class="page-title" style="background-color:#333333">
			<div class="auto-container">
				<h1>Adauga CV</h1>
				<ul class="page-breadcrumb">
					<li><a href="/">Acasa</a></li>
					<li>Adauga CV</li>
				</ul>
			</div>
		</section>
		<!--End Page Title-->
		
		<!--Contact Form Section-->
		<section class="contact-form-section">
			<div class="auto-container">
				<!--Title Box-->
				<div class="title-box">
					<div class="title">CV rapid</div>
					<!-- <h2>Have Any Questions?</h2>
					<div class="text">Thank you very much for your interest in our company and our services and if you have any questions, please write us a message now!</div> -->
				</div>
				
				<!--Contact Form-->
				<div class="contact-form">
					<form id="cv-form">
						<div class="row clearfix">
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input id="lastName" type="text" name="lastName" value="" placeholder="Nume" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input id="firstName" type="text" name="firstName" value="" placeholder="Prenume" required>
							</div>							
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input id="dob" type="text" name="dob" value="" placeholder="Data Nasterii" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input id="town" type="text" name="town" value="" placeholder="Oras - Judet" required>
							</div>							
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input id="mail" type="email" name="mail" value="" placeholder="Email" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input id="training" type="email" name="mail" value="" placeholder="Meserie" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input id="phone" type="text" name="mail" value="" placeholder="Telefon" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input id="country" type="email" name="mail" value="" placeholder="In ce tara cauti de munca?" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<p>Adaugati Poza</p>
								<input id="country" type="file" name="mail" value="" required>
							</div>
							
							<div class="form-group col-md-12 col-sm-12 col-xs-12">
								<textarea name="message" placeholder="Experienta Profesionala"></textarea>
							</div>
							
							<div class="form-group text-center col-md-12 col-sm-12 col-xs-12">
								<button type="submit" class="theme-btn message-btn">Trimite CV</button>
							</div>                                        
						</div>
					</form>
				</div>
				<!--End Contact Form-->

			</div>
		</section>
		<!--End Contact Form Section-->
	</div>
</template>
<script>
export default {
	name:'CV'
}
</script>
<style>

.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

</style>

