<template>
	<div class="header-contact">
		<div class="hd-container wc1200 clearfix">
			<router-link :to="{ path: '/index' }" class="fl">
				<img src="/static/images/contactus_logo.png" alt="汇智星">
			</router-link>
			<span class="fl"></span>
			<p class="fl" v-text="title"></p>
			<ul class="fr clearfix">
				<li>
					<a class="origin"></a><router-link :to="{ path: '/enIndex/aboutUs' }">关于汇智星</router-link>
				</li>
				<li class="middle">
					<a class="origin"></a><router-link :to="{ path: '/joinUs' }">加入我们</router-link>
				</li>
				<li class="contact">
					<a class="origin"></a><router-link :to="{ path: '/contactUs' }">联系我们</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	methods: {

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*router-link-exact-active router-link-active*/
.header-contact .hd-container a.router-link-active {
	color: #c5ab60;
}

/*.header-contact .hd-container li .origin{
	opacity: 1;
	filter: alpha(opacity=100)
}*/
</style>
