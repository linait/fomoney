<template>
 <!--资料专区-->
    <div class="data-section mt20">
        <ul class="layui-tab-title line fl">
            <li class="bg layui-this" @click="tabMore(1)">新闻稿</li>
            <li class="bg mt10" @click="tabMore(2)">视屏资料</li>
            <li class="bg mt10" @click="tabMore(3)">文档资料</li>
            <li class="bg mt10" @click="tabMore(4)">图片资料</li>
        </ul>
        <div class="layui-tab-content fl">
            <!--新闻稿-->
            <div class="layui-tab-item layui-show clearfix">
				<!--<keep-alive>-->
                 <component :is="currentView">
                <!-- 组件在 vm.currentview 变化时改变！ -->
                </component>
				<!--</keep-alive>-->
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import dataSectionDraft from '@/pages/en/news/data-section-draft'
import dataSectionCvd from '@/pages/en/news/data-section-cvd'
import dataSectionDoc from '@/pages/en/news/data-section-doc'
import dataSectionImg from '@/pages/en/news/data-section-img'
// import newsItem from '@/components/common/news-item'
 
export default {
	// prefetch: fetchInitialData,
	data(){
		return{
			currentView: dataSectionDraft
		}
	},
	components:{
		dataSectionDraft,
		dataSectionCvd,
		dataSectionDoc,
		dataSectionImg,
		// newsItem
	},
    methods: {
        tabMore(index) {
			//fetchInitialData(this.$store, {pageNo: 1})
			// console.log(this.$store);
			if(index===1){
				this.currentView = dataSectionDraft;
			}else if(index===2){
				this.currentView = dataSectionCvd;
			}else if(index===3){
				this.currentView = dataSectionDoc;
			}else{
				this.currentView = dataSectionImg;
			}
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
