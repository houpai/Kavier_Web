/**
*@desc: 上下翻页
*@author: houpai
*@date 2021/01/24 20:45:46
*/
<template>
  <div class="total_container">
    <div class="H5FullscreenPage">
      <div class="H5FullscreenPage-wrap">
        <div class="item item1">asdadsa das as dasasdas sa da da dsada daad</div>
        <div class="item item2">阿斯頓法定阿文阿斯頓阿達阿薩打賞打賞大大雙</div>
        <div class="item item3">
          <inputComponent></inputComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import './total.less'
  import inputComponent from './inputComponent'

  export default {
    name: "total",
    components:{
      inputComponent
    },
    props: {
      employeeId: {
        type: [String, Number],
        default() {
          return ""
        }
      }
    },
    watch: {
      employeeId: {
        deep: true,
        immediate: true,
        handler() {

        }
      }
    },
    data() {
      return {}
    },
    methods: {},
    created() {
      this.$nextTick(() => {
        window.H5FullscreenPage.init({
          type: 2,
          pageShow: function (dom) {},
          pageHide: function (dom) {},
        });
      })
    }
  }
</script>

