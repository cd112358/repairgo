<template>
<div class="back-top">
	<img src="../../../assets/img/top.png" >
</div>
</template>

<script>
	export default {
	name:'BackTop',
	
	}
</script>

<style scoped>
.back-top{
	position: fixed;
	bottom:55px;
	right:8px ;
	z-index: 9;	
}
.back-top img{
	width: 45px;
	height: 45px;
}
</style>
