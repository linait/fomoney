<template>
  <div class="company-index-body">
      <a-header></a-header>
      <!--主要内容块-->
      <div class="personal-index">
		<div class="container wc1200">
			<div class="bg-line1"><img src="/static/images/personal_index_bg01.png" alt="" /></div>
			<div class="bg-line2"><img src="/static/images/personal_index_bg01.png" alt="" /></div>
			<div class="need-load I-need clearfix">
				<div class="txt-box fl">
					<h2>我要贷款</h2>
					<p>借款不求人，就是这么简易快活！</p>
					<a class="btn apply-btn" href="personal_load_xxd.html">立即申请</a>
				</div>
				<div class="shadow"></div>
			</div>
			<div class="need-car I-need clearfix">
				<div class="txt-box fr">
					<h2>我要买车</h2>
					<p>创富汽车金融，启动梦想里程！</p>
					<a class="btn apply-btn" href="personal_load_xxd.html">立即申请</a>
				</div>
				<div class="shadow"></div>
			</div>
		</div>
	   </div>
       <a-footer></a-footer>
  </div>
  
</template>

<script>
import aHeader from '@/components/header/header'
import aFooter from '@/components/footer/footer'
export default {
  components:{
      aHeader,
      aFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personal-index-body{background-color:#fff;}
.personal-index .container{padding:130px 0 140px 0;background:url(/static/images/personal_index_bg02.png) no-repeat bottom center;position:relative;}
.personal-index .container .bg-line1{position:absolute;top:270px;left:-84px;z-index:-99;}
.personal-index .container .bg-line2{position:absolute;top:215px;right:0px;z-index:-99;}
.personal-index .container .need-load{background:url(/static/images/personal_index01.png) no-repeat center center;height:290px;margin-bottom:66px;position:relative;cursor:pointer;}
.personal-index .container .need-car{background:url(/static/images/personal_index02.png) no-repeat center center;height:290px;position:relative;cursor:pointer;}
.personal-index .container .txt-box{width:402px;height:290px;text-align:center;padding:60px 0 55px 0;color:#fff;}
.personal-index .container .txt-box h2{font-size:26px;}
.personal-index .container .txt-box p{font-size:16px;padding:5px 0 30px 0;}
.personal-index .container .txt-box .apply-btn{background-color:#a58b5c;width:224px;height:50px;line-height:50px;font-size:18px;color:#fff;}
.personal-index .container .shadow{position:absolute;left:0;top:0;width:1200px;height:290px;background-color:rgba(0,0,0,.6);background-color:#000;opacity:0.6;filter:alpha(opacity=60);}
.personal-index .container .I-need:hover .shadow{display:none;}
</style>
