/**
*@desc: 预约成功页
*@author: houpai
*@date 2021/02/01 19:28:21
*/
<template>
  <div class="successPage_container">
    <div class="success_img">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="html_box" v-html="successHtml && successHtml.value">
    </div>
    <commonFooter></commonFooter>
  </div>
</template>

<script>

import './successPage.less'
import commonFooter from "@/components/commonFooter/commonFooter";

export default {
  name: "successPage",
  components:{
    commonFooter
  },
  data() {
    return {
      successHtml:''
    }
  },
  created() {
    let successHtml = sessionStorage.getItem('successHtml') || ''
    if(successHtml) {
      this.successHtml = JSON.parse(successHtml)
    }
  }
};
</script>

