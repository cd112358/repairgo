import axios from 'axios'
const MyHttpServer ={}

const myHttpServer = {}
MyHttpServer.install =  (Vue) => {
    axios.defaults.baseURL = ' https://3a142762b7.eicp.vip'
    Vue.prototype.$http = axios
}
export default MyHttpServer
// https://apis.map.qq.com/ws/geocoder/v1/?location=29.81665,121.56311&key=MYDBZ-XUKCG-F2KQX-IWTP2-QGVRO-ZGB7G&output=jsonp	
	//axios拦截器(request)
	// axios.interceptors.request.use(config => {
	//  console.log(config);
	//  // console.log(config.url)
	//  // if(config.url!=='login'){
	// 	// const AUTH_TOKEN = localStorage.getItem('token')   //请求头设置
	// 	// axios.defaults.headers.Accept = AUTH_TOKEN 
	//  // }
	//   return config
	// },err => {
	//  console.log(err)
	// })
	//  //axios拦截器(response)
	// instance.interceptors.response.use(config => {
	//   //console.log(config);
	//   return config.data
	// },err => {
	//   //console.log(err)
	// })
	
	// return instance(config)  //自动返回Promise对象
	
	// }
  // 4. 添加实例方法
 


// myHttpServer.install = (Vue) =>{
// 	 axios.defaults.baseURL = 'https://mock.yonyoucloud.com/mock/6686p'
// 	 Vue.prototype.$https = axios
	 
	 
// }
