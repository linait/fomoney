<template>
  <div class="en-index-body">
      <!--主要内容块-->
	<div class="company-index en-index">
		<div class="container wc1200">
			<div class="bg01"><img src="/static/images/company_index_bg01.png" alt="" /></div>
			<div class="bg02"><img src="/static/images/company_index_bg02.png" alt="" /></div>
			<div class="title"><span>走进汇智星</span></div>
			<!--功能连接-->
			<div class="en-function-box clearfix">
				<div class="box-left fl">
					<router-link :to="{ path: '/enIndex/aboutUs' }" class="a-first">
						<span>公司介绍</span>
						<div class="shadow"></div>
					</router-link>
					<router-link :to="{ path: '/enIndex/leadershipTeam' }" class="a-second mt15">
						<span>领导团队</span>
						<div class="shadow"></div>	
					</router-link>
				</div>
				<div class="box-center fl">
					<router-link :to="{ path: '/enIndex/developmentHistory' }" class="a-first">
						<span>发展历程</span>
						<div class="shadow"></div>	
					</router-link>
				</div>
				<div class="box-right fl">
					<router-link :to="{ path: '/enIndex/newsCenter' }" class="a-first">
						<span>新闻中心</span>
						<div class="shadow"></div>
					</router-link>
					<div class="mt15 clearfix">
						<router-link :to="{ path: '/enIndex/brandCulture' }" class="a-second fl">
							<span>品牌文化</span>
							<div class="shadow"></div>
						</router-link>
						<router-link :to="{ path: '/enIndex/cooperativePartner' }" class="a-three fr">
							<span>合作伙伴</span>
							<div class="shadow"></div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>

  </div>
  
</template>

<script>

export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.en-index-body{background-color:#fff;}
.en-index .container .title span{width:200px;}
.en-function-box{margin-top:60px;}
.en-function-box a{display:block;width:290px;height:245px;position:relative;}
.en-function-box a span{display:inline-block;width:148px;height:46px;line-height:46px;color:#b7bbbd;font-size:22px;text-align:center;position:absolute;top:50%;margin-top:-23px;left:50%;margin-left:-74px;z-index:2;}
.en-function-box .shadow{width:100%;height:100%;background-color:rgba(0,0,0,.6);background-color:#000;opacity:0.6;filter:alpha(opacity=60);position:absolute;top:0;left:0;}
.en-function-box a:hover .shadow{display:none;}
.en-function-box a:hover span{background-color:#c9a96e;color:#fff;font-size:20px;}
.en-function-box .box-left a.a-first{background:url(/static/images/en_index01.png) no-repeat center center;}
.en-function-box .box-left a.a-second{background:url(/static/images/en_index04.png) no-repeat center center;}
.en-function-box .box-center a{display:block;width:290px;height:505px;background:url(/static/images/en_index02.png) no-repeat center center;}
.en-function-box .box-left,.en-function-box .box-center{margin-right:15px;}
.en-function-box .box-right a.a-first{display:block;width:590px;height:245px;background:url(/static/images/en_index03.png) no-repeat center center;}
.en-function-box .box-right a.a-second{width:288px;background:url(/static/images/en_index05.png) no-repeat center center;}
.en-function-box .box-right a.a-three{width:288px;background:url(/static/images/en_index06.png) no-repeat center center;}
</style>
