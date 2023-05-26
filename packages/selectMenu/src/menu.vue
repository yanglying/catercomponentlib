<template>
  <div class="menu">
    <div
      class="item"
      v-for="(item, index) in filterData"
      :key="item.id"
      v-if="filterData.length!==0"
      @click="getSelect(item)"
    >
      {{ item.text }}
    </div>
    <div class="nodata" v-else>-暂无数据-</div>
  </div>
</template>
<script setup>
import { defineEmits,defineProps ,watch,reactive} from "vue";
const props=defineProps({
  keyWord:String,
  menuData:Array
})

const emit = defineEmits(["getMenusData"]);
const getSelect = (selectItem) => {
  emit("getMenusData", selectItem);
};

let filterData = reactive([])
const filterDataFn=(keyWord)=>{
  filterData=props.menuData.filter((item)=>{
     return item.text.includes(keyWord)
  })
}
watch(()=>props.keyWord,(newValue)=>{
  filterDataFn(newValue)
},{
  immediate:true
})


</script>

<style lang="scss">
.menu {
  display: none;
  position: absolute;
  left: 0;
  top: 38px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  cursor: pointer;
  .item {
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
    color: rgb(108, 106, 103);
    &:hover {
      background-color: rgb(237, 237, 237);
    }
  }
  .nodata{
    text-align: center;
    line-height: 30px;
    height: 30px;
  }
}
</style>
