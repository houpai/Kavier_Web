/**
 * @Description: 首页
 * @Author: 侯湃
 * @Date: 2021/1/23
 */
<template>
<div class="index_container">
  <img :src="imgUrl" alt="">
  <div class="btn_box" @click.stop="getInto"></div>
</div>
</template>

<script>

  import './index.less'
  import Vue from "vue"
  import {Toast} from "vant"

  Vue.use(Toast)

  export default {
    name: "index",
    data() {
      return {
        imgUrl:''
      }
    },
    methods:{
      // 点击进入
      getInto() {
        this.$router.push({
          path:"/staffPage"
        })
      },
      getIndexUrl() {
        this.$http.request({
          url: "AppController/getSystemImage",
          method: "get"
        }).then(res => {
          if (res.data.success) {
            this.imgUrl =res.data.data.value || ''
          } else {
            Toast(res.data.message || "提交失败")
          }
        }).catch(e => {
          console.log(e)
        })
      }
    },
    created() {
      this.getIndexUrl();
    }
  }
</script>

