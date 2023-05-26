<template>
  <h1>select组件</h1>
  <mySelect >666</mySelect>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Message from '../packages/Message/src/index'
export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      count: 0,
      isOpen:false
    };
  },
  methods: {
   
  },
});
</script>

<style lang="scss" scoped>
.mydiv{
  max-width: 200px;
  height: 20px;
  border: 1px solid red;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space: nowrap;
}
// 阿里字体图标设置
.icon, .iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
