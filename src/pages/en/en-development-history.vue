<template>
  <!--development history-->
	<div class="development-history wc1200">
		<div class="en-title text-center bg-image">发展历程</div>
		<div class="content mt80">
			<div class="chain">
				<span class="di round"></span>
				<div class="line height238"></div>
				<span class="di round"></span>
				<div class="line height75"></div>
				<span class="di round"></span>
				<div class="line height75"></div>
				<span class="di round"></span>
				<div class="line height140"></div>
				<span class="di round"></span>
				<div class="line height75"></div>
				<span class="di round"></span>
				<div class="line height75"></div>
				<span class="di round"></span>
				<div class="line height75"></div>
				<span class="di round"></span>
				<div class="line height128"></div>
				<span class="di round"></span>
				<div class="line height75"></div>
				<span class="di round"></span>
				<div class="line height138"></div>
				<span class="di round"></span>
				<div class="line height235"></div>
				<span class="di round"></span>
				<div class="line height200"></div>
			</div>
			<div class="content-left text-right">
				<div class="time">
					<div class="rectangular">
						<p class="text-center fs60">2017</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt120 mb120">
					<div class="fs30 height30">2016年6月</div>
					<p class="fs16 mt20 height16">商盟商务服务有限公司加入复星</p>
					<div class="fs30 mt45 height30">2016年11月</div>
					<p class="fs16 mt20 height16">复星钱包正式推出</p>
					<div class="fs30 mt45 height30">2016年12月</div>
					<p class="fs16 mt20 height16">星联保理进入医疗行业</p>
				</div>
				<div class="time">
					<div class="rectangular">
						<p class="text-center fs60">2015</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt350 mb120">
					<div class="fs30 height30">2014年10月</div>
					<p class="fs16 mt20 height16">上海星联商业保理有限公司成立</p>
					<div class="fs30 mt45 height30">2014年12月</div>
					<p class="fs16 mt20 height16">上海虹口广信小额贷款有限公司成立</p>
				</div>
				<div class="time">
					<div class="rectangular">
						<p class="text-center fs60">2010</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt120">
					<div class="fs30 height30">2007年6月</div>
					<p class="fs16 mt20 height16">商盟商务服务有限公司成立 </p>
				</div>
			</div>
			<div class="content-right">
				<div>
					<div class="fs30 height30">2017年3月</div>
					<p class="fs16 mt20 height16">量富征信、复星钱包入住“诚信上海APP”</p>
				</div>
				<div class="time mt100">
					<div class="rectangular">
						<p class="text-center fs60">2016</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt245">
					<div class="fs30 height30">2015年4月</div>
					<p class="fs16 mt20 height16">量富征信管理有限公司成立</p>
					<div class="fs30 mt45 height30">2015年6月</div>
					<p class="fs16 mt20 height16">星联保理进入工程行业</p>
					<div class="fs30 mt45 height30">2015年9月</div>
					<p class="fs16 mt20 height16">广州复星云通小额贷款有限公司成立</p>
					<div class="fs30 mt45 height30">2015年11月</div>
					<p class="fs16 mt20 height16">区金融局同意广州复星云通小额贷款有限公司开业</p>
				</div>
				<div class="time">
					<div class="rectangular">
						<p class="text-center fs60">2014</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt128">
					<div class="fs30 height30">2010年2月</div>
					<p class="fs16 mt20 height16">创富融资租赁（上海）有限公司成立</p>
				</div>
				<div class="time mt100">
					<div class="rectangular">
						<p class="text-center fs60">2007</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
			</div>
		</div>
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
.development-history .bg-image{background-image: url(/static/images/en_development_history.png);background-size: 891px 57px;}
.development-history .content{position:relative;}
.development-history .content .chain{width: 20px;margin: 0 auto;}
.development-history .content .chain .round{width: 20px;height: 20px;border-radius:50%;border: 1px solid #ffcd54;background-color:#ffcd54;}
.development-history .content .chain .line{border-left:2px dashed #ffcd54;margin-left: 9px;margin-bottom:8px;}
.development-history .content .chain .height238{height: 238px;}
.development-history .content .chain .height235{height: 235px;}
.development-history .content .chain .height75{height: 75px;}
.development-history .content .chain .height140{height: 140px;}
.development-history .content .chain .height138{height: 138px;}
.development-history .content .chain .height128{height: 128px;}
.development-history .content .chain .height200{height: 200px;}
.development-history .content .height30{height: 30px;line-height: 30px;}
.development-history .content .height16{height: 16px;line-height: 16px;}
.development-history .content .rectangular{width: 170px;height: 130px;background-color: #ffcd54;z-index:1;position: relative;left: -20px;top: 110px;}
.development-history .content .rectangular-under{width: 170px;height: 130px;border:2px solid #ffcd54;} 
.development-history .content .content-left{top: 10px;left:-60px;}
.development-history .content .content-right{top: 0px;left:660px;}
.development-history .content .content-left,.development-history .content .content-right{width: 530px;position: absolute;}
.development-history .content .content-left .time{margin-left: 430px;margin-top: -118px;}
.development-history .content .content-right .time{margin-left: 20px;}
.development-history .content .time .rectangular p{color: white;height: 50px;line-height: 50px;padding-top: 20px;}
.development-history .content .time .rectangular span{display: block;color: white;height: 40px;line-height: 40px;padding-top: 20px;}
</style>
