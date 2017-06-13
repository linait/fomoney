<template>
  <div class="header">
		<div class="hd-box wc1200 clearfix">
			<!--<a class="hd-logo fl" href="/">-->
			<router-link :to="{ path: '/index' }" class="hd-logo fl">
				<img src="/static/images/logo.png" alt="汇智星" title="汇智星-科技金融智造未来" />
			</router-link>
			<!--</a>-->
			<ul class="nav fr clearfix">
				<!--<li><a href="/">首页</a></li>-->
				<li><router-link :to="{ path: '/index' }">首页</router-link></li>
				<li><router-link :to="{ path: '/personalIndex' }">个人通</router-link></li>
				<li><router-link :to="{ path: '/companyIndex' }">企业通</router-link></li>
				<li><router-link :to="{ path: '/enIndex' }">走进汇智星</router-link></li>
				<li><router-link :to="{ path: '/appDownload' }">APP下载</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
