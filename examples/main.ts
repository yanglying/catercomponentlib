import { createApp } from "vue";
import App from "./App.vue";
import catComponentLir from "~/index";
const app = createApp(App);
app.use(catComponentLir);
app.mount("#app");
