import { createApp } from 'vue';
import router from '@/router';
import directives from '@/directives';
import App from './App.vue';
import uiComponents from './components/UI';

const app = createApp(App);

uiComponents.forEach((component) => {
    app.component(component.name, component);
});

directives.forEach((directive) => {
    app.directive(directive.name, directive);
});

app
    .use(router)
    .mount('#app');
