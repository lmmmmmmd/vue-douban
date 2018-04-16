<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <div class="swiper-pagination" slot="pagination" ></div>
    <div class="swiper-scrollbar" slot="scrollbar">
    </div>
    <swiper-slide><!-- <NowPlay></NowPlay> --></swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <!-- Optional controls -->
	<!--<div class="swiper-button-prev" slot="button-prev"></div>
	<div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>
	import NowPlay from '../NowPlay/NowPlay.vue'
  	export default {
	    name: 'carrousel',
	    data() {
	      return {
	        swiperOption: {
	          // some swiper options/callbacks
	          // 所有的参数同 swiper 官方 api 参数
	          // ...
	          	/*loop : false,
				slidesPerView : 'auto',*/
				loopedSlides :1,
				resistanceRatio:0.5,
			    scrollbar:{
			    	el: '.swiper-scrollbar'
			    },
			    pagination:{
			    	el: '.swiper-pagination',
			    	clickable: true,
			        renderBullet: function (index, className) {
			          return '<span class="' + className + '"><div class="swiper_nav" id="swiper_nav'+(index + 1)+'"></div></span>';
			        }
			    }
	        }
	      }
	    },
	    computed: {
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }
	    },
	    mounted() {
	      // current swiper instance
	      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
	  
	     /* this.swiper.slideTo(3, 1000, false)*/
	     console.log('this is current swiper instance object', this.swiper)
	    },
	    components:{
	    	NowPlay
	    }
  	}
  
</script>

<style>
	.swiper-container{
		height: 3660px;
	}
	.swiper-wrapper{
		height: 300px;
		width: 100%;
		margin-top: 5px;
	}
	.swiper-slide{
		padding-top: 45px;
	}
	.swiper-container-horizontal > .swiper-scrollbar{
		position: absolute;
		left: 0;
		top: 45px;
		z-index: 50;
		height: 2px;
		width: 100%;
	}
	.swiper-container{
		border-radius:0px;
	}
	.swiper-pagination{
		display: flex;
		align-items: center;
		position:relative;
		width:100%;
		height: 50px;
		z-index: 100;
		margin-top: -300px;
		z-index: 100
	}
	.swiper-pagination-bullet{
		display: flex;
		align-items: center;
		justify-content: center;
		width:50%;
		height:auto;
		background:none;
		line-height: 45px;
		opacity: 0.4
	}
	.swiper-pagination-bullet-active{
		opacity: 0.9
	}
	.swiper_nav{
		width: 100px;
		height: 35px;
	}
	#swiper_nav1{
		background: url("Play1.png") no-repeat;
		background-size: 130px 35px;
		background-position: center;
	}
	#swiper_nav2{
		background: url("Play2.png") no-repeat;
		background-size: 130px 35px;
		background-position: center;
	}
</style>