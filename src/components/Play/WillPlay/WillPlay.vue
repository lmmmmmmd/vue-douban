<template>
  	<div class="WillPlay">
  		<div v-if="movie.length">
  			<div style="height:100px;"></div>
  			<div v-for="item in movie" class="Play_list box-shadow-1px">
  				<router-link :to="{path:'/movie',query:{detail:item}}">
	  				<div><img :src="item.images.small" class="list_img"></div>
	  				<div class="list_massgage">
						<div class="list_title">{{item.title}}</div>
						<!-- <star></star> -->
						<div class="list_rating">{{item.rating.average}}</div>
						<div class="list_directors">导演：{{item.directors[0].name}}</div>
						<!-- <div>{{item.casts[0].name}}</div> -->
						<div class="list_casts">
							<span>主演：</span><span v-for="a in item.casts">{{a.name}}/</span>
						</div>
					</div>
					<div class="Buy_ticket">
						<div>
							<div class="WantTo_num">{{(item.collect_count/10000).toFixed(1)}}万人想看</div>
							<div class="Watch"><span>想看</span></div>
						</div>
					</div>
				</router-link>
  			</div>
  		</div>
  	</div>
</template>

<script>
  export default {
   		data: function() {
			return {
				movie:{}
			}
		},
		created: function() {
		  this.$http.jsonp('https://api.douban.com//v2/movie/coming_soon', {},
		   {headers: {},emulateJSON: true }).then((response) => {
		   		var _this = this;
		        _this.movie = response.body.subjects;
		      }),() =>{
		      	console.log("error")
		      };
		}
  }
</script>

<style>
	.WantTo_num{
		color:#ffbd57;
		font-size: 12px;
		margin-top: -20px;
	}
	.Watch{
		width: 60px;
		height: 30px;
		line-height: 30px;
		border:1px solid #ffbd57;
		margin:20px 0 0 10px;
		text-align: center;
		border-radius: 8px;
	}
	.Watch span{
		font-size: 15px;
		color: #ffbd57;
	}
</style>