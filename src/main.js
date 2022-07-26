import { createApp } from 'vue';
import router from '@/router';
import directives from '@/directives';
import App from '@/App.vue';
import uiComponents from '@/components/UI';
import store from '@/store';

const app = createApp(App);

uiComponents.forEach((component) => {
    app.component(component.name, component);
});

directives.forEach((directive) => {
    app.directive(directive.name, directive);
});

app
    .use(store)
    .use(router)
    .mount('#app');
