/**
*@desc: 富文本展示页
*@author: houpai
*@date 2021/01/24 19:42:43
*/
<template>
  <div class="detail_container">
    <commonNav :show-back-btn="true"></commonNav>
    <div class="detail_box">
      <total></total>
    </div>
    <commonFooter></commonFooter>
  </div>
</template>

<script>

import commonNav from "@/components/commonNav/commonNav";'@/components/commonNav/commonNav.less'
import commonFooter from "@/components/commonFooter/commonFooter";
import total from "@/components/total/total";
import './detail.less'

export default {
  name: "detail",
  components:{
    commonNav,
    commonFooter,
    total
  },
  data() {
    return {
      employeeId:'',
      // AppController/selectEmployeeInfoList?employeeId=618555990454964236
    }
  },
  created() {
    this.employeeId = this.$route.query.employeeId || ''
  }
};
</script>

