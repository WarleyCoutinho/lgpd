<template>
  <div class="usuario">
    <b-form>
      <input type="hidden" id="user-id" v-model="user.usuarioId" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              v-model="user.name"
              required
              :readonly="mode === 'remove'"
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
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o E-mail do Usuário"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-show="mode === 'save'">
        <b-col md="6" sm="12">
          <b-form-group label="Senha:" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              v-model="user.password"
              required
              placeholder="Informe a Senha do Usuário"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group
            label="Confirme a senha:"
            label-for="user-confirm-password"
          >
            <b-form-input
              id="user-confirm-password"
              type="password"
              v-model="user.confirmPassword"
              required
              placeholder="Confirme a senha do Usuário"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <b-form-group label="Nível:" label-for="user-nivel">
            <b-form-select
              v-if="mode === 'save'"
              id="user-nivel"
              :options="niveis"
              v-model="user.nivel"
            />
            <b-form-input
              v-else
              id="user-nivel"
              type="text"
              v-model="user.nivel"
              readonly
            />
          </b-form-group>
        </b-col>
        <!-- <b-col class="mt-3" md="4" sm="12">
          <b-form-group>
            <b-form-checkbox
              v-show="mode === 'save'"
              id="user-admin"
              v-model="user.admin"
              class="mt-3 mb-3"
            >
              Administrador?
            </b-form-checkbox>
          </b-form-group>
        </b-col> -->
      </b-row>
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
  name: 'Usuario',
  data: function () {
    return {
      mode: 'save',
      user: {},
      users: [],
      niveis: [
        { value: 1, text: 'Administrador' },
        { value: 2, text: 'Gerente' },
        { value: 3, text: 'Coordenador' },
        { value: 4, text: 'Analista' },
        { value: 5, text: 'Usuário Padrão' },
      ],
      fields: [
        { key: 'usuarioId', label: '#', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'email', label: 'E-mail', sortable: true },
        { key: 'planta', label: 'Planta Industrial', sortable: true },
        {
          key: 'nivel',
          label: 'Nível usuário',
          sortable: true,
          formatter: (value) =>
            value === 1
              ? 'Administrador'
              : value === 2
              ? 'Gerente'
              : value === 3
              ? 'Coordenador'
              : value === 4
              ? 'Analista'
              : 'Usuário Padrão',
        },
        // {
        //   key: 'admin',
        //   label: 'Administrador',
        //   sortable: true,
        //   formatter: (value) => (value ? 'Sim' : 'Não'),
        // },
        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/usuario`;
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
      const method = this.user.usuarioId ? 'put' : 'post';
      const id = this.user.usuarioId ? `/${this.user.usuarioId}` : '';
      delete this.user.planta;
      axios[method](`${baseApiUrl}/usuario${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.user.usuarioId;
      axios
        .delete(`${baseApiUrl}/usuario/${id}`)
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
