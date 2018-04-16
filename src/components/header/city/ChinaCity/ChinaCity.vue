<template>
	<div id="ChinaCity">
		<div class="city_search">
			<input type="text" class="city_search_text" placeholder="输入城市名称查询">
		</div>
		<div class="city_locs">
			<div class="msg_title">GPS定位城市</div>
			<div class="city_text">广州</div>
		</div>
		<div class="city_hot">
			<div class="msg_title">热门城市</div>
			<ul class="city_List" v-if="cityList.length">
				<li v-for="item in cityList"><span>{{item.name}}</span></li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				cityList:''
			}
		},
		created: function() {
		  this.$http.jsonp('https://api.douban.com/v2/loc/list', {},
		   {headers: {},emulateJSON: true }).then((response) => {
		   		var _this = this;
		        _this.cityList = response.body.locs;
		      /* console.log(_this.cityList)*/
		      }),() =>{
		      	console.log("error")
		      };
		},
	}
</script>

<style>
#ChinaCity{
	background: #f4f4f4;
	height: 100%;
}
.city_search{
	width: 100%;
	height: 50px;
	background:#fff;
	text-align: center;

}
.city_search_text{
	width: 80%;
	height: 50px;
	font-size: 16px;
	outline: none;
	background: url(search.png) no-repeat;
	background-size: 20px 20px;
	background-position: 0px 15px;
	padding-left: 30px;
}
.city_locs{
	width: 100%;
	background:#f4f4f4;
	margin-top: 10px;
}
.msg_title{
	color: #9b9b9b;
	font-size: 14px;
	margin-left: 20px;
}
.city_text{
	width: 90px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	background:#fff;
	margin:5px 0 0 20px;
}
.city_hot{
	margin-top: 10px;
}
.city_List{
	width: 100%;
	text-align: center;
	margin-top: 10px;
}
.city_List li{
	float: left;
	width: 33.33%;
	height: 40px;
	margin-top: 10px;

}
.city_List li span{
	display: block;
	width: 95px;
	height: 40px;
	line-height: 40px;
	background: #fff;
	margin:0 auto;
}
</style>