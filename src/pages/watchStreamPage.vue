<template>
	<div class="page">
		<div class="videoWrapper">
			<!-- <video width="320" height="240" controls>
				<source src="../../vid.mp4" >
				Your browser does not support the video tag.
			</video> -->
			<video id="vid1" controls preload="none "width="640"height="264"
					class="video-js vjs-fluid vjs-default-skin vjs-big-play-centered"
					data-setup='{}'>
				<source src="http://68.183.75.48:8082/hls/test.m3u8" type="application/x-mpegURL"/>
      		</video>
		</div>
	</div>
</template>
<script>

// import 'videojs-youtube/dist/Youtube.min.js';
import 'video.js/dist/video-js.min.css';
import 'video.js/dist/video.min.js';
export default {
	name: 'WatchStream',
	// mounted: function(){
	// 	setTimeout(() => {
	// 		this.collapseHeader()
	// 	}, 2000);
	// },
	// methods: {
	// 	collapseHeader: ()=>{
	// 		let header = document.getElementsByTagName("header")[0]

	// 		// collapse the header 
	// 		header.classList.add('collapseHeader')
	// 		// on mouse enter event, show full header
	// 		header.onmouseenter = ()=>{
	// 			header.classList.toggle('collapseHeader')
	// 		}
	// 		// on mouse leave, recollapse header
	// 		header.onmouseleave = ()=>{header.classList.add('collapseHeader')}
	// 	},
	// }
}
</script>
<style>
.collapseHeader{
	transition: opacity .1s, transform .1s;
	transform: translateY(-70%);
	/* display:inline-block; */
}
.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	/* padding-top: 25px; */
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.videoWrapper video {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>


