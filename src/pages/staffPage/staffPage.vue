/**
 * @Description: 员工列表页
 * @Author: 侯湃
 * @Date: 2021/1/23
 */
<template>
 <div class="staffPage_container">
   <commonNav :show-back-btn="true"></commonNav>
   <div class="staff_box">
     <!-- Swiper -->
     <div class="swiper-container">
       <div class="swiper-wrapper">
         <div class="swiper-slide">
            <div class="staff_item_box" v-for="index in 6" :key="index">
              <div class="staff_item_container">
                <img src="../../assets/img/border_small.png" alt="" class="border_img">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3111700633,1206484463&fm=26&gp=0.jpg" alt="" class="staff_img">
                <span class="salary_span fontSize">
                  月薪1800元起
                </span>
                <span class="isOnline">已上岗</span>
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

  export default {
    name: "staffPage",
    components:{
      commonNav,
      commonFooter
    },
    data() {
      return {

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
      }
    },
    created() {
      this.$nextTick(() => {
        this.swiperInit()
      })
    }
  }
</script>

