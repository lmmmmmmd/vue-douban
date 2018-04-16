<template>
	<div class="movie_comment">
		<div class="com_title">
			<span class="com_text">影评</span>
			<span class="com_write">写影评</span>
		</div>
		<div class="com_list" v-for="item in movie_comment">
			<router-link :to="{path:'/movie/details'}">
				<div class="ComList_title">
					{{item.title}}
				</div>
				<div class="ComList_name">
					<div class="ComList_name_id">{{item.author.name}}</div>
					<star :size="24" :score="item.rating.value*2"></star>
				</div>
				<div class="ComList_text">
					{{item.summary}}
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import star from '../../../star/star.vue'
	export default{
		data() {
			return{
				movie_comment:{}
			}
		},
		created() {
			this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$store.state.movieId+'/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=20&client=something&udid=dddddddddddddddddddddd', {},
				   {headers: {},emulateJSON: true }).then((response) => {
				        this.movie_comment = response.body.reviews;
				       /* console.log(this.movie_comment);*/
				      }),() =>{
				      	console.log("error");
				      };
		},
		components:{
			star
		}
	}
</script>

<style>
	.com_title{
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin: 0 auto;
		margin-top: 10px;
		padding-bottom: 10px;
	}
	.com_text{
		color: #494949;
		font-size: 14px;
	}
	.com_write{
		width: 50px;
		height: 20px;
		line-height: 20px;
		border: 1px solid #68cb78;
		font-size: 12px;
		text-align: center;
		color: #68cb78;
		border-radius: 5px;
	}
	.com_list{
		width: 92%;
		margin:0 auto;
	}
	.ComList_name{
		display: flex;
		align-items: center;
		font-size: 12px;
		color: #9b9b9b;
		margin-top: 8px;
	}
	.ComList_title{
		color: #494949;
		font-size: 16px;
		font-weight: 700;
		margin-top: 25px;
	}
	.ComList_text{
		font-size: 12px;
		color: #9b9b9b; 
		margin-top: 8px;
		line-height: 18px;
	}
</style>