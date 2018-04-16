<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in Tablist" :key="index">
    	<keep-alive>
    		<component :is="item.component"><!-- 组件在 vm.currentview 变化时改变！ --></component>
		  </keep-alive>
    </swiper-slide>
	
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
     <div class="swiper-scrollbar"   slot="scrollbar">
      <div class="swiper-scrollbar-drag" :class="this.ActiveClass"></div>
    </div>
  </swiper>
</template>

<script>
  export default {
    props:{
      Tablist:{
        type:Array
      },
      ActiveClass:{
        type:String
      }
    },
    name: 'carrousel',
    data() {
      return {
      	msg:0,
        swiperOption: {
           loopedSlides :1,
			     resistanceRatio:0.5,
			     scrollbar:{el: '.swiper-scrollbar'}
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
       var obj  = document.getElementsByClassName('swiper-scrollbar-drag')[0];
    	 //接收点击改变Tab的index值
      	this.$root.eventHub.$on('changeTab',(index) => {
	      	this.swiper.slideTo(index,300 ,false);
      	});
      	//当滑动时，监听当前页面的activeIndex值，发送到nav组件
      	this.swiper.on('slideChange',()=>{
      		//this.$root.eventHub.$emit('slideTab',this.swiper.activeIndex)
      		this.$root.eventHub.$emit('slideTab',this.swiper.activeIndex);
         /* this.$root.eventHub.$emit('slideBar',obj.style.transform);*/
      	});
        this.swiper.on('touchMove',()=>{
           this.$root.eventHub.$emit('slideBar',obj.style.transform);
        });
        this.swiper.on('transitionEnd',()=>{
           this.$root.eventHub.$emit('slideBar',obj.style.transform);
        });
        this.swiper.on('transitionStart',()=>{
           this.$root.eventHub.$emit('slideBar',obj.style.transform);
        })
    },
    created() {
     /* var obj  = document.getElementsByClassName('swiper-scrollbar-drag')[0];*/
      /*console.log(document.getElementsByClassName('swiper-scrollbar-drag')[0].style)*/
        /*this.$root.eventHub.$emit('barCss',obj.style.width);*/
    }
  }
</script>

<style>
	.swiper-container{
		
	}
	.swiper-container-horizontal > .swiper-scrollbar{
		position: fixed;
		left: 0;
		top: 100px;
		z-index: 50;
		height: 2px;
		width: 100%;
    opacity: 0;
	}
  .Active_bar{
    background: #494949 !important;
  }
  .Active_barGreen{
    background:#42bd56 !important;
  }
</style>