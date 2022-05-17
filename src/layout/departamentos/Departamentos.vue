<template>
  <div>
    <hr class="hr" />
    <div id="texto1">
      <h2>Departamentos</h2>
    </div>
    <div id="texto2">
      <h4>Sua empresa está 0% dentro da LGPD</h4>
    </div>
    <div class="container">
      <div class="container2">
        <div id="boxAdd" class="box">
          <h2 class="textoMeio">
            <router-link to="/form-departamento">
              <i class="fa fa-plus"> </i>
            </router-link>
          </h2>
        </div>
        <div class="box">
          <h3 class="title">Finanças</h3>
          <li>
            <!-- <img id="foto1" src="../../assets/48.png" alt="48" /> -->
            <b-row id="statistics1">
              <section>
                <h1>
                  {{ parseInt(statistics.completePercentage).toFixed(0) }}%
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
            <!-- para mostrar o grafico decomenta esse codigo acima -->
            <a href="/financas"><h4 class="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 class="title">T.I</h3>
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
      </div>
      <div class="container22">
        <div class="box">
          <h3 class="title">Marketing</h3>
          <li>
            <!-- <img id="foto1" src="../../assets/72.png" alt="72" /> -->
            <apexchart
              id="marketing"
              class="marketing"
              type="radialBar"
              height="220"
              :options="marketing"
              :series="marketings"
            />
            <a href="/marketing"><h4 class="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 class="title">R.H.</h3>
          <li>
            <!-- <img id="foto1" src="../../assets/89.png" alt="89" /> -->
            <apexchart
              id="rh"
              class="rh"
              type="radialBar"
              height="220"
              :options="rhs"
              :series="rh"
            />
            <a href="/rh"><h4 class="title">Ver detalhes</h4></a>
          </li>
        </div>
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
      statistics: {},
      // descomenta esse codigo para usar os que vem do banco de dados

      // financia: [],
      // financias: {},

      // fim comenta o de baixo.

      // comenta esse codigo financias
      financia: [33],
      financias: {
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
      // comenta esse codigo acima financias
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
      marketings: [72],
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
    loadanswers() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      console.log(companyId);

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statistics = res.data[0];
        });
    },
    logout() {
      this.$store.commit('setUser', null);
      this.$router.push({ name: 'auth' });
    },
    async valueChart() {
      let companyId = [];

      // Metodo pra adicionar os dados
      // no grafico vindo do banco de dados
      // ainda falta terminar a implemetação
      // pra mostras os dados.

      companyId = statistics;

      const statistics = await this.mxGetAnswerStatistics(companyId);
      (this.financia = [
        {
          name: '%',
          data: [this.parseInt(statistics.completePercentage)],
        },
      ]),
        (this.financias = {
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
        });
    },
  },
  mounted() {
    this.loadanswers();
    this.valueChart();
  },
};
</script>

<style scoped>
i {
  color: #000;
}
#texto1 {
  margin-left: 200px;
  margin-bottom: 20px;
}

#texto2 {
  margin-left: 200px;
}

#divNome {
  background-color: white;
}

li {
  list-style-type: none;
}
#statistics1 {
  margin-top: 90px;
  margin-left: 55px;
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

.container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
.container22 {
  margin-left: 170px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.column1 {
  margin-right: 20px;
  margin-left: 350px;
  background-color: #263238;
  width: 500px;
  height: 250px;
  display: flex;
}
.column2 {
  margin-left: 200px;
  background-color: #eceff1;
  width: 300px;
  height: 320px;
  display: flex;
}

.column4 {
  color: #000;
  margin-left: 350px;
  display: flex;
  margin-top: 20px;
}

.column5 {
  color: #000;
  margin-right: 470px;
  display: flex;
  margin-top: 20px;
}

.title {
  margin-left: 20px;
  color: #000;
  text-align: center;
}

.title5 {
  margin-left: 20px;
  color: #000;
}

.title6 {
  margin-left: 20px;
  margin-right: 50px;
  margin-top: 40px;
  color: white;
}

.textoMeio {
  margin-bottom: 100px;
  margin-top: 150px;
  text-align: center;
}

.textoMeio2 {
  color: white;
  margin-right: 30px;
  margin-top: 70px;
}

.title1 {
  margin-top: 40px;
  color: white;
}

.textoTitulo {
  margin-left: 20px;
  margin-bottom: 20px;
}

.container1 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container2 {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#boxAdd {
  background-color: gainsboro;
}
.box {
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  width: 300px;
  height: 320px;
  border-width: 2px;
  border-style: solid;
  background: white;
  border-radius: 5px;
  border-color: grey;
}
</style>
