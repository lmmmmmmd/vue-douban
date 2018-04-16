<template>
	<div id="search">
		<div class="search_header">
			<div class="search_input"><input type="text" class="search_in" placeholder="搜索电影/电视剧/影人"></div>
			<router-link to="#"><div class="search_cancel" @click="routerback">取消</div></router-link>
		</div>

		<div class="search_his">
			<div class="search_his_title">
				<span class="search_his_title_text">搜索历史</span><span class="search_his_clear">清除</span>
			</div>
			<div class="his_his_list">
				<ul class="his_list_ul">
					<li v-for="(item,index) in history" class="his_list_li" :class="index%2===0?'his_border':''"><span>{{item.text}}</span></li>
				</ul>
			</div>
		</div>
		
		<div class="search_hot">
			<div class="search_hot_title">
				<span class="search_hot_title_text">热门搜索</span>
			</div>
			<div class="search_hot_list">
				<ul class="hot_list_ul">
					<li v-for="item in hot" class="hot_list_li"><span>{{item.text}}</span></li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data() {
			return {
				history:[
					{text:"11111"},
					{text:"22222"},
					{text:"33333"},
					{text:"44444"}
				],
				hot:[
					{text:"测试"},
					{text:"测试"},
					{text:"测试"},
					{text:"测试"},
					{text:"测试"},
					{text:"测试"},
					{text:"测试"},
					{text:"测试"},
					{text:"测试"},
					{text:"测试"}
				]
			}
		},
		methods:{
			routerback:function(){
				this.$router.back(-1)
			}
		}
	}
</script>

<style>
	#search{

	}
	.search_header{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50px;
		background: #42bd56;
	}
	.search_input{
		flex: 0.9;
		background: #fff;
		border-radius: 6px;
	}
	.search_in{
		height: 35px;
		background: url(search.png) no-repeat;
		background-size: 25px 25px;
		background-position: 5px 5px;
		padding-left: 40px;
		outline: none;
		font-size: 16px;
	}
	.search_cancel{
		color: #ffffff;
		margin-left: 10px;
	}
	.search_his_title{
		color: #9b9b9b;
		height: 50px;
		line-height: 50px;
		background: #f2f1ee;
	}
	.search_his_title_text{
		margin-left: 20px;
	}
	.search_his_clear{
		float: right;
		color: #494949;
		margin-right: 20px;
	}
	.his_list_ul{
		width: 100%;
	}
	.his_list_li{
		float: left;
		width: 49.8%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #f2f1ee;
		background: #fff;
	}
	.his_list_li span{
		margin-left: 20px;
	}
	.his_border{
		border-right: 1px solid #f2f1ee;
	}
	.search_hot_title{
		background: #f2f1ee
	}
	.search_hot_title_text{
		color: #9b9b9b;
	    height: 50px;
	    line-height: 50px;
	    background: #f2f1ee;
	    margin-left: 20px;
	}
	.hot_list_ul{
		padding-bottom: 50px;
	}
	.hot_list_li{
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #f2f1ee;
	}
	.hot_list_li span{
		margin-left: 20px;
	}
</style>