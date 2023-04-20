import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/*
    Font Awesome Icons
*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*
    Boostrap CSS , JS
*/

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./style.css";

const app = createApp(App);
app.use(store)
app.use(router)
app.mount("#app");
