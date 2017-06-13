<template>
  <div id="app">
    <!--<transition name="fade" mode="out-in" appear>-->
    <router-view></router-view>
    <!--</transition>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style media="screen">
    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease;
    }
    .fade-enter {
        opacity: 1;
        transform: translate3d(0, 100px, 0);
    }
    .fade-leave-active {
        opacity: 0;
        transform: translate3d(100px, 0, 0);
    }
</style>
