<template>
  <div class="container">
    <hr />
    <div>
      <b-form @submit.stop.prevent="onSubmit">
        <b-row>
          <b-col md="4" sm="12">
            <label for=">microfuro">Nome</label>
            <span style="color: red"> *</span>
            <b-form-input
              id="user-name"
              type="text"
              v-validate="{ required: true, min: 4 }"
              :state="validateState('user-name')"
              required
              v-model="user.name"
              placeholder="Informe o Nome do Usuário"
            />
            <b-form-invalid-feedback id="user-name">{{
              veeErrors.first('user-name')
            }}</b-form-invalid-feedback>
          </b-col>
          <b-col md="4" sm="12">
            <label for=">microfuro">E-mail</label>
            <span style="color: red"> *</span>
            <b-form-input
              id="user-email"
              type="text"
              v-validate="{ required: true, min: 8 }"
              :state="validateState('user-email')"
              required
              v-model="user.email"
              placeholder="Informe o E-mail do Usuário"
            />
            <b-form-invalid-feedback id="user-email">{{
              veeErrors.first('user-email')
            }}</b-form-invalid-feedback>
          </b-col>
          <b-col md="4" sm="12">
            <label for=">microfuro">Senha</label>
            <span style="color: red"> *</span>

            <b-form-input
              id="user-password"
              type="password"
              v-validate="{ required: true, min: 4 }"
              :state="validateState('user-password')"
              required
              v-model="user.password"
              placeholder="Informe a Senha do Usuário"
            />
            <b-form-invalid-feedback id="user-password">{{
              veeErrors.first('user-password')
            }}</b-form-invalid-feedback>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col xs="12">
            <b-button
              type="submit"
              variant="primary"
              v-if="mode === 'save'"
              @click="save"
            >
              Salvar
            </b-button>
            <b-button class="ml-2" @click="reset"> Cancelar </b-button>
          </b-col>
          <b-col md="2" sm="12" class="text-right">
            <!-- <b-button variant="info" class="ml-2" @click="resetForm()"
              >Limpar</b-button
            > -->
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from '@/global';
import { request } from '@/config/services/request';

export default {
  name: 'Update',
  data: function () {
    return {
      mode: 'save',
      user: {},
      users: [],
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
      this.Update = {
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
        });
    },
    reset() {
      this.mode = 'save';
      this.user = {};
      this.loadUsers();
    },
    save() {
      const dataToSendUsers = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
      };
      request()
        .put(`${baseApiUrl}/user`, dataToSendUsers)
        .then((res) => {
          this.$toasted.global.defaultSuccess();
          this.reset();
          this.user = res.data;
        })
        .catch(showError);
    },
    // remove() {
    //   const id = this.user.id;
    //   request()
    //     .delete(`${baseApiUrl}/user/${id}`)
    //     .then(() => {
    //       this.$toasted.global.defaultSuccess();
    //       this.reset();
    //     })
    //     .catch(showError);
    // },
    loadUser(user, mode = 'save') {
      this.mode = mode;
      this.user = { ...user };
    },
  },
  mounted() {
    this.loadUsers();
  },
  computed: {
    rows() {
      return this.users.length;
    },
  },
};
</script>

<style></style>
