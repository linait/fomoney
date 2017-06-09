<template>
 <div>
    <a v-for="(item,index) in topics.data"  class="press-release  fl ml10" href="javascript:;">
        <img :src="item.originalImage" alt=""/>
        <div class="parse"></div>
        <span class="fs16 ml10" v-text="item.title"></span>
    </a>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = async (store, config) => {
    config = {
        pageNo:config.pageNo,
        pageSize: 6,
        categoryId: '9ba6835925ea4904a1bf0bda8f40314d'
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
.news-center .content-tab .data-section .layui-tab-content .press-release .parse,.news-center .content-tab .data-section .layui-tab-content .image-data .parse{text-indent: 15px;margin-top: -40px;background-color:#aab4bd;opacity:0.5;filter:alpha(opacity=50);width:480px ;height: 40px;line-height: 40px;cursor: default;}
.news-center .content-tab .data-section .layui-tab-content .press-release,.news-center .content-tab .data-section .layui-tab-content .image-data{width: 480px;height: 309px;}
.news-center .content-tab .data-section .layui-tab-content .press-release span,.news-center .content-tab .data-section .layui-tab-content .image-data span{position: relative;top: -35px;color: #FFFFFF;}
</style>
