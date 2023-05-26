import { createApp } from "vue";
import App from "./App.vue";
import '../assets/iconfont/iconfont.css';
import catComponentLir from "~/index";
const app = createApp(App);
app.use(catComponentLir);
app.mount("#app");
