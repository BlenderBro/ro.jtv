<template>
	<div class="page">
		<div class="videoWrapper">
						
			<video id="player" loop controls autoplay preload="auto" width="640" height="264"
					class="video-js vjs-fluid vjs-default-skin vjs-big-play-centered"
					data-setup='{}'>
				<source src="http://mediafilmcenter.eu:1935/live/myStream/playlist.m3u8" type="application/x-mpegURL"/>				
      		</video>
			
		</div>
	</div>
</template>
<script>

import 'video.js/dist/video-js.min.css';
import videojs from 'video.js';
// require('videojs-contrib-media-sources'); // increase browser support with MSE polyfill
// require('videojs-contrib-hls.js'); // auto attaches hlsjs handler

export default {
	name: 'WatchStream',
	mounted: function(){
		this.player = videojs('#player');
		this.player.play();
		
	}
}
/*
wowza crap
Access-Control-Allow-Origin: *|Access-Control-Expose-Headers: Date, Server, Content-Type, Content-Length | Access-Control-Allow-Methods: OPTIONS, GET| Access-Control-Allow-Headers: Content-Type, User-Agent, If-Modified-Since, Cache-Control, Range
*/
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


