<template>
  <!-- //组件分析：input+menu+nodataTip -->
  <div class="select" v-focus>
    <div class="inputClass">
      <input
        class="input"
        type="text"
        :placeholder="placeholderText"
        @input="searchFn"
      />
      <i class="iconfont icon-Icon_arrow-down"></i>
    </div>
    <div class="menus">
      <Menu
        @getMenusData="getData"
        :keyWord="keyWord"
        :menuData="menuData"
      ></Menu>
    </div>
    <div class="tips"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "mySelect",
});
export interface Select {
  placeholderText: string;
}
</script>

<script lang="ts" setup>
import Menu from "./menu.vue";
import menuData from "./data.js";
import { defineProps, withDefaults, defineEmits, ref } from "vue";
const props = withDefaults(defineProps<Select>(), {
  placeholderText: "请输入内容",
});
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el: HTMLElement) => {
    const oInput = el.querySelector("input");

    const oIcon = el.querySelector("i");
    const oSelect = el.querySelector(".menu");

    oInput?.addEventListener("focus", () => {
      oInput.placeholder = "";
      oIcon!.className = "iconfont icon-icon_search";
      setTimeout(() => {
        oSelect!.style.display = "block";
      }, 200);
    });
    oInput?.addEventListener("blur", () => {
      oInput.placeholder = props.placeholderText;
      oIcon!.className = "iconfont icon-Icon_arrow-down";
      setTimeout(() => {
        oSelect!.style.display = "none";
      }, 200);
    });
    return el.focus();
  },
};

const getData = (selectitem) => {
  let input = document.querySelector("input");
  input!.value = selectitem.value;
};

let keyWord = ref("");
const searchFn = (e: Event) => {
  console.log(e!.target!.value);
  keyWord.value = e!.target!.value;
};
</script>

<style scoped lang="scss">
.select {
  position: relative;
  width: 300px;
  margin: 0 auto;
  .inputClass {
    position: relative;
    width: 100%;
    height: 38px;
    .input {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      border: 1px solid #999;
      border-radius: 5px;
      outline: none;
      transition: all 0.2s linear;
      &:focus {
        border: 1px soild #8defc8;
        box-shadow: 0 0 3px #8defc8;
      }
    }
    .iconfont {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
