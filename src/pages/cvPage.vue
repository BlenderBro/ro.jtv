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
					<form v-on:submit.prevent="sendPayload()" id="cv-form">
						<div class="row clearfix">
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input v-model="payload.first_name" id="lastName" type="text" name="lastName" value="" placeholder="Nume" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input v-model="payload.last_name" id="firstName" type="text" name="firstName" value="" placeholder="Prenume" required>
							</div>							
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input v-model="payload.dob" id="dob" type="text" name="dob" value="" placeholder="Data Nasterii" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input v-model="payload.town" id="town" type="text" name="town" value="" placeholder="Oras - Judet" required>								
							</div>							
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input v-model="payload.email" id="mail" type="email" name="mail" value="" placeholder="Email" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<!-- <input id="training" type="email" name="mail" value="" placeholder="Meserie" required> -->
								<select v-model="payload.job" name="job" id="job">
									<option value="" disabled selected>Meserie</option>
									<option value="Carosieri service-auto">Carosieri service-auto</option>
									<option value="Electricieni">Electricieni</option>
									<option value="Ingrijire la domiciliu (menaj)">Ingrijire la domiciliu (menaj)</option>
									<option value="Lucrători în agricultură">Lucrători în agricultură</option>
									<option value="Lucrători în industria hotelieră">Lucrători în industria hotelieră</option>
									<option value="Măcelari">Măcelari</option>
									<option value="Muncitori în construcții">Muncitori în construcții</option>
									<option value="Sudori">Sudori</option>
									<option value="Muncitori necalificați">Muncitori necalificați</option>
								</select>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input v-model="payload.phone" id="phone" type="text" name="mail" value="" placeholder="Telefon" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<input v-model="payload.job_location" id="country" type="text" name="job_location" value="" placeholder="In ce tara cauti de munca?" required>
							</div>
							<div class="form-group col-md-6 col-sm-6 col-xs-12">
								<p>Adaugati Poza</p>
								<input v-on:change="upImage" id="image" type="file" name="image" value="" required>
							</div>
							
							<div class="form-group col-md-12 col-sm-12 col-xs-12">
								<textarea required v-model="payload.experience" name="message" placeholder="Experienta Profesionala"></textarea>
							</div>

							<div class="form-group col-md-12 col-sm-12 col-xs-12">
								<input type="checkbox" required name="acceptance" id="tos">
								Prin completarea și transmiterea informațiilor din secțiunea ”Adaugă CV” confirmați că ați fost înștiințat și că sunteți de acord pe deplin
								 ca JobTv Work Television să transmită toate sau o parte dintre datele cu caracter personal ale dumneavoastră către beneficiarii forței de muncă, 
								 respectiv către angajatori persoane fizice sau juridice care desfășoară activitate lucrativă pe teritoriul României sau al statelor din cadrul S.E.E.
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
import axios from 'axios';

export default {
	name:'CV',
	data(){
		return {
			payload: {
				first_name	: '',
				last_name	: '',
				dob			: '',
				town		: '',
				email		: '',
				job			: '',
				phone		: '',
				job_location: '',
				experience	: '',
				image		: ''
			},
		}
	},
	methods:{
		upImage: function(e) {			
			let fileReader = new FileReader();
			fileReader.readAsDataURL(e.target.files[0]);

			fileReader.onload = (e)=>{
				this.payload.image = e.target.result;
			}
		},

		sendPayload: function(){
			
			// make new payload
			let newPayload = {
				first_name	: this.payload.first_name,
				last_name	: this.payload.last_name,
				dob			: this.payload.dob,
				town		: this.payload.town,
				email		: this.payload.email,
				job			: this.payload.job,
				phone		: this.payload.phone,
				job_location: this.payload.job_location,
				experience  : this.payload.experience,
				image		: this.payload.image
			}

			// axios.post('http://localhost/public/api/v1/cv-store', newPayload)
			axios.post('http://admin.jobtv.ro/api/v1/cv-store', newPayload)
				.then( response => {
					if(response.data.status === '200'){
						this.$router.push({path: '/success'});
					}
				})				
				.catch(e => console.log(e.message))
		}
	}
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
.contact-form .message-btn{
	color:#fff !important;
}

</style>

