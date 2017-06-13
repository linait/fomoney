<template>
  <footer class="footer text-center">
		<ul class="clearfix">
			<li><router-link :to="{ path: '/enIndex/aboutUs' }">关于汇智星</router-link></li>
			<li><router-link :to="{ path: '/enIndex/developmentHistory' }">里程碑</router-link></li>
			<li><router-link :to="{ path: '/enIndex/cooperativePartner' }">合作伙伴</router-link></li>
			<li><router-link :to="{ path: '/enIndex/leadershipTeam' }">关注我们</router-link></li>
			<li><router-link :to="{ path: '/joinUs' }">加入我们</router-link></li>
			<li><router-link :to="{ path: '/contactUs' }" class="ft-last-li">联系我们</router-link></li>
		</ul>
		<p>版权所有©上海复星科技有限公司 &nbsp;&nbsp;|&nbsp;&nbsp;沪公网安备  31010102002363&nbsp;&nbsp;&nbsp;沪ICP备15034802号-1</p>
		<p>服务热线：400-123-1234</p>
		<div>
			<img src="/static/images/icon_sina.png" alt="新浪" />&nbsp;&nbsp;&nbsp;
			<img src="/static/images/icon_wechat.png" alt="微信" />
		</div>
	</footer>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
