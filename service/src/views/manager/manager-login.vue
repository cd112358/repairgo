<template>
<div class="login-wrap">
	<el-form
	 class = "login-form"
	label-position="top" 
	label-width="80px" 
	:model="formdata">
	  <h2 style="text-align: center;">用户登录</h2>
	  <el-form-item label="用户名">
	    <el-input v-model="formdata.adminName"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" >
	    <el-input v-model="formdata.adminPassword" type='password'></el-input>
	  </el-form-item>
	  <el-button type="primary" class = "login-btn" @click.prevent = "handleLogin()" >登录</el-button>
	</el-form>
</div>
</template>

<script>
export default{
	name:'manager-login',
  data(){
	return{
		formdata:{
			adminName:'',
			adminPassword:''
		}
	}
  },
  
  methods:{	 
	  // 发送登录请求
	async handleLogin(){
	console.log(this.formdata)
	  await this.$http.get
	  (`/admin/login?adminName=${this.formdata.adminName}&pwd=${this.formdata.adminPassword}` )
	  .then(res => {
		  
	    const meta = res.data.status
		if(meta === 200){
		 
		 this.$router.push('/orderform')	
		this.$message.success('登录成功')
		}else{
			 this.$message.error('登录失败')
			 }
		console.log(res)
		 })	 
    }  
  },
	
	created() {
		this.$store.commit('change2')
	}
}
</script>

<style scoped>
.login-wrap{
	height: 100%;
	background-image: url(../../assets/img/pics-bg.jpg);
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.login-form{
	background-color: #f6f6f6;
	width: 350px;
	height: 380px;
	padding: 27px;
	border-radius: 6px;
}
.login-form .login-btn{
	width: 100%;
}
</style>
