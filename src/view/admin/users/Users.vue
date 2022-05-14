<template>
  <div class="container">
    <hr />
    <b-form>
      <input type="hidden" id="user-id" v-model="user.id" />
      <b-card>
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
                :readonly="mode === 'remove'"
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
      </b-card>
      <b-card>
        <b-row>
          <b-col md="6" sm="12">
            <b-form-group label="Empresa:" label-for="company-name">
              <b-form-input
                id="company-name"
                type="text"
                v-model="this.name"
                placeholder="Informe o nome da empresa"
              />
            </b-form-group>
          </b-col>
          <b-col md="6" sm="12">
            <b-form-group label="CNPJ:" label-for="company-cnpj">
              <b-form-input
                id="company-name"
                type="text"
                v-model="user.cnpj"
                placeholder="Informe o cnpj da empresa"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <b-row>
          <b-col md="4" sm="12">
            <b-form-group label="RUA:" label-for="company-address-street">
              <b-form-input
                id="company-street"
                type="text"
                v-model="user.street"
                placeholder="Informe o nome da rua"
              />
            </b-form-group>
          </b-col>
          <b-col md="4" sm="12">
            <b-form-group label="CEP:" label-for="company-address-zipCode">
              <b-form-input
                id="company-zipCode"
                type="text"
                v-model="user.zipCode"
                placeholder="Informe o cep"
              />
            </b-form-group>
          </b-col>
          <b-col md="4" sm="12">
            <b-form-group
              label="Bairro:"
              label-for="company-address-neighborhood"
            >
              <b-form-input
                id="company-neighborhood"
                type="text"
                v-model="user.neighborhood"
                placeholder="Informe seu bairro"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3" sm="12">
            <b-form-group
              label="N° Casa:"
              label-for="company-address-numberHouse"
            >
              <b-form-input
                id="company-numberHouse"
                type="text"
                v-model="user.numberHouse"
                placeholder="Informe o numero da casa"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group
              label="Complemento:"
              label-for="company-address-complemento"
            >
              <b-form-input
                id="company-complemento"
                type="text"
                v-model="user.complemento"
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
                v-model="user.referencePoint"
                placeholder="informe um ponto de referência"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group label="Cidade:" label-for="company-address-cityId">
              <b-form-select
                id="company-address-cityId"
                :options="cityId"
                v-model="user.cityId"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
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
    <hr />
    <b-table
      hover
      striped
      small
      sort-icon-left
      head-variant="dark"
      :items="users"
      :fields="fields"
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
  </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';

export default {
  name: 'Users',
  data: function () {
    return {
      mode: 'save',
      name: '',
      // cnpj: '',
      // street: '',
      // zipCode: '',
      // neighborhood: '',
      // numberHouse: '',
      // referencePoint: '',
      user: {},
      users: [],
      fields: [
        { key: 'id', label: '#', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'email', label: 'E-mail', sortable: true },
        { key: 'cpf', label: 'CPF', sortable: true },
        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/user`;
      axios.get(url).then((res) => {
        this.users = res.data;
      });
    },
    reset() {
      this.mode = 'save';
      this.user = {};
      this.loadUsers();
    },
    save() {
      const method = this.user.id ? 'put' : 'post';
      const id = this.user.id ? `/${this.user.id}` : '';
      axios[method](`${baseApiUrl}/user${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.user.id;
      axios
        .delete(`${baseApiUrl}/user/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadUser(user, mode = 'save') {
      this.mode = mode;
      this.user = { ...user };
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style></style>
