<template>
  <!--news center-->
	    <div class="news-center wc1200">
	    	<div class="en-title text-center bg-image">新闻中心</div>
	    	<div class="content-tab mb90 layui-tab layui-tab-brief mt80" lay-filter="docDemoTabBrief">
	    		<ul class="layui-tab-title">
	    			<li class="layui-this" @click="tabMore(1)">集团新闻</li>
	    			<li @click="tabMore(2)">媒体报道</li>
	    			<li @click="tabMore(3)">资料专区</li>
	    		</ul>
	    		<div class="layui-tab-content">
	    			<!--集团新闻-->
					<div  class="group-news clearfix layui-tab-item layui-show">
						<!--<group-news></group-news>-->
						<!--<keep-alive exclude="groupNews,mediaNews">-->
						<component :is="currentView">
						<!-- 组件在 vm.currentview 变化时改变！ -->
						</component>
						<!--</keep-alive>-->
					</div>
	    			<!--媒体报道-->
	    			<!--<div  class="media-reports layui-tab-item clearfix">-->
						<!--<media-news></media-news>-->
					<!--</div>-->
					<!--<div class="data-section layui-tab-item layui-tab clearfix">
						资料专区
					</div>-->
	    		</div>
	    	</div>
	    	
	    </div>
</template>

<script>
layui.use('element', function(){
	var $ = layui.jquery,
	element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
})
// import { mapGetters } from 'vuex'
// import newsAside from '@/components/common/news-aside'
import groupNews from '@/components/news/group-news'
import mediaNews from '@/components/news/media-news'

// const fetchInitialData = async (store, config) => {
//     // const {params: {id, key, by}, path} = store.state.route
//     // const base = { ...config, limit: 5, id, key, by }
//     // store.dispatch('global/category/getCategoryList')
//     // store.dispatch('frontend/article/getTrending')
//     // await store.dispatch('frontend/article/getArticleList', base)
//     // if (config.page === 1) ssp(path)
//     // const base = { ...config}
// 	// console.log(base);
// 	await store.dispatch('frontend/article/getArticleList',	config)
// }
export default {
	//prefetch: fetchInitialData,
	// data(){
	// 	return {
	// 		isMore:true,
	// 		topic:{}
	// 	}
	// },
	data(){
    	return{
			currentView: groupNews
		}
  	},
	components:{
	// 	newsAside,
	// 	newsItem
		groupNews,
		mediaNews
	},
	// computed: {
    //     ...mapGetters({
    //         topics: 'frontend/article/getArticleList'
    //     })
    // },
    methods: {
        tabMore(index) {
			//fetchInitialData(this.$store, {pageNo: 1})
			// console.log(this.$store);
			if(index===1){
				this.currentView = groupNews;
			}else if(index===2){
				this.currentView = mediaNews;
			}else{
				this.currentView = groupNews;
			}
        }
    },
    // watch: {
    //     '$route'() {
    //         // fetchInitialData(this.$store, {page: 1})
    //     }
    // },
    mounted() {

    //     if (this.topics.data.length <= 0) {
    //         fetchInitialData(this.$store, {pageNo: 1, pageSize: 6,categoryId: 3})
	// 		// this.topics.data[0] = this.$store.state.item;
			
    //     } else {
    //     //     // ssp(this.$route.path)
	// 	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-center .bg-image{background-image:url(/static/images/en_news_center.png);background-size: 523px 57px;}
/*.news-center .content-tab .content-left{width: 860px;border-right: 1px solid #f2f2f2;min-height: 650px;}
.news-center .content-tab .content-left .news-list{width: 810px;}
.news-center .content-tab .content-right{width: 340px;}
.news-center .content-tab .content-right ul{margin-left: 40px;}*/
/*.news-center .content-tab .group-news .firstnews{height: 236px;margin-top: 30px;}
.news-center .content-tab .group-news .firstnews .details{width: 400px;}
.news-center .content-tab .group-news .firstnews .details a.btn{width: 400px;}
.news-center .content-tab .news-list a.btn{width: 810px;margin-top: 25px;color: white;}
.news-center .content-tab .group-news .firstnews .details a,.news-center .content-tab .news-list a.btn{height: 50px;line-height: 50px;background-color:#ffcd54;}
.news-center .content-tab .group-news .firstnews .details .time{height:30px;line-height: 30px;color:#c5ab60;}
.news-center .content-tab .group-news .firstnews .details .title{height: 18px;line-height: 18px;font-weight: bold;}
.news-center .content-tab .group-news .firstnews .details .text{line-height:1.6;}*/
/*.news-center .content-tab .news-list ul li{width:810px;height: 136px;border-top: 1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;}
.news-center .content-tab .news-list ul li a{display: block;height: 90px;margin-top: 23px;}
.news-center .content-tab .news-list ul li .image{width: 88px;height: 90px;}
.news-center .content-tab .news-list ul li .image img{width:100%;}
.news-center .content-tab .news-list ul li .text{width: 530px;margin-left: 20px;height: 90px;line-height: 1.5;}
.news-center .content-tab .news-list ul li .time{width: 100px;height: 90px;color:#d7dadc;}
.news-center .content-tab .news-list ul li .time .month{height: 36px;line-height: 36px;}
.news-center .content-tab .news-list ul li .time .years{height: 18px;line-height: 18px;margin-left: 50px;}
.news-center .content-tab .news-list ul li .text .title{font-weight: bold;}*/
/*.news-center .content-tab .media-reports .news-list a.btn{margin-top: 45px;}
.news-center .content-tab .data-section .layui-tab-content .press-release .parse,.news-center .content-tab .data-section .layui-tab-content .image-data .parse{text-indent: 15px;margin-top: -40px;background-color:#aab4bd;opacity:0.5;filter:alpha(opacity=50);width:480px ;height: 40px;line-height: 40px;cursor: default;}
.news-center .content-tab .data-section .layui-tab-content .press-release,.news-center .content-tab .data-section .layui-tab-content .image-data{width: 480px;height: 309px;}
.news-center .content-tab .data-section .layui-tab-content .press-release span,.news-center .content-tab .data-section .layui-tab-content .image-data span{position: relative;top: -35px;color: #FFFFFF;}
.news-center .content-tab .data-section .layui-tab-content .documentation li{width:980px;height: 90px;border-bottom: 1px solid #e2e2e2;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .mt15{margin-top: 15px;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .ml15{margin-left: 15px;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .text-color{color: #bab9bd;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .mt35{margin-top: 35px;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .mr35{margin-right: 35px;}
.news-center .content-tab .data-section .layui-tab-content .documentation li a:hover{color:#333;}
.news-center .content-tab .data-section .layui-tab-content .documentation li:last-child{border-bottom: 0;}
.news-center .content-tab .data-section .layui-tab-content .video-data{margin-left: 30px;}*/
</style>
