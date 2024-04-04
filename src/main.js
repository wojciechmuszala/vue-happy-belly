import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/router";
import { useFontAwesomeIcon } from "./composables/useFontAwesomeIcon";
import "@/assets/styles/index.css";

const { FontAwesomeIcon } = useFontAwesomeIcon();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
