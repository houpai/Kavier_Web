/**
 * @Description: 首页
 * @Author: 侯湃
 * @Date: 2021/1/23
 */
<template>
<div class="index_container">
  <img src="../../assets/img/index.jpg" alt="">
  <div class="btn_box" @click.stop="getInto"></div>
</div>
</template>

<script>

  import './index.less'

  export default {
    name: "index",
    methods:{
      // 点击进入
      getInto() {
        this.$router.push({
          path:"/staffPage"
        })
      }
    }
  }
</script>

