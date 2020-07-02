<template>
	<div class="login-wrap">
		<el-form
		v-show="isShow"
		 class = "login-form"
		label-position="top" 
		label-width="80px" 
		:model="formdata">
		  <div style="text-align: center;font-size: 24px;">用户登录</div>
		  <el-form-item label="用户名">
		    <el-input v-model="formdata.adminName" placeholder = "请输入用户名" prefix-icon="el-icon-user"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" >
		    <el-input v-model="formdata.adminPassword" type='password' placeholder = "请输入密码" prefix-icon="el-icon-lock"></el-input>
		  </el-form-item>
		 <button class = "login-btn" @click.prevent = "userLogin()">登录</button>
		 
		 <div class="tab">
		 <a  @click="showMaintainerView">维修人员登录请点击此处</a>
		 </div>
		 
		 <div class="tab">
		 <span>还没账户？快去</span>
		 <a @click="showRegister">注册</a>
		 </div>
		 
		 <div class="support">
		 	 <span>本项目由</span>
		 	 
		 	 <img src="../../assets/img/logo.png" style="width: 30px;height: 30px;" >
		 	 <img src="../../assets/img/dcloud.gif" style="width: 120px;" >
		 	
		 		<span>提供技术支持</span> 
		 			
		 </div> 
		  
		</el-form>
		
	
	<el-form
	v-show="showmaintainer"
	 class = "login-form"
	label-position="top" 
	label-width="80px" 
	:model="formdata">
	  <div style="text-align: center;font-size: 24px;">维修人员登录</div>
	  <el-form-item label="工号">
	    <el-input v-model="formdata.adminName" placeholder = "请输入工号" prefix-icon="el-icon-user"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" >
	    <el-input v-model="formdata.adminPassword"  type='password' placeholder = "请输入密码" prefix-icon="el-icon-lock"></el-input>
	  </el-form-item>
	 <button class = "login-btn" @click.prevent = "maintainerLogin()">登录</button>
	 
	 
	 <div class="tab">
	 <a @click="showUserView">用户登录请点击此处</a>
	 </div>
	 
	 
	 
	 <div class="support">
	 	 <span>本项目由</span>
	 	 
	 	 <img src="../../assets/img/logo.png" style="width: 30px;height: 30px;" >
	 	 <img src="../../assets/img/dcloud.gif" style="width: 120px;" >
	 	
	 		<span>提供技术支持</span> 
	 			
	 </div>
	</el-form>	
	
	
	
	<el-form
	v-show="showregister"
	 class = "register-form"
	label-position="top" 
	label-width="80px" 
	:model="formdata">
	  <div style="text-align: center;font-size: 24px;">新用户注册</div>
	  <el-form-item label="用户名" >
	    <el-input v-model="formdata.adminName" placeholder = "请输入用户名" prefix-icon="el-icon-user"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" >
	    <el-input v-model="formdata.adminPassword" type='password' placeholder = "请输入密码" prefix-icon="el-icon-lock"></el-input>
	  </el-form-item>
	  <el-form-item   label="手机号" >
	    <el-input v-model="formdata.phone"  placeholder = "请输入手机号" prefix-icon="el-icon-mobile"></el-input>
	  </el-form-item>
	 <button class = "register-btn" @click.prevent = "register()">注册</button>
	 
	 
	 <div class="tab">
	 <a @click="showUserView">用户登录请点击此处</a>
	 </div>
	 
	 
	 
	 <div class="support">
	 	 <span>本项目由</span>
	 	 
	 	 <img src="../../assets/img/logo.png" style="width: 30px;height: 30px;" >
	 	 <img src="../../assets/img/dcloud.gif" style="width: 120px;" >
	 	
	 		<span>提供技术支持</span> 
	 			
	 </div>
	</el-form>	
	
	
	</div>
	
</template>

<script>
	export default{
		name:'login',
		data(){
			return{
				isShow:true,
				showregister:false,
				showmaintainer:false,
				formdata:{
					adminName:'',
					adminPassword:'',
					phone:''
				}
			}
		},
		
		methods:{
		// 切换显示
			showUserView(){
				this.isShow = true
				this.showmaintainer = false
				this.showregister = false
			},
			
			showMaintainerView(){
				this.isShow = false
				this.showmaintainer = true
				this.showregister = false
			},
			
			showRegister(){
				this.showregister = true
				this.isShow = false
				this.showmaintainer = false
			},
		// 登录请求
			 userLogin(){
			console.log(this.formdata)
			   this.$http.get (`/user/login?username=${this.formdata.adminName}&password=${this.formdata.adminPassword}` )
			   .then(res => {			 
			 if(res.status == 200){
					  // console.log(res)
			    this.$router.replace('/ground')	
				this.$store.commit('change1')
				this.$store.commit('addUsername',this.formdata.adminName)
				  console.log(this.$store.state.username)
				  }
				
				 })	 
			//存储用户手机号	
			this.$http.get (`/user/findUserPhone?username=${this.formdata.adminName}` ).then(res => {
			if(res.status == 200){
					 // console.log(res)
			  					
					this.$store.commit('addPhone',res.data.userPhone)
				console.log(this.$store.state.phone)
				 }
							
			 })	 
		    },
			
			maintainerLogin(){
			console.log(this.formdata)	
			//  await this.$http.get
			//  (`` )
			//  .then(res => {
							  
			
							//  })	 
			this.$router.replace('/maintainer')	
			},
			
	//注册请求
		 async register(){
			console.log(this.formdata)	
             await this.$http.get 
			 (`/user/register?username=${this.formdata.adminName}
			 &password=${this.formdata.adminPassword}&userPhone=${this.formdata.phone}` )
			 .then(res => {			 
				  if(res.status == 200){
					  console.log(res)
			         this.$message.success('注册成功！')
					 this.showUserView()
				  }
				
				 })	 			  
			  
		  }
			
		  },
		  
		 created() {
		 	this.$store.commit('change2')
		 }
		
		
	}
</script>

<style>
	.login-wrap{
		height: 100%;
		/* background-image: url(../../assets/img/pics-bg.jpg); */
		/* background-size: 100% 100%; */
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FB7299;
	}
	.login-form{
		background-color: rgba(255,255,255,0.9);
		width: 75%;
		height:70%;
		padding: 25px;
		border-radius: 6px;
		
	}
	.register-form{
		background-color: rgba(255,255,255,0.9);
		width: 75%;
		height:78%;
		padding: 25px;
		border-radius: 6px;
	}
	 .login-btn{
		 margin-top: 15%;
		width: 100%;
		height: 38px;
	    background-color: #FB7299;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
	}
	.register-btn{
		margin-top: 5%;
		width: 100%;
		height: 38px;
		background-color: #FB7299;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
	}
		
	.tab{
		margin-top:5% ;
		text-align: center;
	}
   .tab a{
		font-size: 13px;
		color:#A448A4 ;
		text-decoration: underline;
		
	}
	.tab span{
	font-size: 13px;	
	}
  .support{
	margin-top: 10% ;
	text-align: center;
	
   }
   .support span{
	font-size:5%;
	color: #A195A1;
   }

</style>
