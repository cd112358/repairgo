<template>
	<div class = "wrapper" ref = "wrapper">
		<div class="content">
	      <slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
	name:'scroll',
	props:{
		probeType:{
		type:Number,
		default:0
		}
	},
	data(){
		return{
			scroll:null,
		}
	},
		
	mounted() { 
		this.scroll = new BScroll (this.$refs.wrapper,{
			probeType:this.probeType,
			click:true,
			pullUpLoad:true
			
		})
	this.scroll.on('pullingUp', () => {
		console.log('上拉加载更多')
		
	})
	this.scroll.on('pullingDown', () => {
		console.log('刷新')
		
	})	
	this.scroll.on('scroll',(position) => {
		// console.log(position)
		this.$emit('scroll',position)
	})
	},
	
	methods:{
		scrollTo(x,y,time){
			this.scroll.scrollTo(x,y,time)
		}
	}
		
	}
</script>

<style>
</style>
