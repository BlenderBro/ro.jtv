<template>
  <div class="page">
    <!--Page Title-->
    <!-- <section class="page-title" style="background-color:#333333">
      <div class="auto-container">
        <h1>Stiri</h1>
        <ul class="page-breadcrumb">
          <li>
            <a href="/">Acasa</a>
          </li>
          <li>Stiri</li>
        </ul>
      </div>
    </section> -->
	<!--Sidebar Page Container-->
    <div class="sidebar-page-container">
    	<div class="auto-container">
        	<div class="row clearfix">
            	
                <!--Content Side-->
                <div class=" col-lg-10 col-md-10 col-sm-12 col-xs-12">
                	<div class="blog-single">
						<div class="inner-box">
                            
                            <div class="title-box">
                            	<h2>{{job.title}}</h2>
                                <ul class="post-info">                                	
                                    <!-- <li>{{post.auth_name}}</li> -->
                                </ul>
                            </div>
                            <div class="lower-content">
                            	<div v-html="job.description" class="text">
                                	                                    
                                </div>
                                
                                <!--post-share-options-->
                                <!-- <div class="post-share-options clearfix">
                                    <div class="pull-left">
                                        <ul class="social-icon-three">
                                            <li class="share">Share Now:</li>
                                            <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                            <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                            <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                                            <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                                            <li><a href="#"><span class="fa fa-dribbble"></span></a></li>
                                        </ul>
                                    </div>
                                    <div class="pull-right posts">
                                        <ul>
                                            <li class="prev"><a href="#"><span class="fa fa-angle-double-left"></span>&nbsp; Prev</a></li>
                                            <li><a href="#">Next &nbsp;<span class="fa fa-angle-double-right"></span></a></li>
                                        </ul>
                                    </div>
                                </div> -->
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                    <img class="authLogo" v-bind:src="path+job.logo" alt="Company Logo">
                </div>
                
               
                
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "EuJobSingle",

  data: function () {
        return {
            job:  [],
            errors: [],
            // path: 'http://68.183.75.48:80/storage/'
            path: 'http://localhost/public/storage/'
        }
    },
    created(){
        this.getPost()
        console.log()
    },
    methods: {
        getPost: function(){
            const slug = this.$route.params.slug
            
            // axios.get('http://68.183.75.48:80/api/v1/eu-job/'+slug)
         axios.get('http://localhost/public/api/v1/eu-jobs/'+slug)
                .then(response => {
                    this.job = response.data
                    console.log(response.data)
                          
                    })
                .catch(e => console.log(e))
            
        }
    }
};
</script>

