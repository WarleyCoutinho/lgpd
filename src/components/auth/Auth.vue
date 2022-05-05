<template>
  <div class="auth-content">
    <div class="auth-modal" v-on:keyup.enter="signin">
      <img src="../../assets/Logotipo.svg" width="200" alt="Logo TCC" />
      <hr />
      <div class="auth-title">
        {{ showSignup ? 'Cadastro' : 'Login' }}
      </div>

      <input
        type="text"
        v-model="user.email"
        name="email"
        placeholder="E-mail"
      />
      <input
        type="password"
        v-model="user.password"
        name="password"
        placeholder="Senha"
      />

      <button @click="signin">Entrar</button>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from '@/global';
import axios from 'axios';
export default {
  name: 'Auth',
  data: function () {
    return {
      user: {},
      showSignup: false,
    };
  },
  methods: {
    signin() {
      axios
        .post(`${baseApiUrl}/signin`, this.user)
        .then((res) => {
          // locando o usuario logado ao local store
          this.$store.commit('setUser', res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: '/' });
        })
        .catch(showError);
    },
    signup() {
      axios
        .post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
        })
        .catch(showError);
    },
  },
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url(https://avaloon.com.br/images/logo-branca-com-nome-menor.png) no-repeat left; */
}
.auth-modal {
  background-color: #fff;
  width: 380px;
  padding: 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
}
.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #263238;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
}
.auth-modal input {
  border: 1px solid #263238;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
  border-radius: 2rem;
}
.auth-modal button {
  align-self: flex-end;
  color: #ffff;
  background-color: #263238;
  padding: 5px 15px;
  border: none;
  border-radius: 2rem;
}
.auth-modal a {
  margin-top: 35px;
  text-decoration: none;
}
.auth-modal hr {
  border: 0;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgb(15, 102, 4),
    rgba(120, 120, 120, 1),
    rgba(120, 120, 120, 0)
  );
}
</style>
