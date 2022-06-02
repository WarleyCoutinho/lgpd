<template>
  <div class="container">
    <img
      class="logoCadastro"
      src="../../assets/Logo.svg"
      width="200"
      alt="Logo TCC"
      v-if="showSignup"
    />
    <hr v-if="showSignup" />
    <div class="title-Cadastro" v-if="showSignup">
      {{ showSignup ? 'Cadastro' : 'Login' }}
    </div>
    <b-div v-if="showSignup">
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input
              id="user-name"
              type="name"
              v-model="user.name"
              placeholder="Digite seu nome"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input
              id="user-email"
              type="email"
              v-model="user.email"
              placeholder="Digite seu email"
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
              placeholder="Digita uma senha forte"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="CPF:" label-for="user-confirm-password">
            <b-form-input
              id="user-cpf"
              type="cpf"
              v-model="user.cpf"
              v-mask="'###.###.###-##'"
              placeholder="Digita seu cpf"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Empresa:" label-for="company-name">
            <b-form-input
              id="company-name"
              type="company.name"
              v-model="company.name"
              placeholder="Digita o nome da empresa"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="CNPJ:" label-for="company-cnpj">
            <b-form-input
              id="company-cnpj"
              type="company.cnpj"
              v-model="company.cnpj"
              v-mask="'##.###.###/####-##'"
              placeholder="Digita o cnpj da empresa"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="12">
          <b-form-group label="RUA:" label-for="company-address-street">
            <b-form-input
              id="company-street"
              type="address.street"
              v-model="address.street"
              placeholder="Digita o nome da rua"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group label="CEP:" label-for="company-address-zipCode">
            <b-form-input
              id="company-zipCode"
              type="address.zipCode"
              v-model="address.zipCode"
              v-mask="'##.###-###'"
              placeholder="Digita o cep da rua"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group
            label="Bairro:"
            label-for="company-address-neighborhood"
          >
            <b-form-input
              id="company-neighborhood"
              type="address.neighborhood"
              v-model="address.neighborhood"
              placeholder="Digita o nome do  bairro"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group
            label="N° Casa:"
            label-for="company-address-numberHouse"
          >
            <b-form-input
              id="company-numberHouse"
              type="address.numberHouse"
              v-model="address.numberHouse"
              placeholder="Numero da casa"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="12">
          <b-form-group
            label="Complemento:"
            label-for="company-address-complemento"
          >
            <b-form-input
              id="company-complemento"
              type="address.complement"
              v-model="address.complement"
              placeholder="Complemento do endereço"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group
            label="Ponto de Referência:"
            label-for="company-address-referencePoint"
          >
            <b-form-input
              id="company-referencePoint"
              type="address.referencePoint"
              v-model="address.referencePoint"
              placeholder="Digite o ponto de referência"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-dropdown
            variant="outline-dark"
            class="m-md-4"
            :text="stateSelected.name || 'Escolha um estado'"
          >
            <b-dropdown-item
              v-for="state in states"
              :key="state.id"
              @click="selectState(state)"
            >
              {{ state.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-col>

        <b-col md="3" sm="12">
          <b-dropdown
            variant="outline-dark"
            class="m-md-4"
            :text="citySelected.name || 'Escolha uma cidade'"
          >
            <b-dropdown-item
              v-for="city in cities"
              :key="city.id"
              @click="selectCity(city)"
            >
              {{ city.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
      <hr />
      <b-col xs="12">
        <b-row>
          <b-button
            variant="primary"
            class="buttons-registar"
            v-if="showSignup"
            @click="signup"
            >Registrar</b-button
          >
          <b-row>
            <div class="buttons-login02">
              Já tem cadastro?
              <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup" class="buttons-login"
                  >Acesse o Login!</span
                >
              </a>
            </div>
          </b-row>
        </b-row>
      </b-col>
      <hr />
    </b-div>
    <div class="auth-content" v-else signin>
      <div class="auth-modal" v-if="signin">
        <img src="../../assets/Logo.svg" width="200" alt="Logo TCC" />
        <hr />
        <div class="auth-title">{{ showSignup ? 'Cadastro' : 'Login' }}</div>
        <input
          v-model="user.email"
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <input
          v-model="user.password"
          name="password"
          type="password"
          placeholder="Senha"
        />

        <b-row>
          <b-row class="buttons-entrar">
            <button @click="signin">Entrar</button>
          </b-row>
          <b-row>
            <div class="cadastro02">
              Não tem cadastro?
              <a href @click.prevent="showSignup = !showSignup">
                <span class="cadastro">Registre-se aqui!</span>
              </a>
            </div>
          </b-row>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from '@/global';
import { request } from '@/config/services/request';

export default {
  name: 'Login',
  data: function () {
    return {
      showSignup: false,
      user: {},
      users: [],
      states: [],
      stateSelected: {},
      citySelected: {},
      cities: [],
      company: {},
      address: [],
    };
  },
  methods: {
    signin() {
      request()
        .post(`${baseApiUrl}/login`, this.user)
        .then((res) => {
          this.$store.commit('setUser', res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: '/inicio' });
        })
        // .catch(showError);
        .catch((error) => {
          // window.console.log('ErroWarley', error);
          showError(error);
        });
    },
    getStates() {
      return request()
        .get(`${baseApiUrl}/address/states`)
        .then((res) => {
          this.states = res.data;
          // console.log('States', this.states);
        });
    },
    selectState(state) {
      this.stateSelected = state;
      this.citySelected = {};
      this.getCities();
    },

    getCities() {
      if (!this.stateSelected.id) {
        return false;
      }
      return request()
        .get(`${baseApiUrl}/address/states/${this.stateSelected.id}/cities`)
        .then((res) => {
          this.cities = res.data;

          // console.log('Cities', this.cities);
        });
    },
    selectCity(city) {
      this.citySelected = city;
      // console.log('Cidade', city);
    },
    reset() {
      this.mode = 'save';
      this.user = {};
      this.stateSelected = {};
      this.citySelected = {};
      this.getCities = {};
      this.company = {};
      this.address = {};
    },
    signup() {
      const dataToSendUsers = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        cpf: this.user.cpf,
        company: {
          name: this.company.name,
          cnpj: this.company.cnpj,
          address: {
            street: this.address.street,
            zipCode: this.address.zipCode,
            neighborhood: this.address.neighborhood,
            numberHouse: this.address.numberHouse,
            complement: this.address.complement,
            referencePoint: this.address.referencePoint,
            cityId: this.citySelected.id,
          },
        },
      };
      request()
        .post(`${baseApiUrl}/user`, dataToSendUsers)
        .then((res) => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
          this.reset();
          this.user = res.data;
        })
        // .catch(showError);
        .catch((error) => {
          // window.console.log(error);
          showError(error);
        });
    },
  },
  mounted() {
    this.getStates().then(() => {
      if (this.stateId) {
        this.stateSelected = this.states.find((o) => o.id === this.stateId);
        this.getCities().then(() => {
          if (this.cityId) {
            this.citySelected = this.cities.find((o) => o.id === this.cityId);
          }
        });
      }
      // console.log('mounted');
    });
  },
};
</script>

<style scoped>
.buttons-entrar {
  margin-top: 15px;
  margin-left: 140px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #263238;
  font-size: 16px;
}
.buttons-registar {
  margin-right: 240px;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #263238;
}
.cadastro {
  color: #263238;
}

.cadastro:hover {
  text-decoration: none;
  color: var(--color-text-title-login);
  padding: 10px;
}
.cadastro02 {
  padding: 10px;
  margin-left: 40px;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
}
.logoCadastro {
  margin-left: 400px;
}
.title-Cadastro {
  margin-left: 450px;
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #263238;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
}
.auth-content {
  margin-top: 100px;
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

.buttons-login:hover {
  text-decoration: none;
  color: var(--color-text-title-login);
  padding: 10px;
}
.buttons-login02 {
  padding: 10px;
  margin-left: 40px;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
}
</style>
