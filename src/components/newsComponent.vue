<template>
    <!--News Section-->
    <section class="news-section">
    	<div class="auto-container">
        	<div class="sec-title centered">
            	<div class="title">Stiri</div>
                <h2>Breaking News</h2>
                <div class="seperater"></div>
            </div>
            <div class="row clearfix">
            	
                <!--News Block-->
                <div v-for="post of posts">
                    <div class="news-block col-md-4 col-sm-6 col-xs-12">
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
                                <div class="text">{{post.excerpt}}</div>
                            </div>
                        </div>
                    </div>               
                </div>
                
            </div>
        </div>
    </section>
    <!--End News Section-->
</template>
<script>
import axios from 'axios';

export default {
    name: 'BreakingNewsComp',
    data: function () {
        return {
            posts:  [],
            
            errors: [],
            path: 'http://68.183.75.48:80/storage/'
        }
    },
    created(){
        this.getPosts()
    },
    methods: {
        getPosts: function(){
            
            axios.get('http://68.183.75.48:80/api/v1/breaking')
                .then(response => {
                    this.posts = response.data.data
                    console.log(response.data.data)
                    })
                .catch(e => console.log(e))

            console.log()
        }
    }
}
</script>
