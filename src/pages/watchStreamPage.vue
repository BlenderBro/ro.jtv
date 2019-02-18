<template>
	<div class="page">
		<div class="videoWrapper">
			<!-- <video width="320" height="240" controls>
				<source src="../../vid.mp4" >
				Your browser does not support the video tag.
			</video> -->			
			<video id="player" loop controls preload="auto" width="640" height="264"
					class="video-js vjs-fluid vjs-default-skin vjs-big-play-centered"
					data-setup='{}'>
				<!-- <source src="http://68.183.75.48:8082/hls/test.m3u8" type="application/x-mpegURL"/> -->
				<source src="../../loop.mp4" >
      		</video>
		</div>
	</div>
</template>
<script>

import 'video.js/dist/video-js.min.css';
// import 'video.js/dist/video.min.js';
import videojs from 'video.js';

export default {
	name: 'WatchStream',
	mounted: function(){
		this.player = videojs('#player')
	}
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


