import { App } from "vue";
import MySelect from "./src/Select.vue";



// 定义 install 方法， App 作为参数, 注册组件
MySelect.install = (app: App): void => {
  app.component(MySelect.name, MySelect);
};

export default MySelect;
