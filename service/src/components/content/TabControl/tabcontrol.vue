<template>
<div class = "tab-control">
	<div v-for = "(item,index) in titles" :key = "item" class="tab-control-item" 
	:class= "{active: currentindex === index}" 
	@click="itembtn(index)">
		<span>{{item}}</span>
	</div>
</div>
</template>

<script>
export default{
	name:'tabcontrol',
	props:{
		titles:{
		type:Array,
		default(){
			return[]
		}
		}
	},
	data(){
		return{
			currentindex: 0,
			color:''
		}
	},
	methods:{
		itembtn(index){
		 // let a = document.getElementsByClassName("active")
		 // a.style.color = "#FB7299"
			this.currentindex = index
			this.$emit('tabclick',index)
		}
	},
	created(){
		this.color = this.$store.state.color
	}
}
</script>

<style>
	.tab-control{
		display: flex;
		text-align: center;
		height:40px;
		line-height: 40px;
		font-size: 15px;
		background-color: white;
	}
	
	.tab-control-item{
		flex:1
		
	}
	.tab-control-item span {
		padding: 5px;
	}
	.active{
		color: pink;
	}
	.active span {
		border-bottom: 2px solid pink;
	}
</style>
