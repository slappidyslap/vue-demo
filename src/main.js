import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';
import uiComponents from './components/UI';
import Vintersection from './directives/Vintersection';

const app = createApp(App);

uiComponents.forEach((component) => {
    app.component(component.name, component);
});

app.directive('intersection', Vintersection);

app
    .use(router)
    .mount('#app');
