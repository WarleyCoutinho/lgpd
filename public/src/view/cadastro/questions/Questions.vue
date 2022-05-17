<template>
  <div class="producao">
    <div v-show="displayForm">
      <b-form>
        <input type="hidden" v-model="producao.producaoId" />
        <b-row>
          <b-col md="3" xs="12">
            <b-form-group label="Linha Produtiva:" label-for="producao-linhaId">
              <b-form-select
                v-if="mode === 'save'"
                id="producao-linhaId"
                :readonly="mode === 'remove'"
                :options="linhasProdutivas"
                v-model="producao.linhaProdutivaId"
              />
              <b-form-input
                v-else
                id="producao-linhaId"
                type="text"
                v-model="producao.linhaProdutiva"
                readonly
              />
            </b-form-group>
          </b-col>
          <b-col md="5" xs="12">
            <b-form-group label="Produto:" label-for="producao-produtoId">
              <b-form-select
                v-if="mode === 'save'"
                id="producao-produtoId"
                :readonly="mode === 'remove'"
                :options="produtos"
                v-model="producao.produtoId"
              />
              <b-form-input
                v-else
                id="producao-linhaId"
                type="text"
                v-model="produtos.value"
                readonly
              />
            </b-form-group>
          </b-col>
          <b-col md="4" sm="12">
            <b-form-group
              label="Data de Produção:"
              label-for="producao-dataProducao"
            >
              <b-form-datepicker
                id="producao-dataProducao"
                v-model="producao.dataProducao"
                :readonly="mode === 'remove'"
                required
                hide-header
                dark
                placeholder="Informe a Data de Produção"
              ></b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3" sm="12">
            <b-form-group
              label="Tempo Operacional:"
              label-for="producao-tempo-operacional"
            >
              <b-form-input
                id="producao-tempo-operacional"
                type="text"
                v-model="producao.tempoOperacional"
                :readonly="mode === 'remove'"
                required
                placeholder="Informe a Tempo Operacional"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group
              label="Tempo Programado:"
              label-for="producao-tempo-programado"
            >
              <b-form-input
                id="producao-tempo-programado"
                type="time"
                v-model="producao.tempoProgramadoProduzir"
                :readonly="mode === 'remove'"
                required
                placeholder="Informe a Qtde de Produto da OP"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group
              label="Tempo Produzindo:"
              label-for="producao-tempo-produzindo"
            >
              <b-form-input
                id="producao-tempo-produzindo"
                type="text"
                v-model="producao.tempoProduzindo"
                readonly
                required
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group
              label="Tempo Parado:"
              label-for="producao-tempo-parado"
            >
              <b-form-input
                id="producao-tempo-parado"
                type="text"
                v-model="producao.tempoParado"
                readonly
                required
                placeholder="Informe o Tempo Parado"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3" sm="12">
            <b-form-group label="Produção Real:" label-for="producao-real">
              <b-form-input
                id="producao-real"
                type="text"
                v-model="producao.producaoReal"
                :readonly="mode === 'remove'"
                required
                placeholder="Informe a Produção Real"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group
              label="Produção Teórica:"
              label-for="producao-teorica"
            >
              <b-form-input
                id="producao-teorica"
                type="text"
                v-model="producao.producaoTeorica"
                :readonly="mode === 'remove'"
                required
                placeholder="Informe a Produção Teórica"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group label="Produção Boa:" label-for="producao-boa">
              <b-form-input
                id="producao-boa"
                type="text"
                v-model="producao.producaoBoa"
                :readonly="mode === 'remove'"
                required
                placeholder="Informe a Produção Boa"
              />
            </b-form-group>
          </b-col>
          <b-col md="3" sm="12">
            <b-form-group label="Produção Ruim:" label-for="producao-ruim">
              <b-form-input
                id="producao-ruim"
                type="text"
                v-model="producao.producaoRuim"
                :readonly="mode === 'remove'"
                required
                placeholder="Informe a Produção Ruim"
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
            <b-button
              variant="warning"
              class="ml-2"
              @click="loadProducoes(), (displayForm = false)"
            >
              Listar
            </b-button>
          </b-col>
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
        :items="producoes"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        :filterIncludedFields="filterOn"
        @filtered="onFiltered"
      >
        <template v-slot:cell(actions)="data">
          <b-button
            variant="warning"
            @click="loadProducao(data.item)"
            class="mr-2"
          >
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="loadProducao(data.item, 'remove')">
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
          <b-button variant="primary" class="ml-2" @click="novo()">
            Nova Produção
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';

export default {
  name: 'Producao',
  data: function () {
    return {
      perPage: 5,
      currentPage: 1,
      pageOptions: [5, 10, 15],
      filter: null,
      filterOn: [],
      mode: 'save',
      displayForm: true,
      producao: {},
      producoes: [],
      produtos: [],
      produtosAux: [],
      linhasProdutivas: [],
      fields: [
        { key: 'producaoId', label: '#' },
        {
          key: 'linhaProdutiva',
          label: 'Linha Produtiva',
          sortable: true,
        },
        {
          key: 'producaoTeorica',
          label: 'Produção Teórica',
        },
        {
          key: 'tempoProgramadoProduzir',
          label: 'Produzir',
          formatter: (value) => {
            return this.decimalToTime(value);
          },
        },
        { key: 'produto', label: 'Produto', sortable: true },
        {
          key: 'dataProducao',
          label: 'Data Produção',
          formatter: (value) => {
            return this.$moment(value).format('dddd[,] DD [de] MMMM [de] YYYY');
          },
          sortable: true,
        },
        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  methods: {
    loadProducoes() {
      const url = `${baseApiUrl}/producao`;
      axios.get(url).then((res) => {
        this.producoes = res.data;
      });
    },
    loadProdutos() {
      const url = `${baseApiUrl}/produto`;
      axios.get(url).then((res) => {
        this.produtosAux = res.data;
        this.produtos = this.produtosAux.map((produto) => {
          return {
            value: produto.produtoId,
            text:
              produto.codigoProduto +
              ': ' +
              produto.nome +
              ' - ' +
              produto.descricao,
          };
        });
      });
    },
    reset() {
      this.mode = 'save';
      this.producao = {
        tempoOperacional: 24,
        tempoProduzindo: 0,
        tempoParado: 0,
        producaoReal: 0,
        producaoBoa: 0,
        producaoRuim: 0,
      };
      this.loadProducoes();
      this.loadProdutos();
      this.loadLinhasProdutivas();
    },
    novo() {
      this.displayForm = true;
      this.loadLinhasProdutivas();
    },
    save() {
      const method = this.producao.producaoId ? 'put' : 'post';
      const id = this.producao.producaoId ? `/${this.producao.producaoId}` : '';

      delete this.producao.linhaProdutiva;
      delete this.producao.etapa;
      delete this.producao.produto;

      window.console.log('producao:', this.producao);

      if (this.producao.linhaProdutivaId === 1) {
        this.producao.etapaLinhaProdutivaId = 3;
      } else {
        this.producao.etapaLinhaProdutivaId = 4;
      }

      this.produtosAux.forEach((elem) => {
        if (elem.produtoId === this.producao.produtoId) {
          this.producao.codigoProduto = elem.codigoProduto;
        }
      });
      this.producao.tempoProgramadoProduzir = this.timeToDecimal(
        this.producao.tempoProgramadoProduzir
      );

      axios[method](`${baseApiUrl}/producao${id}`, this.producao)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.producao.producaoId;
      axios
        .delete(`${baseApiUrl}/producao/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadProducao(producao, mode = 'save') {
      this.mode = mode;
      this.displayForm = true;
      producao.tempoProgramadoProduzir = this.decimalToTime(
        producao.tempoProgramadoProduzir
      );

      this.producao = { ...producao };
    },
    loadLinhasProdutivas() {
      const url = `${baseApiUrl}/linhaProdutiva`;
      axios.get(url).then((res) => {
        this.linhasProdutivas = res.data.map((linhaProdutiva) => {
          return {
            value: linhaProdutiva.linhaProdutivaId,
            text: linhaProdutiva.nome,
          };
        });
      });
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    decimalToTime(value) {
      return (
        ('0' + (Math.floor(value) % 24)).slice(-2) +
        ':' +
        ((value % 1) * 60 + '0').slice(0, 2)
      );
    },
    timeToDecimal(value) {
      let arr = value.split(':');
      let dec = parseInt((arr[1] / 6) * 10, 10);

      return parseFloat(
        parseInt(arr[0], 10) + '.' + (dec < 10 ? '0' : '') + dec
      );
    },
  },
  mounted() {
    this.reset();
    this.loadProducoes();
    this.loadProdutos();
    this.loadLinhasProdutivas();
  },
  computed: {
    rows() {
      return this.producoes.length;
    },
  },
};
</script>

<style></style>
