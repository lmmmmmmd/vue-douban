<template>
	<div id="city">
		<div class="head">
			<div class="city_header">
				<i class="city_back" @click="routeBack();$store.commit('show')"></i>
				<div class="city_title">选择城市</div>
			</div>
			<v-nav :List="nav" :ActiveClass="'Active_green'"></v-nav>
		</div>
		<v-swiper :Tablist="navMain" :ActiveClass="'Active_barGreen'"></v-swiper>
	</div>
</template>

<script>
import nav from '../../../components/Nav/nav.vue'
import swiper from '../../../components/Swiper/Swiper.vue'
import ChinaCity from '../../../components/header/city/ChinaCity/ChinaCity.vue'
import ForeignCity from '../../../components/header/city/ForeignCity/ForeignCity.vue'
	export default{
		data() {
			return {
				nav:[
					{text:"国内"},
					{text:"国外"}
				],
				navMain:[
					{component:ChinaCity},
					{component:ForeignCity}
				]
			}
		},
		
		components:{
			'v-nav':nav,
			'v-swiper':swiper,
			ChinaCity,
			ForeignCity
		},
		methods:{
			routeBack:function(){
				this.$router.back(-1);
			}
		}
		
	}
</script>

<style scope>
.head{
	position: fixed;
	width: 100%;
	z-index: 100;
	background: #fff;
}
#city{
	position: fixed;
	width: 100%;
	z-index: 100;
	background: #fff;
	border-bottom: 1px solid #e4e4e4;
}
.city_header{
	display: flex;
	top: 0;
	align-items: center;
	width: 100%;
	height: 50px;
	border-bottom: 1px solid #e4e4e4;
}
.city_back{
	display: block;
	width: 20px;
	height: 20px;
	margin-left: 20px;
	background: url(back.png) no-repeat;
	background-size: 20px 20px;
}
.city_title{
	color: #494949;
	font-size: 16px;
	font-weight: 500;
	margin-left: 30px;
}
.city_search{
	margin-top: 105px;
}
</style>