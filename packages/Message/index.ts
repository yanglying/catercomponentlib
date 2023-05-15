import { App } from "vue";
import Message from "./src/Message.vue";

// 定义 install 方法， App 作为参数, 注册组件
Message.install = (app: App): void => {
  app.component(Message.name, Message);
};

export default Message;