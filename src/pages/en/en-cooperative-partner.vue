<template>
 <!--主体部分-->
	<div class="cooperative-partner wc1200">
		<div class="en-title text-center bg-image">合作伙伴</div>
		<div class="content mt100 mb90">
			<h2 class="fs24 text-center fw-normal">集团合作伙伴</h2>	
			<div class="cooperative-box">		
				<div class="partner-box">
				  <!--轮播图第1张-->	
				  <vue-swiper 
							ref="swiper"
        direction="horizontal"
        :mousewheel-control="false"
        :performance-mode="false"
        :pagination-clickable="false"
        :loop="false">
			      <div class="slide">
			      	<ul class="clearfix">
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner01.png" alt="复地" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner02.png" alt="复星医院" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner03.png" alt="复星保德信" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner04.png" alt="复星联合健康保险" /></a></li>
				        <li><a class="border-right-none" href="javascript:void(0);"><img src="/static/images/en_partner05.png" alt="豫园商城" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner06.png" alt="老庙黄金" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner07.png" alt="爱必侬" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner08.png" alt="构家" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner09.png" alt="易太极" /></a></li>
				        <li><a class="border-right-none" href="javascript:void(0);"><img src="/static/images/en_partner10.png" alt="上海钢联" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner11.png" alt="星堡" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner12.png" alt="星泓资本" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner13.png" alt="星浩资本" /></a></li>
				        <li><a href="javascript:void(0);"><img src="/static/images/en_partner14.png" alt="星豫资本" /></a></li>
				        <li><a class="border-right-none" href="javascript:void(0);"><img src="/static/images/en_partner15.png" alt="星景资本" /></a></li>
				        <li><a class="border-bottom-none" href="javascript:void(0);"><img src="/static/images/en_partner16.png" alt="onelink" /></a></li>
				        <li><a class="border-bottom-none" href="javascript:void(0);"><img src="/static/images/en_partner17.png" alt="阳光印网" /></a></li>
				        <li><a class="border-bottom-none" href="javascript:void(0);"><img src="/static/images/en_partner18.png" alt="德邦证券" /></a></li>
				        <li><a class="border-bottom-none" href="javascript:void(0);"><img src="/static/images/en_partner19.png" alt="德邦基金" /></a></li>
	        		</ul>
			      </div>
			      <div class="slide">我们的合作伙伴还在增加，复星金服将越来越强大</div>
				  </vue-swiper>
    			</div>
				<a href="javascript:;" class="prev" @click="prevMove()"></a>
				<a href="javascript:;" class="next" @click="nextMove()"></a>
			</div>
		</div>
	</div>
</template>


<script>
import VueSwiper from '@/components/common/vue-swiper'
export default {
	components: {VueSwiper},
	methods:{
		prevMove(){
			// alert('prevMove');
			this.$refs.swiper.prev();
		},
		nextMove(){
			// alert('nextMove');
			this.$refs.swiper.next();

		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cooperative-partner .bg-image{background-image:url(/static/images/en_cooperative_partner.png);background-size:881px 57px;}
.cooperative-partner .content{background:url(/static/images/en_cooperative_bg.png) no-repeat center center;width:1200px;height:646px;}
.cooperative-partner .content h2{padding-bottom:70px;}
.cooperative-partner .partner-box .slide{width:1200px!important;}
.cooperative-partner .partner-box .slide li{float:left;}
.cooperative-partner .partner-box .slide li a{display:inline-block;width:240px;height:136px;border-bottom:1px solid #e1e1e1;border-right:1px solid #e1e1e1;text-align:center;line-height:136px;}
.cooperative-partner .partner-box .slide li a.border-right-none{border-right:none;}
.cooperative-partner .partner-box .slide li a.border-bottom-none{border-bottom:none;}
.cooperative-partner .partner-box .slide li a img{display:inline;}
/*.cooperative-partner .bx-wrapper .bx-viewport{box-shadow:none;-webkit-box-shadow:none;background:none;border:none;left:0;}
.cooperative-partner .bx-wrapper .bx-controls-direction a{text-indent:0;font-size:40px;display:inline-block;width:46px;height:72px;background-color:#c5ab60;opacity:0.6;color:#fff;line-height:72px;text-align:center;z-index:11;}
.cooperative-partner .bx-wrapper .bx-controls-direction{display:none;}
.cooperative-partner .bx-wrapper .bx-prev{background:none;left:0;}
.cooperative-partner .bx-wrapper .bx-next{background:none;right:0;}
.cooperative-partner .bx-wrapper:hover .bx-controls-direction{display:block;} */
.cooperative-partner .cooperative-box{position: relative;}
.cooperative-partner .cooperative-box a.prev{
	position: absolute;
	display: none;
	width: 40px;
	height: 70px;
	background: url("/static/images/btn-spj.png") 100px 0px;
	top: 38%;
}
.cooperative-partner .cooperative-box a.next{
	position: absolute;
	display: none;
	width: 45px;
	height: 70px;
	background: url("/static/images/btn-spj.png") right 0px;
	top: 38%;
	right: -5px;
}
.cooperative-partner .cooperative-box:hover a.prev{
	display: block;
}
.cooperative-partner .cooperative-box:hover a.next{
	display: block;
}

</style>
