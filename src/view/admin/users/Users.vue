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
  name: 'Users',
  data: function () {
    return {
      mode: 'save',
      user: {},
      // users: [],
    };
  },
  methods: {
    // loadUsers() {
    //   const localStorageData = JSON.parse(localStorage.getItem(userKey));
    //   const id = localStorageData.user.id;
    //   request()
    //     .get(`${baseApiUrl}/user/${id}`)
    //     .then((res) => {
    //       this.user = res.data;
    //       console.log('Usuarios', this.users);
    //     });
    // },
    reset() {
      this.mode = 'save';
      this.user = {};
      // this.loadUsers();
    },
    save() {
      // const localStorageData = JSON.parse(localStorage.getItem(userKey));
      // const id = localStorageData.user.id;
      // console.log(dataToSendUsers);
      // console.log(id);

      const dataToSendUsers = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        cpf: this.user.cpf,
      };

      request()
        .put(`${baseApiUrl}/user/create-other`, dataToSendUsers)
        // .put(`http://localhost:3000/user/create-other`, dataToSendUsers)
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
    // this.loadUsers();
  },
};
</script>

<style></style>
