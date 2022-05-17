import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';
import VueTheMask from 'vue-the-mask';
import VueApexCharts from 'vue-apexcharts';
import money from 'v-money';
import Moment from 'vue-moment';

import './config/bootstrap';
import './config/msgs';
import './config/axios';
import './config/mq';

import store from './config/store';
import router from './config/router';
const moment = require('moment');
require('moment/locale/pt-br');

Vue.config.productionTip = false;

Vue.component('apexchart', VueApexCharts);
Vue.use(VueTheMask);
Vue.use(Moment, { moment });
Vue.use(money, { precision: 2 });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
