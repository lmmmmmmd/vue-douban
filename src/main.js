// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './vuex/store'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
import Play from './components/Play/Play.vue'//热映
import explore from './components/Explore/Explore.vue'//找片
import mine from './components/Mine/Mine.vue'//我的

import movie from './components/Play/movie/movie.vue'//电影详情
import search from './components/header/search/search.vue'//搜索
import city from './components/header/city/city.vue'//搜索
import movieDetail from './components/Play/movie/movie_detail/movie_detail.vue'//搜索
/* eslint-disable no-new */
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);//轮播插件

var router = new VueRouter({
	routes:[
		{path: "/", redirect:"/Play"},//路由重定向
		{path: "/Play", component: Play,name:'Play', meta: {keepAlive: true}},
		{path: "/Explore", component: explore,name:'Explore', meta: {keepAlive: true}},
		{path: "/Mine", component: mine,name:'Mine', meta: {keepAlive: true}},
		{path: "/movie", component: movie,name:'movie', meta: {keepAlive: false}},
		{path: "/search", component:search,name:'search', meta: {keepAlive: false}},
		{path: "/city", component:city,name:'city', meta: {keepAlive: false}},
		{path: "/movie/details", component:movieDetail,name:'detail', meta: {keepAlive: false}}
	]
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data:{
  	//调用方法 发送 this.$root.eventHub.$emit()  接收	this.$root.eventHub.$on()
  	eventHub:new Vue()//使用集中的事件处理器，可以在任何组件调用事件发射、接受的方法 
  }
})
