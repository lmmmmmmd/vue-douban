<template>
	<div class="nav">
		<ul class="nav_list">
			<li class="nav_list_item" v-for="(item,index) in List" :class="Active(index)" @click="tabClick(index)" >{{item.text}}</li>
		</ul>
		<div class="bottom">
			<div class="slide"></div>
		</div>
		<!-- <swiper :options="swiperOption" ref="mySwiper">
			 <div class="swiper-scrollbar"   slot="scrollbar"></div>
		</swiper> -->
	</div>
</template>

<script>
	export default{
		props:{
			//接收一个数组，作为nav标题
			List:{
				type:Array
			},
			//接收一个字符串，作为选中状态的class
			ActiveClass:{
				type:String
			}
		},
		data() {
			return {
				nowIndex:0,
				/*swiperOption: {
		           loopedSlides :1,
					     resistanceRatio:0.5,
					     scrollbar:{el: '.swiper-scrollbar'}
		        }*/
			}
		},
		/*computed: {
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }
	    },*/
		mounted() {
			var Wid = document.getElementsByClassName('slide');
			for(var x=0;x<Wid.length;x++)
			{
				Wid[x].style.width = parseInt(100/this.List.length)+'%';
			}
			/*document.getElementsByClassName('slide').style.width = parseInt(100/this.List.length)+'%';*/
			//接收滑动时当前页面的index值，运行slideTab方法
			this.$root.eventHub.$on('slideTab',this.slideTab)
		},
		methods: {
			tabClick:function(index){
				var _this = this;
				_this.nowIndex = index;
				//发送点击时的index值
				_this.$root.eventHub.$emit('changeTab',index);
			/*	console.log(this.ActiveClass)*/
			},
			slideTab:function(index){
				this.nowIndex = index;
				/*let router = new VueRouter();
				let href = index === 0?'/one' : index === 1?'/two':'/one';
				router.push(href);*/
			},
			Active:function(index){
				if (this.nowIndex == index) {
					return this.ActiveClass;
				}
			}
		},
		created() {
			var Wid = document.getElementsByClassName('slide');
			this.$root.eventHub.$on('slideBar',(index) => {
				for(var x=0;x<Wid.length;x++)
				{
					Wid[x].style.transform = index;
				}
			})
		}
	}
</script>

<style>
	.nav_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
	}
	.nav_list_item{
		width: 50%;
		text-align: center;
		line-height: 50px;
		color: #9b9b9b;
	}
	.Active_black{
		color:#494949 !important;
	}
	.Active_green{
		color: #42bd56 !important;
	}
	.bottom{
		width: 100%;
		height: 2px;
		background: #c7c7c7;
	}
	.slide{
		height: 2px;
		background: #696969;
	}
</style>