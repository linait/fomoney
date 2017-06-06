<template>
 <!--主体部分-->
	    <div class="brand-culture wc1200">
	    	<div class="en-title text-center bg-image">品牌文化</div>
	    	<ul class="clearfix">
	    		<li class="target fl">
	    			<p>企业目标</p>
	    			<span></span>
	    		</li>
	    		<li class="target-detail fr">
	    			<p class="first">成为一家汇聚产业深度、全球广度和科技高度的</p>
	    			<p class="second">领先的综合性金融服务集团</p>
	    		</li>
	    		<li class="vision fl">
	    			<p>共筑 健康 快乐 易金融</p>
	    		</li>
	    		<li class="vision-detail fr">
	    			<p>企业愿景</p>
	    			<span></span>
	    		</li>
	    		<li class="mission fl">
	    			<p>企业使命</p>
	    			<span></span>
	    		</li>
	    		<li class="mission-detail fr">
	    			<p class="first">用创新的、国际化的金融服务</p>
	    			<p class="second">助力中国产业升级、消费升级</p>
	    		</li>
	    	</ul>
	    </div>
</template>

<script>
layui.use('element', function(){
	var $ = layui.jquery,
	element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
})

export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand-culture .bg-image{background-image: url(/static/images/en_about_us.png);background-size: 378px 57px;}
.brand-culture ul {margin:90px 0 128px 0;}
.brand-culture ul li{width: 598px;height: 181px;}
.brand-culture ul .target{background: url(/static/images/en_brandculture_one.png) no-repeat center;background-size: 124px 98px;}
.brand-culture ul .target-detail{background: url(/static/images/en_brandculture_target.png) no-repeat center;background-size: 598px 181px;position:relative;}
.brand-culture ul .vision-detail{background: url(/static/images/en_brandculture_two.png) no-repeat center; background-size: 142px 98px;}
.brand-culture ul .vision{background: url(/static/images/en_brandculture_vision.png) no-repeat center;background-size: 598px 181px;position: relative;}
.brand-culture ul .mission{background: url(/static/images/en_brandculture_three.png) no-repeat center;background-size:143px 98px;}
.brand-culture ul .mission-detail{background: url(/static/images/en_brandculture_mission.png);background-size: 598px 181px;position: relative;}
.brand-culture ul .vision,.brand-culture ul .vision-detail{margin: 40px 0;}
.brand-culture ul .target p,.brand-culture ul .vision-detail p,.brand-culture ul .mission p{font-size: 32px;width: 140px;height: 32px;line-height: 32px;font-weight:bold;margin: 74px 0 0 155px;}
.brand-culture ul .target span,.brand-culture ul .vision-detail span,.brand-culture ul .mission span{display:block;width: 90px;border:1px solid #c5ab60;position: relative;top: 50px;left: 176px;}
.brand-culture ul .target-detail p,.brand-culture ul .vision p,.brand-culture ul .mission-detail p{font-size: 14px;color: #FFFFFF;background-color:#b2b2b6;padding: 0 15px;}
.brand-culture ul .target-detail p.first{position: absolute;top:88px;left:250px;}
.brand-culture ul .target-detail p.second{position: absolute;top: 125px;left: 250px;}
.brand-culture ul .vision p{position: absolute;top: 95px;left: 24px;}
.brand-culture ul .mission-detail p.first{position: absolute;top: 95px;left: 350px;}
.brand-culture ul .mission-detail p.second{position: absolute; top: 130px;left: 350px;}
</style>
