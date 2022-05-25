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
          <img id="foto1" src="../assets/01.jpg" alt="48" />
          <div>
            <h2 class="textoMeio2">Sua empresa está 0% dentro da LGPD</h2>
            <h5><a href="/inicio" class="title6">Ver detalhes</a></h5>
          </div>
        </div>
        <div class="column2">
          <div></div>
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
            <h4 class="column5">Ver tudo <i class="fa fa-arrow-right"> </i></h4>
          </div>
        </b-row>
      </ul>
    </div>
    <b-card id="card">
      <div>
        <b-row>
          <div>
            <b-col md="12" sm="12" class="naohatestes">
              <div><h1>Não há testes recentes.</h1></div>
            </b-col>
          </div>
        </b-row>
      </div>
      <b-row id="card01">
        <div>
          <b-col md="12" sm="12" class="">
            <div id="divparagrafos">
              <p id="p1">
                Para iniciar o teste, primeiro adicione um departamento.
              </p>
              <p id="p2">
                Quando adicionar um departamento, poderá escolher iniciar o
                teste ou gerenciar outros departamentos.
              </p>
            </div>
          </b-col>
        </div>
      </b-row>
      <b-row>
        <div id="botaoDP">
          <b-col md="12" sm="12" class="">
            <div id="irDepartamentos">
              <h1 id="titulo">Ir para Departamentos</h1>
            </div>
          </b-col>
        </div>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'PrimeiraPagina',
  computed: mapState(['user']),
  methods: {
    logout() {
      this.$store.commit('setUser', null);
      this.$router.push({ name: 'auth' });
    },
  },
  data: function () {
    return {};
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

<style scoped>
#botaoDP {
  margin-top: 60px;
}
#container {
  margin-left: 38px;
}

#p1 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.column1 {
  background-color: #263238;
  width: 800px;
  height: 250px;
  display: flex;
}
.column4 {
  margin-top: 40px;
  margin-left: 30px;
  color: #000;
  margin-right: 790px;
}
.column5 {
  color: #000;
  margin-left: 20px;
  margin-top: 40px;
  text-align: end;
}
#card {
  width: 704px;
  height: 330px;
  left: 08px;
  top: 40px;

  /* H5 */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;

  /* Blue Grey 900 */

  color: #263238;
}
#card01 {
  width: 704px;
  height: 96px;
  left: 8px;
  top: 6px;

  /* H5 */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;

  /* Blue Grey 900 */

  color: #263238;
}
.naohatestes {
  width: 700px;
  height: 50px;
  left: 12px;
  top: 0.1px;

  /* H4 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Blue Grey 900 */

  color: #263238;
}
#irDepartamentos {
  /* Auto layout */

  justify-content: center;
  align-items: center;
  padding: 1px 4px;
  gap: 1px;

  height: 56px;
  left: 3px;
  top: 250px;

  /* Blue Grey 900 */

  border: 2px solid #263238;
  border-radius: 8px;
}
#titulo {
  width: 198px;
  height: 24px;
  margin-top: 12px;

  /* H5 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Blue Grey 900 */

  color: #263238;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
