/**
*@desc: 表单提交页
*@author: houpai
*@date 2021/01/24 22:15:07
*/
<template>
  <div class="inputComponent_container totalItem_container">
    <div class="input_box" v-if="!isSuccess">
      <div class="item_box">
        <div class="staff_item_container">
          <img src="../../assets/img/border_small.png" alt="" class="border_img">
          <img :src="staffDetail.employeeimgurl" alt="" class="staff_img">
          <span class="salary_span fontSize">
             月薪{{staffDetail.salary}}元
        </span>
        </div>
      </div>

      <div class="form_box" style="width: 78%">
        <van-field v-model="name" label="尊称"/>
        <van-field v-model="phone" type="tel" label="电话"/>
        <van-field v-model="city"  label="所在城市"/>
        <van-field v-model="desc"  label="需求"/>
      </div>

      <div class="btn_box">
        <div class="btn" @click.stop="backIndex">返回首页</div>
        <div class="btn" @click.stop="submitHandle">预约面试</div>
      </div>
    </div>

    <div class="success_box" v-html="successHtml.value" v-else>
    </div>
  </div>
</template>

<script>

  import Vue from "vue"
  import {Toast} from "vant"

  Vue.use(Toast)


  export default {
    name: "inputComponent",
    props: {
      staffDetail: {
        type: Object,
        default() {
          return {}
        }
      },
      successHtml: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        name: "",
        phone: "",
        city: "",
        desc: "",
        isSuccess: false
      }
    },
    methods: {
      submitHandle() {
        if (!this.phone || !this.name || !this.city || !this.desc) {
          Toast("请完善您的信息")
          return false
        } else if (!this.TestPhone(this.phone)) {
          Toast("请输入正确的电话号码")
          return false
        }
        let params = {
          temployeeid: this.staffDetail.id || "",
          temployeename: this.staffDetail.name || "",
          name: this.name,
          phone: this.phone,
          city: this.city,
          demand: this.desc
        }

        this.$http.request({
          url: "AppController/submitSubscribe",
          method: "post",
          body: params
        }).then(res => {
          if (res.data.success) {
            this.isSuccess = true
          } else {
            Toast(res.data.message || "提交失败")
          }
        }).catch(e => {
          console.log(e)
        })


      },
      backIndex() {
        this.$router.push({
          path: "/"
        })
      }
    }
  }
</script>

<style scoped lang="less">

  .input_box {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: rgba(224, 202, 161, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

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
        max-width: 100% !important;
      }


      .border_img {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        display: block;
        width: 100%;
        max-width: 100% !important;
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

      /deep/ .van-cell {
        padding: 0 !important;
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
        color: #fff;
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
        color: #fff;
        border-radius: 4px;
        margin: 0 10px;
      }
    }
  }

  .success_box {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    /deep/ img {
      max-width: 88%;
    }
  }
</style>
