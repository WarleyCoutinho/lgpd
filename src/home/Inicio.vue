<template>
  <div class="container">
    <hr class="hr" />
    <div id="texto1">
      <h2>Olá, {{ user.name }}</h2>
    </div>
    <div id="texto2">
      <h4>Situação atual</h4>
    </div>
    <b-row>
      <div id="container">
        <div class="column1">
          <img id="foto1" src="../assets/75.png" alt="48" />
          <div>
            <h2 class="textoMeio2">Sua empresa está 75% dentro da LGPD</h2>
            <h5><a href="/financas" class="title6">Ver detalhes</a></h5>
          </div>
        </div>
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
            <a href=""><h4 id="title">Ver detalhes</h4></a>
          </li>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import ApexCharts from 'vue-apexcharts';
export default {
  name: 'Inicio',
  // components: { apexchart: ApexCharts },
  computed: mapState(['user']),
  methods: {
    logout() {
      this.$store.commit('setUser', null);
      this.$router.push({ name: 'auth' });
    },
  },
  data: function () {
    return {
      // series: [75],
      // chartOptions: {
      //   chart: {
      //     height: 350,
      //     type: 'radialBar',
      //   },
      //   plotOptions: {
      //     radialBar: {
      //       hollow: {
      //         size: '70%',
      //       },
      //     },
      //   },
      //   labels: ['75%'],
      // },
      // //financias
      // financias: [48],
      // financia: {
      //   chart: {
      //     height: 350,
      //     type: 'radialBar',
      //   },
      //   plotOptions: {
      //     radialBar: {
      //       hollow: {
      //         size: '70%',
      //       },
      //     },
      //   },
      //   labels: [''],
      // },
      // // T.I
      // tis: [66],
      // ti: {
      //   chart: {
      //     height: 350,
      //     type: 'radialBar',
      //   },
      //   plotOptions: {
      //     radialBar: {
      //       hollow: {
      //         size: '70%',
      //       },
      //     },
      //   },
      //   labels: [''],
      // },
      // // Marketing
      // marketings: [72],
      // marketing: {
      //   chart: {
      //     height: 350,
      //     type: 'radialBar',
      //   },
      //   plotOptions: {
      //     radialBar: {
      //       hollow: {
      //         size: '70%',
      //       },
      //     },
      //   },
      //   labels: [''],
      // },
    };
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

.column1 {
  margin-right: 270px;
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

.title6 {
  margin-left: 20px;
  margin-right: 50px;
  margin-top: 40px;
  color: white;
}

.textoMeio {
  margin-left: 20px;
  margin-bottom: 30px;
}

.textoMeio2 {
  color: white;
  margin-right: 30px;
  margin-top: 20px;
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
