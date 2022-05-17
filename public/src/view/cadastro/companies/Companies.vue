<template>
  <div class="empresa">
    <b-form>
      <input type="hidden" id="empresa-empresaId" v-model="empresa.empresaId" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Razão Social:" label-for="empresa-razaoSocial">
            <b-form-input
              id="empresa-razaoSocial"
              type="text"
              v-model="empresa.razaoSocial"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe a Razão Social da Empresa"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Fantasia:" label-for="empresa-fantasia">
            <b-form-input
              id="empresa-fantasia"
              type="text"
              v-model="empresa.fantasia"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome Fantasia da Empresa"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="12">
          <b-form-group label="CNPJ:" label-for="empresa-cnpj">
            <b-form-input
              id="empresa-cnpj"
              type="text"
              v-model="empresa.cnpj"
              v-mask="'##.###.###/####-##'"
              required
              placeholder="Informe o CNPJ da Empresa"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group label="Contato:" label-for="empresa-contato">
            <b-form-input
              id="empresa-contato"
              type="text"
              v-model="empresa.contato"
              required
              placeholder="Contato da Empresa"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group label="Telefone:" label-for="empresa-telefone">
            <b-form-input
              id="empresa-telefone"
              type="text"
              v-model="empresa.telefone"
              v-mask="'(##) ####-####'"
              required
              placeholder="Telefone da Empresa"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group label="Celular:" label-for="empresa-celular">
            <b-form-input
              id="empresa-celular"
              type="text"
              v-model="empresa.celular"
              v-mask="'(##) #####-####'"
              required
              placeholder="Celular da Empresa"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="12">
          <b-form-group label="Logradouro:" label-for="empresa-logradouro">
            <b-form-input
              id="empresa-logradouro"
              type="text"
              v-model="empresa.logradouro"
              required
              placeholder="Informe o Logradouro"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group label="Número:" label-for="empresa-numero">
            <b-form-input
              id="empresa-numero"
              type="text"
              v-model="empresa.numero"
              required
              placeholder="Número"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group label="Complemento:" label-for="empresa-complemento">
            <b-form-input
              id="empresa-complemento"
              type="text"
              v-model="empresa.complemento"
              required
              placeholder="Complemento"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sm="12">
          <b-form-group label="Bairro:" label-for="empresa-bairro">
            <b-form-input
              id="empresa-bairro"
              type="text"
              v-model="empresa.bairro"
              required
              placeholder="Bairro"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <b-form-group label="Cidade:" label-for="empresa-cidade">
            <b-form-input
              id="empresa-cidade"
              type="text"
              v-model="empresa.cidade"
              required
              placeholder="Informe a Cidade"
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sm="12">
          <b-form-group label="Estado:" label-for="empresa-estado">
            <b-form-input
              id="empresa-estado"
              type="text"
              v-model="empresa.estado"
              required
              placeholder="Informe o UF"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col xs="12">
          <b-button variant="primary" v-if="mode === 'save'" @click="save"
            >Salvar</b-button
          >
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
            >Excluir</b-button
          >
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
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
      :items="empresas"
      :fields="fields"
    >
      <template v-slot:cell(actions)="data">
        <b-button
          variant="warning"
          @click="loadEmpresa(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadEmpresa(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import { mask } from 'vue-the-mask';
import axios from 'axios';

export default {
  name: 'Empresa',
  directives: { mask },
  data: function () {
    return {
      mode: 'save',
      empresa: {},
      empresas: [],
      fields: [
        { key: 'empresaId', label: '#' },
        { key: 'fantasia', label: 'Nome' },
        { key: 'cnpj', label: 'CNPJ' },
        { key: 'contato', label: 'Contato' },
        { key: 'celular', label: 'Celular' },
        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  methods: {
    loadEmpresas() {
      const url = `${baseApiUrl}/empresa`;
      axios.get(url).then((res) => {
        this.empresas = res.data;
      });
    },
    reset() {
      this.mode = 'save';
      this.empresa = {};
      this.loadEmpresas();
    },
    save() {
      const method = this.empresa.empresaId ? 'put' : 'post';
      const id = this.empresa.empresaId ? `/${this.empresa.empresaId}` : '';
      axios[method](`${baseApiUrl}/empresa${id}`, this.empresa)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.empresa.empresaId;
      axios
        .delete(`${baseApiUrl}/empresa/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadEmpresa(empresa, mode = 'save') {
      this.mode = mode;
      this.empresa = { ...empresa };
    },
  },
  mounted() {
    this.loadEmpresas();
  },
};
</script>

<style></style>
