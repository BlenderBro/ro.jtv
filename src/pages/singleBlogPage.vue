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
                            <div class="image">
                                <img v-bind:src="path+post.image" alt=""/>
                                <div class="post-date"><span>{{day}}</span> May</div>
                            </div>
                            <div class="title-box">
                            	<h2>{{post.title}}</h2>
                                <ul class="post-info">                                	
                                    <li>Nume Autor </li>
                                </ul>
                            </div>
                            <div class="lower-content">
                            	<div v-html="post.body" class="text">
                                	                                    
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
                
               
                
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Single",

  data: function () {
        return {
            post:  [],
            day: '',
            month: '',
            errors: [],
            path: 'http://localhost:80/storage/'
        }
    },
    created(){
        this.getPost()
        console.log()
    },
    methods: {
        getPost: function(){
            const slug = this.$route.params.slug
            
            axios.get('http://localhost:80/api/v1/articole/'+slug)
                .then(response => {
                    this.post = response.data
                    let resDate = this.post.updated_at.toString().split('-')
                    let resDay = resDate[2].split(' ')
                    this.day = resDay[0];
                    console.log(resDate)
                    })
                .catch(e => console.log(e))
            
        }
    }
};
</script>

