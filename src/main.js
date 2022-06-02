import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';
import VueApexCharts from 'vue-apexcharts';
import VueTheMask from 'vue-the-mask';
import VeeValidate from 'vee-validate';
import Moment from 'vue-moment';

import './config/styles/bootstrap';
import './config/posts/msgs';
import './config/services/axios';
import './config/responsive/mq';

import store from './config/store/store';
import router from './config/router/router';

const moment = require('moment');
require('moment/locale/pt-br');
Vue.use(Moment, { moment });

Vue.use(VueTheMask);

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields',
  errorBagName: 'veeErrors',
});

Vue.config.productionTip = false;

Vue.component('apexchart', VueApexCharts);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
