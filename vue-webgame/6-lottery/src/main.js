import { createApp } from 'vue';
import LottoGenerator from './components/LottoGenerator.vue';
import store from './store/index';

createApp(LottoGenerator).use(store).mount('#root');
