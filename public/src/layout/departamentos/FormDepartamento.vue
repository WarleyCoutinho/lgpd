<template>
  <div>
    <hr class="hr" />
    <div class="auth-modal">
      <b-form-group
        label="Nome do departamento:"
        label-for="nome-do-departamento"
      >
        <input v-model="departamento" type="text" placeholder="Finanças" />
      </b-form-group>
      <b-form-group label="Responsável:" label-for="responsável">
        <input
          v-model="name"
          name="email"
          type="text"
          placeholder="Mia Ribeiro"
        />
      </b-form-group>

      <button @click="signin">Salvar</button>
    </div>
  </div>
</template>

<script>
// import { showError, userKey } from '@/global';
// import axios from 'axios';
// import { request } from '../../services/request';

export default {
  name: 'Login',
  // data: function () {
  //   return {
  //     showSignup: false,
  //     user: {},
  //   };
  // },
  // methods: {
  //   signin() {
  //     request()
  //       .post('/login', this.user)
  //       .then((res) => {
  //         this.$store.commit('setUser', res.data);
  //         localStorage.setItem('auth-token', res.data.token);
  //         localStorage.setItem(userKey, JSON.stringify(res.data));
  //         this.$router.push({ path: '/' });
  //       })
  //       .catch(showError);
  //   },
  //   signup() {
  //     request()
  //       .post('/login', this.user)
  //       .then(() => {
  //         this.$toasted.global.defaultSuccess();
  //         this.user = {};
  //         this.showSignup = false;
  //       })
  //       .catch(showError);
  //   },
  // },
};
</script>

<style scoped>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-modal {
  background-color: #fff;
  width: 380px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-modal input {
  border: 1px solid #263238;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}
.modal button {
  align-self: flex-end;
  color: #ffff;
  background-color: #263238;
  padding: 5px 15px;
  border: none;
}
</style>
