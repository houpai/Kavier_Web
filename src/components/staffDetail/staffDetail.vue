/**
 * @Description: 员工详情展示页
 * @Author: 侯湃
 * @Date: 2021/1/25
 */
<template>
  <div class="staffDetail_container">
    <div class="item_box">
      <div class="staff_item_container">
        <img src="../../assets/img/border.png" alt="" class="border_img">
        <img :src="staffDetail.employeeimgurl" alt="" class="staff_img">
      </div>
    </div>

    <div class="staff_message">
      <p class="name">姓名: {{staffDetail.name ||''}}</p>
      <p class="">工号: {{staffDetail.code ||''}}</p>
      <p class="">生日: {{staffDetail.birthday || ''}}</p>
      <p class="">人生状态: {{staffDetail.status || ''}}</p>
    </div>
  </div>
</template>

<script>


  import './staffDetail.less'

  export default {
    name: "staffDetail",
    props:{
      staffDetail:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>



