<template>
  <div class="container">
    <hr class="hr" />
    <div v-show="displayForm">
      <b-col md="6" sm="12" class="seccão01">
        <div id="secao">Financias</div>
        <b-form>
          <input type="hidden" v-model="answer.id" />
          <b-row>
            <div id="Ellipse7">
              <b-dd-header></b-dd-header>
            </div>
          </b-row>
          <b-row>
            <div id="Ellipse6">
              <b-dd-header></b-dd-header>
            </div>
          </b-row>
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
          <b-row>
            <b-col md="12" sm="12">
              <b-form-group
                label="2. O(s) processo(s) utilizado(s)
                 por sua empresa possui certificação de algum órgão regulamentador?"
                v-slot="{ answer2 }"
              >
                <b-form-radio-group
                  v-model="answers2"
                  :options="responses2"
                  required
                  value-field="answer2"
                  text-field="answer2"
                  :aria-describedby="answer2"
                  name="answer2"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" sm="12">
              <b-form-group
                label="3. O departamento permite que o usuário atualize
                 ou remova suas informações pessoais de sua empresa?"
                v-slot="{ answer3 }"
              >
                <b-form-radio-group
                  v-model="answers3"
                  :options="responses3"
                  required
                  value-field="answer3"
                  text-field="answer3"
                  :aria-describedby="answer3"
                  name="answer3"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" sm="12">
              <b-form-group
                label="4. Um usuário teve seus dados vazados na internet e por isso decidiu 
                remover todos eles das plataformas que os coletam. Dentre as plataformas, 
                está a sua empresa, onde tais dados são tratados neste departamento. 
                Entre as ferramentas disponibilizadas, seria possível que tal usuário 
                revogue o acesso de sua empresa a tais dados?"
                v-slot="{ answer4 }"
              >
                <b-form-radio-group
                  v-model="answers4"
                  :options="responses4"
                  required
                  value-field="answer4"
                  text-field="answer4"
                  :aria-describedby="answer4"
                  name="answer4"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" sm="12">
              <b-form-group
                label="5. A segurança de dados é de suma importante para a integridade dos dados
                 coletados. Imagine uma situação em que sua empresa é alvo de um ataque cibernético,
                  onde dados dos usuários que estavam armazenados neste departamento estão em risco 
                  de serem expostos na internet. Olhando para este cenário, a sua empresa estaria 
                  capacitada com um plano de ação para este tipo de situação?"
                v-slot="{ answer5 }"
              >
                <b-form-radio-group
                  v-model="answers5"
                  :options="responses5"
                  required
                  value-field="answer5"
                  text-field="answer5"
                  :aria-describedby="answer5"
                  name="answer5"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col xs="12">
              <b-button
                class="buttons"
                variant="Light"
                v-if="mode === 'save'"
                @click="save"
              >
                CONCLUIR
              </b-button>
              <!-- <b-button
                variant="danger"
                v-if="mode === 'remove'"
                @click="remove"
              >
                Excluir
              </b-button> -->
              <!-- <b-button class="ml-2" @click="reset"> Cancelar </b-button> -->
              <!-- <b-button
                variant="warning"
                class="ml-2"
                @click="loadanswers(), (displayForm = false)"
              >
                Listar
              </b-button> -->
            </b-col>
          </b-row>
        </b-form>
      </b-col>
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
      answer2: {},
      answers2: [],
      question_id: [],
      company_id: [],
      responses: [
        { answer: 'Sim', questionId: 1 },
        { answer: 'Não', questionId: 2 },
        { answer: 'Talvez', questionId: 3 },
      ],
      responses2: [
        { answer2: 'Sim', questionId: 1 },
        { answer2: 'Não', questionId: 2 },
        { answer2: 'Talvez', questionId: 3 },
      ],
      responses3: [
        { answer3: 'Sim', questionId: 1 },
        { answer3: 'Não', questionId: 2 },
        { answer3: 'Talvez', questionId: 3 },
      ],
      responses4: [
        { answer4: 'Sim', questionId: 1 },
        { answer4: 'Não', questionId: 2 },
        { answer4: 'Talvez', questionId: 3 },
      ],
      responses5: [
        { answer5: 'Sim', questionId: 1 },
        { answer5: 'Não', questionId: 2 },
        { answer5: 'Talvez', questionId: 3 },
      ],
      fields: [
        { key: 'id', label: '#' },
        {
          key: 'depart',
          label: 'Departamento',
          sortable: true,
        },
        {
          key: 'question_id',
          label: 'Questões',
        },
        {
          key: 'question',
          label: 'Respostas',
        },
        { key: 'companyId', label: 'Empresa', sortable: true },

        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  methods: {
    loadanswers() {
      // const localStorageData = JSON.parse(localStorage.getItem(userKey));
      // const companyId = localStorageData.user.companyId;
      // console.log(companyId);
      request()
        .get(`http://localhost:3000/answer/${this.companyId}`, this.answer)
        .then((res) => {
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
      this.loadanswer_version();
      this.loadcompany_id();
    },
    novo() {
      this.displayForm = true;
      this.loadcompany_id();
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
    this.loadanswer_version();
    this.loadcompany_id();
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
  left: 10px;
  top: 20px;
  margin-bottom: 20px;
  color: black;
  background-color: #e5e5e5;

  /* H4 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  /* Blue Grey 900 */

  color: #263238;
}
#Ellipse6 {
  /* Ellipse 6 */

  width: 24px;
  height: 24px;
  left: 1656px;
  top: 299px;
  border-radius: 32px;
  margin-bottom: 20px;
  margin-left: 910px;

  /* Blue Grey 50 */

  background: #eceff1;
  /* Blue Grey 900 */

  border: 4px solid #263238;
}
#Ellipse7 {
  /* Ellipse 7 */

  width: 24px;
  height: 24px;
  left: 1656px;
  top: 355px;
  border-radius: 32px;
  margin-bottom: 20px;
  margin-left: 910px;

  /* Teal 300 */

  background: #4db6ac;
}
.color {
  margin-top: 10px;
  color: #000;
  margin-right: 500px;
  margin-left: 300px;
  background-color: var(--color-background-nav);
}
#secao {
  /* margin-left: 200px; */
  width: 559px;
  height: 64px;
  left: 680px;
  top: 188px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Blue Grey 900 */

  color: #263238;
}
.seccão01 {
  margin-top: 10px;
  color: #000;
  margin-right: 500px;
  margin-left: 300px;
  background-color: var(--color-background);
}
</style>
