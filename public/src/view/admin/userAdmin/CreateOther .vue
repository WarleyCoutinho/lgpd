<template>
  <div class="container">
    <!-- <hr /> -->
    <b-form>
      <input id="user-id" type="hidden" v-model="user.userId" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              v-model="user.name"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome do Usuário..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              v-model="user.email"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o E-mail do Usuário..."
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
              required
              :readonly="mode === 'remove'"
              placeholder="Informe a Senha do Usuário..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="CPF:" label-for="user-confirm-password">
            <b-form-input
              id="user-cpf"
              type="cpf"
              v-model="user.cpf"
              required
              :readonly="mode === 'remove'"
              placeholder="informe seu cpf..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12">
          <b-button variant="primary" v-if="mode === 'save'" @click="save"
            >Salvar</b-button
          >
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
            >Excluir</b-button
          >
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
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
        <b-button
          variant="warning"
          @click="loadCreateOther(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="loadCreateOther(data.item, 'remove')"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import { request } from '@/config/services/request';
import axios from 'axios';
export default {
  name: 'CreateOther',
  data: function () {
    return {
      mode: 'save',
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
    loadCreateOthers() {
      const userId = this.user.userId;
      const url = `${baseApiUrl}/user/${userId}`;
      request()
        .get(url)
        .then((res) => {
          this.users = res.data.user;
        });
    },
    reset() {
      this.mode = 'save';
      this.user = {};
      this.loadCreateOthers();
    },
    save() {
      const method = this.user.userId ? 'put' : 'post';
      const userId = this.user.userId ? `/${this.user.userId}` : '';
      axios[method](`${baseApiUrl}/user/create-other${userId}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const userId = this.user.userId;
      axios
        .delete(`${baseApiUrl}/create-other/${userId}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadCreateOther(user, mode = 'save') {
      this.mode = mode;
      this.user = { ...user };
    },
  },
  mounted() {
    this.loadCreateOthers();
  },
};
</script>
