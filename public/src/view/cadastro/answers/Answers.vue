<template>
  <div class="container">
    <div v-show="displayForm">
      <b-form>
        <input type="hidden" v-model="answer.id" />
        <b-row>
          <b-col md="12" sm="12">
            <b-form-group
              label="1. O departamento possui processos de tratamento de dados?"
              v-slot="{ answer }"
            >
              <b-form-radio-group
                v-model="answers"
                :options="responses"
                required
                value-field="answer"
                text-field="answer"
                :aria-describedby="answer"
                name="answer"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col xs="12">
            <b-button variant="primary" v-if="mode === 'save'" @click="save">
              Salvar
            </b-button>
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">
              Excluir
            </b-button>
            <b-button class="ml-2" @click="reset"> Cancelar </b-button>
            <b-button
              variant="warning"
              class="ml-2"
              @click="loadanswers(), (displayForm = false)"
            >
              Listar
            </b-button>
          </b-col>
        </b-row>
      </b-form>
      <hr />
    </div>
    <div class="overflow" v-show="!displayForm">
      <b-row>
        <b-col md="12" lg="12" class="my-1">
          <b-form-group label-for="filterInput" class="mb-0">
            <b-input-group size="md">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Digite para pesquisar"
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''"
                  >Limpar</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-table
        hover
        striped
        small
        sort-icon-left
        head-variant="dark"
        :items="answers"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        :filterIncludedFields="filterOn"
        @filtered="onFiltered"
      >
        <template v-slot:cell(actions)="data">
          <b-button
            variant="warning"
            @click="loadanswer(data.item)"
            class="mr-2"
          >
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="loadanswer(data.item, 'remove')">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
      <hr />
      <b-row>
        <b-col md="5" sm="12">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="Primeiro"
            prev-text="Anterior"
            next-text="Próximo"
            last-text="Último"
            size="md"
          ></b-pagination>
        </b-col>
        <b-col md="5" sm="12">
          <b-form-group
            label="Qtd Linhas"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="3"
            label-align-sm="right"
            label-size="md"
            label-for="perPageSelect"
            class="mb-0"
          >
            <b-form-select
              v-model="perPage"
              id="perPageSelect"
              :options="pageOptions"
              size="md"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="2" sm="12" class="text-right">
          <b-button variant="primary" class="ml-2" @click="novo()">
            Nova Pergunta
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { showError, userKey } from '@/global';
import { request } from '@/config/services/request';
import { mapState } from 'vuex';

export default {
  name: 'answer',
  data: function () {
    return {
      perPage: 5,
      currentPage: 1,
      pageOptions: [5, 10, 15],
      filter: null,
      filterOn: [],
      mode: 'save',
      displayForm: true,
      answer: {},
      answers: [],
      answer_version: [],
      question_id: [],
      company_id: [],
      user_id: [],
      responses: [
        { answer: 'Sim', questionId: 1 },
        { answer: 'Não', questionId: 2 },
        { answer: 'Talvez', questionId: 3 },
      ],
      fields: [
        { key: 'id', label: '#' },
        {
          key: 'department',
          label: 'Departamento',
          sortable: true,
        },
        {
          key: 'questions.question',
          label: 'Questões',
        },
        {
          key: 'questions.answer',
          label: 'Respostas',
        },
        // { key: 'questions.id', label: 'Empresa', sortable: true },

        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  methods: {
    loadanswers() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      console.log(companyId);
      request()
        .get(`http://localhost:3000/answer/${companyId}`)
        .then((res) => {
          res.data.map((data) => {
            data.questions = data.questions[0];
            return data;
          });
          this.answers = res.data;
        });
    },

    reset() {
      this.mode = 'save';
      this.answer = {
        responses: [
          { answer: 'Sim', questionId: 1 },
          { answer: 'Não', questionId: 2 },
          { answer: 'Talvez', questionId: 3 },
          { answer: 'Sim', questionId: 4 },
        ],
      };
      this.loadanswers();
      this.loadcompany_id();
    },
    novo() {
      this.displayForm = true;
      this.loadcompany_id();
    },

    save() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      console.log(companyId);
      request()
        .post(`http://localhost:3000/answer/${companyId}`, this.answer)
        .then(() => {
          this.answer = {};
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch((err) => {
          window.console.log(err);
          showError(err);
        });
    },

    // remove() {
    //   const id = this.answer.id;
    //   axios
    //     .delete(`${baseApiUrl}/answer/${id}`)
    //     .then(() => {
    //       this.$toasted.global.defaultSuccess();
    //       this.reset();
    //     })
    //     .catch(showError);
    // },

    loadanswer(answer, mode = 'save') {
      this.mode = mode;
      this.displayForm = true;
      this.answer = { ...answer };
    },

    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  mounted() {
    this.reset();
    this.loadanswers();
  },
  computed: {
    rows() {
      return this.answers.length;
    },
    ...mapState(['user']),
  },
};
</script>

<style scoped>
.buttons {
  /* Buttons */

  position: absolute;
  width: 550px;
  height: 40px;
  left: 310px;
  top: 20px;
  padding: 10px;
  color: black;
  background-color: #e5e5e5;
  /* display: flex; */
}
.butoes {
  padding: 80px;
}
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
