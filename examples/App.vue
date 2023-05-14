<template>
  
  <ct-modelBox
    show="false"
    width="300"
    borderRadius="10"
    headerColor="#009966"
    headerText="title"
    contentTextColor="#000"
    confirmText="确认666"
    cancelText="取消222"
    @confirm="fn1"
    @close="fn2"
  >l am content!!</ct-modelBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
    fn1(e:number) {console.log(e+'xxx');
    },
    fn2(e:number) {console.log(2+'sdadas');
    },
  },
});
</script>

<style lang="scss">

</style>
