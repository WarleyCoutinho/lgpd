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
          <apexchart
            id="statisticsCompany"
            type="radialBar"
            height="220"
            :options="Company"
            :series="Companys"
          />
          <div>
            <h2 class="textoMeio2">
              Sua empresa <br />está
              {{ parseInt(statisticsCompany.completePercentage).toFixed(0) }} %
              dentro <br />da LGPD
            </h2>
            <div id="title66">
              <h5><a href="/inicio" class="title6">Ver detalhes</a></h5>
            </div>
          </div>
        </div>
        <!-- <div class="column2">
          <div></div>
        </div> -->
      </div>
    </b-row>
    <div id="container1">
      <ul>
        <b-row>
          <div>
            <h4 class="column4">Testes recentes</h4>
          </div>
          <div class="column5">
            <router-link to="/departamentos">
              <h4 class="column55">
                Ver tudo
                <i class="fa fa-arrow-right"> </i>
              </h4>
            </router-link>
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
              <router-link to="/departamentos">
                <b-button id="buttons" variant="Light" @click="save">
                  Ir para Departamentos
                </b-button>
              </router-link>
            </div>
          </b-col>
        </div>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { baseApiUrl, userKey } from '@/global';
import { request } from '@/config/services/request';
import ApexCharts from 'vue-apexcharts';
import { mapState } from 'vuex';
export default {
  name: 'PrimeiraPagina',
  components: { apexchart: ApexCharts },
  computed: mapState(['user']),
  data() {
    return {
      statisticsCompany: {},
      Company: {},
      companyData: 0,
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
          this.Company = res.data[0];
          this.companyData = res.data[0].completePercentage;

          (this.Companys = [parseInt(this.companyData.toFixed(0))]),
            (this.Company = {
              chart: {
                height: 250,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: '60%',
                    background: '#263238',
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
                    background: '#263238',
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
                      color: '#FFFFFF',
                      fontSize: '36px',
                      show: true,
                    },
                  },
                },
              },
              stroke: {
                lineCap: '',
              },
              colors: ['#FFFFFF'],
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
  },
};
</script>

<style scoped>
#texto1 {
  margin-left: 25px;
  margin-bottom: 20px;
}
#texto2 {
  margin-left: 25px;
}
.textoMeio2 {
  color: #ffffff;
  margin-right: 200px;
  margin-top: 80px;
}

#title66 {
  margin-top: 90px;
}

.title6 {
  margin-right: 50px;

  color: #ffffff;
}
#statisticsFinanceiro {
  margin-top: 10px;
  margin-left: 30px;
  width: 200px;
  height: 120px;
  color: #0a0a0a;
}
#statisticsCompany {
  margin-top: 50px;
  margin-left: 300px;
  width: 200px;
  height: 120px;
}
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
  width: 1100px;
  height: 350px;
  display: flex;
}
.column4 {
  margin-top: 40px;
  margin-left: 30px;
  color: #000;
  margin-right: 790px;
}
.column5 {
  color: #263238;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}
.column55 {
  margin-top: 25px;
  margin-left: 30px;
  color: #263238;
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

  text-align: center;

  /* Blue Grey 900 */

  color: #263238;
}
#buttons {
  margin-top: 5px;
}
#irDepartamentos {
  /* Auto layout */

  padding: 1px 4px;
  gap: 1px;

  height: 56px;
  left: 3px;

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
