<template>
  
	<div>
        <!--banner-->
        <div class="banner"><img src="/static/images/personal_banner.jpg" alt="个人通banner" /></div>
        <!--nav-->
        <div class="enter-fosun">
            <ul class="nav wc1200 clearfix">
                <li v-for="item in data">
                    <a href="javascript:;"  @click="goUrl(item)">{{item.label}}<span :class="{active:item.isA}"></span></a>
                </li>
            </ul>
        </div>
	    <router-view></router-view>
    </div>
  
</template>

<script>

export default {
	data(){
		 return{
			data:[
				{
					label:'我要贷款',
					url:'/personalIndex/loadXxd',
					isA:false
				},
				{
					label:'我要买车',
					url:'/personalIndex/buycar',
					isA:false
				}				
			]
		 }
	 },
	 methods:{
		 goUrl(obj){
			this.$router.push({ path: obj.url })
			this.data.map(function (v,i) {
				v.url==obj.url?v.isA=true:v.isA=false;
			});
		 }
	 },
	 created(){
		 const _path = this.$route.path;
		 this.data.map(function (v,i) {
			v.url==_path?v.isA=true:v.isA=false;
		 });
	 }
}

</script>
