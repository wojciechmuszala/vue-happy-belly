import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/router";

import { useFontAwesomeIcon } from "./composables/useFontAwesomeIcon";

import BaseButton from "./components/base/BaseButton.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseInput from "./components/base/BaseInput.vue";

import "@/assets/styles/index.css";

const { FontAwesomeIcon } = useFontAwesomeIcon();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-input", BaseInput);

app.mount("#app");
