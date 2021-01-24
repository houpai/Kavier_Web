/**
*@desc: 富文本容器组件
*@author: houpai
*@date 2021/01/24 20:52:17
*/
<template>
  <div class="totalItem_container">
    totalItem_container {{htmlJson}}
  </div>
</template>

<script>
export default {
  name: "totalItem",
  props:{
    htmlJson:{
      type:String,
      default() {
        return ''
      }
    }
  },
  created() {
    console.log('htmlJson === ', this.htmlJson)
  }
};
</script>

<style scoped lang="less">
.totalItem_container {
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: rgba(224, 202, 161, 1);
}
</style>