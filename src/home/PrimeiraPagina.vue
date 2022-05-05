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
          <img id="foto1" src="../assets/01.jpg" alt="48" />
          <div>
            <h2 class="textoMeio2">Sua empresa está 75% dentro da LGPD</h2>
            <h5><a href="/inicio" class="title6">Ver detalhes</a></h5>
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
    </b-row>
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
    <b-card>
      <div>
        <b-row>
          <div>
            <b-col md="12" sm="12" class="naohatestes">
              <div><h1>Não há testes recentes.</h1></div>
            </b-col>
          </div>
        </b-row>
      </div>
      <b-row>
        <div>
          <b-col md="12" sm="12" class="">
            <div>
              <p>
                Para iniciar o teste, primeiro adicione um departamento. Quando
                adicionar um departamento, poderá escolher iniciar o teste ou
                gerenciar outros departamentos.
              </p>
            </div>
          </b-col>
        </div>
      </b-row>
      <b-row>
        <div>
          <b-col md="12" sm="12" class="">
            <div><h1>Ir para Departamentos</h1></div>
          </b-col>
        </div>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import ApexCharts from 'vue-apexcharts';
export default {
  name: 'PrimeiraPagina',
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
      // series: [0],
      // chartOptions: {
      //   chart: {
      //     height: 20,
      //     type: 'radialBar',
      //   },
      //   plotOptions: {
      //     radialBar: {
      //       hollow: {
      //         size: '70%',
      //       },
      //     },
      //   },
      //   labels: ['0%'],
      // },
    };
  },
};
/* arrumar o style pra cada pagina hoje ta global na pagina inicio
    fazer o mesmo exemplo mais cada um na sua pagina 
    explo:
    <style scopde>
    adicionar os stilos aqui pra cada pagina
    </style>
*/
</script>

<style></style>
