<template>
	<div id="header">
		<div class="header_main">
			<router-link to='/city'>
				<div class="header_Location" @click="$store.commit('hide')">
					<div class="header_city">广州</div>
					<div class="header_DropDown"></div>
				</div>
			</router-link>
			<router-link to='/search'><button class="header_search">电影/电视剧/影人</button></router-link>
		</div>
	</div>
</template>

<script>
/*import search from '../header/search/search.vue'*/
	export default{
		data: function() {
			return {
				search:false
			}
		},
		methods: {
			SearchSwitch:function(){
				this.search = !this.search
			}
		}
		/*components:{
			'v-search':search
		}*/
	}
</script>

<style>
	.header_main{
		display: flex;
		width: 95%;
		height: 50px;
		align-items: center;
		justify-content: space-between;

	}
	.header_Location{
		display: flex;
		align-items: center;
		line-height: 50px;
	}
	.header_city{
		float: left;
		font-weight: 100;
		font-size: 15px;
		margin-left: 20px;
	 }
	 .header_DropDown{
	 	height: 10px;
	 	width: 15px;
	 	background: url(../header/ic_arrow_gray_down.png) no-repeat;
	 }
	.header_search{
		width: 280px;
		height: 40px;
		font-size: 16px;
		background: #f5f5f5;
		outline: none;
		border-radius: 5px;
		border: none;
		color: #9b9b9b;
	 }

</style>