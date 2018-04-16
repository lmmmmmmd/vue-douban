<template>
	<div class="shortCom" v-if="shortCom">
		<div class="short_title">
			<span class="short_text">短评</span>
			<span class="short_write">写短评</span>
		</div>
		<div class="short_list" v-for="item in shortCom">
			<div class="list_left">
				<img :src="item.author.avatar" alt="头像">
			</div>
			<div class="list_right">
				<div class="list_user">
					<div class="list_name">
						<div class="list_username">{{item.author.name}}</div>
						<star :size="24" :score="6"></star>
					</div>
					<div class="list_like">
						<i class="like"></i>
						<div>{{item.useful_count}}</div>
					</div>
				</div>
				<div class="list_content">
					<div class="list_text">{{item.content}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import star from '../../../star/star.vue'
	export default{
		data() {
			return{
				shortCom:{}
			}
		},
		created() {
			this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$store.state.movieId+'/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&count=20&client=something&udid=dddddddddddddddddddddd', {},
				   {headers: {},emulateJSON: true }).then((response) => {
				        this.shortCom = response.body.comments;
				        console.log(this.shortCom);
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
	.short_title{
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin: 0 auto;
		margin-top: 10px;

	}
	.short_text{
		color: #494949;
		font-size: 14px;
	}
	.short_write{
		width: 50px;
		height: 20px;
		line-height: 20px;
		border: 1px solid #68cb78;
		font-size: 12px;
		text-align: center;
		color: #68cb78;
		border-radius: 5px;
	}
	.short_list{
		display: flex;
		width: 90%;
		height: auto;
		margin:0 auto;
		margin-top: 20px;
	}
	.list_left{
		flex:0.1;
	}
	.list_right{
		flex:0.9;
		margin-left: 8px;
	}
	.list_left img{
		width: 30px;
		height: 30px;
		border-radius: 15px;
	}
	.list_name{
		display: flex;
		align-items: center;
	}
	.list_user{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.list_username{
		padding-right: 10px;
	}
	.list_like{
		display: flex;
		align-items: center;
		color: #cacbcb;
		font-size: 12px;
	}
	.like{
		display: block;
		width: 20px;
		height: 20px;
		background: url(./ic_like.png) no-repeat;
		background-size: cover;
	}
	.list_text{
		color:#5c5d5c;
		font-size: 14px;
		margin-top: 5px;
	}
</style>