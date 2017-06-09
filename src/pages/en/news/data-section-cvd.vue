<template>
<div class="video-data mt10">
    <a  v-for="(item,index) in topics.data" href="javascript:;">
        <img :src="item.image" alt="">
    </a>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = async (store, config) => {
    config = {
        pageNo:config.pageNo,
        pageSize: 6,
        categoryId: '7668bfe804874c958716ee0b12f757ad'
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
.news-center .content-tab .data-section .layui-tab-content .video-data{margin-left: 10px;}
.news-center .content-tab .data-section .layui-tab-content .video-data a{display: block;width: 980px;margin-bottom: 15px;}
</style>
