<template>
<ul class="documentation ml10">
    <li class="clearfix" v-for="(item,index) in topics.data">
        <div class="fl clearfix mt10">
            <a class="fl"><img :src="item.image" alt=""></a>
            <a class="fl ml15">
                <p class="fs16" v-text="item.title"></p>
                <p class="fs14 text-color" >300kb</p>
            </a>
        </div>
        <a class="fr mt35 mr35" v-bind:href="item.articleFilesUrl" target="_black"><img src="/static/images/down-arrow.png" alt=""></a>
    </li>
    
</ul>
</template>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = async (store, config) => {
    config = {
        pageNo:config.pageNo,
        pageSize: 6,
        categoryId: '19d1a8f26397450cb695a26636c85da4'
    }
	await store.dispatch('frontend/article/getArticleList',	config)
}
export default {
    // name: 'data-section-draft',
	// prefetch: fetchInitialData,
	data(){
		return {
			isMore:true
		}
	},
	components:{
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
.news-center .content-tab .data-section .layui-tab-content .documentation li{width:980px;height: 90px;border-bottom: 1px solid #e2e2e2;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .mt15{margin-top: 15px;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .ml15{margin-left: 15px;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .text-color{color: #bab9bd;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .mt35{margin-top: 35px;}
.news-center .content-tab .data-section .layui-tab-content .documentation li .mr35{margin-right: 35px;}
.news-center .content-tab .data-section .layui-tab-content .documentation li a:hover{color:#333;}
.news-center .content-tab .data-section .layui-tab-content .documentation li:last-child{border-bottom: 0;}
</style>
