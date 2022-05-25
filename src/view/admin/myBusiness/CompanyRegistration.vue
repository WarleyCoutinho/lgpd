<template>
  <div class="container">
    <hr />
    <b-form>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              v-model="user.name"
              placeholder="Informe o Nome do Usuário"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              v-model="user.email"
              placeholder="Informe o E-mail do Usuário"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Senha:" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              v-model="user.password"
              placeholder="Informe a Senha do Usuário"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="CPF:" label-for="user-confirm-password">
            <b-form-input
              id="user-cpf"
              type="cpf"
              v-model="user.cpf"
              placeholder="Informe seu cpf"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Empresa:" label-for="company-name">
            <b-form-input
              id="company-name"
              type="text"
              v-model="company.name"
              placeholder="Informe o nome da empresa"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="CNPJ:" label-for="company-cnpj">
            <b-form-input
              id="company-cnpj"
              type="text"
              v-model="company.cnpj"
              placeholder="Informe o cnpj da empresa"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="12">
          <b-form-group label="RUA:" label-for="company-address-street">
            <b-form-input
              id="company-street"
              type="text"
              v-model="address.street"
              placeholder="Informe o nome da rua"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group label="CEP:" label-for="company-address-zipCode">
            <b-form-input
              id="company-zipCode"
              type="text"
              v-model="address.zipCode"
              placeholder="Informe o cep"
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
              placeholder="Informe seu bairro"
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
              placeholder="Informe o numero da casa"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="12">
          <b-form-group
            label="Complemento:"
            label-for="company-address-complemento"
          >
            <b-form-input
              id="company-complemento"
              type="text"
              v-model="address.complement"
              placeholder="Complemento"
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
              placeholder="informe um ponto de referência"
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
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
// import { baseApiUrl, showError, userKey } from '@/global';
import { baseApiUrl, showError } from '@/global';
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
      mode: 'save',
      user: {},
      users: [],
      states: [],
      stateSelected: {},
      citySelected: {},
      cities: [],
      company: {},
      address: {},
    };
  },
  methods: {
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

          console.log('Cities', this.cities);
        });
    },
    selectCity(city) {
      this.citySelected = city;
      // console.log('Cidade', city);
    },
    reset() {
      this.mode = 'save';
      this.user = {};
      this.stateSelected = {};
      this.citySelected = {};
      this.getCities = {};
    },

    save() {
      // const localStorageData = JSON.parse(localStorage.getItem(userKey));
      // const id = localStorageData.user.id;
      // console.log(id);
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

    loadUser(user, mode = 'save') {
      this.mode = mode;
      this.user = { ...user };
    },
  },
  mounted() {
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
};
</script>

<style scoped></style>
