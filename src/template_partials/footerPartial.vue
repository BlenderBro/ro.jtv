<template>
  <!--Main Footer-->
  <footer class="main-footer">
    <div class="auto-container">
      <!--Widgets Section-->
      <div class="widgets-section">
        <div class="row clearfix">
          <!--big column-->
          <div class="big-column col-md-6 col-sm-12 col-xs-12">
            <div class="row clearfix">
              <!--Footer Column-->
              <div class="footer-column col-md-7 col-sm-6 col-xs-12">
                <div class="footer-widget logo-widget">
                  <div class="logo">
                    <a href="index.html">
                      <img src="../assets/jtv_logo.png" alt>
                    </a>
                  </div>
                  <div class="text">
                    JobTv sau &quot;Televiziunea care îți dă de lucru&quot; este un concept inedit în
                    mass-media românească. Ideea de o televiziune a locurilor de muncă, JobTv a
                    apărut din necesitatea unui canal de televiziune, în audiovizualul din România,
                    care să permită tuturor persoanelor aflate în căutarea unui loc de muncă să
                    găsească mai ușor un job.
                  </div>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-md-5 col-sm-6 col-xs-12">
                <div class="footer-widget links-widget">
                  <h2>Contact</h2>
                  <ul class="list-style-one">
                    <li>
                      <span class="icon fa fa-envelope"></span>contact@jobtv.ro
                    </li>
                    <li>
                      <span class="icon fa fa-phone"></span>+40 741 330 100
                    </li>
                    <li>
                      <span class="icon fa fa-map-marker"></span>Mendeleev 37, sect. 1
                    </li>
                    <!-- <li>
                      <span class="icon fa fa-clock-o"></span>1-800-985-357
                    </li>-->
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!--big column-->
          <div class="big-column col-md-6 col-sm-12 col-xs-12">
            <div class="row clearfix">
              <!--Footer Column-->
              <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                <div class="footer-widget news-widget">
                  <h2>Ultima Ora</h2>
                  <!--News Widget Block-->

                  <div v-for="post of posts.slice(0,3)" :key="post.id" class="news-widget-block">
                    <div class="widget-inner">
                      <div class="image">
                        <!-- <router-link v-bind:to="'/articol/'+post.slug"><img v-bind:src="path+post.image" alt="" /></router-link> -->
                        <router-link @click.native="fireReloadEvent" v-bind:to="{path: '/articol/'+post.slug}"><img v-bind:src="path+post.image" alt="" /></router-link>
                      </div>
                      <h3><router-link @click.native="fireReloadEvent" v-bind:to="{path: '/articol/'+post.slug}">{{post.title}}</router-link></h3>
                      
                    </div>
                  </div>
                  
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                <div class="footer-widget map-widget">
                  <h2 id="black">Our Branches</h2>
                  <div class="image">
                    <img src="static/images/resource/map.png" alt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="row clearfix">
          <div class="column col-md-6 col-sm-12 col-xs-12">
            <div class="copyright">©JobTV {{year}}. Toate drepturile rezervate</div>
          </div>
          <div class="column col-md-6 col-sm-12 col-xs-12">
            <ul class="footer-nav">
              <li>
               <router-link to="/politica-de-confidentialitate">Politica de Confidentialitate</router-link>
              </li>
              <!-- <li>
                <a href="#">ANPC</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li> -->
              <li>
				  <router-link to="/contact">Contact</router-link>
			  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
  name: "Footer",
  data() {
    return {
      year: "",
      posts:  [],            
      errors: [],
      path: 'http://admin.jobtv.ro/storage/'
    };
  },
  created(){
      this.getDate();
      this.getPosts();
  },
  methods: {
        getPosts: function(){
            
            axios.get('http://admin.jobtv.ro/api/v1/breaking')
                .then(response => {
                    this.posts = response.data.data                    
                    })
                .catch(e => console.log(e))

            console.log()
        },
        getDate: function(){
          this.year = new Date().getFullYear();
        },
        fireReloadEvent: function(){
          this.$root.$emit('on', 'reload');
        }
    }
};
</script>
<style>
footer .footer-bottom .copyright {
  font-size: 12px;
}
footer .footer-bottom .footer-nav li a {
  font-size: 12px;
}
h2#black{
    color: #242424;
}
</style>


