/**
*@desc: 富文本展示页
*@author: houpai
*@date 2021/01/24 19:42:43
*/
<template>
  <div class="detail_container">
    <commonNav :show-back-btn="true"></commonNav>
    <div class="detail_box">
      <div class="H5FullscreenPage">
        <div class="H5FullscreenPage-wrap">
          <div class="item" data-index="0">
            <staffDetail :staffDetail="employee"></staffDetail>
          </div>
          <div class="item" v-for="(item,index) in htmlList" :key="item.id" :data-index="index + 1">
            <p class="html_title">{{item.title}}</p>
            <div class="html_box" v-html="item.infohtml"></div>
          </div>
          <div class="item item3" :data-index="htmlList.length + 1">
            <inputComponent :successHtml="successHtml" :staffDetail="employee"></inputComponent>
          </div>
        </div>
      </div>
      <div class="index_box scroll_tip">
        {{currentIndex+1}}/{{htmlList.length+2}}
      </div>
    </div>
    <commonFooter></commonFooter>
  </div>
</template>

<script>

import commonNav from "@/components/commonNav/commonNav";
import commonFooter from "@/components/commonFooter/commonFooter";
import inputComponent from '@/components/inputComponent/inputComponent'
import staffDetail from '@/components/staffDetail/staffDetail'
import './detail.less'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

export default {
  name: "detail",
  components:{
    commonNav,
    commonFooter,
    inputComponent,
    staffDetail
  },
  data() {
    return {
      employeeId:'',
      employee:{},// 员工信息
      htmlList:[], //富文本页
      currentIndex:0,
      successHtml:{}
    }
  },
  methods:{
    getStaffDetail() {
      this.$http.request({
        url:'AppController/selectEmployeeInfoList',
        method:'get',
        body:{
          employeeId:this.employeeId
        }
      }).then(res => {
        if(res.data.success) {
          console.log('getStaffDetail ====', res.data.data)
          this.employee = res.data.data.employee || {}
          this.htmlList = res.data.data.employeeInfoList || []
          this.successHtml = res.data.data.systemInfo || {}
          let that = this;
          this.$nextTick(() => {
            window.H5FullscreenPage.init({
              type: 2,
              pageShow: function (dom) {
                console.log('dom ====', dom.getAttribute('data-index'))
                that.currentIndex = Number(dom.getAttribute('data-index'));
              },
              pageHide: function (dom) {},
            });
          })
        }else {
          Toast(res.data.message || '获取接口信息失败')
        }
      })
    }
  },
  created() {
    this.employeeId = this.$route.query.employeeId || ''
    if(this.employeeId) {
      this.getStaffDetail()
    }
  }
};
</script>

<style lang="less" scoped>

</style>

