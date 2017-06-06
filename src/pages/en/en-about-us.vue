<template>
  <!--about us-->
	<div class="about-us wc1200">
		<div class="en-title text-center bg-image">公司介绍</div>
		<div class="content fs14 text-center">
			<div class="mt80">
				<p>2016年复星集团初步完成了复星金融服务板块——复星金服的搭建，目前</p>
			    <p>核心企业已有星联保理、广信小贷、云通小贷、星灵财富、创富租赁、量富征信、商盟支付等，以复星钱包为支付入口，征信、大数据、云风控运用为</p>
			    <p>核心，嵌入复星健康、快乐、旅游、地产等资源的场景化服务从而组成信贷、财富管理及金融科技三大事业部。</p>
			    <p class="mt45">复星金服，秉承着复星集团的价值观，努力搭建服务于千百万中国新中产家庭的民生金融和消费服务平台，</p>
			    <p>致力于帮助和促进家庭的消费升级与资产增值。依靠复星集团的巨大体量以及资源支持，努力发展成为一家汇聚产业深度、全球广度</p>
			    <p>和科技高度的领先的综合性金融服务集团，为社会公众提供更好的金融生活服务，共创“健康、快乐、易金融”。</p>
			</div>
			<div class="mt100 layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
				<ul class="layui-tab-title">
					<li class="layui-this">
						<img src="/static/images/en_loanservices.png" alt="贷款服务" class="loanservices noactive-img">
						<img src="/static/images/en_loanservices_active.png" alt="贷款服务" class="loanservices-active active-img">
					</li>
					<li>
						<img src="/static/images/en_wealthmanagement.png" alt="财富管理" class="wealthmanagement noactive-img">
						<img src="/static/images/en_wealthmanagement_active.png" alt="财富管理" class="wealthmanagement-active active-img">
					</li>
					<li>
						<img src="/static/images/en_financialtechnology.png" alt="金融科技" class="financialtechnology noactive-img">
						<img src="/static/images/en_financialtechnology_active.png" alt="金融科技" class="financialtechnology-active active-img">
					</li>
				</ul>
				<div class="details layui-tab-content text-center">
					<div class="fs14 layui-tab-item layui-show">
						<a class="chuangfu"><img src="/static/images/en_logo_chuangfu.png"></a>
						<p class="fs24 name mt30">创富租赁</p>
						<p class="mt45">创富融资租赁（上海）有限公司，是一家专业汽车融资租赁公司，于2010年2月正式成立，注册资金4950万美元，总部位于上海。</p>
						<p>公司当前的高级经营管理团队全部由复星集团委派，该团队成员自2013年8月复星控股后，陆续到岗，该团队全部具备融资租赁行业的资深经验，具备较强的决策力</p>
						<p>和专业性。创富租赁的价值：专业的产品设计能力，根据市场需求，不断创新，提供更具竞争力的产品方案高效的业务运营能力，为客户提供安全、便捷的金融服务</p>
						<p>全国性的销售及服务布局，及时响应客户需求，提供优质、贴心的专属服务与众多厂商、经销商集团的深度合作，为客户创造更多价值</p>
						<p>强大的股东资源，对客户和资金都提供了强有力的支持和保证</p>
						<a class="yuntong"><img src="/static/images/en_logo_yuntong.png"></a>
						<p class="fs24 name mt30">云通小贷</p>
						<p class="mt45">广州复星云通小额贷款有限公司成立于2015年9月，是一家专注于小微企业在线供应链金融和大数据消费信贷的网络小额贷款公司。</p>
						<p>复星云通始终坚持“金融×科技”的发展理念，通过互联网和大数据挖掘技术，为小微企业打造便捷高效的融资产品和其他促进经营的金融服务；而对于个人消费者，</p>
						<p>复星云通将提供满足消费需求的现金借贷和消费分期服务。复星云通依托复星集团现有互联网产业资源，搭建覆盖广泛的场景化小企业融资渠道，</p>
						<p>涉及电商、旅游、医疗、资源领域。同时，集团持有支付牌照及“复星钱包”的推出，满足个人消费金需求和提供场景分期服务。复星云通将以开放、融合、</p>
						<p>普惠为价值观，依托互联网，为广大小微企业和个人居民提供高质量金融服务，同时高度重视资产质量和稳健发展，既实现合理的经济价值，</p>
						<p>同时也追求社会价值，成为中国普惠金融的代表企业之一！</p>
					</div>
					<div class="layui-tab-item">内容2</div>
					<div class="layui-tab-item">内容3</div>
				</div>
			</div>
		</div>
	</div>
  
</template>

<script>
layui.use('element', function(){
	var $ = layui.jquery,
	element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
	element.on('tab(docDemoTabBrief)', function(){
		$(this).find(".active-img").show();
		$(this).find(".noactive-img").hide();
		$(this).siblings().find(".active-img").hide();
		$(this).siblings().find(".noactive-img").show();
  	});
})

export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-us .bg-image{background-image: url(/static/images/en_about_us.png);background-size: 378px 57px;}
.about-us .content{width: 1110px;margin:0 auto;}
.about-us .content .details{margin-top: 70px;}
.about-us .content .details a{display: block;}
.about-us .content .details .chuangfu{width: 150px;height: 48px;line-height: 48px;margin: 0 auto;}
.about-us .content .details .yuntong{width: 131px;height: 17px;line-height: 17px;margin: 80px auto 0 auto ;}
.about-us .content .details .name{height: 24px;line-height: 24px;}
.about-us .content .layui-tab-title{border-bottom: 0;height:150px;}
.about-us .content .layui-tab-brief>.layui-tab-more li.layui-this:after, .about-us .content .layui-tab-brief>.layui-tab-title .layui-this:after{border: 0;}
.about-us .content .loanservices,.about-us .content .wealthmanagement-active,.about-us .content .financialtechnology-active{display: none;}
</style>
