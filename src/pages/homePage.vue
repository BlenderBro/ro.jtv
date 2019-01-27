<template>
<div>
	<MainSliderComp></MainSliderComp>
	<AdsComp></AdsComp>
	<BreakingNewsComp></BreakingNewsComp>
	<CommentsComp></CommentsComp>
</div>	
</template>

<script>
import MainSliderComp from '@/components/MainSliderComponent'
import BreakingNewsComp from '@/components/newsComponent'
import AdsComp from '@/components/adsComponent'
import CommentsComp from '@/components/viewerCommentsComponent'
export default {
	name: 'Home',
  	components: {
		  MainSliderComp,
		  BreakingNewsComp,
		  AdsComp,
		  CommentsComp
	  }
}
</script>
