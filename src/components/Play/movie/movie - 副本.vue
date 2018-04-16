<template>
	<div id="movie" v-if="moviedata">
		<div class="movieHalf_bg">
			<div class="movie_header">
				<i class="routerBack" @click="routerBack"></i>
				<div>电影</div>
				<i class="share"></i>
			</div>
			<div class="movie_img" v-cloak>
				<img :src="moviedata.images.large" alt="" class="img_size">
			</div>
		</div>

		<div class="movie_main">
			<div class="movie_title">{{moviedata.title}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				moviedata:'',
				detailData:'',
				id:''
			}
		},
		mounted:function(){
			this.moviedata = this.$route.query.movieData;
			this.id = this.moviedata.id;
			console.log(this.id);
			this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.id, {},
				   {headers: {},emulateJSON: true }).then((response) => {
				        this.detailData = response.body;
				        console.log(response)
				      }),() =>{
				      	console.log("error")
				      };
		},
		methods:{
			routerBack:function(){
				this.$router.back(-1)
			}
		}
	}
</script>

<style>
[v-cloak] {
  display: none;
}
.movieHalf_bg{
	width: 100%;
	height: 333px;
	background: #6b6b6b;
}
.movie_header{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	width: 90%;
	margin:0 auto;
}
.routerBack{
	display: block;
	width: 25px;
	height: 25px;
	background: url(back.png) no-repeat;
	background-size: 25px 25px;
}
.share{
	display: block;
	width: 25px;
	height: 25px;
	background: url(share.png) no-repeat;
	background-size: 25px 25px;
}
.movie_img{
	display: flex;

}
.img_size{
	width: 150px;
	height: 221px;
	margin: 0 auto;
	padding-top: 20px;
}
.movie_title{

}
</style>