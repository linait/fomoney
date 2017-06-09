<template>
<div class="news-details wc1200 clearfix">
	<div class="content-left fl">
		 <template v-if="article.data.id">
		<div class="text text-left fs18  mt20">
			<p class="speech" v-text="article.data.title"></p>
			<div class="fs16 identify mt20">
				<span class="dv time" v-text="article.data.viewDate.viewDay"></span>
				<span class="dv">浏览：{{article.data.hits}}</span>
			</div>
			<div v-html="article.data.articleData.content"></div>
		</div>
		</template>
		<template v-else>
		  <div class="text text-left fs18  mt20">
			<p class="speech" v-text="article.title">该文章不存在, 或者该文章已经被删除</p>
			</div>
		</template>
		
	</div>
	 
	<news-aside></news-aside>
	 
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import newsAside from '@/pages/en/news/news-aside'

const fetchInitialData = async store => {
	await store.dispatch('frontend/article/getArticleItem')
}
export default {
	prefetch: fetchInitialData,
	data(){
		return {
		}
	},
	components:{
		newsAside,
	},
	computed: {
        ...mapGetters({
            article: 'frontend/article/getArticleItem'
        })
    },
    methods: {
        
    },
    watch: {
        '$route'() {
            fetchInitialData(this.$store)
        }
    },
    mounted() {
        if (this.$route.path !== this.article.path) {
            fetchInitialData(this.$store)
        } else {
            // this.$store.dispatch('global/gProgress', 100)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-details .content-left{width: 860px;border-right: 1px solid #f2f2f2;min-height: 650px;}
.news-details .content-left .text{width: 820px;}
.news-details .content-left .text a{display: block;width: 820px;height:331px;}
.news-details .content-left .text .speech{font-weight: bold;height: 18px;line-height: 18px;}
.news-details .content-left .text .identify{height: 16px;line-height: 16px;margin-bottom: 25px;}
.news-details .content-left .text .identify .time{margin-right: 20px;}
.news-details .content-right{width: 340px;}
.news-details .content-right ul{margin-left: 40px;}
</style>
