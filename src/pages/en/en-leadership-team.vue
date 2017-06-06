<template>
  <!--主体部分-->
	<div class="leadership-team wc1200">
		<div class="en-title text-center bg-image">领导团队</div>
		<div class="content mt45">
			<!--个人介绍-->
			<ul class="introduction-box">
				<!--辜校旭-->
				<li class="personal leader-boss01" style="display:block;" :style="{backgroundImage: 'url(' + team.original_img + ')'}">
					<h2>{{team.name}}<span v-text="team.en_name"></span></h2>
					<p class="pb20">
						<span v-for="position in team.positions">{{position}}&nbsp;&nbsp;</span>
					</p>
					<p v-text="team.intro"></p>
				</li>
			</ul>
			<!--轮播切换-->
			<div class="team-box">
				<div class="leadership-box">
					<div class="team-box-slider">
						<vue-swiper  ref="swiper"
						direction="horizontal"
						:loop="false"
						>
						<div class="slide" :class="{active:item.isA}" v-for="(item,index) in teams" @click="goShow(item)">
							<img class="no-selected" :src="item.thumb_img" :alt="item.name"/>
							<div class="yes-selected clearfix">
								<img class="img fl"  :src="item.thumb_img" :alt="item.name"/>
								<div class="txt fr">
									<h3 class="fs24 fw-normal" >{{item.name}}</h3>
									<p v-for="position in item.positions">{{position}}</p>
								</div>
							</div>
						</div>
						</vue-swiper>
					</div>
					<a href="javascript:;" class="prev" @click="prevMove()"></a>
					<a href="javascript:;" class="next" @click="nextMove()"></a>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
import VueSwiper from '@/components/common/vue-swiper'
export default {
	components: {VueSwiper},
	data(){
		return {
			team:{},
			teams:[
				{
					name:'辜校旭1',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader02.png',
					original_img:'/static/images/en_leader_julia.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:true
				},
				{
					name:'辜校旭2',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader03.png',
					original_img:'/static/images/en_leader03.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:false
				},
				{
					name:'辜校旭3',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader04.png',
					original_img:'/static/images/en_leader_julia.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:false
				},
				{
					name:'辜校旭4',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader05.png',
					original_img:'/static/images/en_leader_julia.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:false
				},
				{
					name:'辜校旭5',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader02.png',
					original_img:'/static/images/en_leader_julia.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:false
				},
				{
					name:'辜校旭6',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader02.png',
					original_img:'/static/images/en_leader_julia.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:false
				},
				{
					name:'辜校旭7',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader02.png',
					original_img:'/static/images/en_leader_julia.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:false
				},
				{
					name:'辜校旭8',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader02.png',
					original_img:'/static/images/en_leader_julia.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:false
				},
				{
					name:'辜校旭9',
					en_name:'julia',
					positions:['复星集团副总裁','银行集团总裁'],
					thumb_img:'/static/images/en_leader02.png',
					original_img:'/static/images/en_leader_julia.png',
					intro:'辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。辜校旭女士同时担任浙江网商银行股份有限公司董事。她所带领团队分别于2012，2013，2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行，上海联通金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。',
					isA:false
				}
			]
		}
	},
	methods:{
		prevMove(){
			// alert('prevMove');
			this.$refs.swiper.prev();
		},
		nextMove(){
			// alert('nextMove');
			this.$refs.swiper.next();
		},
		goShow(item){
			this.teams.map(function (v,i) {
				v.isA=false;
			});
			item.isA = true;

			this.team = item;

		}

	},
	created(){
		this.team = this.teams[0];
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leadership-team .bg-image{background-image:url(/static/images/en_leadership_team.png);background-size:670px 57px;}
/*个人介绍*/
/*.leadership-team .content{position:relative;}*/
.leadership-team .content .introduction-box .personal{height:730px;padding:135px 0 0 88px;display:none;}
.leadership-team .content .introduction-box .leader-boss01{background:url(/static/images/en_leader_julia.png) no-repeat 625px center;}
.leadership-team .content .introduction-box .leader-boss02{background:url(/static/images/en_leader02.png) no-repeat 625px center;}
.leadership-team .content .introduction-box .leader-boss03{background:url(/static/images/en_leader03.png) no-repeat 625px center;}
.leadership-team .content .introduction-box .leader-boss04{background:url(/static/images/en_leader04.png) no-repeat 625px center;}
.leadership-team .content .introduction-box .leader-boss05{background:url(/static/images/en_leader05.png) no-repeat 625px center;}
.leadership-team .content .introduction-box .personal h2{font-size:32px;color:#c5ab60;width:470px;}
.leadership-team .content .introduction-box .personal h2 span{font-size:24px;color:#c5ab60;padding-left:15px;font-weight:normal;}
.leadership-team .content .introduction-box .personal p{width:470px;color:#808080;font-size:16px;}
/*轮播图*/
.leadership-team .content .team-box{position: relative;bottom: 130px;}
.leadership-team .content .team-box div.slide{width:180px!important;}
.leadership-team .content .team-box div.slide.active{width:360px!important;}
.leadership-team .content .team-box div.slide .no-selected{display:block;}
.leadership-team .content .team-box div.slide .yes-selected{display:none;background-color:#c5ab60;padding:10px;height:120px;}
.leadership-team .content .team-box div.slide .yes-selected .img{width:160px;height:100px;}
.leadership-team .content .team-box div.slide .yes-selected .txt{width:170px;text-align:center;color:#fff;}
.leadership-team .content .team-box div.slide .yes-selected .txt p{line-height:1.2;}		
.leadership-team .content .team-box div.slide.active .no-selected{display:none;}
.leadership-team .content .team-box div.slide.active .yes-selected{display:block;}
.leadership-team .content .team-box div.slide{margin-left: 15px;}
/*.leadership-team .bx-wrapper .bx-viewport{box-shadow:none;-webkit-box-shadow:none;background:none;border:none;left:0;}
.leadership-team .bx-wrapper .bx-prev{left:-15px;}*/

.leadership-team .leadership-box{position: relative;}
.leadership-team .leadership-box a.prev{
	position: absolute;
	display: none;
	width: 40px;
	height: 70px;
	background: url("/static/images/btn-spj.png") 100px 0px;
	top: 26px;
}
.leadership-team .leadership-box a.next{
	position: absolute;
	display: none;
	width: 45px;
	height: 70px;
	background: url("/static/images/btn-spj.png") right 0px;
	top: 26px;
	right: -5px;
}
.leadership-team .leadership-box:hover a.prev{
	display: block;
}
.leadership-team .leadership-box:hover a.next{
	display: block;
}
</style>
