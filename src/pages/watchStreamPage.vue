<template>
	<div class="page">
		<div class="videoWrapper">
			<!-- Copy & Pasted from YouTube -->
			<!-- <iframe width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe> -->
			<video width="320" height="240" controls>
				<source src="../../vid.mp4" >
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
</template>
<script>
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


