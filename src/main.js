// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'v-autocomplete/dist/v-autocomplete.css';
import Autocomplete from 'v-autocomplete';

import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
Vue.use(Autocomplete);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
