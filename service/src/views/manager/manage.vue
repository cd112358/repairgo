<template>
	<el-container class="box">
	  <el-header class="head">
		  <el-row>
		    <el-col :span="4" class = "left">				
		  						<img src="../../assets/img/BILIBILI_LOGO.svg" alt="无法显示图片">			
		  				</el-col>
		    <el-col :span="18" class = "middle">
		  					<h2 style="color: #F6F6F6;">订单管理系统</h2>	
		  				</el-col>
		    <el-col :span="2" class="right">
		  										
		  				<!-- 	<img src="../../assets/img/login.svg" alt="无法显示图片"> -->
		  					<a href="#" class= "logout" @click = "logoutclick"  >退出</a>
		  					
		  	</el-col>
		  </el-row>
	  </el-header>
	  <el-container>
	    <el-aside width="200px" class = "aside">
			 <el-menu
			      :router="true"
			      class="el-menu-vertical-demo"
				  
			     >
			      <el-submenu index="1">
			        <template slot="title">
			          <i class="el-icon-location"></i>
			          <span>报修订单</span>
			        </template>
			        <el-menu-item index = "orderform">
			          <i class="el-icon-document"></i>
			          <span> 订单列表</span>
			          
			        </el-menu-item>
			       </el-submenu>
				   
			      <el-submenu index="2">
			        <template slot="title">
			          <i class="el-icon-location"></i>
			          <span>维修人员管理</span>
			        </template>
			        <el-menu-item index = "maintainer">
			          <i class="el-icon-user"></i>
			          <span> 维修人员列表</span>
			          
			        </el-menu-item>
			       </el-submenu>  
			   
			    </el-menu>
		</el-aside>
	    <el-main class="main">
			<el-card style="height: 100%;">
				<router-view></router-view>
			</el-card>
		</el-main>
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisiblelogout"
		  width="30%"
		  >
		  <span>确定退出登录吗？</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisiblelogout = false">取 消</el-button>
		    <el-button type="primary" @click="logout">确 定</el-button>
		  </span>
		</el-dialog>
	  </el-container>
	</el-container>
	
</template>

<script>
	export default{
		name:'manage',
		data(){
			return{
			dialogVisiblelogout:false	
			}
		},
		created() {
			this.$store.commit('change2')
		},
		methods:{
			logoutclick(){
				this.dialogVisiblelogout = true
			},
			logout(){
				this.$router.replace('/managerlogin')
				this.dialogVisiblelogout = false
			}
		}
	}
</script>

<style>
	.box{
		height: 100%;
		 background-image: url(../../assets/img/bilibg.png);
	}
	.head{
		background-color: #9AC5F2;
		border-top-right-radius:8px ;
		border-top-left-radius: 8px;
		
	}
	.left img{
		width: 100px;
		margin-top: 10px;
	}
	.middle {
		text-align: center;
		
	}
	.logout{
		text-decoration: none;
		line-height: 80px;
		color: gray;
	}
	.right img{
		margin-top: 18px;
		width: 30px;
		
	}
	.main{
		background-color: rgba(255,255,255,0.7);
		height: 100%;
	}
	.aside{
		margin-left: 20px;
		
		background-color: rgba(255,255,255,0.7);
		height: 100%;
	}
	.el-menu-vertical-demo{
		margin: 10px 10px;
		width: 100%;
	}
	a{
		color: #303133;
	}
	a:link {text-decoration:none;} 
	
	a:hover{
		color: #F6F6F6;
		text-decoration:underline;
	}
</style>
