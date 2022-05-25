<template>
  <div class="container">
    <hr class="hr" />
    <div id="texto1">
      <h2>Olá, {{ ` ${user.user.name}` }}</h2>
    </div>
    <div id="texto2">
      <h4>Situação atual</h4>
    </div>
    <b-row>
      <div id="container">
        <div id="column1">
          <!-- <img id="foto1" src="../assets/75.png" alt="48" /-->

          <b-row id="statisticsCompany">
            <section>
              <h1>
                {{ parseInt(statisticsCompany.completePercentage).toFixed(0) }}
                %
              </h1>
            </section>
          </b-row>
          <!-- <apexchart
            id="financia"
            type="radialBar"
            height="220"
            :options="chartOptions"
            :series="series"
          /> -->

          <div>
            <h2 class="textoMeio2">
              Sua empresa está
              {{ parseInt(statisticsCompany.completePercentage).toFixed(0) }} %
              dentro da LGPD
            </h2>
            <h5 id="title6">
              <a href="/financas"> <h5 id="verDetalhes">Ver detalhes</h5></a>
            </h5>
          </div>
        </div>

        <div class="column2">
          <div></div>
        </div>
      </div>
      <div id="container1">
        <ul>
          <b-row>
            <div>
              <h4 class="column4">Testes recentes</h4>
            </div>
            <div>
              <h4 class="column5">
                Ver tudo <i class="fa fa-arrow-right"> </i>
              </h4>
            </div>
          </b-row>
        </ul>
      </div>
    </b-row>
    <b-row>
      <div class="container2">
        <div class="box">
          <h3 class="title1">Finanças</h3>
          <li>
            <!-- <img id="foto1" src="../assets/48.png" alt="48" /> -->

            <b-row id="statisticsFinanceiro">
              <section>
                <h1>
                  {{
                    parseInt(statisticsFinanceiro.completePercentage).toFixed(0)
                  }}
                  %
                </h1>
              </section>
            </b-row>
            <!-- <apexchart
              id="financia"
              class="financia"
              type="radialBar"
              height="220"
              :options="financias"
              :series="financia"
            /> -->
            <!-- para mostrar o grafico decomenta esse codigo acima 
            e comenta o de cima a section
            -->
            <a href="/financas"><h4 id="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 class="title1">T.I</h3>
          <li>
            <!-- <img id="foto1" src="../assets/66.png" alt="48" /> -->
            <apexchart
              id="ti"
              class="ti"
              type="radialBar"
              height="220"
              :options="ti"
              :series="tis"
            />
            <a href="/ti"><h4 id="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 class="title1">Marketing</h3>
          <li>
            <!-- <img id="foto1" src="../assets/72.png" alt="48" /> -->
            <!-- <apexchart
              id="marketing"
              class="marketing"
              type="radialBar"
              height="220"
              :options="marketing"
              :series="marketings"
            /> -->
            <b-row id="statisticsMarketing">
              <section>
                <h1>
                  {{
                    parseInt(statisticsMarketing.completePercentage).toFixed(0)
                  }}
                  %
                </h1>
              </section>
            </b-row>
            <a href="/marketing"><h4 id="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 class="title1">R.H.</h3>
          <li>
            <!-- <img id="foto1" src="../assets/89.png" alt="48" /> -->
            <!-- <apexchart
              id="rh"
              class="rh"
              type="radialBar"
              height="220"
              :options="rhs"
              :series="rh"
            /> -->
            <b-row id="statisticsRH">
              <section>
                <h1>
                  {{ parseInt(statisticsRH.completePercentage).toFixed(0) }} %
                </h1>
              </section>
            </b-row>
            <a href="/rh"><h4 id="title">Ver detalhes</h4></a>
          </li>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
import { userKey } from '@/global';
import { request } from '@/config/services/request';

import { mapState } from 'vuex';
import ApexCharts from 'vue-apexcharts';
export default {
  name: 'Inicio',
  components: { apexchart: ApexCharts },
  computed: mapState(['user']),
  data() {
    return {
      statisticsCompany: 0,
      statisticsMarketing: 0,
      statisticsFinanceiro: 0,
      statisticsRH: 0,
      statisticsTI: 0,

      // financia: [33],
      // financias: {
      //   chart: {
      //     height: 350,
      //     type: 'radialBar',
      //     color: '#52B12C',
      //   },
      //   plotOptions: {
      //     radialBar: {
      //       hollow: {
      //         size: '70%',
      //       },
      //     },
      //   },
      //   colors: ['#000000'],
      //   labels: [''],
      // },
      // financias
      // TI
      tis: [66],
      ti: {
        chart: {
          height: 350,
          type: 'radialBar',
          color: '#52B12C',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        colors: ['#000000'],
        labels: [''],
      },
      //  TI
      // Marketing
      marketings: [99],
      marketing: {
        chart: {
          height: 350,
          type: 'radialBar',
          color: '#52B12C',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        colors: ['#000000'],
        labels: [''],
      },
      //  Marketing
      // R.H
      rh: [89],
      rhs: {
        chart: {
          height: 350,
          type: 'radialBar',
          color: '#52B12C',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        colors: ['#000000'],
        labels: [''],
      },
      //  R.H
    };
  },
  methods: {
    getstatisticsCompanyCompany() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      // console.log(companyId);

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsCompany = res.data[0];
          console.log('Toda a Empresa', this.statisticsCompany);
        });
      this.series = [
        {
          data: [],
        },
      ];
      this.chartOptions = {
        chart: {
          height: 220,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
      };
    },
    getstatisticsMarketing() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      // console.log(companyId);

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsMarketing = res.data[1];
          console.log('Marketing', this.statisticsMarketing);
        });
    },
    getstatisticsFinanceiro() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      // console.log(companyId);

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsFinanceiro = res.data[2];
          console.log('Financeiro', this.statisticsFinanceiro);
        });
    },
    getstatisticsRH() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      // console.log(companyId);

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsRH = res.data[3];
          console.log('RH', this.statisticsRH);
        });
    },
    getstatisticsTI() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      // console.log(companyId);

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsTI = res.data[4];
          console.log('TI', this.statisticsTI);
        });
    },
    logout() {
      this.$store.commit('setUser', null);
      this.$router.push({ name: 'auth' });
    },
  },
  mounted() {
    this.getstatisticsCompanyCompany();
    this.getstatisticsMarketing();
    this.getstatisticsFinanceiro();
    this.getstatisticsRH();
    this.getstatisticsTI();
  },
};
</script>

<style>
li {
  list-style-type: none;
}
#texto1 {
  margin-left: 20px;
  margin-bottom: 20px;
}

#texto2 {
  margin-left: 20px;
  margin-bottom: 20px;
}

#foto {
  width: 50px;
  height: 50px;
}

#foto1 {
  margin-left: 45px;
  width: 200px;
  height: 200px;
}
#container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}
#statisticsCompany {
  margin-top: 100px;
  margin-left: 40px;
  width: 400px;
  height: 250px;
  color: #eceff1;
}
#statisticsMarketing {
  margin-top: 90px;
  margin-left: 35px;
  width: 200px;
  height: 120px;
  color: #0a0a0a;
}
#statisticsFinanceiro {
  margin-top: 90px;
  margin-left: 35px;
  width: 200px;
  height: 120px;
  color: #0a0a0a;
}
#statisticsRH {
  margin-top: 90px;
  margin-left: 35px;
  width: 200px;
  height: 120px;
  color: #0a0a0a;
}
#statisticsTI {
  margin-top: 90px;
  margin-left: 35px;
  width: 200px;
  height: 120px;
  color: #0a0a0a;
}

#column1 {
  margin-left: 35px;
  background-color: #263238;
  width: 800px;
  height: 250px;
  display: flex;
}
.column2 {
  background-color: #eceff1;
  width: 300px;
  height: 250px;
  display: flex;
}

.column4 {
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 10px;
  color: #000;
  margin-right: 790px;
}

.column5 {
  color: #000;
  margin-left: 30px;
  margin-top: 40px;
  text-align: end;
}

#title {
  margin-left: 20px;
  color: #000;
  text-align: center;
}

.title5 {
  margin-left: 20px;
  color: #000;
}

#title6 {
  margin-left: 20px;
  margin-right: 50px;
  margin-top: 50px;
  color: white;
}

#verDetalhes {
  color: white;
}

.textoMeio {
  margin-left: 20px;
  margin-bottom: 30px;
}

.textoMeio2 {
  color: white;
  margin-right: 30px;
  margin-top: 50px;
}

.title1 {
  margin-left: 20px;
  margin-top: 20px;
  color: #000;
  text-align: center;
}

#textoTitulo {
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}

.container1 {
  flex-direction: row;
}

.container2 {
  margin-left: 35px;
  width: 100vw;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.box {
  margin-right: 10px;
  width: 265px;
  height: 320px;
  border-width: 2px;
  border-style: solid;
  background: white;
  border-radius: 5px;
  border-color: grey;
}
</style>
