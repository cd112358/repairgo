<template>
	<div class="box" >

	<nav-bar class="home-bar" :style="{backgroundColor:color1}">
		<el-dropdown trigger="click" slot="left">
		      <span class="el-dropdown-link">
		        <img src="../../assets/img/tabbar/list.svg" alt="" >
		      </span>
		     <el-dropdown-menu slot="dropdown">
		       <el-dropdown-item>
		     	<span class="menuitem" @click="logout">退出登录</span>					     				
		     	</el-dropdown-item>
		       <el-dropdown-item>
		     	<span class="menuitem">
					<span>主题设置</span>
				<el-color-picker v-model="color1" size="mini" @change="ColorChange"></el-color-picker>
				</span>			
		     	</el-dropdown-item>			     		
		       
		     </el-dropdown-menu>
		    </el-dropdown>
	<span slot = "center">报修广场</span>
	</nav-bar>
	<tab-control :titles="['全部','未接收','已评价']"  class="tab-control" @tabclick = "tabclick" />
	
	
	<scroll class="content" :probeType="2" ref = "scroll"  @scroll = "contentScroll">	
	
	<el-card class="box-card"  v-for = "(item,index) in list" :key = "index">
	<!-- 报修订单信息 -->
	  <div slot="header" >
		  
		 <i class="el-icon-time" :style="{color:color1}"></i>
	    <span class="item" v-if="item.endTime" :style="{color:color1}">
		[{{item.endTime}}]
		
		</span>
		<span class="item" v-else-if="item.orderTime" :style="{color:color1}">
		[{{item.orderTime}}]
		
		</span>
		<i class="el-icon-user-solid" :style="{color: color1,marginLeft:'5%' }"></i>
		<span class="item" :style="{color:color1}">{{item.username}}</span>
		 
		
	    <div :style="{backgroundColor:color1,marginBottom:'5%',float:'right',padding: '6px',color:'white',fontSize:'13px',borderRadius:'5px'}"
		 v-if = "list[index].code==0" disabled>未处理</div>		
		<div :style="{backgroundColor:color1,marginBottom:'5%',float:'right',padding: '6px',color:'white',fontSize:'13px',borderRadius:'5px'}"
		 v-if = "list[index].code==1" disabled>未接收</div>		
		<div :style="{backgroundColor:color1,marginBottom:'5%',float:'right',padding: '6px',color:'white',fontSize:'13px',borderRadius:'5px'}"
		 v-if = "list[index].code==2" disabled>已接收</div>		
		<div :style="{backgroundColor:color1,marginBottom:'5%',float:'right',padding: '6px',color:'white',fontSize:'13px',borderRadius:'5px'}"
		 v-if = "list[index].code==3" disabled>已完成</div>		
		<div :style="{backgroundColor:color1,marginBottom:'5%',float:'right',padding: '6px',color:'white',fontSize:'13px',borderRadius:'5px'}"
		 v-if = "list[index].code==4" disabled>已评价</div>		
	  </div>
	<!-- 报修信息 -->
	<div class="message">
	 <img :src="item.url" class="image" alt="暂无图片" > 
	 
	  <div  class="repair-message">
		  <i class="el-icon-location-information" :style="{color:color1}"></i>
	   <span :style="{color:color1}">{{item.communityName}}{{item.buildingNo}}</span>	
	   
	   <div>
      <span :style="{color:color1}">【{{item.repairItems}}】</span>
	  <span :style="{color:color1}">{{item.reportDescribes}}</span>
	   </div>
	  </div>
	
	 </div> 
	 
	 <!-- 报修详情信息 -->
	 
	 
	  <el-collapse   @change="getcomments(item)">
		  <el-collapse-item title="查看详情" class="detail">
			  
		  <span :style="{color:color1,margin:'6%'}" >订单号：{{item.orderNumber}}</span>
		  <div v-show="list[index].code==4" :style="{color:color1,margin:'17px'}">
		  	  <span :style="{color:color1}">用户评价：{{opinion}}</span>				
		  </div>
		<!-- 完成 -->	
		 <!-- 完成时间 -->
		 <div v-show="list[index].code>=3" style="margin-bottom: 3%;">	  
          <div class="accpettime" >
		     <el-button class="elbutton"  type="primary"  disabled style="color: white;">已完成</el-button>
			 <span>{{item.endTime}}</span>
			 </div>
			 
			
			 <div class="acceptdetail">
				 
				 <img src="../../assets/img/hhh.jpg" alt=""  >
				 <div class="accepter">
					 <div>
						 <i class="el-icon-user" style="color: #409EFF;margin-left: 5%;"></i>
						 <span style="color: #303133;">系统自动受理-受理部门</span>
						 <div>
						<i class="el-icon-service" style="color: #409EFF;margin-left: 5%;"></i> 
						<span style="color: #303133;">{{item.jobNumber}}({{item.repairType}})</span>
						 </div>
					 </div>
					 
				 </div>
			 </div>			  
		</div>	  
			  <!-- 受理 -->
			  <div v-show="list[index].code>0">
			  <div class="accpettime">
		     <el-button class="elbutton"  type="primary"  disabled style="color: white;">受理</el-button>
			<span>{{item.receiptTime}}</span>
			 </div>
			 
			 <!-- 受理详情 -->
			 <div class="acceptdetail">
				
				 <img src="../../assets/img/hhh.jpg" alt=""  >
				 <div class="accepter">
					 <div>
						 <i class="el-icon-user" style="color: #409EFF;margin-left: 5%;"></i>
						 <span style="color: #303133;">系统自动受理-受理部门</span>
						 <div>
						<i class="el-icon-service" style="color: #409EFF;margin-left: 5%;"></i> 
						<span style="color: #303133;">{{item.jobNumber}}({{item.repairType}})</span>
						 </div>
					 </div>
					 
				 </div>
			 </div>
			 </div>
		  <!-- 申报时间   -->
		  
		 <div class="declaretime">
		 <el-button class="elbutton"  type="primary"  disabled>申报</el-button>
		 <span>{{item.orderTime}}</span>
		 </div>	
	            <div class="acceptdetail">
					 
					 <img src="../../assets/img/hhh.jpg" alt=""  >
					 <div class="accepter">
						 <div>
							 <i class="el-icon-user-solid" ></i>
							 <span style="color: #303133;">{{item.username}}</span>
							 <div>
							<i class="el-icon-help" ></i> 
							<span style="color: #303133;">{{item.repairItems}}</span>
							 </div>
						 </div>
						 
					 </div>
	              </div>
		<!-- 地点 -->
		<div>
		<i class="el-icon-location-outline" ></i>			   
         <span>{{item.communityName}}{{item.buildingNo}}{{item.houseNumber}}</span>
		 </div>
		 <!-- 问题描述 -->
		 <div>
			 <i class="el-icon-chat-dot-square"></i>
			 <span>【{{item.repairItems}}】{{item.reportDescribes}}</span>
			 <div>
				  <img :src="item.url" alt="" style="width: 50%;">
			 </div>
			
		 </div>
		
		    </el-collapse-item>
	  </el-collapse>
	</el-card>	
	</scroll>
  <back-top @click.native = "backClick" v-show="isShowBackTop" />
</div>	
  
</template>

<script>
	import NavBar from '../../components/commen/navbar/NavBar.vue'
	import Scroll from '../../components/commen/scroll/Scroll.vue'
	import BackTop from'../../components/content/BackTop/BackTop.vue'
	import TabControl from '../../components/content/TabControl/tabcontrol.vue'
	export default{
		name:'ground',
		components:{
			 NavBar,
			 Scroll,
			 BackTop,
			 TabControl
		},
		
		data(){
		return{
			scroll:null,
			list:[],
			isShowBackTop:false,
			orderNumber:''	,
			opinion:'',
			color1:'#409EFF'
		}
		},
		created() {
			this.color1 = this.$store.state.color
			this.getlist()
		},
		
		methods:{
			
			
		ColorChange(){
			
			this.$store.commit('colorchange',this.color1)
			console.log(this.color1)
		},
			
	//选项卡切换
		tabclick(index){
			switch(index){
				case 0:
				this.getlist()
				break
				case 1:
				this.getrelist()
				break
				case 2:
				this.getCommentsList()
				break
			}
		},
	//获取所有订单	
		async getlist(){
		const res = await this.$http.get('/order/findOrder')
			
		this.list = res.data
		console.log(this.list)	
		},	
		
	// 获取未接收订单
		async getrelist(){
		const res = await this.$http.get('/order/findOrderByCode?code=1')
			
		this.list = res.data
		console.log(this.list)	
		},	
	// 获取已评论订单		
		async getCommentsList(){
		const res = await this.$http.get('/user/findOrder4')
			
		this.list = res.data
		console.log(this.list)	
		},
	// 获取用户评论	
		async getcomments(a){
			console.log(a)
		 this.orderNumber = a.orderNumber
		 // console.log(this.orderNumber) 	 
		 if(a.code==4){
		const res = await this.$http.get(`/user/findOpinion?orderNumber=${this.orderNumber}`)	
		
		if(res.status == 200){
			console.log(res)
		this.opinion =  res.data.opinion
		 }
		 
		}
		 
		},
	// 点击回到顶部事件
		backClick(){
			// console.log('btnclick')
			this.$refs.scroll.scrollTo(0,0,600)
		},
	// 显示"回到顶部"按钮	
		contentScroll(position){
			this.isShowBackTop = (-position.y)>1000
			
		},
	// 退出登录
		logout(){
			this.$router.replace('/')
			this.$store.commit('change2')
		}
		
		}
		
	}
</script>

<style scoped>
	.tab-control{
		position: fixed;
		top:44px;
		left:0;
		right: 0;
		z-index: 98;
	}
	.content{
		/* height:calc(100% - 93px);
		overflow: hidden;
		margin-top:44px ; */
		position: absolute;
		top: 13%;
		bottom: 70px;
		left: 2%;
		right: 2%;
		
	}
	i{
		color: #409EFF;
		margin-left: 5%;
	}
	
	.home-bar{
		background-color: #409EFF;
		color: white;
		margin:0;
		position: fixed;
		top:0;
		left:0;
		right: 0;
		z-index: 99;
	}
	.home-bar img{
		width: 23px;
		margin-top: 10px;
	}
	.item{
		color: #409EFF;
		font-size: 13px;
	}
	.box-card{
		margin-top:5% ;
		
	}
	.message {
		display: flex;
	}
	.image{
		width: 20%;
		flex: 1;
	}
	.repair-message{
		flex: 2;
		height: 100%;
		padding: 0 5%;
		
	}
	.repair-message span{
		font-size: 12px;
	}
	.elbutton{
		float: left; 
		padding: 3px 6px;
		margin: 0 5%;
	}
	.detail span{
		color: #409EFF ;
	}
	.accpettime{
		width: 100%;
		height: 30px;
		border-bottom: 1px #EBEEF5 solid;
	}
	.acceptdetail{
		display: flex;
		border-bottom: 1px #EBEEF5 solid ;
		
	}
	.acceptdetail img{
		flex:1;
		width: 20%;
		margin: 3% 0;
	}
	.accepter{
		flex: 4;
	}
	.declaretime{
		margin-top: 5%;
		width: 100%;
		height: 30px;
		border-bottom: 1px #EBEEF5 solid;
	}
		
</style>
