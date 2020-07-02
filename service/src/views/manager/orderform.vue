<template>
	<div>
		<div>
		
		<span style="font-size: 13px;" v-show="isShow" @click="back">
			<i class="el-icon-arrow-left"></i>
			<a href="">返回订单列表</a>
		</span>
		</div>
		<el-input
		    placeholder="请输入用户名查询订单"
		    v-model="input"
			class="input">
		    <i slot="prefix" class="el-input__icon el-icon-search"></i>
		 </el-input>
		  <el-button type="primary" @click="search">搜索</el-button>
		<el-table
		    :data="tableData"
		    border
			height="420px"
			v-loading="loading"
		    style="width: 100%">
		    <el-table-column
		      prop="orderTime"
		      label="订单日期"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="orderNumber"
		      label="订单号"
		      width="250">
		    </el-table-column>
		    <el-table-column
		      prop="repairType"
		      label="报修类型">		  
		    </el-table-column>
			<el-table-column
			  prop="username"
			  label="申报人">		  
			</el-table-column>
			
		<el-table-column
		  label="分配订单" 
		  class="sosa">
		  <template slot-scope="scope">			  
		<el-button size="mini" :plain="true" type="primary" 
		 icon="el-icon-edit" circle @click="distribute(scope.row)"></el-button>				
		 </template>
		 </el-table-column>
		 
            <el-table-column
		      prop="jobNumber"
		      label="当前订单维修负责人">
			 
			  
		    </el-table-column>		 
		 
		  </el-table>
		  
		  <el-dialog
		    title="分配"
		    :visible.sync="dialogVisible"
		    width="30%"
		    >
		
		    <el-cascader
		        v-model="value"
		        :options="options"
				placeholder="请选择维修工"
		        ></el-cascader>
		    <span slot="footer" class="dialog-footer">
		      <el-button @click="dialogVisible = false">取 消</el-button>
		      <el-button type="primary" @click="submit">确 定</el-button>
		    </span>
		  </el-dialog>
	</div>
</template>

<script>
	export default{
		name:'orderform',
		data(){
			return{
				isShow:false,
				dialogVisible:false,
				value:[],
				loading:true,
				input:'',
				
				options:[{
					value:'水电工',
					label:'水电工',
					children:[]
				},
				
				{
				value:'木工',
				label:'木工',
				children:[]	
				},
				
				{
				value:'全职',
				label:'全职',
				children:[]		
				}
				],
				tableData:[],
				formData:{
				orderNumber:'',
				jobNumber:'',
				
				}
				
			}
		},
		
		created(){
				this.findorder()
			},
			
	
		methods:{
	//提交分配任务		
		  async submit(){
			this.dialogVisible=false 
			this.formData.jobNumber = this.value[1]
			console.log(this.formData)
			
			const res = await this.$http.put
			(`/admin/sendWorkOrder?orderNumber=${this.formData.orderNumber}&jobNumber=${this.formData.jobNumber}`)  
			console.log(res)
			if(res.status == 200){
				this.$message.success('分配成功！')
				this.findorder()
			}

		  },
	
	
       //分配订单								
		   async distribute(a){
			 this.formData.orderNumber = a.orderNumber
			
			const res = await this.$http.get('/maintainer/list') 
			
			console.log(res)
			for(let i = 0; i < res.data.length; i++ )	{
				if(res.data[i].jobScopes == '水电工'){
				this.options[0].children[i]={value:res.data[i].jobNumber,label:res.data[i].jobNumber}	
			}	
				if(res.data[i].jobScopes == '木工'){
					this.options[1].children[i]={value:res.data[i].jobNumber,label:res.data[i].jobNumber}	
			}		
			    if(res.data[i].jobScopes == '全职'){
				this.options[2].children[i]={value:res.data[i].jobNumber,label:res.data[i].jobNumber}	
			}		
			}
			
			
			this.dialogVisible=true
				
			},
			
		//获取所有订单信息
		  async findorder(){
			const res = await this.$http.get('/order/findOrder')	
			if(res.status == 200){
			this.tableData = res.data
			this.loading = false
			console.log(this.tableData)
			}	
			
			},
			
		//根据用户名查询订单信息
		  async search(){
		  const res = await this.$http.get(`/order/findOrderByName?username=${this.input}`)	
		  console.log(res)
		  if(res.status == 200){
			  this.tableData = res.data
			  this.isShow = true
			  this.$message.success('搜索成功！')
		  }
		  
		},
		
		//返回订单列表
        back(){
			this.findorder()
			this.isShow = false
			this.input = ''
		}
		
		
	},
	
	
	}
</script>

<style scoped>
	.input{
		width: 200px;
		margin: 20px 0;
	}
	a{
		text-decoration: none;
		color: #303133;
	}
	a:hover{
		color: #409EFF;
	}
</style>
