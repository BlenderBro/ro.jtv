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
                                <router-link v-bind:to="'/articol/'+post.slug"><img v-bind:src="path+post.image" alt="" /></router-link>
                                <!-- <div class="post-date"><span>{{}}</span>{{}}</div> -->
                            </div>
                            <div class="lower-content">
                                <h3><router-link v-bind:to="'/articol/'+post.slug">{{post.title}}</router-link></h3>
                                <ul class="post-meta">                            	
                                    <!-- <li>Autor:  </li> -->
                                </ul>
                                <div v-if="post.excerpt.length < 140" class="text">{{post.excerpt}}</div>
                                <div v-if="post.excerpt.length >= 140" class="text">{{post.excerpt.substring(0, 140)+" .."}}</div>
                            </div>
                        </div>
                    </div>               
                </div>
                
			
            <!--Pagination-->
           
            <div class="pagination-outer text-center">
                <ul class="styled-pagination">
                    <li class="prev"><a aria-disabled="" v-bind:class="{isDisabled}" id="loadMorebtn" @click="loadMore()">Mai Multe</a></li>                   
                </ul>     
            </div>

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
            page: 1,
            isDisabled: false,
            errors: [],
            path: 'http://admin.jobtv.ro/storage/'
            // path: 'http://localhost/public/storage/'
        }
    },
    created(){
        this.getPosts()
    },
    methods: {
        getPosts: function(pageNum){
            pageNum = this.page
            axios.get('http://admin.jobtv.ro/api/v1/articole?page='+pageNum)
            // axios.get('http://localhost/public/api/v1/articole?page='+pageNum)
                .then(response => {

                    // iterate page number on each request
                    this.page = response.data.current_page +1 
                    
                    // get total pages and disable loadMore function call                    
                    if(this.page === response.data.last_page +1){
                        this.isDisabled = true;
                    }
                    // push posts into array
                    let postsArr = response.data.data
                    for(let i=0; i< postsArr.length; i++){
                        this.posts.push(postsArr[i])
                    }                  
                })
                .catch(e => console.log(e))
            
        },
        loadMore: function(){
            this.getPosts();            
        }
    }
};
</script>

<style scoped>
.news-block{
    min-height: 421px !important;
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
</style>
