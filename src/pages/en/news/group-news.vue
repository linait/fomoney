<template>
 <div>
    <div class="fl content-left">
        <div class="news-list">
            <div class="firstnews clearfix" v-for="(item,index) in topics.data" v-if="index==0" >
                <div class="details fl">
                    <p class="time fs30">{{item.viewDate.viewDayEn}},{{item.viewDate.viewYears}}</p>
                    <p class="title fs18 mt20" v-text="item.title"></p>
                    <p class="fs14 text mt10" v-text="item.description"></p>
                    <router-link :to="{ path: '/enIndex/newsDetail/'+item.id }"  class="btn mt20">
                    <img src="/static/images/en_news_view.png" alt="">
                    </router-link>
                </div>
                <div class="fr"><img :src="item.originalImage" alt=""></div>
            </div>
            <ul class="mt20">
                <news-item v-for="(item,index) in topics.data" :item="item" v-if="index!=0"  :key="item.id"></news-item>
                <!--<li v-for="(item,index) in topics.data" v-if="index!=0">
                    <a href="javascript:;" class="clearfix">
                        <div class="fl image">
                            <img :src="item.image" alt="" />
                        </div>
                        <div class="fr time">
                            <p class="fs36 month" v-text="item.viewDate.viewDay">05/01</p>
                            <p class="fs18 years" v-text="item.viewDate.viewYears">2017</p>
                        </div>
                        <div class="text fl">
                            <p class="fs18 title" v-text="item.title"></p>
                            <p class="fs14" v-text="item.description"></p>
                        </div>
                    </a>
                </li>-->
            </ul>
            <a class="btn" @click="loadMore()" v-if="isMore">点击查看更多</a>
            <a class="btn gey" v-if="!isMore" style="background-color: #e5e5e5;">没有更多了</a>
        </div>
    </div>
    <news-aside></news-aside>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import newsAside from '@/pages/en/news/news-aside'
import newsItem from '@/pages/en/news/news-item'

const fetchInitialData = async (store, config) => {
    config = {
        pageNo:config.pageNo,
        pageSize: 6,
        categoryId: 3
    }
	await store.dispatch('frontend/article/getArticleList',	config)
}
export default {
	// prefetch: fetchInitialData,
	data(){
		return {
			isMore:true
		}
	},
	components:{
		newsAside,
		newsItem
	},
	computed: {
        ...mapGetters({
            topics: 'frontend/article/getArticleList'
        })
    },
    methods: {
        loadMore() {
            // console.log(this.topics.pageNo);
            // console.log(this.topics.totalPage);
			if(this.topics.pageNo===this.topics.totalPage){
				this.isMore = false;
			}else{
				fetchInitialData(this.$store, {pageNo:this.topics.hasNext, })
			}
        }
    },
    watch: {
        '$route'() {
            // fetchInitialData(this.$store, {page: 1})
        }
    },
    mounted() {
        fetchInitialData(this.$store, {pageNo: 1})
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.news-center .bg-image{background-image:url(/static/images/en_news_center.png);background-size: 523px 57px;}*/
.news-center .content-tab .content-left{width: 860px;border-right: 1px solid #f2f2f2;min-height: 650px;}
.news-center .content-tab .content-left .news-list{width: 810px;}

.news-center .content-tab .group-news .firstnews{height: 236px;margin-top: 30px;}
.news-center .content-tab .group-news .firstnews .details{width: 400px;}
.news-center .content-tab .group-news .firstnews .details a.btn{width: 400px;}
.news-center .content-tab .news-list a.btn{width: 810px;margin-top: 25px;color: white;}
.news-center .content-tab .group-news .firstnews .details a,.news-center .content-tab .news-list a.btn{height: 50px;line-height: 50px;background-color:#ffcd54;}
.news-center .content-tab .group-news .firstnews .details .time{height:30px;line-height: 30px;color:#c5ab60;}
.news-center .content-tab .group-news .firstnews .details .title{height: 18px;line-height: 18px;font-weight: bold;}
.news-center .content-tab .group-news .firstnews .details .text{line-height:1.6;}
/*.news-center .content-tab .news-list ul li{width:810px;height: 136px;border-top: 1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;}
.news-center .content-tab .news-list ul li a{display: block;height: 90px;margin-top: 23px;}
.news-center .content-tab .news-list ul li .image{width: 88px;height: 90px;}
.news-center .content-tab .news-list ul li .image img{width:100%;}
.news-center .content-tab .news-list ul li .text{width: 530px;margin-left: 20px;height: 90px;line-height: 1.5;}
.news-center .content-tab .news-list ul li .time{width: 100px;height: 90px;color:#d7dadc;}
.news-center .content-tab .news-list ul li .time .month{height: 36px;line-height: 36px;}
.news-center .content-tab .news-list ul li .time .years{height: 18px;line-height: 18px;margin-left: 50px;}
.news-center .content-tab .news-list ul li .text .title{font-weight: bold;}*/
/*.news-center .content-tab .media-reports .news-list a.btn{margin-top: 45px;}*/
/*.news-center .content-tab .data-section .layui-tab-content .press-release .parse,.news-center .content-tab .data-section .layui-tab-content .image-data .parse{text-indent: 15px;margin-top: -40px;background-color:#aab4bd;opacity:0.5;filter:alpha(opacity=50);width:480px ;height: 40px;line-height: 40px;cursor: default;}
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
