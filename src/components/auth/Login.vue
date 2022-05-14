<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="../../assets/Logotipo.svg" width="200" alt="Logo TCC" />
      <hr />
      <div class="auth-title">{{ showSignup ? 'Cadastro' : 'Login' }}</div>

      <input
        v-if="showSignup"
        v-model="user.name"
        type="text"
        placeholder="Nome"
      />
      <input
        v-model="user.email"
        name="email"
        type="text"
        placeholder="E-mail"
      />
      <input
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Senha"
      />
      <input
        v-if="showSignup"
        v-model="user.cpf"
        type="text"
        placeholder="CPF"
      />

      <button v-if="showSignup" @click="signup">Registrar</button>
      <button v-else @click="signin">Entrar</button>

      <!-- <a href @click.prevent="showSignup = !showSignup">
        <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
        <span v-else>Não tem cadastro? Registre-se aqui!</span>
      </a> -->
    </div>
  </div>
</template>

<script>
// import { showError, userKey } from '@/global';
import { showError, userKey } from '@/global';
// import axios from 'axios';
import { request } from '@/config/services/request';

export default {
  name: 'Login',
  data: function () {
    return {
      showSignup: false,
      user: {},
    };
  },
  methods: {
    signin() {
      // axios
      //   .post(`${baseApiUrl}/login`, this.user)
      request()
        .post(`http://localhost:3000/login`, this.user)
        .then((res) => {
          this.$store.commit('setUser', res.data);
          localStorage.setItem('auth-token', res.data.token);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: '/' });
          localStorage.getItem(userKey);
        })
        .catch(showError);
      // request()
      //   .post(`http://localhost:3000/login`)
      //   .then((res) => {
      //     this.user = res.data;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   })
      //   .catch(showError);
    },
    signup() {
      // axios
      //   .post(`${baseApiUrl}/login`, this.user)
      request()
        .post(`http://localhost:3000/login`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
        });
      // request()
      //   .post(`http://localhost:3000/login`)
      //   .then((res) => {
      //     this.$toasted.global.defaultSuccess();
      //     this.user = res.data;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   })
      //   .catch(showError);
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
  /* background: url(https://imagem.com.br) no-repeat left; */
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
