<template>
    <!--主体内容-->
    <div>
		<a-header-sps title="联系我们"></a-header-sps>
	    <div class="map_box"><img src="/static/images/contactus_map.jpg" alt="地图" /></div>
		<div class="contact-us">
			<div class="wc1200 information-box">
				<div class="triangle"></div>
				<div class="clearfix information">
				    <div class="fl company-address">
				    	<p>公司地址</p>
				    	<div></div>
				        <ul class="mt20">
				        	<li class="clearfix"><a class="phone fl"></a><span class="fl">400 820 2728<span class="ml30">Tel+86 (021) 62266983</span></span></li>
				        	<li class="clearfix"><a class="email fl"></a><span class="fl">客服邮箱：cs_hzx@fosun.com</span></li>
				        	<li class="clearfix"><a class="address fl"></a><span class="fl">上海市宜山路1289号克隆科技园B栋9楼</span></li>
				        </ul>
				    </div>
				    <div class="fl consult-message">
				    	<p>咨询留言</p>
				    	<div></div>

				    	<form class="common-form" action="#" method="post">
				    		<table>
				    			<tr>
				    				<td><label for="username">您的姓名：</label></td>
				    				<td><input type="text" v-model="guestbook.name" name="name" placeholder="请输入您的姓名"/></td>
				    			</tr>
				    			<tr>
				    				<td><label for="phone">手机号：</label></td>
				    				<td><input type="text" v-model="guestbook.phone" name="phone" placeholder="请输入手机号码"/></td>
				    			</tr>
				    			<tr>
				    				<td valign="top"><label for="note">备注：</label></td>
				    				<td><textarea id="note" rows="4"  v-model="guestbook.content"></textarea></td>
				    			</tr>
				    			<tr>
				    				<td></td>
				    				<td><input type="button" value="提交" name="按钮" class="btn submit-btn" @click="insert"/></td>
				    			</tr>
				    		</table>
				    	</form>
				    </div>
			    </div>
			</div>
		</div>
        <a-footer></a-footer>
    </div>
</template>

<script>
var phoneRE=''
import api from '~api'
import aHeaderSps from '@/components/header/header-sps'
import aFooter from '@/components/footer/footer'
export default {
    data() {
        return {
			guestbook: {
				type: '1',
                name: '',
                phone: '',
				content: ''
            }
        }
    },
    components: { 
		aHeaderSps,
        aFooter
    },
	created() {
        this.defaultData = JSON.parse(JSON.stringify(this.guestbook));
    },
	computed: {
		// validation: function () {
		// 	return {
		// 		phone: phoneRE.test(this.guestbook.phone)
		// 	}
		// },
		// isValid: function () {
		// 	var validation = this.validation
		// 	return Object.keys(validation).every(function (key) {
		// 		return validation[key]
		// 	})
		// }
	},
    methods:{
		async insert() {
            if (!this.guestbook.name || !this.guestbook.phone || !this.guestbook.content) {
				alert('请将表单填写完整！');
                return
            }
			// 手机号码校验

            const { data: { message, code, data} } = await api.post('/guestbook/save', this.guestbook)
            if (code === 200) {
				alert('咨询留言-提交成功！');
				this.defaultData = Object.assign(this.guestbook, this.defaultData);
            }
        }
	}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map_box img{width:100%;height:366px;min-width:1200px;}
.contact-us .information-box{margin-top:-70px;position: relative;z-index: 2;}
.contact-us .information-box .triangle{height: 0px;width: 0px;border-color: transparent transparent #FFFFFF transparent;border-style: solid;border-width:0 20px 20px 20px;margin-left: 420px;}
.contact-us .information-box .information{padding: 40px 75px; background-color: #FFFFFF;}
.contact-us .information-box .information .company-address{padding-right: 70px;}
.contact-us .information-box .information .company-address p,.contact-us .information-box .information .consult-message p{font-size:20px;height: 20px;line-height: 20px;}
.contact-us .information-box .information .company-address div,.contact-us .information-box .information .consult-message div{width: 40px;border-bottom: 1px solid #000000;margin-top: 15px;}
.contact-us .information-box .information .company-address ul a{background: url(/static/images/contactus_address.png) no-repeat;display: inline-block;width:30px;height:30px;}
.contact-us .information-box .information .company-address ul li span{font-size: 16px;height:30px;line-height:30px;color: #808080;}
.contact-us .information-box .information .company-address .phone{background-position: 0 -10px; margin-right:15px;}
.contact-us .information-box .information .company-address .email{background-position: 0 -43px;margin-right: 15px;}
.contact-us .information-box .information .company-address .address{background-position: 0 -79px;margin-right:15px;}
.contact-us .information-box .information .company-address .ml30{margin-left: 30px;}
.contact-us .information-box .information .consult-message{padding-left: 70px;border-left:1px solid #EFEFEF ;}
.contact-us .information-box .information .consult-message form{margin-top: 20px;font-size: 16px;}
.contact-us .information-box .information .consult-message form .submit-btn{width: 200px;height: 40px;margin-top: 25px;}
</style>
