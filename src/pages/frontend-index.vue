<template>
  <div class="fontend-index">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'fontend-index',
  data () {
    return {
      msg: '这是一个测试的首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fontend-index{
    background-color: #ff9630;
}
</style>
