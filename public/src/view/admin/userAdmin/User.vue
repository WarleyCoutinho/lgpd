<template>
  <div class="container">
    <!-- <hr /> -->
    <b-form>
      <input id="user-id" type="hidden" v-model="user.id" />
      <b-row>
        <b-col md="4" sm="12">
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
        <b-col md="4" sm="12">
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
        <b-col md="4" sm="12">
          <b-form-group label="Senha:" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              v-model="user.password"
              required
              placeholder="Informe a Senha do Usuário..."
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
      <!-- <b-table hover striped :items="users" :fields="fields"> -->
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
  name: 'User',
  data: function () {
    return {
      mode: 'save',
      user: {},
      users: [],
      fields: [
        { key: 'id', label: '#', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'email', label: 'E-mail', sortable: true },
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
