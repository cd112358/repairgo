<template>
	<div class="box" >
		<nav-bar class="home-bar" :style="{backgroundColor:this.$store.state.color}">
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
			 <span slot = "center">我的报修</span>
		</nav-bar>
		<!-- <span style="position: absolute;top:20%;left:36%;font-size: 20px;width: 150px;" v-show="isShow" >
			<i class="el-icon-warning-outline"></i>暂无订单</span> -->
		<scroll class="content" :probeType="2" ref = "scroll2"  @scroll = "contentScroll" >
		<el-card class="box-card"  v-for = "(item,index) in list" :key = "index" >
		<!-- 报修订单信息 -->
		  <div slot="header" >
			  
			 <i class="el-icon-time" :style="{color:color1}"></i>
		    <span class="item" :style="{color:color1}">[{{item.orderTime}}]</span>
			 
			 <i class="el-icon-user-solid" :style="{color:color1,marginLeft:'5%'}" ></i>
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
		
		
		
		 
		 <!-- 报修详情信息 -->
		  <el-collapse @change="getcomments(item)">
			  <el-collapse-item title="查看进度" >
			      <el-timeline :reverse="reverse">
			          <el-timeline-item
			            v-for="(activity, index) in activitieslist[item.code]"
			      	  :color="activity.color"
			            :key="index"
			            :timestamp="activity.timestamp">
			            {{activity.content}}
			          </el-timeline-item>
			        </el-timeline>
			      
			    </el-collapse-item>
			  
			  <el-collapse-item title="查看详情" class="detail" >
				  <span style="margin: 15px;">订单号：{{item.orderNumber}}</span>
				  <div v-show="list[index].code==4" style="margin: 15px;">
					  <span >评价：{{opinion}}</span>
				  </div>
				  
				  <!-- 受理时间 -->
				  <div v-show="list[index].code>0">
				  <div class="accpettime">
			     <el-button class="elbutton"  type="primary"  disabled style="color: white;">受理</el-button>
				 <span>{{item.receiptTime}}</span>
				 </div>
				 
				 <!-- 受理详情 -->
				 <div class="acceptdetail" >
					 
					 <img src="../../assets/img/face1.png" alt=""  >
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
						 
						 <img src="../../assets/img/face1.png" alt=""  >
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
				 <div><img :src="item.url" alt="" style="width: 50%;"></div>
			 </div>
			
			    </el-collapse-item>
			
				
			<el-collapse-item title="评价"  v-if = "list[index].code==3" >
				<span>请您为本次服务做出评价</span>
			    <el-rate
				  
				  class="comment"
				  :texts="texts"
			      v-model="comments"
			      show-text>
			    </el-rate>
				<span>请您为维修工做出评价</span>
				<el-rate
				  :max="max"
				  class="comment"
				  :texts="texts1"
				  v-model="comments1"
				  show-text>
				</el-rate>
				<el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入评论内容"
				  v-model="textarea">
				</el-input>
				<el-button type="primary" style="margin: 5% auto;" @click="submit(item.orderNumber)">提交</el-button>
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
	export default{
		name:'mymessage',
		components:{
			NavBar,
			Scroll,
			BackTop
		},
		data(){
		return{
			color1:'#409EFF',
			isShowBackTop:false,
			reverse: false,
			textarea:'',
			max:3,
			isShow:true,
			orderNumber:'',
			texts:['失望', '差强人意','一般', '基本满意', '很满意'],
			texts1:['非常差','一般', '超赞'],
			comments:null,
			comments1:null,
			opinion:'',
			activitieslist:[],
			list:[]	
				
		  }
		},
		methods:{
			
		clear(){
		this.comments=''
	    this.comments1=''
		},
		
		//获取用户个人报修订单
		async getlist(){
			const res = await this.$http.get(`/order/findOrderByName?username=${this.$store.state.username}`)
			if(res.status == 200){
			this.isShow = false
			this.list=res.data
			for(let i = 0;i<this.list.length;i++){
			this.list[i].code=this.list[i].code*1
			}
			console.log(this.list)
			}
		},	
			
				
		//获取用户评论
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
		
	   // 提交用户评论
	   async submit(a){
			if(this.comments=='很满意'){
				this.comments='5'
			}else if(this.comments=='基本满意'){
			    this.comments='4'	
			}else if(this.comments=='一般'){
				this.comments='3'	
			}else if(this.comments=='差强人意'){
				this.comments='2'	
			}else if(this.comments=='失望') {
				this.comments='1'	
			}
			
			if(this.comments1=='超赞'){
				this.comments1='3'
			}else if(this.comments1=='一般'){
			    this.comments1='2'	
			}else if(this.comments1=='非常差'){
				this.comments1='1'	
			}
			
			this.orderNumber=a
			console.log(this.comments)	
			console.log(this.comments1)	
			console.log(this.orderNumber)
		const res = await this.$http.get(`/user/endOpinion?orderNumber=${this.orderNumber}
		&opinion=${this.textarea}
		&workerSatisfaction=${this.comments1}
		&satisfaction=${this.comments} `)
			if(res.status == 200){
				console.log(res)
				this.$message.success('评价成功！')
				this.clear()
			}
	},
		   
		   
	backClick(){
			// console.log('btnclick')
			this.$refs.scroll2.scrollTo(0,0,600)
	},
		
	contentScroll(position){
			this.isShowBackTop = (-position.y)>1000
			
	},
	ColorChange(){
		this.$store.commit('colorchange',this.color1)
		console.log(this.color1)
	},
	logout(){
		this.$router.replace('/')
		this.$store.commit('change2')
	}	
	
		},
		created(){
			this.getlist()
			this.color1 = this.$store.state.color
			this.activitieslist = this.$store.state.activitieslist
		}
	}
</script>

<style scoped>
   .home-bar{
   	background-color: #409EFF;
   	color: white;
   	position: fixed;
   	top:0;
   	left:0;
   	right:0;
   	z-index: 9;
	
   }
   .home-bar img{
   	width: 23px;
   	margin-top: 10px;
   }
	i{
		color: #409EFF;
		margin-left: 5%;
	}
	.content{
		/* height:calc(100% - 93px);
		overflow: hidden;
		margin-top:44px ; */
		position: absolute;
		top: 7%;
		bottom: 70px;
		left: 2%;
		right: 2%;
		
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
	.comment{
		margin: 5% auto;
	}
</style>
