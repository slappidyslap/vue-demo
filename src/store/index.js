import { createStore } from 'vuex';
import postStoreModule from './postStoreModule';

export default createStore({
    modules: {
        postStoreModule,
    },
});
