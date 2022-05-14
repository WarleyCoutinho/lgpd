import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';
import VueApexCharts from 'vue-apexcharts';
import Moment from 'vue-moment';

import './config/styles/bootstrap';
import './config/posts/msgs';
import './config/services/axios';
import './config/responsive/mq';

import store from './config/store/store';
import router from './config/router/router';
const moment = require('moment');
require('moment/locale/pt-br');

Vue.config.productionTip = false;

Vue.component('apexchart', VueApexCharts);
Vue.use(Moment, { moment });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
