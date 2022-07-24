import { createApp } from 'vue';
import App from './App.vue';
import uiComponents from './components/UI';

const app = createApp(App);

uiComponents.forEach((component) => {
    app.component(component.name, component);
});

app.mount('#app');
