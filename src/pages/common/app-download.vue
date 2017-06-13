<template>
    <!--主体内容-->
    <div>
		<a-header></a-header>
	    <div class="download-box">
	    	<div class="wc1200 clearfix container">
	    		<div class="fr fosunwallet-app">
	    			<div class="fosun-wallet"><img src="/static/images/fosun_qianbao.png"></div>
	    			<div class="fosun-slogan"><img src="/static/images/slogan.png"></div>
	    			<div class="appdl"></div>
	    			<div class="appdl-details">
	    				<div class="dl-title">复星钱包APP</div>
	    				<div class="dl-text mt20">
	    					<span class="dl-phone"><a>1</a>手机下载</span>
	    					<span><a>2</a>电脑下载</span>
	    				</div>
	    				<div class="clearfix mt20">
	    					<div class="fl"><img src="/static/images/Qr_code.png" alt="二维码"></div>
	    					<div class="fr dl-button">
	    						<a href="##" class="mt10"><img src="/static/images/iPhone_client.png" alt="iphone客户端"></a>
	    						<a href="##" class="mt20"><img src="/static/images/Android_client.png" alt="android客户端"></a>
	    					</div>
	    				</div>
	    			</div>
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
    data() {
        return {

        }
    },
    components: { 
		aHeader,
        aFooter
    },
    mounted(){
       
    },
    destroyed() { 
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download-hd{opacity: 1;filter: alpha(opacity=100);background-color:#2f2f2f;position: inherit;}
.download-box{width: 100%;height: 844px;background:url(/static/images/app_download.jpg) no-repeat center;}
.download-box .container{position: relative;}
.download-box .container .fosunwallet-app{position: absolute;right:5px;}
.download-box .appdl{width: 455px;height: 280px;border-radius:8px;background-color:#FFFFFF;opacity: 0.5;filter: alpha(opacity=50);}
.download-box .appdl-details{padding: 20px 46px 30px 58px;position:relative;top:-280px;}
.download-box .appdl-details .dl-title{font-size: 28px;height: 28px;line-height: 28px;}
.download-box .appdl-details .dl-text a{display: inline-block;width: 25px;height: 25px;line-height:25px;color:#FFFFFF;text-align:center;border-radius:50%;background-color: #817b6f;margin-right: 10px;}
.download-box .appdl-details .dl-text span{font-size: 18px;height: 18px;line-height: 18px;}
.download-box .appdl-details .dl-text .dl-phone{margin-right: 42px;}
.download-box .appdl-details .dl-button a{display: block;}
.download-box .fosun-wallet{margin-top:215px;margin-left:10px;}
.download-box .fosun-slogan{margin-top: 28px;margin-bottom: 45px;margin-left: 90px;}
</style>
