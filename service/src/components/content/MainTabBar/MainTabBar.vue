<template>
  <tab-bar>
     <tab-bar-item path="/ground" >
      <img slot="item-icon" src="../../../assets/img/tabbar/ground.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/ground-active.svg" alt="" >
      <div slot="item-text">广场</div>
    </tab-bar-item>
    <tab-bar-item path="/repair">
      <img slot="item-icon" src="../../../assets/img/tabbar/repair.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/repair-active.svg" alt="">
      <div slot="item-text">报修</div>
    </tab-bar-item>
    
    <tab-bar-item path="/mymessage">
      <img slot="item-icon" src="../../../assets/img/tabbar/user.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/user-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../commen/tabbar/TabBar.vue'
  import TabBarItem from '../../commen/tabbar/TabBaritem.vue'
  export default {
	  data(){
		 return{
		color:'#FB7299'	 ,
		dropshadow: 'drop-shadow(30px 0px 0 #FB7299)'
		 }
	  },
  components:{
    TabBar,
    TabBarItem
  }
  
   
  }
</script>

<style>
</style>
