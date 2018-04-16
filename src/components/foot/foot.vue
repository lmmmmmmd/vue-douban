<template>
	<div id="foot" v-show = "$store.state.foot">
		<ul class="foot_list">
			<li v-for="(item,index) in foot_list" @click="selectNav(index)" class="foot_btn">
				<router-link :to="item.path">
					<i class="foot_ic" :class="nowIndex==index?item.ic_active:item.ic_class"></i>
					<span class="foot_span" :class="nowIndex==index?'span_active':'span_normal'">{{item.title}}</span>
				</router-link>
			</li>
		</ul>
		<!-- <img src="./ic_hot_normal.png" alt="" style="width:100px;height:100px;"> -->
	</div>
</template>

<script>
	/*import store from '@/vuex/store';*/
	export default{
		data() {
			return {
				foot_list:
				[
					{title:"热映",path:'/Play',ic_class:"ic_hot_normal",ic_active:"ic_hot_activated"},
					{title:"找片",path:'/Explore',ic_class:"ic_explore_normal",ic_active:"ic_explore_activated"},
					{title:"我的",path:'/Mine',ic_class:"ic_mine_normal",ic_active:"ic_mine_activated"}
				],
				nowIndex:0
			}
		},
		methods: {
			selectNav:function(index) {
				this.nowIndex = index;
				console.log(this.nowIndex)
			}
		}
	}
</script>

<style>
	#foot{
		position: fixed;
		display: flex;
		align-items: center;
		bottom: 0;
		z-index: 100;
		width: 100%;
		height: 50px;
		background: #fff;
		border-top: 1px solid #e4e4e4
	}
	.foot_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 50px;
	}
	.foot_list a{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.foot_btn{
		display: flex;
		flex:1;
		text-align: center;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.foot_span{
		font-size: 12px;
		margin-top: 2px;
	}
	
	.foot_ic{
		display: block;
		width: 30px;
		height: 30px;
	}

	.span_active{
		color:#494949;
	}
	.span_normal{
		color: #999999;
	}
	.ic_hot_normal{
		background: url(./ic_hot_normal.png) no-repeat;
		background-size: 30px 30px;
	}
	.ic_hot_activated{
		background: url(./ic_hot_activated.png) no-repeat;
		background-size: 30px 30px;
	}
	.ic_explore_normal{
		background: url(./ic_explore_normal.png) no-repeat;
		background-size: 30px 30px;
	}
	.ic_explore_activated{
		background: url(./ic_explore_activated.png) no-repeat;
		background-size: 30px 30px;
	}
	.ic_mine_normal{
		background: url(./ic_mine_normal.png) no-repeat;
		background-size: 30px 30px;
	}
	.ic_mine_activated{
		background: url(./ic_mine_activated.png) no-repeat;
		background-size: 30px 30px;
	}
</style>