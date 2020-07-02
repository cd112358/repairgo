<template>
  <div class = "tab-bar-item" @click = "itemclick">
  <div v-if = "!isActive"><slot name = "item-icon"></slot></div>
  <div v-else><slot name = "item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name = "item-text"></slot></div>
  </div>
</template>

<script>
  export default{
 props:{
   path:String,
   activeColor:{
     type:String,
     default:'#01B2FF'
   }
 },


methods:{
	itemclick(){
		this.$router.replace(this.path)
	}
},

computed:{
 isActive(){
  //return this.$route.path.indexOf(this.path)!==-1
  return this.$route.path==this.path
 },
 activeStyle(){
   return this.isActive ?{color:this.activeColor} :{}
 }
}
}
</script>

<style >
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 60px;
    font-size: 13px;
    
  }
  .tab-bar-item img{
    margin-top: 4px;
    width: 30px;
    height:30px ;
    vertical-align: middle;
  }

</style>
