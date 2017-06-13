<template>
    <div>
        <a-header></a-header>
    
        <!--单页面滚动-->
        
        <!--<a-footer></a-footer>-->

        <div id="fullpage">
            <div class="section">
                <div class="bg"><img src="/static/images/index01.jpg"></div>
                <div class="wc1200">
                    <div class="bg1-1"></div>
                </div>
            </div>
            <div class="section">
                <div class="bg"><img src="/static/images/index02.jpg"></div>
            </div>
            <div class="section">
                <div class="bg"><img src="/static/images/index03.jpg"></div>
            </div>
            <div class="section">
                <div class="bg"><img src="/static/images/index04.jpg"></div>
            </div>
            <div class="section fp-auto-height" style="background:gold;">
               <a-footer></a-footer>
            </div>
        </div>	


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
        
        $('#fullpage').fullpage({
            anchors:['page01', 'page02','page03', 'page04', 'pageLast'],
            css3: true,
		    scrollingSpeed: 500,
            navigation: true,
            navigationPosition: 'right',
            // navigationTooltips: ['firstSlide', 'secondSlide'],
        });
    },
    destroyed() {
        $.fn.fullpage.destroy('all');
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*body,html{
    overflow: hidden;
}*/

.section {
    position: relative;
    overflow: hidden;
}

.section .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.section .bg img {
    display: block;
    width: 100%;
    /*height: 100%;*/
}
.active .bg1-1 {
    opacity: 1;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    transition-delay: 0.7s;
}
.bg1-1 {
    position: absolute;
    width: 432px;
    height: 432px;
    left: 32%;
    top: 19%;
    margin: 0 0 0 -277px;
    text-indent: -9999px;
    background-image: url('/static/images/index_animation01.png');
    opacity: 0;
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    transition: all 1s;
}
</style>
