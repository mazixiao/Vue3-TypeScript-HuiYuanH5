<template>


  <div class="enter">enter
    <div class="didi">
      dsdsd
    </div>
  </div>

</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  @Options({
    components: {
      HelloWorld,
    },
  })
  export default class Enter extends Vue { }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/enter.scss";
</style>


<!-- Vue3+TypeScript 完整项目上手教程 -->
<!-- https://blog.csdn.net/xgangzai/article/details/108878178 -->
<!-- https://github.com/vincentzyc/vue3-demo -->