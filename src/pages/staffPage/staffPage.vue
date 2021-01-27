/**
 * @Description: 员工列表页
 * @Author: 侯湃
 * @Date: 2021/1/23
 */
<template>
 <div class="staffPage_container">
   <commonNav :show-back-btn="true"></commonNav>
   <div class="staff_box" ref="staff_box">
     <!-- Swiper -->
     <div class="swiper-container" ref="wrapper">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(item,index) in staffList" :key="index">
            <div class="staff_item_box" v-for="(subItem,subIndex) in item" :key="subIndex">
              <div class="staff_item_container" @click.stop="goStaffDetail(subItem)">
                <img src="../../assets/img/border_small.png" alt="" class="border_img">
                <img :src="subItem.headimgurl" alt="" class="staff_img">
                <span class="salary_span fontSize">
                  月薪{{subItem.salary}}元
                </span>
                <span class="isOnline" v-if="subItem.isonline">已上岗</span>
              </div>
            </div>
         </div>
       </div>
       <div class="swiper-button-next"></div>
       <div class="swiper-button-prev"></div>
     </div>
   </div>
   <commonFooter></commonFooter>
 </div>
</template>

<script>

  import './staffPage.less'
  import commonNav from "@/components/commonNav/commonNav";'@/components/commonNav/commonNav.less'
  import commonFooter from "@/components/commonFooter/commonFooter";
  import "swiper/swiper-bundle.css";
  import Swiper from  'swiper/swiper-bundle.min'

  import Vue from 'vue';
  import { Toast } from 'vant';

  Vue.use(Toast);

  export default {
    name: "staffPage",
    components:{
      commonNav,
      commonFooter
    },
    data() {
      return {
        staffList:[]
      }
    },
    methods:{
      swiperInit() {
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      },
      getStaffList() {
        let params = {
          page:1,
          limit:9999,
          isshow:1
        }
        this.$http.request({
          url:'TEmployeeController/selectPageModel',
          method:'get',
          body:params
        }).then(res => {
          if(res.data.success) {
            console.log('staff list ===', res.data.data);
            let staffList = res.data.data || [];
            // this.$nextTick(() => {
              console.log(this.$refs.wrapper.clientHeight)
              let clientWidth = this.$refs.wrapper.clientWidth
              let staffBoxHeight = this.$refs.wrapper.clientHeight / 375 *100;
              let avergeNum = parseInt(staffBoxHeight / (160 / 375 * 100))
              if(clientWidth > 800) avergeNum = 2;
              let averageStaffList = this.$averageArray(staffList,avergeNum * 2 > 6 ? 6 : avergeNum*2);
              this.staffList = averageStaffList
              this.swiperInit()
            // })

            this.$nextTick(() => {
              this.swiperInit()
            })

          } else {
            Toast(res.data.message || '获取员工列表接口报错')
          }
        })
      },
      goStaffDetail(item) {
        console.log('item ====', item);
        this.$router.push({
          path:'/detail',
          query:{
            employeeId:item.id
          }
        })
      }
    },
    created() {
      this.$nextTick(() => {
        this.getStaffList()
        // this.swiperInit()
      })
    }
  }
</script>

