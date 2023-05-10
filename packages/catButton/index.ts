//单独组件的入口文件，在其他项目可以使用 import { NdButton } from 'nandit-vue-vant' 方式进行单个组件引用

import { App } from "vue";
import Button from "./src/button.vue";

// 定义 install 方法， App 作为参数, 注册组件
Button.install = (app: App): void => {
  app.component(Button.name, Button);
};

export default Button;
