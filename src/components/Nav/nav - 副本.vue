<template>
	<div class="release">
		<div v-for="(list,index) in navLists" class="nav" :class="{on:ChangeBottom == index}" @click="onclick(index)">
			 <router-link :to="list.router">{{list.text}}</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
            return {
                navLists:[
	                {
	                	"text":"正在热映",
	                	"router":"/NowPlay"
	                },
	                {
	                	"text":"即将上映",
	                	"router":"/WillPlay"
	                }
                ],
                ChangeBottom:0
            }
        },	
		methods: {
			onclick:function(index){
				this.ChangeBottom = index
			}
		}
		
	}
</script>

<style>
	.release{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
	}
	.nav{
		flex: 50%;
		text-align: center;
		height: 50px;
		line-height: 50px;
		color: #9b9b9b;
		border-bottom: 2px solid #f5f5f5;
	}
	
	.on{
		border-bottom: 2px solid #494949;
	}
	.on a{
		color: #494949;
	}
</style>