import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/router";

import { useFontAwesomeIcon } from "./composables/useFontAwesomeIcon";

import BaseViewUnderConstruction from "./components/base/BaseViewUnderConstruction.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseInput from "./components/base/BaseInput.vue";
import BaseTextInput from "./components/base/input/BaseTextInput.vue";
import BaseSelectInput from "./components/base/input/BaseSelectInput.vue";
import BaseFileInput from "./components/base/input/BaseFileInput.vue";
import BaseTextarea from "./components/base/input/BaseTextarea.vue";
import BaseAnnouncement from "./components/base/BaseAnnouncement.vue";

import "@/assets/styles/index.css";

const { FontAwesomeIcon } = useFontAwesomeIcon();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-view-under-construction", BaseViewUnderConstruction);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-text-input", BaseTextInput);
app.component("base-select-input", BaseSelectInput);
app.component("base-file-input", BaseFileInput);
app.component("base-textarea", BaseTextarea);
app.component("base-input", BaseInput);
app.component("base-announcement", BaseAnnouncement);

app.mount("#app");
