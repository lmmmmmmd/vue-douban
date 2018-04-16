<template>
  <div id="app">
	<keep-alive>
	    <router-view v-if="$route.meta.keepAlive">
	        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
	    </router-view>
	</keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
		    <!-- 这里是不被缓存的视图组件，比如 page3 -->
	</router-view>
	<v-foot></v-foot>
  </div>
</template>

<script>
import foot from './components/foot/foot.vue'
export default {
	components:{
		'v-foot':foot
	}
}
</script>

<style>
#app {
	 font-family:"微软雅黑";
}
</style>
