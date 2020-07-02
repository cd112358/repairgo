import Vue from'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const state = {  //存储数据
  username:'',
	phone:'',
    isShow:false,
	color:'#409EFF',
	
	positionOptions: [
				       {
				          value: '钱湖校区',
				          label: '钱湖校区寝室楼',			         
				        },
						{
						  value: '回龙校区寝室楼',
						  label: '回龙校区寝室楼',	
						},
						{
						 value:'钱湖校区生活区公共区域',
						 label:'钱湖校区生活区公共区域'
						},
						{
						 value:'回龙校区生活区公共区域',
						 label:'回龙校区生活区公共区域'
						},
						{
						 value:'回龙校区教学区',
						 label:'回龙校区教学区'
						},					
						],
						       
	 positionOptions2: [
			// 13-18号寝室楼	
				{
				value:'13-18号寝室楼',
				label:'13-18号寝室楼',
				children:[{
					value:'13号寝室楼',
					label:'13号寝室楼'
				},
				{
					value:'14号寝室楼',
					label:'14号寝室楼'
				},
				{
					value:'15号寝室楼',
					label:'15号寝室楼'
				},
				{
					value:'16号寝室楼',
					label:'16号寝室楼'
				},
				{
					value:'17号寝室楼',
					label:'17号寝室楼'
				},
				{
					value:'18号寝室楼',
					label:'18号寝室楼'
				},
				]	  		       
	      },
			   
			   
			   // 21-28号寝室楼
			   {
				 value:'21-28号寝室楼',
				 label:'21-28号寝室楼',
				 children:[{
				 	value:'21号寝室楼',
				 	label:'21号寝室楼'
				 },
				 {
				 	value:'22号寝室楼',
				 	label:'22号寝室楼'
				 },
				 {
				 	value:'23号寝室楼',
				 	label:'23号寝室楼'
				 },
				 {
				 	value:'24号寝室楼',
				 	label:'24号寝室楼'
				 },
				 {
				 	value:'25号寝室楼',
				 	label:'25号寝室楼'
				 },
				 {
				 	value:'26号寝室楼',
				 	label:'26号寝室楼'
				 },
				 {
				 	value:'27号寝室楼',
				 	label:'27号寝室楼'
				 },
				 {
				 	value:'28号寝室楼',
				 	label:'28号寝室楼'
				 },
				 ]	  		         
			   },
			  
			 // 39-45号寝室楼 
	         {
					value:'39-45号寝室楼',
					label:'39-45号寝室楼',
					children:[{
						value:'39号寝室楼',
						label:'39号寝室楼'
					},
					{
						value:'40号寝室楼',
						label:'40号寝室楼'
					},
					{
						value:'41号寝室楼',
						label:'41号寝室楼'
					},
					{
						value:'42号寝室楼',
						label:'42号寝室楼'
					},
					{
						value:'43号寝室楼',
						label:'43号寝室楼'
					},
					{
						value:'44号寝室楼',
						label:'44号寝室楼'
					},
					{
						value:'45号寝室楼',
						label:'45号寝室楼'
					},
					]	  		       
	      },	 
				
				// 51-55号寝室楼
	         {
					value:'51-55号寝室楼',
					label:'51-55号寝室楼',
					children:[{
						value:'51号寝室楼',
						label:'51号寝室楼'
					},
					{
						value:'52号寝室楼',
						label:'52号寝室楼'
					},
					{
						value:'53号寝室楼',
						label:'53号寝室楼'
					},
					{
						value:'54号寝室楼',
						label:'54号寝室楼'
					},
					{
						value:'55号寝室楼',
						label:'55号寝室楼'
					}
					
					]	  		       
	      },	
					
					
				// 61-71号寝室楼		
	        {
					value:'61-71号寝室楼',
					label:'61-71号寝室楼',
					children:[{
						value:'61号寝室楼',
						label:'61号寝室楼'
					},
					{
						value:'62号寝室楼',
						label:'62号寝室楼'
					},
					{
						value:'63号寝室楼',
						label:'63号寝室楼'
					},
					{
						value:'71号寝室楼',
						label:'71号寝室楼'
					},
					
					
					]	  		       
	      },									   
	   ],				
	 positionOptions3:[
	                {
	                value: '1号楼',
	                label: '1号楼',			         
	                  },
							{
							  value: '2号楼',
							  label: '2号楼',	
							},
							{
							 value:'3号楼',
							 label:'3号楼'
							},
							{
							 value:'4号楼',
							 label:'4号楼'
							},
							{
							 value:'5号楼',
							 label:'5号楼'
							},		
						    {
						     value:'6号楼',
						     label:'6号楼'
						    },	
							{
							 value:'7号楼',
							 label:'7号楼'
							},	
							{
							 value:'8号楼',
							 label:'8号楼'
							},	
			   ] ,
			   
			   
			  
				  
				  
	 positionOptions4:[
				               {
				               value: '12#楼',
				               label: '12#楼',			         
				                 },
				  				{
				  				  value: '教师公寓',
				  				  label: '教师公寓',	
				  				},
				  				{
				  				 value:'生活服务中心',
				  				 label:'生活服务中心'
				  				},
				  				{
				  				 value:'留学生餐厅',
				  				 label:'留学生餐厅'
				  				},
				  				{
				  				 value:'教工餐厅',
				  				 label:'教工餐厅'
				  				},		
				  			    {
				  			     value:'后勤行政楼',
				  			     label:'后勤行政楼'
				  			    },	
				  				{
				  				 value:'后勤综合楼',
				  				 label:'后勤综合楼'
				  				},	
				  				{
				  				 value:'第三餐厅',
				  				 label:'第三餐厅'
				  				},	
				     ] ,
					 
					 
	 positionOptions5:[
					              {
					              value: '后勤办公楼',
					              label: '后勤办公楼',			         
					                },
					 				{
					 				  value: '教工小区',
					 				  label: '教工小区',	
					 				},
					 				{
					 				 value:'回龙味道一楼',
					 				 label:'回龙味道一楼'
					 				},
					 				{
					 				 value:'回龙味道二楼',
					 				 label:'回龙味道二楼'
					 				},
					 				{
					 				 value:'回龙城一楼',
					 				 label:'回龙城一楼'
			     	 				},		
					 			    {
					 			     value:'回龙城二楼',
					 			     label:'回龙城二楼'
					 			    },	
					 				
					    ] ,
						
						
	 positionOptions6:[
					                {
					                 value: '1号教学楼',
					                 label: '1号教学楼',			         
					                },
									{
									 value: '2号教学楼',
									 label: '2号教学楼',	
									},
									{
									 value:'3号教学楼',
									 label:'3号教学楼'
									},
									{
									 value:'报告厅',
									 label:'报告厅'
									},
									{
									 value:'体育馆及乒乓球馆',
									 label:'体育馆及乒乓球馆'
									},		
								    {
								     value:'图书馆',
								     label:'图书馆'
								    },	
									{
									 value:'行政楼',
									 label:'行政楼'
									},	
									
					   ] ,
			   
	deviceOptions:[
			        {
			         value: '水',
			         label: '水',
					children:[
					   {
						value:'冷水水龙头',
						label:'冷水水龙头'
					    },
					  {
						value:'卫生间',
						label:'卫生间'				
					  },	
					  {
						value:'堵',
						label:'堵'  
					  },
	                  {
						value:'盆池',
						label:'盆池'  
					  }	,
					  {
						value:'漏水',
						label:'漏水'   
					  }
					 
					  ]					  
			        },
			        {
			         value: '电',
			         label: '电',
					children:[
					    {  
							value:'插座',
							label:'插座'
						},
						{
						   value:'开关',
						   label:'开关'	
						},
						{
						   value:'灯',
						   label:'灯'		
						},
						{
						   value:'风扇',
						   label:'风扇'
						},
						{
						   value:'排气扇',
						   label:'排气扇'				  
						},
						{
							value:'时空开关',
							label:'时空开关'
						}
					]	 
			        },
			        {
			         value:'木工',
			         label:'木工',
					 children:[
						 {  
							value:'寝室大门',
							label:'寝室大门'
						 },
	                     {  
							value:'卫生间木门',
							label:'卫生间木门'
						 },
	                     {  
							value:'卫生间玻璃门',
							label:'卫生间玻璃门'
						 },
						 {
							value:'阳台塑钢门',
							label:'阳台塑钢门' 
						 },
						 {
							value:'衣柜',
							label:'衣柜'  
						 },
						 {
							value:'书桌',
							label:'书桌'   
						 },
						 {
							value:'洗脸台柜子',
							label:'洗脸台柜子'   
						 },
						 {
							value:'床',
							label:'床'  
						 },
						 {
							 value:'椅子',
							 label:'椅子'  
						 },
						 {
							value:'窗',
							label:'窗'  
						 }
						 
					 ]
			        },
			        {
			         value:'其他',
			         label:'其他',
					 children:[
						 {
							value:'热水',
							label:'热水'
						 },
						 {
							value:'空调',
							label:'空调' 
						 },
						 {
							 value:'网络',
							 label:'网络'
						 },
						 {
							 value:'饮水机',
							 label:'饮水机'
						 }
					 ]
			        },
			        
	],
	
	activitieslist:[
		                [{
					      content: '报修申请',
					      timestamp: '',
						  color: '#0bbd87'
					    }, {
					      content: '报修受理',
					      timestamp: ''
						  
					    }, {
					      content: '维修工接受订单',
					      timestamp: ''
						  
					    },{
					      content: '维修完成',
					      timestamp: ''
					    },{
						  content: '评价完成',
						  timestamp: '',
						 
						}]	,
						
					[{
					    content: '报修申请',
					    timestamp: '',
						 color: '#0bbd87'
					  }, {
					    content: '报修受理',
					    timestamp: '',
						 color: '#0bbd87'			  
					  },{
					      content: '维修工接受订单',
					      timestamp: ''
						  
					    }, {
					    content: '维修完成',
					    timestamp: ''
					  },{
						  content: '评价完成',
						  timestamp: '',
						 
						}]	,	
						
					[{
					      content: '报修申请',
					      timestamp: '',
						  color: '#0bbd87'
					    }, {
					      content: '报修受理',
					      timestamp: '',
						  color: '#0bbd87'
					    },{
					      content: '维修工接受订单',
					      timestamp: '',
						  color: '#0bbd87'
					    }, {
					      content: '维修完成',
					      timestamp: ''
					   },{
						  content: '评价完成',
						  timestamp: '',
						 
						}],
					 
					 
		           [{
		               content: '报修申请',
		                  timestamp: '',
			            color: '#0bbd87'
		                }, {
		                content: '报修受理',
		                timestamp: '',
			            color: '#0bbd87'
		                 }, {
					      content: '维修工接受订单',
					      timestamp: '',
						  color: '#0bbd87'
					    },{
		                   content: '维修完成',
		                   timestamp: '',
			                color: '#0bbd87'
		                 },{
						  content: '评价完成',
						  timestamp: '',
						 
					}],
					   
					   
					[{
					      content: '报修申请',
					      timestamp: '',
						  color: '#0bbd87'
					    }, {
					      content: '报修受理',
					      timestamp: '',
						  color: '#0bbd87'
					    }, {
					      content: '维修工接受订单',
						  timestamp: '',
						color: '#0bbd87'		  
					    },{
					      content: '维修完成',
					      timestamp: '',
						  color: '#0bbd87'
					    },
						{
						  content: '评价完成',
						  timestamp: '',
						  color: '#0bbd87'
						}]  
					 
						
	           ]
  } 
 const store = new Vuex.Store({ 
	state, 
	mutations:{
	 	addUsername(state,count) {
	 	  state.username=count
	 	},
		addPhone(state,count){
			 state.phone=count
		},
		colorchange(state,color){
		 state.color = color	
		},
		change1(state){
		state.isShow=true
		},
		change2(state){
		state.isShow=false
		},
	 },
  plugins:[createPersistedState({
	 storage:window.sessionStorage 
  })]
})

export default store