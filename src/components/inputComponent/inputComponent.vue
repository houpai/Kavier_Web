/**
*@desc: 表单提交页
*@author: houpai
*@date 2021/01/24 22:15:07
*/
<template>
  <div class="inputComponent_container totalItem_container">
    <div class="swiper-slide">
      <div class="staff_item_container">
        <img src="../../assets/img/border_small.png" alt="" class="border_img">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3111700633,1206484463&fm=26&gp=0.jpg" alt="" class="staff_img">
        <span class="salary_span fontSize">
             月薪1800元起
        </span>
      </div>
    </div>

    <div class="form_box" style="width: 78%">
      <van-field v-model="name" label="尊称" />
      <van-field v-model="phone" type="tel" label="电话" />
      <van-field v-model="city" type="digit" label="所在城市" />
      <van-field v-model="desc" type="number" label="需求" />
    </div>

    <div class="btn_box">
      <div class="btn">返回首页</div>
      <div class="btn">预约面试</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputComponent",
  props: {
    messageObj: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      name:'',
      phone:'',
      city:'',
      desc:''
    }
  }
};
</script>

<style scoped lang="less">

.inputComponent_container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: rgba(224, 202, 161, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  .staff_item_container {
    margin: 30px 0 24px 0;
    box-sizing: border-box;
    padding: 15px;
    width: 147px;
    height: 174px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;

    .staff_img {
      display: block;
      width: 100%;
      height: 100%;
      max-width: 100%!important;
    }


    .border_img {
      position: absolute;
      left: 0;
      right: 0;
      bottom:0;
      top:0;
      display: block;
      width: 100%;
      max-width: 100%!important;
      height: 100%;
    }

    .salary_span {
      display: inline-block;
      position: absolute;
      left: 24px;
      right: 24px;
      bottom: -4px;
      background-color: red;
      color: #fff;
      font-size: 12px;
      text-align: center;
      border-radius: 10px;
      padding: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .form_box {
    /deep/ .van-cell:not(:last-child)::after {
      border-bottom: 0;
    }
    /deep/ .van-cell  {
      padding: 0!important;
      margin-bottom: 6px;
      border-radius: 4px;
      overflow: hidden;
    }

    /deep/ .van-cell__value {
      padding: 6px;
      border: 2px solid rgba(148, 120, 69, 1);
    }

    /deep/ .van-cell__title.van-field__label {
      width: 72px;
      text-align: left;
      background-color: rgba(148, 120, 69, 1);
      font-size: 16px;
      color:#fff;
      padding: 6px;
    }
  }

  .btn_box {
    display: flex;
    margin: 20px 0 0 0;

    .btn {
      width: 115px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(148, 120, 69, 1);
      font-size: 16px;
      color:#fff;
      border-radius: 4px;
      margin: 0 10px;
    }
  }
}
</style>
