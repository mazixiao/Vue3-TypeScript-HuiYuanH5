<template>



  <div class="enter">
    <!-- <router-link to="/home#a1">
      <div v-if="type == 1" class="bg-img" :style="`background-image: url(${src});`" @click="goSearch"></div>
      <video v-if="type == 2" class="bg-video" :src="src" autoplay="autoplay" loop="loop" muted="muted"></video>
    </router-link>
    <router-link class="goIndex" to="/home">
      Enter
    </router-link>
    <div class="footer-bottom">
      <div class="copyright">
        全国服务热线<span class="tel">021-61183567</span>惠元医院拥有本网站所有内容的最终解释权 ©Copyright 2020 xingfuhuiyuan. All rights reserved. <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备案17073527号</a>
      </div>
      <div class="site">上海市浦东新区秀浦路2500弄4号楼</div>
    </div> -->
    <p style='font-size: 20px'>进入页面</p>

  </div>


</template>
<!-- vue3+typescript+vu3x项目开发 （ 四）结合vuex -->
<!-- https://blog.csdn.net/weiyongliang_813/article/details/89326534 -->

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  // import { EntryPage } from "@/assets/js/api";

  @Options({
    components: {

    },
  })
  export default class Enter extends Vue {
    data() {
      // const that = this;
      return {
        // 路径
        src: '',
        // 类型
        type: null,
      };
    }
   }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/enter.scss";
  </style>