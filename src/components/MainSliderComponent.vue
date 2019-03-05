<template>
	<!--Main Slider-->
    <section class="main-slider">
    	
        <div class="rev_slider_wrapper fullwidthbanner-container"  id="rev_slider_three_wrapper" data-source="gallery">
            <div class="rev_slider fullwidthabanner" id="rev_slider_three" data-version="5.4.1">
                <ul>
                
                	<li data-description="Slide Description" style="height:600px !important" data-easein="default" data-easeout="default" data-fsmasterspeed="1500" data-fsslotamount="7" data-fstransition="fade" data-hideafterloop="0" data-hideslideonmobile="off" data-index="rs-1687" data-masterspeed="default" data-param1="" data-param10="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-rotate="0" data-saveperformance="off" data-slotamount="default" data-thumb="images/main-slider/image-6.jpg" data-title="Slide Title" data-transition="parallaxvertical">
                    <img alt="Hero" class="rev-slidebg" data-bgfit="cover" data-bgparallax="0" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src="../assets/hero3.jpg" > 
                    
                    <div class="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['720','720','650','450']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['0','-120','-110','-110']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<div class="play-btn text-center"><router-link to="/live"><span class="flaticon-play-button-3"> ÎN DIRECT</span></router-link></div>
                    </div>
                    
                    <div class="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['720','720','650','450']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['90','-30','10','10']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    </div>
                    
                    <div class="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['800','850','700','450']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['170','50','100','100']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!--End Main Slider-->
</template>

<script>
export default {
	name: 'MainSliderComp'
}
</script>
<style scoped>
.main-slider .play-btn{
    background: #fff;
    margin-left: 2em;
    margin-right: 2em;
    padding: .5em 0 .5em 0;
    border-radius: 15px;
    font-size: 45px;
}
#rev_slider_three > ul > li > div.slotholder > div{
    height: 600px !important;
}

@media only screen and (max-width: 500px) {
    .main-slider .play-btn{
        font-size: 28px;
    }
}
</style>

