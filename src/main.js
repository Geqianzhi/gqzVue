import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from './globalComp';
console.log(components)
import './styles/normalize.css';
import './styles/common.css';
const app = createApp(App);

Object.keys(components.components).forEach(e =>{
    app.component(e,components.components[e])
})

app.use(store)
.use(router)
.mount("#app");