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

  import * as foo  from '@/assets/js/foo.ts';


  console.log(foo.someVar, "someVar");
  console.log(foo.someVar11, "someVar11");
  console.log(foo.someVar22, "someVar22");



  const num: number[] = [1, 2];

  console.log(num);


  const num11: string[] = ["1", "2"];

console.log(num11);



  @Options({
    components: {
      HelloWorld,
    },
  })
  export default class Enter extends Vue { }
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/enter.scss";
</style>


<!-- Vue3+TypeScript 完整项目上手教程 -->
<!-- https://blog.csdn.net/xgangzai/article/details/108878178 -->
<!-- https://github.com/vincentzyc/vue3-demo -->