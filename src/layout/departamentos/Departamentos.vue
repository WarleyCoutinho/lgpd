<template>
  <div class="container">
    <hr class="hr" />
    <div id="texto1">
      <h2>Departamentos</h2>
    </div>
    <div id="texto2">
      <h4>Sua empresa está 0% dentro da LGPD</h4>
    </div>
    <div class="container2">
      <div id="boxAdd" class="box">
        <h2 class="textoMeio">
          <router-link to="/form-departamento">
            <i class="fa fa-plus"></i>
          </router-link>
        </h2>
      </div>
      <div class="box">
        <h3 class="title1">Finanças</h3>
        <li>
          <!-- <img id="foto1" src="../../assets/48.png" alt="48" /> -->
          <!-- <b-row id="statisticsFinanceiro">
              <section>
                <h1>
                  {{
                    parseInt(statisticsFinanceiro.completePercentage).toFixed(0)
                  }}
                  %
                </h1>
              </section>
            </b-row> -->
          <apexchart
            id="statisticsFinanceiro"
            class="Financeiro"
            type="radialBar"
            height="220"
            :options="Financeiro"
            :series="Financeiros"
          />
          <!-- para mostrar o grafico decomenta esse codigo acima -->
          <a href="/financas"><h4 class="title">Ver detalhes</h4></a>
        </li>
      </div>
      <div class="box">
        <h3 class="title1">T.I</h3>
        <li>
          <!-- <img id="foto1" src="../../assets/66.png" alt="66" /> -->
          <apexchart
            id="ti"
            class="ti"
            type="radialBar"
            height="220"
            :options="ti"
            :series="tis"
          />
          <a href="/ti"><h4 class="title">Ver detalhes</h4></a>
        </li>
      </div>
      <div class="box">
        <h3 class="title1">Marketing</h3>
        <li>
          <!-- <img id="foto1" src="../../assets/72.png" alt="72" /> -->
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
          <a href="/marketing"><h4 class="title">Ver detalhes</h4></a>
        </li>
      </div>
    </div>
    <div class="container22">
      <div class="box">
        <h3 class="title1">R.H.</h3>
        <li>
          <!-- <img id="foto1" src="../../assets/89.png" alt="89" /> -->
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
          <a href="/rh"><h4 class="title">Ver detalhes</h4></a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { userKey } from '@/global';
import { request } from '@/config/services/request';

import { mapState } from 'vuex';
import ApexCharts from 'vue-apexcharts';
export default {
  name: 'Departamentos',
  components: { apexchart: ApexCharts },
  computed: mapState(['user']),
  data() {
    return {
      statisticsMarketing: {},
      statisticsFinanceiros: [],
      statisticsFinanceiro: {},
      statisticsRH: {},
      statisticsTI: {},
      financesData: 0,

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
        labels: ['TI'],
      },
      //  TI
    };
  },
  methods: {
    getstatisticsMarketing() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsMarketing = res.data[1];
          // console.log('Marketing', this.statisticsMarketing);
        });
    },
    getstatisticsFinanceiro() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsFinanceiro = res.data[2];
          this.financesData = res.data[2].completePercentage;

          (this.Financeiros = [Number(this.financesData)]),
            (this.Financeiro = {
              chart: {
                height: 220,
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
              labels: ['f'],
            });
        });

      console.log(
        'Grafico Financia',
        this.statisticsFinanceiro.completePercentage
      );
    },
    getstatisticsRH() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsRH = res.data[3];
          // console.log('RH', this.statisticsRH);
        });
    },
    getstatisticsTI() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statisticsTI = res.data[4];
          // console.log('TI', this.statisticsTI);
        });
    },
    logout() {
      this.$store.commit('setUser', null);
      this.$router.push({ name: 'auth' });
    },
  },
  mounted() {
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
}

#divNome {
  background-color: white;
}

li {
  list-style-type: none;
}

#statisticsMarketing {
  margin-top: 90px;
  margin-left: 35px;
  width: 200px;
  height: 120px;
  color: #0a0a0a;
}
#statisticsFinanceiro {
  margin-top: 10px;
  margin-left: 30px;
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
#foto {
  width: 50px;
  height: 50px;
  border-radius: 20px;
}

#foto1 {
  margin-left: 10px;
  width: 250px;
  height: 250px;
}

.title {
  margin-left: 20px;
  color: #000;
  text-align: center;
}
.textoMeio {
  margin-bottom: 100px;
  margin-top: 150px;
  text-align: center;
}

.title1 {
  margin-left: 20px;
  color: #000;
  text-align: center;
}

.container2 {
  margin-left: -90px;

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
  background-color: gainsboro;
}
.box {
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  width: 250px;
  height: 350px;
  border-width: 2px;
  border-style: solid;
  background: white;
  border-radius: 5px;
  border-color: grey;
}
</style>
