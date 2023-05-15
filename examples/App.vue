<template>
  <!-- <button @click="openModelBox">点我打开模态框</button>
  <button @click="isOpen=false">点我关闭模态框</button>
  <ct-modelBox
    :show="isOpen"
    width="300"
    borderRadius="6"
    headerColor="#0066"
    headerText="title"
    contentTextColor="#000"
    confirmText="确认"
    cancelText="取消"
    @confirm="fn1"
    @close="fn2"
  >l am content!!</ct-modelBox> -->
  <ca-message type="success" message="yly"></ca-message>
  <button @click="fn"></button>
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
    fn(){
      Message({
        type:'warning',
        message:'xxxxxxxxxxxx'
      })
    },
    openModelBox(){
     
      this.isOpen=true
      console.log(  this.isOpen);
      
    },
    handleClick() {
      this.count++;
    },
    fn1(e:number) {console.log('点击确认');
    },
    fn2(e:number) {console.log('点击取消');
    },
  },
});
</script>

<style lang="scss">

</style>
