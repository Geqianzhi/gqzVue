import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from 'ant-design-vue';
import store from "./store";
import components from './globalComp';
import './styles/normalize.css';
import './styles/common.css';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
app.config.productionTip = false;
Object.keys(components.components).forEach(e =>{
    app.component(e,components.components[e])
})

app.use(store)
.use(router)
.use(Antd)
.mount("#app");