<template>
  <div id="app" >
   
 <router-view ></router-view> 
         
		<main-tab-bar class="tabbar" v-show="this.$store.state.isShow"></main-tab-bar>
  </div>
</template>

<script>
	import MainTabBar from './components/content/MainTabBar/MainTabBar.vue'
	
export default {
  name: 'App',
	components:	{
		MainTabBar,
		
	},
	

}
</script>

<style>
#app{
	height: 100%;
}
 .tabbar{
	 z-index: 99;
	 background-color: white;
 }
 
</style>
