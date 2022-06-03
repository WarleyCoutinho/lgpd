<template>
  <div class="container">
    <hr />
    <div v-show="displayForm">
      <b-form @submit.stop.prevent="onSubmit">
        <b-row>
          <b-col md="6" sm="12">
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
          </b-col>
          <b-col md="6" sm="12">
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
              placeholder="Informe o E-mail do Usuário"
            />
            <b-form-invalid-feedback id="email">{{
              veeErrors.first('email')
            }}</b-form-invalid-feedback>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6" sm="12">
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
              placeholder="Informe a Senha do Usuário"
            />
            <b-form-invalid-feedback id="password">{{
              veeErrors.first('password')
            }}</b-form-invalid-feedback>
          </b-col>
          <b-col md="6" sm="12">
            <label for=">CPF">CPF</label>
            <span style="color: red"> *</span>

            <b-form-input
              id="cpf"
              name="cpf"
              type="cpf"
              v-validate="{ required: true, min: 11 }"
              :state="validateState('cpf')"
              required
              v-model="user.cpf"
              v-mask="'###.###.###-##'"
              placeholder="Informe seu cpf"
            />
            <b-form-invalid-feedback id="cpf">{{
              veeErrors.first('cpf')
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
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">
              Excluir
            </b-button>
            <b-button class="ml-2" @click="reset"> Cancelar </b-button>
            <b-button variant="info" class="ml-2" @click="resetForm()"
              >Limpar</b-button
            >
            <!-- <b-button
              variant="warning"
              class="ml-2"
              @click="displayForm = false"
            >
              Listar
            </b-button> -->
          </b-col>
          <!-- <b-col md="2" sm="12" class="text-right">
            <b-button variant="info" class="ml-2" @click="resetForm()"
              >Limpar</b-button
            >
          </b-col> -->
        </b-row>
      </b-form>
      <hr />
    </div>
    <div class="overflow" v-show="!displayForm">
      <b-row>
        <b-col md="12" lg="12" class="my-1">
          <b-form-group label-for="filterInput" class="mb-0">
            <b-input-group size="md">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Digite para pesquisar"
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''"
                  >Limpar</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-table
        hover
        striped
        small
        sort-icon-left
        head-variant="dark"
        :items="users"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        :filterIncludedFields="filterOn"
        @filtered="onFiltered"
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
      <hr />
      <b-row>
        <b-col md="5" sm="12">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="Primeiro"
            prev-text="Anterior"
            next-text="Próximo"
            last-text="Último"
            size="md"
          ></b-pagination>
        </b-col>
        <b-col md="5" sm="12">
          <b-form-group
            label="Qtd Linhas"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="3"
            label-align-sm="right"
            label-size="md"
            label-for="perPageSelect"
            class="mb-0"
          >
            <b-form-select
              v-model="perPage"
              id="perPageSelect"
              :options="pageOptions"
              size="md"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="2" sm="12" class="text-right">
          <b-button variant="primary" class="ml-2" @click="displayForm = true">
            Novo Usuário
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import { request } from '@/config/services/request';

export default {
  name: 'Users',
  data: function () {
    return {
      perPage: 5,
      currentPage: 1,
      pageOptions: [5, 10, 15],
      filter: null,
      filterOn: [],
      mode: 'save',
      displayForm: true,
      user: {},
      users: [],
      fields: [
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'Email' },
        { key: 'cpf', label: 'CPF' },
        { key: 'isAdmin', label: 'Admin' },
        { key: 'actions', label: 'Ações' },
      ],
    };
  },

  methods: {
    // passwordMostraOculta() {
    //   document
    //     .getElementById('olho')
    //     .addEventListener('mousedown', function () {
    //       document.getElementById('pass').type = 'text';
    //     });

    //   document.getElementById('olho').addEventListener('mouseup', function () {
    //     document.getElementById('pass').type = 'password';
    //   });

    //   // Para que o password não fique exposto apos mover a imagem.
    //   document
    //     .getElementById('olho')
    //     .addEventListener('mousemove', function () {
    //       document.getElementById('pass').type = 'password';
    //     });
    // },
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
      this.Users = {
        name: null,
        email: null,
        cpf: null,
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
    reset() {
      this.mode = 'save';
      this.user = {};
    },
    save() {
      const dataToSendUsers = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        cpf: this.user.cpf,
      };
      request()
        .post(`${baseApiUrl}/user/create-other`, dataToSendUsers)
        .then((res) => {
          this.$toasted.global.defaultSuccess();
          this.reset();
          this.user = res.data;
        })

        .catch((error) => {
          // window.console.log(error);
          showError(error);
        });
      // .catch((err) => {
      //   console.log('Error:', JSON.stringify(err));
      // });
      // .catch(showError);

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
      if (this.user.cpf === undefined) {
        showError('Cpf não informado!');
        return;
      }
    },
    // remove() {
    //   const id = this.user.userId;
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
      this.displayForm = true;
      this.user = { ...user };
    },

    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
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

<style scoped>
#pass {
  width: 150px;
  padding-right: 20px;
}

.olho {
  cursor: pointer;
  left: 160px;
  position: absolute;
  width: 20px;
}
</style>
