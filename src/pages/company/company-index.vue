<template>
  <div class="company-index-body">
      
      <!--主要内容块-->
	<div class="company-index">
		<div class="container wc1200">
			<div class="bg01"><img src="/static/images/company_index_bg01.png" alt="" /></div>
			<div class="bg02"><img src="/static/images/company_index_bg02.png" alt="" /></div>
			<div class="title"><span>企业通</span></div>
			<ul class="clearfix">
				<li class="li01">
					<div class="circle-box">
						<h2>企业贷款</h2>
						<a class="btn details-btn" href="company_load_ptd.html">查看详情</a>						
					</div>
					<div class="shadow"></div>
				</li>
				<li class="li02">
					<div class="circle-box">
						<h2>汽车租赁</h2>
						<a class="btn details-btn" href="javascript:void(0);">查看详情</a>						
					</div>
					<div class="shadow"></div>
				</li>
				<li class="li03">
					<div class="circle-box">
						<h2>金融科技</h2>
						<a class="btn details-btn" href="company_Finance_qyzx.html">查看详情</a>						
					</div>
					<div class="shadow"></div>
				</li>
			</ul>
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
.company-index-body{background-color:#fff;}
.company-index .container ul{margin-top:60px;}
.company-index .container ul li{width:392px;height:500px;float:left;margin-right:12px;position:relative;cursor:pointer;}
.company-index .container ul li.li01{background:url(/static/images/company_index01.png) no-repeat center center;}
.company-index .container ul li.li02{background:url(/static/images/company_index02.png) no-repeat center center;}
.company-index .container ul li.li03{background:url(/static/images/company_index03.png) no-repeat center center;margin-right:0;}
.company-index .container ul li .circle-box{width:240px;height:240px;border-radius:50%;text-align:center;position:absolute;left:50%;margin-left:-120px;top:50%;margin-top:-120px;z-index:10;}
.company-index .container ul li .shadow{width:240px;height:240px;background-color:rgba(0,0,0,0.6);background-color:#000;opacity:0.6;filter:alpha(opacity=60);border-radius:50%;position:absolute;left:50%;margin-left:-120px;top:50%;margin-top:-120px;}
.company-index .container ul li .circle-box h2{font-size:26px;color:#fff;padding:75px 0 20px 0;}
.company-index .container ul li .circle-box .details-btn{width:132px;height:36px;line-height:36px;color:#979796;border:1px solid #979796;}
.company-index .container ul li:hover .shadow{background-color:rgba(154,129,90,0.8);background-color:#9a815a;opacity:0.8;filter:alpha(opacity=80);}
.company-index .container ul li:hover .details-btn{color:#fff;border:1px solid #fff;}
</style>
