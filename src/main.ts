import { createApp } from 'vue'
import App from './App.vue'
import {Button, Icon, NavBar, Tabbar, TabbarItem} from 'vant';

createApp(App).mount('#app')
const app = createApp(App);
app.use(NavBar);
app.use(Icon);
app.use(Button)
app.use(Tabbar);
app.use(TabbarItem);

