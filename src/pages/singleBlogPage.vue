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
                                <div class="post-date"><span>{{day}}</span>{{month}}</div>
                            </div>
                            <div class="title-box">
                            	<h2>{{post.title}}</h2>
                                <ul class="post-info">                                	
                                    <li>{{post.auth_name}}</li>
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
            monthList: {
                "01": "Ian",
                "02": "Feb",
                "03": "Mar",
                "04": "Apr",
                "05": "Mai",
                "06": "Iun",
                "07": "Iul",
                "08": "Aug",
                "09": "Sep",
                "10": "Oct",
                "11": "Nov",
                "12": "Dec",
            },
            month: '',
            errors: [],
            path: 'http://admin.jobtv.ro/storage/'
            // path: 'http://localhost/storage/'
        }
    },
    created(){
        this.getPost()        
    },
    mounted: function(){
        // this is not DRY but works for now
        // TODO: Refactor this crap
        this.$root.$on('on', () => {
            const slug = this.$route.params.slug
            
            axios.get('http://admin.jobtv.ro/api/v1/articole/'+slug)
        //  axios.get('http://localhost/api/v1/articole/'+slug)
                .then(response => {
                    this.post = response.data                    
                    // TODO: make this better 
                    let resDate = this.post.updated_at.toString().split('-')
                    let resDay = resDate[2].split(' ')
                    this.day = resDay[0];
                    // set pretty month 
                    this.month = this.monthList[resDate[1]]                    
                    })
                .catch(e => console.log(e))
        })
    },
    methods: {
        getPost: function(){
            const slug = this.$route.params.slug
            
            axios.get('http://admin.jobtv.ro/api/v1/articole/'+slug)
        //  axios.get('http://localhost/api/v1/articole/'+slug)
                .then(response => {
                    this.post = response.data                    
                    // TODO: make this better 
                    let resDate = this.post.updated_at.toString().split('-')
                    let resDay = resDate[2].split(' ')
                    this.day = resDay[0];
                    // set pretty month 
                    this.month = this.monthList[resDate[1]]                    
                    })
                .catch(e => console.log(e))
            
        }
    }
};
</script>

