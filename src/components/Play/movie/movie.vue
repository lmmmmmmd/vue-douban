<template>
	<div id="movie" v-if="moviedata">
		<div class="movieHalf_bg">
			<div class="movie_header">
				<div class="movie_header_box">
					<i class="routerBack" @click="routerBack();$store.commit('show')"></i>
					<div>电影</div>
					<i class="share"></i>
				</div>
			</div>
			<div class="movie_img">
				<img :src="moviedata.images.large" alt="" class="img_size">
			</div>
		</div>

		<div class="movie_main">
			<div class="movie_msg">
				<div class="movie_msg_box">
					<div class="msg_left">
						<div class="movie_title">{{moviedata.title}}</div>
						<div class="movie_info">
							<div><span>{{moviedata.year}}/</span><span v-for="(item,index) in moviedata.genres">{{item}}/</span></div>
							<div><span>原名：{{moviedata.original_title}}</span></div>
							<div><span>上映时间：2018-03-16(美国/中国大陆)</span></div>
							<div><span>片长：118分钟</span></div>
						</div>
					</div>
					<div class="msg_right">
						<div class="msg_scoreText">豆瓣评分</div>
						<div class="msg_scoreNum">{{moviedata.rating.average}}</div>
						<div class="msg_star"><star :size="24" :score="moviedata.rating.average"></star></div>
						<div class="msg_scoreText">{{moviedata.collect_count}}人</div>
					</div>
				</div>
			</div>

			<div class="introd">
				<div class="introd_title"><span>简介</span></div>
				<div class="introd_text">
					<div class="introd_textT" :class="{hidden:ishidden}">{{moviedata.summary}}</div>
					<span class="open" @click="open" v-if="ishidden">展开</span>
				</div>
			</div>

			<div class="comment">
				<v-nav :List="nav" :ActiveClass="'Active_black'"></v-nav>
				<v-Swiper :Tablist="navMain" :ActiveClass="'Active_bar'" :idNum="this.$route.query.movieID"></v-Swiper>
			</div>
		</div>
		<div style="height:500px;"></div>
	</div>
</template>

<script>
import star from '../../star/star.vue'
import nav from '../../../components/Nav/nav.vue'
import Swiper from '../../../components/Swiper/Swiper.vue'
import shortCom from './shortCom/shortCom.vue'
import movieCom from './movieCom/movieCom.vue'
	export default{
		data() {
			return {
				moviedata:'',//存放ajax获取的数据
				ishidden:true,
				nav:[
					{text:"短评"},
					{text:"影评"}
				],
				navMain:[
					{component:shortCom},
					{component:movieCom}
				],
				/*navBarFixed:false*/
			}
		},
		mounted:function(){
			this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$store.state.movieId, {},
				   {headers: {},emulateJSON: true }).then((response) => {
				        this.moviedata = response.body;
				      }),() =>{
				      	console.log("error")
				      };
				      console.log(this.$store.state.movieId);
		},
		methods:{
			routerBack:function(){
				this.$router.back(-1)
			},
			open:function(){
				this.ishidden = !this.ishidden
			}
		},
		created() {
			
		},
		components:{
			star,
			'v-nav':nav,
		    'v-Swiper':Swiper,
		    shortCom,
		    movieCom
		}
	}
</script>

<style>
.isFixed{
	position: fixed;
	top: 50px;z-index: 999;
	width: 100%;
}
.movieHalf_bg{
	display: flex;
	width: 100%;
	height: 333px;
	background: #6b6b6b;
}
.movie_header{
	display: flex;
	position: fixed;
	width: 100%;
	height: 50px;
	margin:0 auto;
	left: 0;right: 0;top: 0;
	background: #6b6b6b;
}
.movie_header_box{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin:0 auto;
	width: 90%;
	
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
	align-items: center;
	justify-content: center;
	margin:0 auto;
}
.img_size{
	width: 150px;
	height: 221px;
	padding-top: 50px;
}
.movie_main{
	background: #f9fcff;
}
.movie_title{
	font-size: 20px;
	font-weight: 600;
	color: #494949;
}
.movie_msg{
	border-bottom: 1px solid #e4e4e4;
}
.movie_msg_box{
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin:0 auto;
	padding-top: 20px;
}
.movie_info{
	margin-top: 10px;
}
.movie_info span{
	color: #9b9b9b;
	font-size: 12px;
	height: 20px;
	line-height: 20px;
}
.msg_right{
	width: 80px;
	height: 90px;
	text-align: center;
	box-shadow: 0px 1px 12px -3px #a5a5a5
}
.msg_scoreText{
	color: #9b9b9b;
	font-size: 12px;
	margin-top: 5px;
}
.msg_scoreNum{
	font-size: 25px;
	color: #494949;
	margin-top: 5px;
}
.msg_star{
	margin-top: 5px;
}
.introd{
	width: 90%;
	margin:0 auto;
	margin-top: 10px;
}
.introd_title span{
	color:#a2a3a2;
	font-size: 13px;
}
.introd_text{
	margin-top: 5px;
	height: 120px;
}
.introd_textT{
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	width: 100%;
	line-height: 15px;
	color:#494949;
	font-size: 14px;
}
.hidden{
	overflow: hidden;
}
.open{
	color: #42bd56;
	font-size: 14px;
	margin-top: 0px;
}
.comment{
	margin-top: 15px;
	height: 500px;
}
.comment .swiper-scrollbar{
	position: absolute !important;
	top: 0 !important;
}

</style>