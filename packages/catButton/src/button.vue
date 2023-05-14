<template>
  <button :class="btnClass"   :disabled="disabled" :style="{
    borderRadius: round?'8px':'',
    backgroundColor:bgcolor,
    color:textColor,
    
  }" >
    <span  v-if="$slots.default" 
    class="spanText"
    :style="{
    borderRadius: round?'8px':'',
    color:textColor,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '2px 2px 3px rgb(181, 179, 179)'
  }"
    ><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "nd-button",
});
export interface IBtn {
  type?: string;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  size?: string;
  bgcolor?: string;
  textColor?:string
}
</script>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from "vue";
// import type { IBtn } from "../type";
import { BTN_TYPE } from "../type";

//设置默认值
const props = withDefaults(defineProps<IBtn>(), {
  type: BTN_TYPE.DEFAULT,
  round: false,
  circle: false,
  disabled: false,
  size: "16px",
  bgcolor: "#fff",
  textColor:'#000'
});
console.log(props.disabled);

const btnClass = computed(() => ["btn", props.type,props.size]);
</script>

<style scoped lang="scss">

.btn {
  width:80px ;
  height: 30px;
  border: 0px;
  box-shadow: 2px 2px 3px rgb(181, 179, 179);
  padding:0%;
  :hover{
    background-color: rgb(243, 248, 234);
      // border: 2px solid rgb(61, 64, 57);
      cursor: pointer;
    }
  &.small{
    width:70px;
    height: 25px;
  }
  &.mini{
    width: 50px;
    height: 20px;
  }
  &.big{
    width: 100px;
    height: 40px;
  }
  &.default {
    background-color: rgb(233, 236, 233);
    color: rgb(80, 77, 77);
  }
  &.success {
    background-color: rgb(68, 169, 68);
    color: rgb(252, 252, 252);
  }
  &.primary {
    background-color: rgb(62, 139, 228);
    color: rgb(243, 243, 243);
  }
  &.info {
    background-color: rgb(133, 133, 133);
    color: white;
  }
  &.danger {
    background-color: rgb(255, 66, 82);
    color: white;
  }
  &.warn {
    background-color: rgb(239, 150, 33);
    color: white;
  }
}
</style>
