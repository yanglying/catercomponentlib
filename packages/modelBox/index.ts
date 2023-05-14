import { App } from "vue";
import ModelBox from "./src/modelBox.vue";

console.log(ModelBox.name);


// 定义 install 方法， App 作为参数, 注册组件
ModelBox.install = (app: App): void => {
  app.component(ModelBox.name, ModelBox);
};

export default ModelBox;
