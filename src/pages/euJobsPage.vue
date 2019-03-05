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
				<div class="row clearfix job-list">
					
					<div v-for="job of jobs" class="col-md-12 job">
						<img class="authLogo" v-bind:src="path+job.logo" alt="Company Logo">
						<div class="job-title">
							<h4><router-link v-bind:to="'/oferte-de-munca-eu/'+job.slug">{{job.title}}</router-link></h4>
						</div>
						<div class="job-text">{{job.excerpt}}</div>
						<div class="job-location">Locatie: {{job.location}}</div>
					</div>
				</div>
				<div class="seperater"></div>
			</div>
		</section>
		<!--End Project Page Section-->
	</div>
</template>
<script>
import axios from 'axios';

export default {
	name:'EUjobs',
	data: function(){
		return {
			jobs:  [],
            errors: [],
            path: 'http://admin.jobtv.ro/storage/'
            // path: 'http://localhost/public/storage/'
		}
	},
	mounted: function(){
		this.getJobs();
			},
	methods: {
		getJobs: function(){
            
            axios.get('http://admin.jobtv.ro/api/v1/eu-jobs')
            // axios.get('http://localhost/public/api/v1/eu-jobs')
                .then(response => {
					this.jobs = response.data;
					console.log(this.jobs)
                })
                .catch(e => console.log(e))
            
		},
		loadMore: function(){
            this.getJobs();            
        }
	}
}
</script>
<style scoped>
.show{
	display: block;
}
#loadMorebtn{
    background-color: #f16724;
    color: #fff;
    border: none;
}
.isDisabled{
    cursor: default;
    background-color: #fff !important;    
}
.job{
	background-color:#ebebeb;
	padding: 25px;
	margin: 15px;
	border-radius: 5px;
}
.authLogo{
	float: left;
	padding-right: 10px;
	max-width: 100px;
}
.job-title{
	font-weight: 700;
}
.job-location{
	font-weight: 700;
}

</style>
