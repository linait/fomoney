<template>
    <li>
        <a href="javascript:;" class="clearfix">
            <div class="fl image">
                <img :src="item.image" alt="" />
            </div>
            <div class="fr time">
                <p class="fs36 month" v-text="item.viewDate.viewDay">05/01</p>
                <p class="fs18 years" v-text="item.viewDate.viewYears">2017</p>
            </div>
            <div class="text fl">
                <p class="fs18 title" v-text="item.title"></p>
                <p class="fs14" v-text="item.description"></p>
            </div>
        </a>
    </li>
</template>
<script>
export default {
    name: 'news-item',
    props: ['item']
}
</script>
<style>
.news-center .content-tab .news-list ul li{width:810px;height: 136px;border-top: 1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;}
.news-center .content-tab .news-list ul li a{display: block;height: 90px;margin-top: 23px;}
.news-center .content-tab .news-list ul li .image{width: 88px;height: 90px;}
.news-center .content-tab .news-list ul li .image img{width:100%;}
.news-center .content-tab .news-list ul li .text{width: 530px;margin-left: 20px;height: 90px;line-height: 1.5;}
.news-center .content-tab .news-list ul li .time{width: 100px;height: 90px;color:#d7dadc;}
.news-center .content-tab .news-list ul li .time .month{height: 36px;line-height: 36px;}
.news-center .content-tab .news-list ul li .time .years{height: 18px;line-height: 18px;margin-left: 50px;}
.news-center .content-tab .news-list ul li .text .title{font-weight: bold;}
</style>
