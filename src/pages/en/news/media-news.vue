<template>
 <div>
    <div class="fl content-left">
        <div class="news-list">
            <ul>
                <news-item v-for="(item,index) in topics.data" :item="item" :key="item.id"></news-item>
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
        pageSize: 10,
        categoryId: 4
    }
	await store.dispatch('frontend/article/getArticleList',	config)
}
export default {
    // name: 'media-news',
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
            // fetchInitialData(this.$store, {pageNo:1})
			if(this.topics.pageNo===this.topics.totalPage){
				this.isMore = false;
			}else{
				fetchInitialData(this.$store, {pageNo:this.topics.hasNext})
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
.news-center .content-tab .media-reports .news-list a.btn{margin-top: 45px;}

</style>
