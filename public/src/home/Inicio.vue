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
        <div class="column1">
          <!-- <img id="foto1" src="../assets/75.png" alt="48" /-->

          <b-row id="statistics">
            <section>
              <h1>{{ parseInt(statistics.completePercentage).toFixed(0) }}%</h1>
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
              {{ parseInt(statistics.completePercentage).toFixed(0) }}% dentro
              da LGPD
            </h2>
            <h5 id="title6">
              <a href="/financas"> <h5 id="verDetalhes">Ver detalhes</h5></a>
            </h5>
          </div>
        </div>
        <b-col> </b-col>
        <div class="column2">
          <div>
            <h5 id="textoTitulo">Duvidas frequentes</h5>
            <h2 class="textoMeio">Por que devo me preocupar com a LGPD?</h2>
            <a href="/" class="title5">Ver todas as perguntas</a>
          </div>
        </div>
      </div>
      <div id="container1">
        <ul>
          <b-row>
            <div>
              <h4 class="column4">Testes recentes</h4>
            </div>
            <div>
              <h4 class="column5">Ver tudo -></h4>
            </div>
          </b-row>
        </ul>
      </div>
    </b-row>
    <b-row>
      <div class="container2">
        <div class="box">
          <h3 id="title">Finanças</h3>
          <li>
            <img id="foto1" src="../assets/48.png" alt="48" />
            <a href="/financas"><h4 id="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 id="title">T.I</h3>
          <li>
            <img id="foto1" src="../assets/66.png" alt="48" />
            <a href="/ti"><h4 id="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 id="title">Marketing</h3>
          <li>
            <img id="foto1" src="../assets/72.png" alt="48" />
            <a href="/marketing"><h4 id="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 id="title">R.H.</h3>
          <li>
            <img id="foto1" src="../assets/89.png" alt="48" />
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

// import { mapState } from 'vuex';
// import ApexCharts from 'vue-apexcharts';
export default {
  name: 'Inicio',
  // components: { apexchart: ApexCharts },
  //computed: mapState(['user']),
  data() {
    return {
      user: JSON.parse(localStorage.getItem(userKey)),
      statistics: {},
      series: [],
      chartOptions: {},
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
      // let department = [];
      // let options = [];
      // let questionId = [];

      companyId = porcentagemStatistics;

      const porcentagemStatistics = await this.mxGetAnswerStatistics(
        companyId
        // department,
        // questionId,
        // options
      );
      console.log('porcentagemStatistics', this.mxGetAnswer);
      this.series = [
        {
          name: '%',
          data: companyId,
          // data: [75],
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
  },
  mounted() {
    this.loadanswers();
    // this.valueChart();
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
#statistics {
  margin-top: 100px;
  margin-left: 40px;
  width: 400px;
  height: 250px;
  color: #eceff1;
  border-radius: 32px;
}
.column1 {
  background-color: #263238;
  width: 500px;
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
  margin-top: 10px;
  color: #000;
  margin-right: 790px;
}

.column5 {
  color: #000;
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
  margin-top: 40px;
  color: white;
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.box {
  width: 280px;
  height: 320px;
  border-width: 2px;
  border-style: solid;
  background: white;
  border-radius: 5px;
  border-color: grey;
}
</style>
