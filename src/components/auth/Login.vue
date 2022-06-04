<template>
    <div class="container">
        <b-form @submit.stop.prevent="onSubmit">
            <img class="logoCadastro" src="../../assets/Logo.svg" width="200" alt="Logo TCC" v-if="showSignup" />
            <hr v-if="showSignup" />
            <div class="title-Cadastro" v-if="showSignup">
                {{ showSignup ? "Cadastro" : "Login" }}
            </div>
            <b-div v-if="showSignup">
                <b-row>
                    <b-col md="6" sm="12">
                        <b-form-group>
                            <label for=">Nome">Nome</label>
                            <span style="color: red"> *</span>
                            <b-form-input
                                id="nome"
                                name="nome"
                                type="name"
                                v-model="user.name"
                                placeholder="Digite seu nome"
                                v-validate="{ required: true, min: 3 }"
                                :state="validateState('nome')"
                                required
                            />
                            <b-form-invalid-feedback id="nome">{{ veeErrors.first("nome") }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group>
                            <label for=">E-mail">E-mail</label>
                            <span style="color: red"> *</span>
                            <b-form-input
                                id="email"
                                name="email"
                                type="email"
                                v-validate="{ required: true, min: 8 }"
                                :state="validateState('email')"
                                required
                                v-model="user.email"
                                placeholder="Digite seu email"
                            />
                            <b-form-invalid-feedback id="email">{{ veeErrors.first("email") }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="6" sm="12">
                        <b-form-group>
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
                                placeholder="Digita uma senha forte"
                            />
                            <b-form-invalid-feedback id="password">{{
                                veeErrors.first("password")
                            }}</b-form-invalid-feedback>
                        </b-form-group>
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
                            placeholder="Digita seu cpf"
                        />
                        <b-form-invalid-feedback id="cpf">{{ veeErrors.first("cpf") }}</b-form-invalid-feedback>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="6" sm="12">
                        <label for=">Empresa">Empresa</label>
                        <span style="color: red"> *</span>
                        <b-form-input
                            id="name"
                            name="name"
                            type="name"
                            v-validate="{ required: true, min: 4 }"
                            :state="validateState('name')"
                            required
                            v-model="company.name"
                            placeholder="Digita o nome da empresa"
                        />
                        <b-form-invalid-feedback id="name">{{ veeErrors.first("name") }}</b-form-invalid-feedback>
                    </b-col>
                    <b-col md="6" sm="12">
                        <label for=">CNPJ">CNPJ</label>
                        <span style="color: red"> *</span>
                        <b-form-input
                            id="cnpj"
                            name="cnpj"
                            type="cnpj"
                            v-validate="{ required: true, min: 14 }"
                            :state="validateState('cnpj')"
                            required
                            v-model="company.cnpj"
                            v-mask="'##.###.###/####-##'"
                            placeholder="Digita o cnpj da empresa"
                        />
                        <b-form-invalid-feedback id="cnpj">{{ veeErrors.first("cnpj") }}</b-form-invalid-feedback>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="3" sm="12">
                        <label for=">RUA">RUA</label>
                        <span style="color: red"> *</span>
                        <b-form-input
                            id="street"
                            name="street"
                            type="street"
                            v-validate="{ required: true, min: 4 }"
                            :state="validateState('street')"
                            required
                            v-model="address.street"
                            placeholder="Digita o nome da rua"
                        />
                        <b-form-invalid-feedback id="street">{{ veeErrors.first("street") }}</b-form-invalid-feedback>
                    </b-col>
                    <b-col md="3" sm="12">
                        <label for=">CEP">CEP</label>
                        <span style="color: red"> *</span>
                        <b-form-input
                            id="zipCode"
                            name="zipCode"
                            type="zipCode"
                            v-validate="{ required: true, min: 8 }"
                            :state="validateState('zipCode')"
                            required
                            v-model="address.zipCode"
                            v-mask="'##.###-###'"
                            placeholder="Digita o cep da rua"
                        />
                        <b-form-invalid-feedback id="zipCode">{{ veeErrors.first("zipCode") }}</b-form-invalid-feedback>
                    </b-col>
                    <b-col md="3" sm="12">
                        <label for=">Bairro">Bairro</label>
                        <span style="color: red"> *</span>
                        <b-form-input
                            id="neighborhood"
                            name="neighborhood"
                            type="neighborhood"
                            v-validate="{ required: true, min: 4 }"
                            :state="validateState('neighborhood')"
                            required
                            v-model="address.neighborhood"
                            placeholder="Digita o nome do  bairro"
                        />
                        <b-form-invalid-feedback id="neighborhood">{{
                            veeErrors.first("neighborhood")
                        }}</b-form-invalid-feedback>
                    </b-col>
                    <b-col md="3" sm="12">
                        <label for=">N° Casa">N° Casa</label>
                        <span style="color: red"> *</span>
                        <b-form-input
                            id="numberHouse"
                            name="numberHouse"
                            type="numberHouse"
                            v-validate="{ required: true, min: 1 }"
                            :state="validateState('numberHouse')"
                            required
                            v-model="address.numberHouse"
                            placeholder="Numero da casa"
                        />
                        <b-form-invalid-feedback id="numberHouse">{{
                            veeErrors.first("numberHouse")
                        }}</b-form-invalid-feedback>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="3" sm="12">
                        <label for=">Complemento">Complemento</label>
                        <span style="color: red"> *</span>
                        <b-form-input
                            id="complement"
                            name="complement"
                            type="complement"
                            v-validate="{ required: true, min: 4 }"
                            :state="validateState('complement')"
                            required
                            v-model="address.complement"
                            placeholder="Complemento do endereço"
                        />
                        <b-form-invalid-feedback id="complement">{{
                            veeErrors.first("complement")
                        }}</b-form-invalid-feedback>
                    </b-col>
                    <b-col md="3" sm="12">
                        <label for=">Ponto de Referência">Ponto de Referência</label>
                        <span style="color: red"> *</span>
                        <b-form-input
                            id="referencePoint"
                            name="referencePoint"
                            type="referencePoint"
                            v-validate="{ required: true, min: 4 }"
                            :state="validateState('referencePoint')"
                            required
                            v-model="address.referencePoint"
                            placeholder="Digite o ponto de referência"
                        />
                        <b-form-invalid-feedback id="referencePoint">{{
                            veeErrors.first("referencePoint")
                        }}</b-form-invalid-feedback>
                    </b-col>
                    <b-col md="3" sm="12">
                        <label for=">Estado">Estado</label>
                        <span style="color: red"> *</span>
                        <b-dropdown
                            variant="outline-dark"
                            required
                            class="m-md-4"
                            :text="stateSelected.name || 'Escolha um estado'"
                        >
                            <b-dropdown-item v-for="state in states" :key="state.id" @click="selectState(state)">
                                {{ state.name }}
                            </b-dropdown-item>
                        </b-dropdown>
                    </b-col>

                    <b-col md="3" sm="12">
                        <label for=">Cidade">Cidade</label>
                        <span style="color: red"> *</span>
                        <b-dropdown
                            variant="outline-dark"
                            required
                            class="m-md-4"
                            :text="citySelected.name || 'Escolha uma cidade'"
                        >
                            <b-dropdown-item v-for="city in cities" :key="city.id" @click="selectCity(city)">
                                {{ city.name }}
                            </b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                </b-row>
                <hr />
                <b-col xs="12">
                    <b-row>
                        <b-button
                            variant="success"
                            class="buttons-registar"
                            type="submit"
                            v-if="showSignup"
                            @click="signup"
                            >Registrar</b-button
                        >
                        <b-row>
                            <div class="buttons-login">
                                Já tem cadastro?
                                <a class="buttons-login03" href @click.prevent="showSignup = !showSignup">
                                    <span v-if="showSignup" class="buttons-login02">Acesse o Login!</span>
                                </a>
                            </div>
                        </b-row>
                        <b-button class="buttons-cancelar" v-if="showSignup" @click="reset"> Cancelar </b-button>
                        <b-button variant="info" class="buttons-limpar" @click="resetForm()">Limpar</b-button>
                    </b-row>
                </b-col>
                <hr />
            </b-div>
            <div class="auth-content" v-else signin>
                <div class="auth-modal" v-if="signin">
                    <img src="../../assets/Logo.svg" width="200" alt="Logo TCC" />
                    <hr />
                    <div class="auth-title">{{ showSignup ? "Cadastro" : "Login" }}</div>
                    <b-form-input
                        id="email"
                        name="email"
                        type="text"
                        v-validate="{ required: true, min: 8 }"
                        :state="validateState('email')"
                        required
                        v-model="user.email"
                        placeholder="Digite seu email"
                    />
                    <b-form-invalid-feedback id="email">{{ veeErrors.first("email") }}</b-form-invalid-feedback>

                    <b-form-input
                        id="password"
                        name="password"
                        type="text"
                        v-validate="{ required: true, min: 4 }"
                        :state="validateState('password')"
                        required
                        v-model="user.password"
                        placeholder="Digite sua senha"
                    />
                    <b-form-invalid-feedback id="password">{{ veeErrors.first("password") }}</b-form-invalid-feedback>

                    <b-row>
                        <b-row class="buttons-entrar">
                            <button @click="signin">Entrar</button>
                        </b-row>
                        <b-row>
                            <div class="cadastro">
                                Não tem cadastro?

                                <a class="cadastro03" href @click.prevent="showSignup = !showSignup">
                                    <span class="cadastro02">Registre-se aqui!</span>
                                </a>
                            </div>
                        </b-row>
                    </b-row>
                </div>
            </div>
        </b-form>
    </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import { request } from "@/config/services/request";

export default {
    name: "Login",
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
        validateState(ref) {
            if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
                return !this.veeErrors.has(ref);
            }
            return null;
        },
        resetForm() {
            this.Login = {
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
        signin() {
            request()
                .post(`${baseApiUrl}/login`, this.user)
                .then((res) => {
                    this.$store.commit("setUser", res.data);
                    localStorage.setItem(userKey, JSON.stringify(res.data));
                    this.$router.push({ path: "/inicio" });
                })
                .catch(showError);
            // .catch((error) => {
            //   // window.console.log('Erro Warley', error);
            //   showError(error);
            // });
            if (this.user.email === undefined || this.user.email === null || this.user.email === "") {
                showError("E-mail incorreto ou não informado!");
                return;
            }
            if (this.user.password === undefined || this.user.password === null || this.user.password === "") {
                showError("Senha incorreta ou não informada!");
                return;
            }
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
            this.mode = "save";
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
            if (this.user.name === undefined) {
                showError("Nome não informado!");
                return;
            }
            if (this.user.email === undefined) {
                showError("E-mail não informado!");
                return;
            }
            if (this.user.password === undefined) {
                showError("Senha não informado!");
                return;
            }
            if (this.user.cpf === undefined) {
                showError("CPF não informado!");
                return;
            }
            if (this.company.name === undefined) {
                showError("Nome da empresa não informado!");
                return;
            }
            if (this.company.cnpj === undefined) {
                showError("CNPJ não informado!");
                return;
            }
            if (this.address.street === undefined) {
                showError("Rua não informado!");
                return;
            }
            if (this.address.zipCode === undefined) {
                showError("CEP não informado!");
                return;
            }
            if (this.address.neighborhood === undefined) {
                showError("Bairro não informado!");
                return;
            }
            if (this.address.numberHouse === undefined) {
                showError("N° Casa não informado!");
                return;
            }
            if (this.address.complement === undefined) {
                showError("Complemento não informado!");
                return;
            }
            if (this.address.referencePoint === undefined) {
                showError("Ponto de Referência não informado!");
                return;
            }

            if (this.citySelected.id === undefined) {
                showError("Cidade não informado!");
                return;
            }
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
    /* margin-right: 240px; local */
    margin-left: 80px;
    margin-right: 80px;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    color: #ffffff;
}
.buttons-cancelar {
    margin-left: 80px;
    margin-right: 30px;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    color: #ffffff;
}
.buttons-limpar {
    margin-left: 80px;

    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    color: #ffffff;
}
.cadastro {
    color: #263238;
}

.cadastro {
    padding: 10px;
    margin-left: 40px;
    color: var(--color-text-title-cadastro);
    text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
}
.cadastro02:hover {
    text-decoration: none;
    color: var(--color-text-title-cadastroHover);
    text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
    padding: 10px;
}
.cadastro03 {
    color: var(--color-text-title-cadastro);
    text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
}
.logoCadastro {
    margin-left: 380px;
}
.title-Cadastro {
    margin-left: 420px;
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
.buttons-login {
    padding: 10px;
    color: var(--color-text-title-login);
    text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
}
.buttons-login02:hover {
    text-decoration: none;
    color: var(--color-text-title-loginHover);
    padding: 10px;
}
.buttons-login03 {
    color: var(--color-text-title-login);
    text-shadow: 0.0625rem 0.0625rem 0.0625rem black;
}
</style>
