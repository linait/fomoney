/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = 'http://10.166.1.200:81';
let apiBaseUrl = baseUrl+'/api/v1'; 
let routerMode = 'history';
let imgBaseUrl = baseUrl;


if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){
	// baseUrl = 'http://cangdu.org:8001';
}

export {
	baseUrl,
	routerMode,
    apiBaseUrl,
	imgBaseUrl,
}