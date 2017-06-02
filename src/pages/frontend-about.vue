<template>
  <div class="frontend-about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'frontend-about',
  data () {
    return {
      msg: '这是一个公司介绍'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frontend-about{
    background-color: red;
}
</style>
