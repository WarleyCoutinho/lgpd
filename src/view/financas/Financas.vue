<template>
  <div class="container">
    <hr class="hr" />

    <div>
      <b-row>
        <b-card>
          <b-col md="6" sm="12" class="color1">
            <div class="secao">Finanças</div>

            <div>
              <b-card-text>
                1. Esta é uma questão para o usuário sobre algum aspecto do
                sistema em relação à LGPD, entendeu?
              </b-card-text>
              <div>
                <b-form-group label="" v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Sim"
                    >Sim</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Não"
                    >Não</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Talves"
                    >Talves</b-form-radio
                  >
                </b-form-group>

                <div class="mt-3">
                  Selected: <strong>{{ selected }}</strong>
                </div>
              </div>
            </div>
            <div>
              <b-card-text>
                2. Esta é uma questão para o usuário sobre algum aspecto do
                sistema em relação à LGPD, entendeu?
              </b-card-text>
              <div>
                <b-form-group label="" v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Sim"
                    >Sim</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Não"
                    >Não</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Talves"
                    >Talves</b-form-radio
                  >
                </b-form-group>

                <div class="mt-3">
                  Selected: <strong>{{ selected }}</strong>
                </div>
              </div>
            </div>
          </b-col>
        </b-card>
      </b-row>
    </div>

    <div>
      <b-row>
        <b-card>
          <b-col md="6" sm="12" class="color">
            <div class="secao">Finanças</div>

            <div>
              <b-card-text>
                1. Esta é uma questão para o usuário sobre algum aspecto do
                sistema em relação à LGPD, entendeu?
              </b-card-text>
              <div>
                <b-form-group label="" v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Sim"
                    >Sim</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Não"
                    >Não</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Talves"
                    >Talves</b-form-radio
                  >
                </b-form-group>

                <div class="mt-3">
                  Selected: <strong>{{ selected }}</strong>
                </div>
              </div>
            </div>
            <div>
              <b-card-text>
                2. Esta é uma questão para o usuário sobre algum aspecto do
                sistema em relação à LGPD, entendeu?
              </b-card-text>
              <div>
                <b-form-group label="" v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Sim"
                    >Sim</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Não"
                    >Não</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Talves"
                    >Talves</b-form-radio
                  >
                </b-form-group>

                <div class="mt-3">
                  Selected: <strong>{{ selected }}</strong>
                </div>
              </div>
            </div>
          </b-col>
        </b-card>
      </b-row>
    </div>
  </div>
</template>
<script>
// import { baseApiUrl, showError } from '@/global';
// import axios from 'axios';
// import { mapState } from 'vuex';
// import { VueEditor } from 'vue2-editor';

export default {
  name: 'Financas',
  // components: { VueEditor },
  data: function () {
    return {
      selected: '',
      // mode: 'save',
      // perPage: 5,
      // currentPage: 1,
      // pageOptions: [5, 10, 15],
      // filter: null,
      // filterOn: [],
      // displayForm: true,
      // pessoa: {},
      // pessoas: [],
      // // beneficio: {},
      // // beneficios: [],
      // fields: [
      //   { key: 'pessoaId', label: '#' },
      //   { key: 'name', label: 'Nome', sortable: true },
      //   { key: 'sexo', label: 'Sexo', sortable: true },
      //   { key: 'dtNascimento', label: 'Data de Nascimento', sortable: true },
      //   { key: 'cpf', label: 'CPF', sortable: true },
      //   { key: 'whatsapp', label: 'Whastsapp', sortable: true },
      //   { key: 'actions', label: 'Ações' },
      // ],
    };
  },
  // methods: {
  //   loadPessoas() {
  //     const url = `${baseApiUrl}/pessoas`;

  //     axios
  //       .get(url)
  //       .then((res) => {
  //         this.pessoas = res.data;
  //       })
  //       .map((item) => {
  //         item.dataNascimentoFormatted = this.$moment(item.dtNascimento).format(
  //           'DD/MM/YYYY'
  //         );

  //         return item;
  //       })
  //       .sort((a, b) => {
  //         if (a.dtNascimento > b.dtNascimento) return -1;
  //         if (a.dtNascimento < b.dtNascimento) return 1;

  //         return 0;
  //       });
  //   },
  //   reset() {
  //     this.mode = 'save';
  //     this.pessoa = {};
  //     this.loadPessoas();
  //   },
  //   save() {
  //     const method = this.pessoa.pessoaId ? 'put' : 'post';
  //     const id = this.pessoa.pessoaId ? `/${this.pessoa.pessoaId}` : '';
  //     axios[method](`${baseApiUrl}/pessoas${id}`, this.pessoa)
  //       .then(() => {
  //         this.$toasted.global.defaultSuccess();
  //         this.reset();
  //       })
  //       // .catch((err) => {
  //       //   // window.console.log(err);
  //       //   showError(err);
  //       // });
  //       .catch(showError);
  //   },
  //   remove() {
  //     const id = this.pessoa.pessoaId;
  //     axios
  //       .delete(`${baseApiUrl}/pessoas/${id}`)
  //       .then(() => {
  //         this.$toasted.global.defaultSuccess();
  //         this.reset();
  //       })
  //       .catch(showError);
  //   },
  //   loadPessoa(pessoa, mode = 'save') {
  //     this.mode = mode;
  //     this.displayForm = true;
  //     this.pessoa = { ...pessoa };
  //     this.pessoa.dtNascimento = this.pessoa.dtNascimento.split('T')[0];
  //   },
  //   // loadBeneficios() {
  //   //   const url = `${baseApiUrl}/beneficios`;
  //   //   axios.get(url).then((res) => {
  //   //     this.beneficios = res.data.map((beneficio) => {
  //   //       return { value: beneficio.id, text: beneficio.path };
  //   //     });
  //   //   });
  //   // },

  //   onFiltered(filteredIntems) {
  //     this.totalRows = filteredIntems.length;
  //     this.currentPage = 1;
  //   },
  // },
  // mounted() {
  //   this.loadPessoas();
  //   // this.loadBeneficios();
  // },
  // computed: {
  //   rows() {
  //     return this.pessoas.length;
  //   },
  //   ...mapState(['user']),
  // },
};
</script>

<style scoped>
.color {
  margin-top: 10px;
  color: #000;
  margin-right: 500px;
  margin-left: 300px;
  background-color: var(--color-background-nav);
}
.color1 {
  margin-top: 10px;
  color: #000;
  margin-right: 500px;
  margin-left: 300px;
  background-color: var(--color-background);
}
</style>
