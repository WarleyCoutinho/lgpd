<template>
  <div class="container">
    <div v-show="displayForm">
      <b-form>
        <b-card header="Dados pessoais" header-tag="h4">
          <input type="hidden" v-model="pessoa.id" />
          <b-row>
            <b-col md="4" sm="12">
              <b-form-group label="Nome:" label-for="pessoa-name">
                <b-form-input
                  id="pessoa-name"
                  type="text"
                  v-model="pessoa.name"
                  :readonly="mode === 'remove'"
                  required
                  placeholder="Informe Nome"
                />
              </b-form-group>
            </b-col>
            <b-col md="4" sm="12">
              <b-form-group label="Sexo:" label-for="pessoa-sexo">
                <b-form-input
                  id="pessoa-sexo"
                  type="text"
                  v-model="pessoa.sexo"
                  :readonly="mode === 'remove'"
                  required
                  placeholder="Informe o sexo"
                />
              </b-form-group>
            </b-col>
            <b-col md="4" sm="12">
              <b-form-group label="CPF:" label-for="pessoa-cpf">
                <b-form-input
                  id="pessoa-cpf"
                  type="text"
                  v-model="pessoa.cpf"
                  :readonly="mode === 'remove'"
                  required
                  placeholder="Informe cpf"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="4" sm="12">
              <b-form-group label="E-mail:" label-for="pessoa-email">
                <b-form-input
                  id="pessoa-email"
                  type="text"
                  v-model="pessoa.email"
                  :readonly="mode === 'remove'"
                  placeholder=""
                />
              </b-form-group>
            </b-col>
            <b-col md="4" sm="12">
              <b-form-group
                label="Data de Nascimento:"
                label-for="data-nascimento-id"
              >
                <b-form-datepicker
                  id="pessoa-dtNascimento"
                  v-model="pessoa.dtNascimento"
                  required
                  hide-header
                  dark
                  placeholder=""
                  :date-format-options="{
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  }"
                ></b-form-datepicker>
              </b-form-group>
            </b-col>
            <b-col md="4" sm="12">
              <b-form-group
                label="Naturalidade:"
                label-for="pessoa-naturalidade"
              >
                <b-form-input
                  id="pessoa-naturalidade"
                  type="text"
                  v-model="pessoa.naturalidade"
                  :readonly="mode === 'remove'"
                  required
                  placeholder="Informe a sua Naturalidade"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" sm="12">
              <b-form-group
                v-if="mode === 'save'"
                label="Beneficio:"
                label-for="pessoa-categoryId"
                required
              >
                <b-form-select
                  id="pessoa-categoryId"
                  :options="categories"
                  v-model="pessoa.categoryId"
                />
              </b-form-group>
            </b-col>
            <b-col md="6" sm="12">
              <b-form-group
                v-if="mode === 'save'"
                label="Atendente:"
                label-for="pessoa-userId"
                required
              >
                <b-form-select
                  id="pessoa-userId"
                  :options="users"
                  v-model="pessoa.userId"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
        <b-card header="Observações" header-tag="h4">
          <b-row>
            <b-col md="12" sm="12">
              <b-form-group
                v-if="mode === 'save'"
                label="Conteúdo"
                label-for="pessoa-content"
              >
                <VueEditor
                  v-model="pessoa.content"
                  placeholder="Informe o Conteúdo do Beneficiario..."
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
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
              @click="displayForm = false"
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
        <b-col md="12" lg="12" class="my-2">
          <b-form-group label-for="filterInput" class="mb-2">
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
        :items="pessoas"
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
            @click="loadPessoa(data.item)"
            class="mr-2"
          >
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="loadPessoa(data.item, 'remove')">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
    </div>
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
        <b-button variant="primary" class="ml-2" @click="displayForm = true">
          Novo Beneficiario
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';
import { VueEditor } from 'vue2-editor';
export default {
  name: 'Pessoa',
  components: { VueEditor },
  data: function () {
    return {
      perPage: 5,
      currentPage: 1,
      pageOptions: [5, 10, 15],
      filter: null,
      filterOn: [],
      displayForm: true,
      mode: 'save',
      pessoa: {},
      pessoas: [],
      fields: [
        { key: 'id', label: '#' },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'sexo', label: 'sexo', sortable: true },
        { key: 'email', label: 'email', sortable: true },
        { key: 'cpf', label: 'cpf', sortable: true },
        { key: 'dtNascimento', label: 'Data de Nascimento', sortable: true },
        { key: 'naturalidade', label: 'Naturalidade', sortable: true },
        { key: 'content', label: 'Observaçoes', sortable: true },
        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  methods: {
    loadPessoas() {
      const url = `${baseApiUrl}/pessoas`;
      axios.get(url).then((res) => {
        this.pessoas = res.data;
      });
    },
    reset() {
      this.mode = 'save';
      this.pessoa = {};
      this.loadPessoas();
    },
    save() {
      const method = this.pessoa.id ? 'put' : 'post';
      const id = this.pessoa.id ? `/${this.pessoa.id}` : '';
      axios[method](`${baseApiUrl}/pessoas${id}`, this.pessoa)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.pessoa.id;
      axios
        .delete(`${baseApiUrl}/pessoas/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadPessoa(pessoa, mode = 'save') {
      this.mode = mode;
      this.displayForm = true;
      this.pessoa = { ...pessoa };
    },
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then((res) => {
        this.categories = res.data.map((category) => {
          return { value: category.id, text: category.path };
        });
      });
    },
    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data.map((user) => {
          return { value: user.id, text: `${user.name} - ${user.email}` };
        });
      });
    },
    onFiltered(filteredIntems) {
      this.totalRows = filteredIntems.length;
      this.currentPage = 1;
    },
  },
  mounted() {
    this.loadPessoas();
    this.loadUsers();
    this.loadCategories();
  },
  computed: {
    rows() {
      return this.pessoa.length;
    },
  },
};
</script>

<style></style>
