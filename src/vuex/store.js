import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	foot:true,//控制foot组件显示隐藏
	movieId:0
}
const mutations={
	show(state){
		state.foot = true;//foot组件显示
	},
	hide(state){
		state.foot = false;//foot组件隐藏
	},
	ChangeId(state,id){
		state.movieId = id
	}
}
export default new Vuex.Store({
	state,mutations
})