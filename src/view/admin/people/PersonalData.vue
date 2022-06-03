<template>
  <div class="container">
    <hr />
    <div v-show="displayForm">
      <b-form @submit.stop.prevent="onSubmit">
        <b-row>
          <b-col md="6" sm="12">
            <b-form-group>
              <label for=">Nome">Nome</label>
              <span style="color: red"> *</span>
              <b-form-input
                id="name"
                name="name"
                type="name"
                v-model="user.name"
                v-validate="{ required: true, min: 4 }"
                :state="validateState('name')"
                required
              />
              <b-form-invalid-feedback id="name">{{
                veeErrors.first('name')
              }}</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="6" sm="12">
            <label for=">E-mail">E-mail</label>
            <span style="color: red"> *</span>
            <b-form-input
              id="email"
              name="email"
              type="text"
              v-validate="{ required: true, min: 8 }"
              :state="validateState('email')"
              required
              v-model="user.email"
              placeholder="Informe o E-mail do Usuário"
            />
            <b-form-invalid-feedback id="email">{{
              veeErrors.first('email')
            }}</b-form-invalid-feedback>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6" sm="12">
            <label for=">Senha">Senha</label>
            <span style="color: red"> *</span>
            <b-form-input
              id="password"
              name="password"
              type="password"
              v-validate="{ required: true, min: 4 }"
              :state="validateState('password')"
              required
              v-model="user.password"
              placeholder="Informe a Senha do Usuário"
            />
            <b-form-invalid-feedback id="password">{{
              veeErrors.first('password')
            }}</b-form-invalid-feedback>
          </b-col>
          <b-col md="6" sm="12">
            <label for=">CPF">CPF</label>
            <span style="color: red"> *</span>

            <b-form-input
              id="cpf"
              name="cpf"
              type="cpf"
              v-validate="{ required: true, min: 4 }"
              :state="validateState('cpf')"
              required
              v-model="user.cpf"
              placeholder="Informe o cpf"
            />
            <b-form-invalid-feedback id="cpf">{{
              veeErrors.first('cpf')
            }}</b-form-invalid-feedback>
          </b-col>
        </b-row>
        <!-- <b-row>
          <b-col md="6" sm="12">
            <b-form-group label="Empresa:" label-for="company-name">
              <b-form-input
                id="company-name"
                type="text"
                v-model="company.name"
              />
            </b-form-group>
          </b-col>
          <b-col md="6" sm="12">
            <b-form-group label="CNPJ:" label-for="company-cnpj">
              <b-form-input
                id="company-cnpj"
                type="text"
                v-model="company.cnpj"
              />
            </b-form-group>
          </b-col>
        </b-row> -->
        <!-- <b-row>
          <b-col md="3" sm="12">
            <b-form-group label="RUA:" label-for="company-address-street">
              <b-form-input
                id="company-street"
                type="text"
                v-model="address.street"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group label="CEP:" label-for="company-address-zipCode">
              <b-form-input
                id="company-zipCode"
                type="text"
                v-model="address.zipCode"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group
              label="Bairro:"
              label-for="company-address-neighborhood"
            >
              <b-form-input
                id="company-neighborhood"
                type="text"
                v-model="address.neighborhood"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group
              label="N° Casa:"
              label-for="company-address-numberHouse"
            >
              <b-form-input
                id="company-numberHouse"
                type="text"
                v-model="address.numberHouse"
              />
            </b-form-group>
          </b-col>
        </b-row> -->
        <!-- <b-row>
          <b-col md="3" sm="12">
            <b-form-group
              label="Complemento:"
              label-for="company-address-complemento"
            >
              <b-form-input
                id="company-complemento"
                type="text"
                v-model="address.complement"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group
              label="Ponto de Referência:"
              label-for="company-address-referencePoint"
            >
              <b-form-input
                id="company-referencePoint"
                type="text"
                v-model="address.referencePoint"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-dropdown
              variant="outline-dark"
              class="m-md-4"
              :text="stateSelected.name || 'Escolha estado'"
            >
              <b-dropdown-item
                v-for="state in states"
                :key="state.id"
                @click="selectState(state)"
              >
                {{ state.name }}
              </b-dropdown-item>
            </b-dropdown>
          </b-col>

          <b-col md="3" sm="12">
            <b-dropdown
              variant="outline-dark"
              class="m-md-4"
              :text="citySelected.name || 'Escolha cidade'"
            >
              <b-dropdown-item
                v-for="city in cities"
                :key="city.id"
                @click="selectCity(city)"
              >
                {{ city.name }}
              </b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <hr /> -->
        <!-- <b-row>
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
        </b-row> -->
      </b-form>
      <!-- <hr /> -->
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
        :items="users"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        :filterIncludedFields="filterOn"
        @filtered="onFiltered"
      >
        <template v-slot:cell(actions)="data">
          <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="loadUser(data.item, 'remove')">
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
          <b-button variant="primary" class="ml-2" @click="displayForm = true">
            Nova Pessoa
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from '@/global';
import { request } from '@/config/services/request';

export default {
  name: 'CompanyRegistration',
  props: {
    stateId: {
      type: Number,
      default: 0,
    },
    cityId: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      perPage: 5,
      currentPage: 1,
      pageOptions: [5, 10, 15],
      filter: null,
      filterOn: [],
      mode: 'save',
      displayForm: true,
      user: {},
      users: [],
      states: [],
      stateSelected: {},
      citySelected: {},
      cities: [],
      company: {},
      address: [],
      fields: [
        { key: 'companyId', label: 'Empresa' },
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'E-mail' },
        { key: 'cpf', label: 'CPF' },
        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    resetForm() {
      this.CompanyRegistration = {
        name: null,
        email: null,
        password: null,
      };

      this.$nextTick(() => {
        this.$validator.reset();
      });
    },
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }

        // alert('Formulário enviado!');
      });
    },
    loadUsers() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const id = localStorageData.user.id;
      request()
        .get(`${baseApiUrl}/user/${id}`)
        .then((res) => {
          this.user = res.data;
          // console.log('User', this.user);
        });
    },
    getStates() {
      return request()
        .get(`${baseApiUrl}/address/states`)
        .then((res) => {
          this.states = res.data;
          // console.log('States', this.states);
        });
    },
    selectState(state) {
      this.stateSelected = state;
      this.citySelected = {};
      this.getCities();
    },

    getCities() {
      if (!this.stateSelected.id) {
        return false;
      }
      return request()
        .get(`${baseApiUrl}/address/states/${this.stateSelected.id}/cities`)
        .then((res) => {
          this.cities = res.data;

          // console.log('Cities', this.cities);
        });
    },
    selectCity(city) {
      this.citySelected = city;
      // console.log('Cidade', city);
    },
    reset() {
      this.mode = 'save';
      this.user = {};
      this.loadUsers();
      this.stateSelected = {};
      this.citySelected = {};
      this.getCities = {};
    },
    save() {
      const dataToSendUsers = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        cpf: this.user.cpf,
        company: {
          name: this.company.name,
          cnpj: this.company.cnpj,
          address: {
            street: this.address.street,
            zipCode: this.address.zipCode,
            neighborhood: this.address.neighborhood,
            numberHouse: this.address.numberHouse,
            complement: this.address.complement,
            referencePoint: this.address.referencePoint,
            cityId: this.citySelected.id,
          },
        },
      };
      request()
        .post(`${baseApiUrl}/user`, dataToSendUsers)
        .then((res) => {
          this.$toasted.global.defaultSuccess();
          this.reset();
          this.user = res.data;
        })
        .catch(showError);
    },
    remove() {
      const id = this.user.id;
      request()
        .delete(`${baseApiUrl}/user/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadUser(user, mode = 'save') {
      this.mode = mode;
      this.displayForm = true;
      this.user = { ...user };
    },

    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  mounted() {
    this.loadUsers();
    this.getStates().then(() => {
      if (this.stateId) {
        this.stateSelected = this.states.find((o) => o.id === this.stateId);
        this.getCities().then(() => {
          if (this.cityId) {
            this.citySelected = this.cities.find((o) => o.id === this.cityId);
          }
        });
      }
      // console.log('mounted');
    });
  },
  computed: {
    rows() {
      return this.users.length;
    },
  },
};
</script>

<style></style>
