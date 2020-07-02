<template>
	<div class="box">
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
		 <span slot = "center">我要报修</span>
	</nav-bar>
	
	<el-card>
	<div class="usermessage">
    <i class="el-icon-user-solid" :style="{color:color1}"></i>
	<span >{{$store.state.username}}【{{$store.state.phone}}】</span>
	</div>
	
	<!-- 选择报修地点 -->
	<div class="usermessage" @click="choose">
	<i class="el-icon-office-building" :style="{color:color1}"></i>
	<span style="margin-left: 1%;font-size: 14px;">{{positionArray[0]}}{{positionArray[1]}}</span>
	</div>
	
	
	<el-drawer
	   :direction="derection"
	   title="我是标题"
	  :visible.sync="show"
	  :with-header="false"
	  size="50%">
	  
	  <el-cascader
	  placeholder = "请选择报修建筑"
	  v-model="positionValue1"
	  :options="positionOptions"
	   size="small"
	   style="width: 40%;margin: 5% 5%"
	  clearable
	   @change="handleChange" 
	   >
	</el-cascader>
	
	<el-cascader
	  v-if="positionValue1[0]=='钱湖校区'"
	   v-model="positionValue2"
	  :options="positionOptions2"
	   size="small"
	   style="width: 30%;margin: 5% 5%"
	   @change="handleChange"
	  clearable
	   >
	</el-cascader>
	
	
	<el-cascader
	  v-if="positionValue1[0]=='回龙校区寝室楼'"
	   v-model="positionValue2"
	  :options="positionOptions3"
	   size="small"
	   style="width: 30%;margin: 5% 5%"
	   @change="handleChange"
	  clearable
	   >
	</el-cascader>
	
	<el-cascader
	  v-if="positionValue1[0]=='钱湖校区生活区公共区域'"
	   v-model="positionValue2"
	  :options="positionOptions4"
	   size="small"
	   style="width: 30%;margin: 5% 5%"
	   @change="handleChange"
	  clearable
	   >
	</el-cascader>
	
	<el-cascader
	  v-if="positionValue1[0]=='回龙校区生活区公共区域'"
	   v-model="positionValue2"
	  :options="positionOptions5"
	   size="small"
	   style="width: 30%;margin: 5% 5%"
	   @change="handleChange"
	  clearable
	   >
	</el-cascader>
	
	<el-cascader
	  v-if="positionValue1[0]=='回龙校区教学区'"
	   v-model="positionValue2"
	  :options="positionOptions6"
	   size="small"
	   style="width: 30%;margin: 5% 5%"
	   @change="handleChange"
	  clearable
	   >
	</el-cascader>
	
	<img src="../../assets/img/钱湖.jpg" alt="" style="width: 82%;height: 60%;margin-left: 8%;"
	 v-if="positionValue1[0]=='钱湖校区'||positionValue1[0]=='钱湖校区生活区公共区域'">
	 
	<img src="../../assets/img/回龙.jpg" alt="" style="width: 82%;height: 60%;margin-left: 8%;"
	  v-if="positionValue1[0]=='回龙校区寝室楼'||positionValue1[0]=='回龙校区生活区公共区域'||positionValue1[0]=='回龙校区教学区'">
	  
	  
	<el-button type="primary" @click = "confirm" class= "btn-confirm">确定</el-button>
	<el-button @click = "show=false" class= "btn-cancel"  >取消</el-button>
	 </el-drawer>
	<!-- 输入门牌号 -->
	
	<div class="usermessage">
	<i class="el-icon-location-outline" :style="{color:color1}"></i>
	<input type="text" v-model="houseNumber" placeholder="请输入报修地点,如:101">
	</div>
	
	<!-- 选择报修设备 -->
	<div class="usermessage" @click="choosedevice">
	<i class="el-icon-s-help" :style="{color:color1}"></i>
	<span>{{deviceValue1[0]}}/{{deviceValue1[1]}}</span>
	</div>
	<el-drawer
	   :direction="derection"
	   title="我是标题"
	  :visible.sync="show2"
	  :with-header="false"
	  size="45%">
	  
	<el-cascader
	  v-model="deviceValue1"
	  :options="deviceOptions"
	   size="small"
	   style="width: 40%;margin: 5% 5%"
	  clearable
	   @change="handleChange" 
	   >
	</el-cascader>
	
	</el-drawer>
	
	
	
  
  <el-input type="textarea"
  :rows="4" placeholder = "请输入报修内容"
  v-model="textarea"
  >
  </el-input>


<div class="upload">
	
   <el-upload
     action="http://ix31427627.zicp.vip/order/upload "
     list-type="picture-card"
	 ref="upload"
     :on-preview="handlePictureCardPreview"
     :on-success="handle"
	 >
     <i class="el-icon-plus" :style="{color:color1}"></i>
   </el-upload>
   <el-dialog :visible.sync="dialogVisible">
     <img width="100%" :src="dialogImageUrl" alt="">
   </el-dialog>
</div>

  <button  class="btn" @click="submit" :style="{backgroundColor:color1}">提交</button>
  
   </el-card>
</div>
	
</template>

<script>
	import NavBar from '../../components/commen/navbar/NavBar.vue'
	export default{
		name:'repair',
		components:{
			NavBar
		},
 data(){
			return{
			textarea:'',	
			show:false,
			show2:false,
			derection:'btt',
			color1:'#409EFF',
			form:{
					
				username:'陈达',
				phone:'18042532850',
				
				}
			,
		 deviceValue1:[],
		 deviceValue2:[],
		 positionValue1:[],
		 positionValue2:[],
		 positionArray:['请选择报修所在建筑'],
		 houseNumber:'',
	     positionOptions: [],				       
	     positionOptions2: [],      				
	     positionOptions3:[],			  
	     positionOptions4:[] ,
         positionOptions5:[] ,
		 positionOptions6:[] ,    
		 deviceOptions:[],		 
		 dialogImageUrl: '',		 
	     dialogVisible: false,  
		 url:''		              
}				    
							
},
  created() {
  this.positionOptions  = this.$store.state.positionOptions
  this.positionOptions2 = this.$store.state.positionOptions2
  this.positionOptions3 = this.$store.state.positionOptions3
  this.positionOptions4 = this.$store.state.positionOptions4
  this.positionOptions5 = this.$store.state.positionOptions5
  this.positionOptions6 = this.$store.state.positionOptions6
  this.deviceOptions    = this.$store.state.deviceOptions 
  this.color1 = this.$store.state.color
  },

	methods: {
		ColorChange(){
			this.$store.commit('colorchange',this.color1)
			console.log(this.color1)
		},
	     handleChange(value) {
	       console.log(value);
		   
	     },
		 
   // 选择地点
		 choose(){
			this.show = true 			
		 },
   // 选择设备
		 choosedevice(){
			this.show2 = true  
		 },
   // 确认地点
		 confirm(){
			 this.show = false
			 this.positionArray.splice(0,1,this.positionValue1[0])
			 if(this.positionValue2[1]){
				  this.positionArray.splice(1,1,this.positionValue2[1])
			 }else{
				  this.positionArray.splice(1,1,this.positionValue2[0])
			 }
			
			 	// console.log(this.positionArray)
			// if(this.positionValue1[0]!=''&&this.positionValue2[1]!=''){
			// 	this.fix()
			// }
		}, 
		//  fix(){
		// 	let s1 = ''
		// 	let s2 = s1.concat(this.positionValue1[0],this.positionValue2[1]) 
		// 	this.positionArray.splice(0,1,s2)
		
		// 	console.log(this.positionArray)
			
		// 	 // this.$refs.upload.submit()
		//  },
		 handle(response,file, fileList) {
		       this.url = response
		      },
		  handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		      },
	// 提交报修信息	
	async submit(){
		if(this.positionArray){
		const res = await this.$http.post
		(`/order/addRepairOrder?username=${this.$store.state.username}
		&userPhone=${this.$store.state.phone}
		&communityName=${this.positionArray[0]}
		&buildingNo=${this.positionArray[1]}
		&houseNumber=${this.houseNumber}
		&repairType=${this.deviceValue1[0]}
		&repairItems=${this.deviceValue1[1]}
		&reportDescribes=${this.textarea}&url=${this.url}` )	
		console.log(res)
		if(res.status == 200){
			this.$message.success('报修成功！')
			this.$router.replace('/repair')
		  }  	
		}
		
		  // this.$refs.upload.submit()
       },	  
		  
	logout(){
		this.$router.replace('/')
		this.$store.commit('change2')
	}		  
		
			
			  
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
		margin-right: 5%;
	}
	input{
		border: none;
		outline: none;
		
	}
	input::-webkit-input-placeholder{
		color: #C0C4CC;
	}
	.box{
		width: 95%;
		margin: 10% auto;
	}
	el-card{
		width: 85%;
		
	}
	.usermessage{
		height: 40px;
		line-height: 40px;
		
	}
	.usermessage span{
		
		font-size: 13px;
	}
	.upload{
		margin-top: 5%;
	}
	.btn-confirm{
		width: 30%;
		position: absolute;
		left: 13%;
		bottom: 5%;
	}
	.btn-cancel{
		width: 30%;
		position: absolute;
		right: 13%;
		bottom: 5%;
	}
	.btn{
		margin-top: 15%;
		width: 100%;
		height: 38px;
		background-color: #FB7299;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
	}
</style>
