<template>
  <div class="container">
    <hr class="hr" />
    <div id="texto1">
      <h2>Departamentos</h2>
    </div>
    <div id="texto2">
      <h4>
        Sua empresa está
        {{ parseInt(statisticsCompany.completePercentage).toFixed(0) }} % dentro
        da LGPD
      </h4>
    </div>
    <div class="container2">
      <div class="box">
        <h3 class="title1">Finanças</h3>
        <li>
          <apexchart
            id="statisticsFinanceiro"
            type="radialBar"
            height="220"
            :options="Financeiro"
            :series="Financeiros"
          />

          <a href="/financas"><h4 class="title">Ver detalhes</h4></a>
        </li>
      </div>
      <div class="box">
        <h3 class="title1">TI</h3>
        <li>
          <apexchart
            id="statisticsTI"
            type="radialBar"
            height="220"
            :options="Ti"
            :series="Tis"
          />
          <a href="/ti"><h4 class="title">Ver detalhes</h4></a>
        </li>
      </div>
      <div class="box">
        <h3 class="title1">Marketing</h3>
        <li>
          <apexchart
            id="statisticsMarketing"
            type="radialBar"
            height="220"
            :options="Marketing"
            :series="Marketings"
          />
          <a href="/marketing"><h4 class="title">Ver detalhes</h4></a>
        </li>
      </div>
      <div class="box">
        <h3 class="title1">RH</h3>
        <li>
          <apexchart
            id="statisticsRH"
            type="radialBar"
            height="220"
            :options="RH"
            :series="RHS"
          />
          <a href="/rh"><h4 class="title">Ver detalhes</h4></a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, userKey } from '@/global';
import { request } from '@/config/services/request';

import { mapState } from 'vuex';
import ApexCharts from 'vue-apexcharts';
export default {
  name: 'Departamentos',
  components: { apexchart: ApexCharts },
  computed: mapState(['user']),
  data() {
    return {
      statisticsCompany: {},
      Marketing: {},
      Marketings: [],
      marketingData: 0,
      Financeiro: {},
      Financeiros: [],
      financesData: 0,
      RH: {},
      RHS: [],
      rhData: 0,
      Ti: {},
      Tis: [],
      tiData: 0,
    };
  },
  methods: {
    getstatisticsCompany() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      request()
        .get(`${baseApiUrl}/answer/${companyId}/statistics`, this.answer)
        .then((res) => {
          this.statisticsCompany = res.data[0];
        });
    },
    getstatisticsMarketing() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;

      request()
        .get(`${baseApiUrl}/answer/${companyId}/statistics`, this.answer)
        .then((res) => {
          this.Marketing = res.data[1];
          this.marketingData = res.data[1].completePercentage;

          (this.Marketings = [parseInt(this.marketingData)]),
            (this.Marketing = {
              chart: {
                height: 250,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: '60%',
                    background: '#FFFFFF',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: false,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24,
                    },
                  },
                  track: {
                    background: '#FFFFFF',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: false,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35,
                    },
                  },
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: false,
                      color: '#FFFFFF',
                      fontSize: '17px',
                      fontWeight: 'bold',
                    },
                    value: {
                      formatter: function (val) {
                        return parseInt(val);
                      },
                      color: '#263238',
                      fontSize: '36px',
                      show: true,
                    },
                  },
                },
              },
              stroke: {
                lineCap: '',
              },
              colors: ['#263238'],
              labels: [''],
            });
        });
    },
    getstatisticsFinanceiro() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      request()
        .get(`${baseApiUrl}/answer/${companyId}/statistics`, this.answer)
        .then((res) => {
          this.Financeiro = res.data[2];
          this.financesData = res.data[2].completePercentage;

          (this.Financeiros = [parseInt(this.financesData)]),
            (this.Financeiro = {
              chart: {
                height: 250,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: '60%',
                    background: '#FFFFFF',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: false,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24,
                    },
                  },
                  track: {
                    background: '#FFFFFF',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: false,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35,
                    },
                  },
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: false,
                      color: '#FFFFFF',
                      fontSize: '17px',
                      fontWeight: 'bold',
                    },
                    value: {
                      formatter: function (val) {
                        return parseInt(val);
                      },
                      color: '#263238',
                      fontSize: '36px',
                      show: true,
                    },
                  },
                },
              },
              stroke: {
                lineCap: '',
              },
              colors: ['#263238'],
              labels: [''],
            });
        });
    },
    getstatisticsRH() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;

      request()
        .get(`${baseApiUrl}/answer/${companyId}/statistics`, this.answer)
        .then((res) => {
          this.RH = res.data[3];
          this.rhData = res.data[3].completePercentage;
          (this.RHS = [parseInt(this.rhData)]),
            (this.RH = {
              chart: {
                height: 250,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: '60%',
                    background: '#FFFFFF',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: false,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24,
                    },
                  },
                  track: {
                    background: '#FFFFFF',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: false,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35,
                    },
                  },
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: false,
                      color: '#FFFFFF',
                      fontSize: '17px',
                      fontWeight: 'bold',
                    },
                    value: {
                      formatter: function (val) {
                        return parseInt(val);
                      },
                      color: '#263238',
                      fontSize: '36px',
                      show: true,
                    },
                  },
                },
              },
              stroke: {
                lineCap: '',
              },
              colors: ['#263238'],
              labels: [''],
            });
        });
    },
    getstatisticsTI() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      request()
        .get(`${baseApiUrl}/answer/${companyId}/statistics`, this.answer)
        .then((res) => {
          this.Ti = res.data[4];
          this.tiData = res.data[4].completePercentage;

          (this.Tis = [parseInt(this.tiData)]),
            (this.Ti = {
              chart: {
                height: 250,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: '60%',
                    background: '#FFFFFF',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: false,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24,
                    },
                  },
                  track: {
                    background: '#FFFFFF',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: false,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35,
                    },
                  },
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: false,
                      color: '#FFFFFF',
                      fontSize: '17px',
                      fontWeight: 'bold',
                    },
                    value: {
                      formatter: function (val) {
                        return parseInt(val);
                      },
                      color: '#263238',
                      fontSize: '36px',
                      show: true,
                    },
                  },
                },
              },
              stroke: {
                lineCap: '',
              },
              colors: ['#263238'],
              labels: [''],
            });
        });
    },
    logout() {
      this.$store.commit('setUser', null);
      this.$router.push({ name: 'login' });
    },
  },
  mounted() {
    this.getstatisticsCompany();
    this.getstatisticsMarketing();
    this.getstatisticsFinanceiro();
    this.getstatisticsRH();
    this.getstatisticsTI();
  },
};
</script>

<style scoped>
i {
  color: #000;
}
#texto1 {
  margin-left: 25px;
  margin-bottom: 20px;
}

#texto2 {
  margin-left: 25px;
  margin-bottom: 20px;
}

#divNome {
  background-color: #ffffff;
}

li {
  list-style-type: none;
}

#statisticsMarketing {
  margin-top: 10px;
  margin-left: 20px;
  width: 200px;
}
#statisticsFinanceiro {
  margin-top: 10px;
  margin-left: 20px;
  width: 200px;
}
#statisticsRH {
  margin-top: 10px;
  margin-left: 20px;
  width: 200px;
}
#statisticsTI {
  margin-top: 10px;
  margin-left: 20px;
  width: 200px;
}

.title {
  margin-left: 10px;
  text-align: center;
  color: #000;
}
.title1 {
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
}

.container2 {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 8px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}
.container22 {
  margin-left: 15px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}
#boxAdd {
  background-color: #ffffff;
}
.box {
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  width: 245px;
  height: 315px;
  border-width: 2px;
  border-style: solid;
  background: #ffffff;
  border-radius: 5px;
  border-color: grey;
}
</style>
