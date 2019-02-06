<template>
  <div class="page">
    <!--Page Title-->
    <section class="page-title" style="background-color:#333333">
      <div class="auto-container">
        <h1>Stiri</h1>
        <ul class="page-breadcrumb">
          <li>
            <a href="/">Acasa</a>
          </li>
          <li>Stiri</li>
        </ul>
      </div>
    </section>
    <!--Blog Page Section-->
    <section class="blog-page-section">
    	<div class="auto-container">
        	<div class="row clearfix">
            	
               <!--News Block-->
                
                    <div v-for="post of posts" class="news-block col-md-4 col-sm-6 col-xs-12">
                        <div class="inner-box">
                            <div class="image">
                                <router-link to="/articol"><img v-bind:src="path+post.image" alt="" /></router-link>
                                <!-- <div class="post-date"><span>{{}}</span>{{}}</div> -->
                            </div>
                            <div class="lower-content">
                                <h3><router-link to="/articol">{{post.title}}</router-link></h3>
                                <ul class="post-meta">                            	
                                    <!-- <li>Autor:  </li> -->
                                </ul>
                                <div class="text">{{post.excerpt}}</div>
                            </div>
                        </div>
                    </div>               
                </div>
                
			
            <!--Pagination-->
            <!-- <div class="pagination-outer text-center">
                
                <ul class="styled-pagination">
                    <li class="prev"><a href="#"><span class="fa fa-angle-double-left"></span> Prev</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#" class="active">2</a></li>
                    <li><a href="#">3</a></li>
                    <li class="next"><a href="#">Next <span class="fa fa-angle-double-right"></span></a></li>
                </ul>
                
            </div> -->

        </div>
    </section>
    <!--End Blog Page Section-->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Blog",

  data: function () {
        return {
            posts:  [],
            errors: [],
            path: 'http://localhost:80/storage/'
        }
    },
    created(){
        this.getPosts()
    },
    methods: {
        getPosts: function(){
            
            axios.get('http://localhost:80/api/v1/articole')
                .then(response => {
                    this.posts = response.data.data
                    console.log(response.data.data)
                    })
                .catch(e => console.log(e))

            console.log()
        }
    }
};
</script>

