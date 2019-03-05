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
				<div class="sec-title">
					<h2>De luni pana vineri:</h2>
				</div>
				<div  v-for="guide of guides" class="row clearfix">
					<div class="col-md-4 col-xs-4 title">
						<span class="hours">{{guide.time_slot}}</span> 
						<p>{{guide.title}}</p>
					</div>
					<div class="col-md-8 col-xs-8 desc">
						<p v-html="guide.description"></p>
					</div>						
				</div>		
				<hr>
				<div class="sec-title">
					<h2>Weekend:</h2>
				</div>
				<div  v-for="weekend of weekends" class="row clearfix">
					<div class="col-md-4 col-xs-4 title">
						<span class="hours">{{weekend.time_slot}}</span> 
						<p>{{weekend.title}}</p>
					</div>
					<div class="col-md-8 col-xs-8 desc">
						<p v-html="weekend.description"></p>
					</div>						
				</div>				
			</div>
		</section>
		<!--End Faq Section-->   
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name:'SchedulePage',

	data: function () {
        return {
			guides:  [],
			weekends: [],
            errors: [],
            // path: 'http://localhost:80/storage/'
        }
    },
    created(){
		this.getGuides();
		this.getWeGuides();
    },
    methods: {
        getGuides: function(){
            
            axios.get('http://admin.jobtv.ro/api/v1/guides')
                .then(response => {
                    this.guides = response.data                    
                    })
                .catch(e => console.log(e))

            console.log()
		},
		 getWeGuides: function(){
            
            axios.get('http://admin.jobtv.ro/api/v1/we-guides')
            // axios.get('http://localhost/public/api/v1/we-guides')
                .then(response => {
                    this.weekends = response.data                    
                    })
                .catch(e => console.log(e))

            console.log()
		}
    }
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



