<template>
    <div class="container">
        <hr class="hr" />
        <Loading v-if="showLoading" />
        <div id="texto1">
            <h2>Olá, {{ `${user.user.name}` }}</h2>
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
                            Sua empresa <br />está {{ parseInt(statisticsCompany.completePercentage).toFixed(0) }} %
                            dentro <br />da LGPD
                        </h2>
                        <div id="title66">
                            <h5><a href="/inicio" class="title6">Ver detalhes</a></h5>
                        </div>
                    </div>
                </div>
                <!-- 
        <div class="column2">
          <div></div>
        </div> -->
            </div>
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
        </b-row>
        <b-card id="card" v-if="parseInt(statisticsCompany.completePercentage) == 0">
            <div>
                <b-row>
                    <div>
                        <b-col md="12" sm="12" class="naohatestes">
                            <div><h1>Não há testes recentes.</h1></div>
                        </b-col>
                    </div>
                </b-row>
            </div>
            <!-- <b-row id="card01">
                <div>
                    <b-col md="12" sm="12" class="">
                        <div id="divparagrafos">
                            <p id="p1">Para iniciar o teste, primeiro adicione um departamento.</p>
                            <p id="p2">
                                Quando adicionar um departamento, poderá escolher iniciar o teste ou gerenciar outros
                                departamentos.
                            </p>
                        </div>
                    </b-col>
                </div>
            </b-row> -->
            <b-row>
                <div id="botaoDP">
                    <b-col md="12" sm="12" class="">
                        <div id="irDepartamentos">
                            <router-link to="/departamentos">
                                <b-button id="buttons" variant="Light" @click="save"> Ir para Departamentos </b-button>
                            </router-link>
                        </div>
                    </b-col>
                </div>
            </b-row>
        </b-card>
        <div id="divSurpresa"></div>
        <b-row>
            <div class="container2">
                <b-row>
                    <div class="box" v-if="parseInt(this.financesData) !== 0">
                        <h3 class="title1">Finanças</h3>

                        <apexchart
                            id="statisticsFinanceiro"
                            type="radialBar"
                            height="220"
                            :options="Financeiro"
                            :series="Financeiros"
                        />

                        <a href="/financas"><h4 class="title">Ver detalhes</h4></a>
                    </div>
                    <div class="box" v-if="parseInt(this.tiData) !== 0">
                        <h3 class="title1">TI</h3>

                        <apexchart id="statisticsTI" type="radialBar" height="220" :options="Ti" :series="Tis" />
                        <a href="/ti"><h4 class="title">Ver detalhes</h4></a>
                    </div>

                    <div class="box" v-if="parseInt(this.marketingData) !== 0">
                        <h3 class="title1">Marketing</h3>

                        <apexchart
                            id="statisticsMarketing"
                            type="radialBar"
                            height="220"
                            :options="Marketing"
                            :series="Marketings"
                        />
                        <a href="/marketing"><h4 class="title">Ver detalhes</h4></a>
                    </div>
                    <div class="box" v-if="parseInt(this.rhData) !== 0">
                        <h3 class="title1">RH</h3>

                        <apexchart id="statisticsRH" type="radialBar" height="220" :options="RH" :series="RHS" />
                        <a href="/rh"><h4 class="title">Ver detalhes</h4></a>
                    </div>
                </b-row>
            </div>
        </b-row>
    </div>
</template>

<script>
import { baseApiUrl, userKey } from "@/global";
import { request } from "@/config/services/request";
import Loading from "../components/template/Loading";
import { mapState } from "vuex";
import ApexCharts from "vue-apexcharts";
export default {
    name: "Inicio",
    components: { apexchart: ApexCharts, Loading },
    computed: mapState(["user"]),
    data() {
        return {
            showLoading: false,
            statisticsCompany: {},
            Company: {},
            Companys: [],
            companyData: 0,
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
                    this.Company = res.data[0];
                    this.companyData = res.data[0].completePercentage;

                    (this.Companys = [`${parseInt(this.companyData.toFixed(0))}`]),
                        (this.Company = {
                            chart: {
                                height: 250,
                                type: "radialBar",
                            },
                            plotOptions: {
                                radialBar: {
                                    hollow: {
                                        margin: 0,
                                        size: "60%",
                                        background: "#263238",
                                        image: undefined,
                                        imageOffsetX: 0,
                                        imageOffsetY: 0,
                                        position: "front",
                                        dropShadow: {
                                            enabled: false,
                                            top: 3,
                                            left: 0,
                                            blur: 4,
                                            opacity: 0.24,
                                        },
                                    },
                                    track: {
                                        background: "#263238",
                                        strokeWidth: "67%",
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
                                            color: "#FFFFFF",
                                            fontSize: "17px",
                                            fontWeight: "bold",
                                        },
                                        value: {
                                            formatter: function (val) {
                                                return parseInt(val);
                                            },
                                            color: "#FFFFFF",
                                            fontSize: "36px",
                                            show: true,
                                        },
                                    },
                                },
                            },
                            stroke: {
                                lineCap: "",
                            },
                            colors: ["#FFFFFF"],
                            labels: [""],
                        });
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
                                type: "radialBar",
                            },
                            plotOptions: {
                                radialBar: {
                                    hollow: {
                                        margin: 0,
                                        size: "60%",
                                        background: "#FFFFFF",
                                        image: undefined,
                                        imageOffsetX: 0,
                                        imageOffsetY: 0,
                                        position: "front",
                                        dropShadow: {
                                            enabled: false,
                                            top: 3,
                                            left: 0,
                                            blur: 4,
                                            opacity: 0.24,
                                        },
                                    },
                                    track: {
                                        background: "#FFFFFF",
                                        strokeWidth: "67%",
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
                                            color: "#FFFFFF",
                                            fontSize: "17px",
                                            fontWeight: "bold",
                                        },
                                        value: {
                                            formatter: function (val) {
                                                return parseInt(val);
                                            },
                                            color: "#263238",
                                            fontSize: "36px",
                                            show: true,
                                        },
                                    },
                                },
                            },
                            stroke: {
                                lineCap: "",
                            },
                            colors: ["#263238"],
                            labels: [""],
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
                                type: "radialBar",
                            },
                            plotOptions: {
                                radialBar: {
                                    hollow: {
                                        margin: 0,
                                        size: "60%",
                                        background: "#FFFFFF",
                                        image: undefined,
                                        imageOffsetX: 0,
                                        imageOffsetY: 0,
                                        position: "front",
                                        dropShadow: {
                                            enabled: false,
                                            top: 3,
                                            left: 0,
                                            blur: 4,
                                            opacity: 0.24,
                                        },
                                    },
                                    track: {
                                        background: "#FFFFFF",
                                        strokeWidth: "67%",
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
                                            color: "#FFFFFF",
                                            fontSize: "17px",
                                            fontWeight: "bold",
                                        },
                                        value: {
                                            formatter: function (val) {
                                                return parseInt(val);
                                            },
                                            color: "#263238",
                                            fontSize: "36px",
                                            show: true,
                                        },
                                    },
                                },
                            },
                            stroke: {
                                lineCap: "",
                            },
                            colors: ["#263238"],
                            labels: [""],
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
                                type: "radialBar",
                            },
                            plotOptions: {
                                radialBar: {
                                    hollow: {
                                        margin: 0,
                                        size: "60%",
                                        background: "#FFFFFF",
                                        image: undefined,
                                        imageOffsetX: 0,
                                        imageOffsetY: 0,
                                        position: "front",
                                        dropShadow: {
                                            enabled: false,
                                            top: 3,
                                            left: 0,
                                            blur: 4,
                                            opacity: 0.24,
                                        },
                                    },
                                    track: {
                                        background: "#FFFFFF",
                                        strokeWidth: "67%",
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
                                            color: "#FFFFFF",
                                            fontSize: "17px",
                                            fontWeight: "bold",
                                        },
                                        value: {
                                            formatter: function (val) {
                                                return parseInt(val);
                                            },
                                            color: "#263238",
                                            fontSize: "36px",
                                            show: true,
                                        },
                                    },
                                },
                            },
                            stroke: {
                                lineCap: "",
                            },
                            colors: ["#263238"],
                            labels: [""],
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
                                type: "radialBar",
                            },
                            plotOptions: {
                                radialBar: {
                                    hollow: {
                                        margin: 0,
                                        size: "60%",
                                        background: "#FFFFFF",
                                        image: undefined,
                                        imageOffsetX: 0,
                                        imageOffsetY: 0,
                                        position: "front",
                                        dropShadow: {
                                            enabled: false,
                                            top: 3,
                                            left: 0,
                                            blur: 4,
                                            opacity: 0.24,
                                        },
                                    },
                                    track: {
                                        background: "#FFFFFF",
                                        strokeWidth: "67%",
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
                                            color: "#FFFFFF",
                                            fontSize: "17px",
                                            fontWeight: "bold",
                                        },
                                        value: {
                                            formatter: function (val) {
                                                return parseInt(val);
                                            },
                                            color: "#263238",
                                            fontSize: "36px",
                                            show: true,
                                        },
                                    },
                                },
                            },
                            stroke: {
                                lineCap: "",
                            },
                            colors: ["#263238"],
                            labels: [""],
                        });
                });
        },
        logout() {
            this.$store.commit("setUser", null);
            this.$router.push({ name: "login" });
        },
    },
    async loadReport() {
        this.showLoading = true;
        this.showLoading = false;
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
#botaoDP {
    margin-top: 60px;
}
.naohatestes {
    /* para voltar normal comentar esse o margin-top e descomentar o codigo do card na linha 65 */
    margin-top: 55px;
    width: 700px;
    height: 50px;
    left: 12px;
    top: 0.1px;

    /* H4 (Bold) */

    font-family: "Inter";
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
#texto1 {
    margin-left: 25px;
    margin-bottom: 20px;
}
#texto2 {
    margin-left: 25px;
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
    margin-left: 30px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
}
.box {
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
    width: 1245px;
    height: 315px;
    border-width: 2px;
    border-style: solid;
    background: #ffffff;
    border-radius: 5px;
    border-color: grey;
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
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
}
.column55 {
    margin-top: 35px;
    margin-left: 30px;
    color: #263238;
}
#card {
    width: 1100px;
    height: 350px;
    left: 08px;
    top: 40px;

    /* H5 */

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    text-align: center;

    /* Blue Grey 900 */

    color: #263238;
}

#divSurpresa {
    height: 100px;
    width: 100px;
}
#card01 {
    width: 704px;
    height: 96px;
    left: 8px;
    top: 6px;

    /* H5 */

    font-family: "Inter";
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
    /* Não há testes recentes. */
    width: 500px;
    height: 50px;
    left: 12px;
    top: 0.1px;
    /* H4 (Bold) */
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */

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

    font-family: "Inter";
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
