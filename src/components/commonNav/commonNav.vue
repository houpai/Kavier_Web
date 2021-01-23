<template>
  <div class="commonNav_container">
    <div class="nav_box">
      <img src="../../assets/img/home.png" alt="" @click.stop="backIndex" v-if="showBackBtn">
    </div>
  </div>
</template>

<script>

  import "./commonNav.less";

  export default {
    name: "commonNav",
    props:{
      showBackBtn:{
        type:Boolean,
        default() {
          return false
        }
      }
    },
    methods:{
      backIndex() {
        this.$router.push({
          path:'/index'
        })
      }
    }
  };
</script>
