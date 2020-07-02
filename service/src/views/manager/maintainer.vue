<template>
	<div>
		<div>		
		 <span style="font-size: 13px;" v-show="isShow" @click="back">
			<i class="el-icon-arrow-left"></i>
			<a href="">返回订单列表</a>
		 </span>
		</div>
		<el-input
		    placeholder="请输入工号"
		    v-model="input"
			class="input">
		    <i slot="prefix" class="el-input__icon el-icon-search"></i>
		 </el-input>
		  <el-button type="primary" @click="searchmaintainer">搜索</el-button>
		  <el-button type="success" @click="add" icon="el-icon-plus">添加维修工</el-button>
		<el-table
		    :data="tableData"
		    border
				v-loading = "loading"
		    style="width: 100%">
		    <el-table-column
		     prop="id"
		     label="id"
		      width="180">
		    </el-table-column>
		    <el-table-column
		     prop="jobNumber"
		     label="工号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="workerPhone"
		      label="手机号">
		    </el-table-column>
			<el-table-column
			  prop="jobScopes"
			  label="工种">
			</el-table-column>
		
		
		  
		  <el-table-column
		    label="操作" 
		    class="sosa">
		    <template slot-scope="scope">	
					  
		  <el-button size="mini" :plain="true" type="primary" 
		   icon="el-icon-edit" circle @click="edit(scope.row)"></el-button>
		<el-button size="mini" :plain="true" type="danger" 
		   icon="el-icon-delete" circle @click= "Delete(scope.row)" ></el-button>		   
		   </template>
		   </el-table-column>
		  </el-table>
		  
		  <el-dialog
		    title="添加维修工"
		    :visible.sync="dialogVisibleAdd"
		    width="30%"
			
		    >
		    <el-form :model="form">
		        <el-form-item label="姓名" :label-width="formLabelWidth">
		          <el-input v-model="form.name" autocomplete="off"  ></el-input>
		        </el-form-item>
				<el-form-item label="密码" :label-width="formLabelWidth">
				  <el-input v-model="form.password" autocomplete="off"  ></el-input>
				</el-form-item>
				<el-form-item label="手机号" :label-width="formLabelWidth">
				  <el-input v-model="form.phone" autocomplete="off"  ></el-input>
				</el-form-item>
		        <el-form-item label="工种" :label-width="formLabelWidth">
		          <el-select v-model="form.type" placeholder="请选择工种">
		            <el-option label="水电工" value="水电工"></el-option>
		            <el-option label="木工" value="木工"></el-option>
					 <el-option label="其他" value="其他"></el-option>
					 <el-option label="全职" value="全职"></el-option>
		          </el-select>
		        </el-form-item>
			</el-form>
		    <span slot="footer" class="dialog-footer">
		      <el-button @click="dialogVisibleAdd = false">取 消</el-button>
		      <el-button type="primary" @click="addmaintainer">确 定</el-button>
		    </span>
		  </el-dialog>
		  
		  <el-dialog
		    title="修改维修工个人信息"
		    :visible.sync="dialogVisibleEdit"
		    width="30%"
		  			
		    >
		    <el-form :model="form">
		        <el-form-item label="姓名" :label-width="formLabelWidth">
		          <el-input v-model="form.name" autocomplete="off"  ></el-input>
		        </el-form-item>
		  		<el-form-item label="手机号" :label-width="formLabelWidth">
		  		  <el-input v-model="form.phone" autocomplete="off"  ></el-input>
		  		</el-form-item>
				
		        <el-form-item label="工种" :label-width="formLabelWidth">
		          <el-select v-model="form.type" placeholder="请选择工种">
		            <el-option label="水电工" value="水电工"></el-option>
		            <el-option label="木工" value="木工"></el-option>
					<el-option label="其他" value="其他"></el-option>
					 <el-option label="全职" value="全职"></el-option>
		          </el-select>
		        </el-form-item>
		  			</el-form>
		    <span slot="footer" class="dialog-footer">
		      <el-button @click="dialogVisibleEdit = false">取 消</el-button>
		      <el-button type="primary" @click="editmaintainer">确 定</el-button>
		    </span>
		  </el-dialog>
		  
		  
		  <el-dialog
		    title="提示"
		    :visible.sync="dialogVisibleDel"
		    width="30%"
		    >
		    <span>确定删除该维修员吗？</span>
		    <span slot="footer" class="dialog-footer">
		      <el-button @click="dialogVisibleDel = false">取 消</el-button>
		      <el-button type="primary" @click="delmaintainer">确 定</el-button>
		    </span>
		  </el-dialog>
		  
		  
	</div>
</template>

<script>
	export default{
		name:'maintainer',
		data(){
			return{
				input:'',
				loading:true,
				isShow:false,
				dialogVisibleAdd:false,
				dialogVisibleEdit:false,
				dialogVisibleDel:false,
				dialogVisiblelogout:false,
				tableData:[],
				form:{
					name:'',
					password:'',
					phone:'',
					type:'',
					id:0
				},
				formLabelWidth:'60px'
			}
		},
		created() {
			this.getlist()
		},
		methods:{
		//获取维修工列表
			async getlist(){
			const res = await this.$http.get(`/maintainer/list`)
			console.log(res)
			if(res.status == 200){
				this.tableData = res.data
				this.loading=false
			}
			},
		//添加维修工
			async addmaintainer(){
			const res = await this.$http.put		
			(`/maintainer/addMaintainer?jobNumber=${this.form.name}
			&password=${this.form.password}&workerPhone=${this.form.phone}
			&jobScopes=${this.form.type}`)
		     this.getlist()
			 console.log(res)
			this.dialogVisibleAdd=false
			 this.$message.success('添加成功！')
			},
			
			
	   //删除维修工
           
		  async delmaintainer(){
			 const res = await this.$http.delete(`/maintainer/deleteMaintainer?id=${this.form.id}`)
			    this.getlist()
			    this.dialogVisibleDel = false
				 this.$message.success('删除成功！')
		   },
		   
		   
	  //修改维修工信息
	     async editmaintainer(){
	     	 const res = await this.$http.put(`/maintainer/updateMaintainer?workerPhone=${this.form.phone}
			 &jobScopes=${this.form.type}&jobNumber=${this.form.name}&id=${this.form.id}`)
			 if(res.status == 200){
				 this.getlist()
	     		 this.dialogVisibleEdit = false
				 this.$message.success('修改成功！')
			 }
	             
				 
	      },
	 //根据工号查询维修工
		 
		 async searchmaintainer(){
		 			 const res = await this.$http.get(`/maintainer/findMaintainer?jobNumber=${this.input}`)
		 		 if(res.status == 200){
		 		 	this.tableData = res.data
		 		 	this.loading=false
					this.$message.success('查询成功！')
		 		 }
		 		 this.dialogVisibleDel = false
				 this.isShow = true
		  },
		  
		  
	//对话框赋值操作	 
			add(){
				this.dialogVisibleAdd = true
				this.form = {name:'',password:'',phone:'',	type:'',id:0}
					
			},
			edit(a){
				this.form = {name:'',password:'',phone:'',	type:'',id:0}
				this.dialogVisibleEdit = true
				this.form.name = a.jobNumber
				this.form.type = a.jobScopes
				this.form.phone = a.workerPhone
				this.form.id = a.id
			},
            Delete(a){
				this.dialogVisibleDel = true
				console.log(a)
				this.form.id = a.id
				
			},	
            back(){
			    this.getlist()
			    this.isShow = false
			    this.input = ''
		    }					
			
		}
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
