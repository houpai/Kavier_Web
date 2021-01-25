<template>
  <div class="main" :class="{'other_bg':pageIndex>0}">
    <div class="swiper-wrapper"
         id="wideWrapper"
         ref="swiperWrappers" data-src="swiperWrappers111111111"
         @touchstart="onSwiperTouchStart"
         @touchmove="onSwiperTouchMove"
         @touchend="onSwiperTouchEnd"
         :class="{'anim':anim}"
    >
      <template>
        <div class="page 1" :class="{'active': 0 == pageIndex,}" :style="{height:height+'px'}">
          1
        </div>
        <div class="page 2" :class="{'active': 1 == pageIndex,}" :style="{height:height+'px'}">
          2
        </div>
        <div class="page 3" :class="{'active': 2 == pageIndex,}" :style="{height:height+'px'}">
          3
        </div>
        <div class="page 4" :class="{'active': 3 == pageIndex,}" :style="{height:height+'px'}">
          4
        </div>
        <div class="page 5" :class="{'active': 4 == pageIndex,}" :style="{height:height+'px'}">
          5
        </div>
        <div class="page 6" :class="{'active': 5 == pageIndex,}" :data-src="pageIndex" :style="{height:height+'px'}">
          6
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        mySwiperWraps: null,//swiper-wrapper resf实例
        startY: 0,//touchstart时，手指y位置
        pageIndex: 0,//当前页数 0开始
        curIndex:0,
        pagesLength:6,//总页数
        height:667,//整屏幕高度
        anim:false,
        der:0.2,
      }
    },
    methods: {
      onSwiperTouchStart(e) {
        this.startY = e.touches[0].clientY;
      },
      onSwiperTouchMove(e){
        let y = e.changedTouches[0].pageY - this.startY;
        if ((this.curIndex == 0 && y > 0) || (this.curIndex === this.pagesLength - 1 && y < 0)) {
          y /= 2;
        }
        let dist = -this.curIndex * this.height + y;
        this.mySwiperWraps.style.cssText += (';-webkit-transform : translate3d(0px,' + dist + 'px' + ', 0px);' +
          'transform : translate3d(0px,' + dist + 'px' + ', 0px);');
        this.anim=false;
      },
      onSwiperTouchEnd(e){
        let sub = (e.changedTouches[0].pageY - this.startY) / this.height;
        let der = (sub > this.der || sub < -this.der) ? sub > 0 ? -1 : 1 : 0;

        this.moveTo(this.curIndex + der, true);
      },
      moveTo(index, flag) {
        let cur = this.curIndex;
        if (index < 0) {
          index = 0;
        }
        if (index >= this.pagesLength) {
          index = this.pagesLength - 1;
        }
        this.curIndex = index;
        if (flag) {
          this.anim=true;
          // this.wrap.addClass('anim');
        } else {
          this.anim=false;
          // this.wrap.removeClass('anim');
        }
        this.mySwiperWraps.style.cssText += (';-webkit-transform : translate3d(0px,' + -index * this.height + 'px' + ', 0px);' +
          'transform : translate3d(0px,' + -index * this.height + 'px' + ', 0px);');
        // window.setTimeout(function() {
        if (index !== cur) {
          // $(self.pageEles).removeClass('active').eq(index).addClass('active');
          this.pageIndex = index;
        }
        // }, 100);
      },

      update(){
        this.height = document.querySelector('.main').offsetHeight;
        // document.querySelector('.page').height(this.height);
        this.moveTo(this.curIndex < 0 ? 0 : this.curIndex, false);
      },
    },
    mounted(){
      this.mySwiperWraps = this.$refs.swiperWrappers;
      this.update();
      window.addEventListener('resize', ()=> {
        console.log("resize")
        this.update();
      }, false);
    },
    created(){

    },
  }
</script>
<style lang='less' scoped>
  //公共模块
  .main{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: url('') no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .anim{
    -webkit-transition: all 500ms ease-out 0s;
    transition: all 500ms ease-out 0s;
  }

  .other_bg{
    background: url('') no-repeat center;
    background-size: 100% 100%;
  }
</style>
