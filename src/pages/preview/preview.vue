<template>
  <div class="preview_container detail_container">
    <commonNav :show-back-btn="false"></commonNav>
    <div class="detail_box">
      <div class="item">
        <p class="html_title">{{detail.title}}</p>
        <div class="html_box" v-html="detail.infohtml"></div>
      </div>
    </div>
    <commonFooter></commonFooter>
  </div>
</template>

<script>

  import commonNav from "@/components/commonNav/commonNav"
  import commonFooter from "@/components/commonFooter/commonFooter"
  import Vue from "vue"
  import {Toast} from "vant"

  Vue.use(Toast)

  export default {
    name: "preview",
    components: {
      commonNav,
      commonFooter
    },
    data() {
      return {
        id: "",
        detail:{}
      }
    },
    methods: {
      getDetail() {
        // TEmployeeInfoController/selectByPrimaryKey?id=618813430954070017
        this.$http.request({
          url: "TEmployeeInfoController/selectByPrimaryKey",
          method: "get",
          body: {
            id: this.id
          }
        }).then(res => {
          if (res.data.success) {
            console.log("res.data.data === ", res.data.data)
            this.detail = res.data.data || {}
          } else {
            Toast(res.data.message || "获取接口信息失败")
          }
        }).catch(e => {
          console.log(e)
        })
      }
    },
    created() {
      this.id = this.$route.query.id || ""
      if (this.id) {
        this.getDetail()
      }
    }
  }
</script>

<style scoped lang="less">

  .preview_container {
    height: 100%;
    background-color: rgba(224, 202, 161, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .detail_container {
    height: 100%;
    background-color: rgba(224, 202, 161, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;


    .detail_box {
      flex: 1;
      height: 0;
      box-sizing: border-box;
      padding: 10px 0;

      .item {
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: all 700ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
        -webkit-transition: all 700ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
        /*transition: all 300ms ease-in-out;
        -webkit-transition: all 300ms ease-in-out;*/
        background-position: center;
        background-color: rgba(224, 202, 161, 1);
        box-sizing: border-box;
        padding: 6px 20px;

        /deep/ img {
          max-width: 88%;
        }
      }
    }
  }

  .html_title {
    font-size: 20px;
    line-height: 32px;
    color: #000;
    text-align: left;
    width: 100%;
    font-weight: bold;
    -webkit-text-stroke: 0.6px #EAE2D5;
    text-stroke: 0.6px #EAE2D5;
    margin-bottom: 8px;
  }


</style>
