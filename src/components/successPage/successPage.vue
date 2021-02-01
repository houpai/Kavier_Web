/**
*@desc: 预约成功页
*@author: houpai
*@date 2021/02/01 19:28:21
*/
<template>
  <div class="successPage_container" v-html="successHtml && successHtml.value">
  </div>
</template>

<script>

import './successPage.less'

export default {
  name: "successPage",
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

