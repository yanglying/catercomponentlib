<template>
    {{ props.show }}
   <div class="mask" v-if="show">
  
     <div  class="defaultStyle" :style="{
    borderRadius:borderRadius+'px',
    width:width+'px',
marginLeft:-width/2 +'px'
  }"
  >
    <header :style="{backgroundColor:headerColor,display:'flex',justifyContent:'space-between'}" >
        <span style="margin:0 auto">{{ headerText }}</span>
      <a  href="javascript:void(0);" @click="cancel" style="margin-right: 10px;">x</a>
    </header>
    <main :style="{color:contentTextColor,padding:'10px',flex:'1'}"><slot></slot></main>
    <div class="btn-group" >
        <button style="margin-right: 10px;" @click="confirm">{{confirmText  }}</button>
        <button @click="cancel">{{ cancelText }}</button>
    </div>
     </div> 
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ct-modelBox",
});
export interface IModelBox{
   show?:boolean
   width?:string
   borderRadius?:string
   headerColor?:string
   headerText?:string
   contentTextColor?:string
   confirmText?:string
   cancelText?:string
}
</script>

<script setup lang="ts" >
import { defineProps, withDefaults,defineEmits ,reactive} from "vue";

const props = withDefaults(defineProps<IModelBox>(), {
  
   width:"350",
   borderRadius:"10",
   headerColor:"#007bff",
   headerText:"title",
   contentTextColor:"#007bff",
   confirmText:"是",
   cancelText:"否"
});
const state=reactive({
    isVisable:props.show
})
console.log(props.show);


const emits = defineEmits(['confirm', 'close'])
const cancel=()=>{
  emits('close',122)
  state.isVisable=! state.isVisable
}
const confirm=()=>{
  emits('confirm',666)
  state.isVisable=! state.isVisable
}
</script>

<style lang="scss" scoped>

.mask{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgb(237, 237, 237);
    top:0;
    left:0;
    .defaultStyle{
    width: 300px;
    height: 200px;
    left: 50%;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 2px 3px rgb(190, 190, 190);
   position: fixed;
   background-color: rgb(255, 255, 255);
   top: 20px;
    overflow: hidden;
   
   .btn-group{
    padding: 10px;
    display: flex;
    justify-content: end;
   }
  }
}
</style>