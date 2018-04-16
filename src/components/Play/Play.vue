<template>
	<div id="Play">
		<div class="head">
			<v-header></v-header>
		    <v-nav :List="nav" :ActiveClass="'Active_black'"></v-nav>
	    </div>
	    <v-Swiper :Tablist="navMain" :ActiveClass="'Active_bar'"></v-Swiper>
    </div>
</template>

<script>
import header from '../../components/header/header.vue'
import nav from '../../components/Nav/nav.vue'
import Swiper from '../../components/Swiper/Swiper.vue'
import NowPlay from '../../components/Play/NowPlay/NowPlay.vue'
import WillPlay from '../../components/Play/WillPlay/WillPlay.vue'
	export default{
		data() {
			return {
				nav:[
					{text:'正在热映'},
					{text:'将要上映'}
				],
				navMain:[
					{component: NowPlay},
	      			{component: WillPlay}
				]
			}
		},
		components:{
		    'v-header':header,
		    'v-nav':nav,
		    'v-Swiper':Swiper,
		    NowPlay,
		    WillPlay
	  }
	}
</script>

<style>
	.head{
		position: fixed;
		width: 100%;
		z-index: 100;
		background: #fff;
	}
	
</style>