<template>
	<div class="NowPlay">
		<div v-if="movie.length">
			<div style="height:100px;"></div>
			<div v-for="(item,index) in movie" class="Play_list box-shadow-1px" @click="$store.commit('ChangeId',item.id);$store.commit('hide')">
				<router-link :to="{path:'/movie'}" >
					<div><img :src="item.images.small" class="list_img"></div>
					<div class="list_massgage">
						<div class="list_title">{{item.title}}</div>
						<!-- <star></star> -->
						<div class="list_rating"><star :size="24" :score="item.rating.average"></star>&nbsp;{{item.rating.average}}</div>
						<div class="list_directors">导演：{{item.directors[0].name}}</div>
						<!-- <div>{{item.casts[0].name}}</div> -->
						<div class="list_casts">
							<span>主演：</span><span v-for="a in item.casts">{{a.name}}/</span>
						</div>
					</div>
					<div class="Buy_ticket">
						<div>
							<div class="list_num">{{(item.collect_count/10000).toFixed(1)}}万人看过</div>
							<div class="buy"><span>购票</span></div>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import star from '../../star/star.vue'

	export default{
		data: function() {
			return {
				movie:{}
			}
		},
		created: function() {
		  this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', {},
		   {headers: {},emulateJSON: true }).then((response) => {
		   		var _this = this;
		        _this.movie = response.body.subjects;
		      }),() =>{
		      	console.log("error")
		      };
		     
		},
		components:{
			star
		}
	}
</script>

<style>
	.list_num{
		color:#ff6677;
		font-size: 12px;
		margin-top: -20px;
	}
	.buy{
		width: 60px;
		height: 30px;
		line-height: 30px;
		border:1px solid #ff6677;
		margin:20px 0 0 10px;
		text-align: center;
		border-radius: 8px;
	}
	.buy span{
		font-size: 15px;
		color: #ff6677;
	}
</style>