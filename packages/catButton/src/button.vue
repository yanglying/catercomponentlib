<template>
  <button :class="btnClass" :disabled="disabled">
    <span v-if="$slots.default"><slot></slot></span>
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
}
</script>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from "vue";
// import type { IBtn } from "../type";
import { BTN_TYPE } from "../type";

const props = withDefaults(defineProps<IBtn>(), {
  type: BTN_TYPE.DEFAULT,
  round: false,
  circle: false,
  disabled: false,
  size: "16px",
  bgcolor: "#fff",
});
console.log(props.disabled);

const btnClass = computed(() => ["btn", props.type]);
</script>

<style scoped lang="scss">
.btn {
  width: 100px;
  height: 40px;

  &.round {
    border-radius: 5px;
  }
  &.circle {
    border-radius: 50%;
  }
  &.default {
    background-color: rgb(233, 236, 233);
    color: rgb(80, 77, 77);
  }
  &.success {
    background-color: rgb(73, 228, 73);
    color: rgb(68, 51, 51);
  }
  &.primary {
    background-color: rgb(62, 139, 228);
    color: rgb(49, 45, 45);
  }
  &.info {
    background-color: rgb(87, 88, 87);
    color: white;
  }
  &.danger {
    background-color: rgb(247, 111, 122);
    color: white;
  }
  &.warn {
    background-color: rgb(228, 155, 61);
    color: white;
  }
}
</style>
