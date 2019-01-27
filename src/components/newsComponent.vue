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
                <div class="news-block col-md-4 col-sm-6 col-xs-12">
                	<div class="inner-box">
                    	<div class="image">
                        	<router-link to="/articol"><img src="static/images/resource/news-1.jpg" alt="" /></router-link>
                            <div class="post-date"><span>18</span> June</div>
                        </div>
                        <div class="lower-content">
                        	<h3><router-link to="/articol">High quality work for our customer.</router-link></h3>
                            <ul class="post-meta">
                            	<li>24 Liks</li>
                                <li>3 Comments</li>
                                <li>By Admin Rose </li>
                            </ul>
                            <div class="text">Nullam ut mauris vitae tortor sodales efficitur. Quisque ac orci ante. Proin amet turpis l......</div>
                        </div>
                    </div>
                </div>
                
                <!--News Block-->
                <div class="news-block col-md-4 col-sm-6 col-xs-12">
                	<div class="inner-box">
                    	<div class="image">
                        	<a href="blog-detail.html"><img src="static/images/resource/news-2.jpg" alt="" /></a>
                            <div class="post-date"><span>18</span> June</div>
                        </div>
                        <div class="lower-content">
                        	<h3><a href="blog-detail.html">Satisfection for the customer our first parity.</a></h3>
                            <ul class="post-meta">
                            	<li>24 Liks</li>
                                <li>3 Comments</li>
                                <li>By Admin Rose </li>
                            </ul>
                            <div class="text">Nullam ut mauris vitae tortor sodales efficitur. Quisque ac orci ante. Proin amet turpis l......</div>
                        </div>
                    </div>
                </div>
                
                <!--News Block-->
                <div class="news-block col-md-4 col-sm-6 col-xs-12">
                	<div class="inner-box">
                    	<div class="image">
                        	<a href="blog-detail.html"><img src="static/images/resource/news-3.jpg" alt="" /></a>
                            <div class="post-date"><span>18</span> June</div>
                        </div>
                        <div class="lower-content">
                        	<h3><a href="blog-detail.html">Professional approch is always quality work.</a></h3>
                            <ul class="post-meta">
                            	<li>24 Liks</li>
                                <li>3 Comments</li>
                                <li>By Admin Rose </li>
                            </ul>
                            <div class="text">Nullam ut mauris vitae tortor sodales efficitur. Quisque ac orci ante. Proin amet turpis l......</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <!--End News Section-->
</template>
<script>
export default {
    name: 'BreakingNewsComp'
}
</script>
