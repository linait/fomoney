<template>
    <!--主体内容-->
    <div>
		<a-header-sps title="加入我们"></a-header-sps>
	    <div class="wc1200 join-us">
			<div class="ju-title text-center">加入我们</div>
			<div class="ju-banner text-center">
			     <p class="email">简历请投递至wangw@fosun.com</p>
			     <p class="fs16">邮件标题格式为“应聘职位名称－个人姓名” 附件添加个人简历</p>
			</div>
			<!--职位筛选-->
			<div class="job-category clearfix">
				<p class="fl">职位：</p>
				<ul>
				   <li @click="itemTab('8deb06dab2384902a0c87081e41c6e14')" :class="{'active-bg':isAv=='8deb06dab2384902a0c87081e41c6e14'}">全部</li>
				   <li v-for="(item,index) in topics.data" v-text="item.name" :class="{'active-bg':isAv==item.id}" @click="itemTab(item.id)"></li>
			    </ul>
			</div>
			<div class="ju-employment">
				<ul>
					<li v-for="item in articles.data" @click="itemTg(item.id)">
						<div class="employment-title clearfix">
							<a class="fl"><img src="/static/images/contactus_icon.png" alt=""></a>
						    <a class="fl fs16 position" v-text="item.title"></a>
						    <i class="fr arrow downarrow" v-if="isSw==item.id"></i>
							<i class="fr arrow" v-else></i>
						</div>
						<div class="employment-conten" v-if="article.data.articleData" v-html="article.data.articleData.content" v-show="isSw==item.id"></div>
					</li>
				</ul>
			</div>
		</div>
        <a-footer></a-footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import aHeaderSps from '@/components/header/header-sps'
import aFooter from '@/components/footer/footer'

const fetchInitialData = async (store) => {
    const config = {
        categoryId: '8deb06dab2384902a0c87081e41c6e14'
    }
	await store.dispatch('frontend/category/getCategoryList',config)
	await store.dispatch('frontend/article/getArticleList',	{pageNo:1,pageSize: 100,categoryId:'8deb06dab2384902a0c87081e41c6e14'});
	
	// await store.dispatch('frontend/article/getArticleItem',{id:1});
}

export default {
    data() {
        return {
			isAv:'8deb06dab2384902a0c87081e41c6e14',
			isSw:'',
			content:''
        }
    },
	computed: {
        ...mapGetters({
            topics: 'frontend/category/getCategoryList',
			articles: 'frontend/article/getArticleList',
			article: 'frontend/article/getArticleItem'
        })
    },
    components: { 
		aHeaderSps,
        aFooter
    },
	mounted() {
        fetchInitialData(this.$store)
    },
	watch: {
		content: 'itemTg'
	},
	methods:{
		itemTab(id){
			this.isAv = id;

			const config = {
				pageNo:1,
				pageSize: 100,
				categoryId: this.isAv
			}
			this.$store.dispatch('frontend/article/getArticleList',	config);
		},
		itemTg(id){
			this.isSw = id;
			
			// this.$store.dispatch('frontend/article/getArticleItem',{id:this.isSw});
			this.$store.dispatch('frontend/article/getArticleItem',{id:this.isSw});
		}
	}
	// ,watch: {
	// 	content:function(){
	// 		console.log(1);
	// 		this.content = 
	// 	}
	// }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.join-us{padding-bottom: 50px;}
.join-us .ju-title{height: 100px;line-height: 100px;font-size: 32px;} 
.join-us .ju-banner{width:1200px;height:245px;color:#FFFFFF;background: url(/static/images/contactus_banner.jpg) no-repeat center;background-size: 1200px 245px;}
.join-us .ju-banner .email{padding-top:80px;font-size: 26px;}
.join-us .ju-employment .employment-title{padding: 10px 20px;background-color:#00a5fa;} 
.join-us .ju-employment .employment-title .arrow{width: 25px;height: 14px;background: url(/static/images/contactus_uparrow.png) no-repeat center;margin-top:8px;}
.join-us .ju-employment .employment-title .downarrow{background: url(/static/images/contactus_downarrow.png) no-repeat center;}
.join-us .ju-employment .employment-title .position{color: #FFFFFF;margin-left: 15px;}	
.join-us .ju-employment .employment-conten{color: #888888;font-size: 16px;padding: 40px 0 50px 20px;border:1px solid #F3F3F3;border-top: 0;}
.join-us .ju-employment .employment-conten .time-place{height: 16px;line-height: 16px;}
.join-us .ju-employment ul li{margin-top: 25px;}
.job-category{padding:10px 0 10px 30px;background-color: #f5f5f6;border: 2px solid #efefef;margin-top: 25px;}
.job-category ul li{float: left;margin-left:10px;padding: 0 12px;color: #909090;}
.job-category ul li:hover{cursor:pointer}
.job-category .active-bg{background-color:#00a5fa;color: #FFFFFF;}
</style>
