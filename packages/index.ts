//组件库的入口文件，可以在其他项目的 main.ts 引入整个组件库
import { App } from "vue";
import NdButton from "./catButton/src/button.vue";

// 所有组件列表
const components = [NdButton];

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export { NdButton };

export default {
  install,
};
