<template>
  <div class="container">
    <hr />
    <div>
      <b-form @submit.stop.prevent="onSubmit">
        <b-row>
          <b-col md="4" sm="12">
            <b-form-group>
              <label for=">Nome">Nome</label>
              <span style="color: red"> *</span>
              <b-form-input
                id="name"
                name="name"
                type="name"
                v-model="user.name"
                v-validate="{ required: true, min: 4 }"
                :state="validateState('name')"
                required
              />
              <b-form-invalid-feedback id="name">{{
                veeErrors.first('name')
              }}</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="4" sm="12">
            <label for=">E-mail">E-mail</label>
            <span style="color: red"> *</span>
            <b-form-input
              id="email"
              name="email"
              type="text"
              v-validate="{ required: true, min: 8 }"
              :state="validateState('email')"
              required
              v-model="user.email"
            />
            <b-form-invalid-feedback id="email">{{
              veeErrors.first('email')
            }}</b-form-invalid-feedback>
          </b-col>
          <b-col md="4" sm="12">
            <label for=">Senha">Senha</label>
            <span style="color: red"> *</span>

            <b-form-input
              id="password"
              name="password"
              type="password"
              v-validate="{ required: true, min: 4 }"
              :state="validateState('password')"
              required
              v-model="user.password"
            />
            <b-form-invalid-feedback id="password">{{
              veeErrors.first('password')
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
            <b-button variant="info" class="ml-2" @click="resetForm()"
              >Limpar</b-button
            >
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
      if (this.user.name === undefined) {
        showError('Nome não informado!');
        return;
      }
      if (this.user.email === undefined) {
        showError('E-mail não informado!');
        return;
      }
      if (this.user.password === undefined) {
        showError('Senha não informado!');
        return;
      }
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
