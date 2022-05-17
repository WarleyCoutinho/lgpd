<template>
  <div class="container">
    <hr class="hr" />
    <b-col md sm="12" class="mt-4">
      <PageTitle
        icon="fa fa-pencil-square-o"
        main="Cadastros"
        sub="Geral do sistemas"
      />
    </b-col>
    <div class="admin-pages-tabs">
      <!-- <b-card no-body> -->
      <b-tabs>
        <b-tab title="Criar Endereços" lazy active>
          <Addresses />
        </b-tab>
        <b-tab title="Criar Questoens" lazy>
          <Questions />
        </b-tab>
        <b-tab title="Criar Respostas" lazy>
          <Answers />
        </b-tab>
        <b-tab title="Criar Empresas" lazy>
          <Companies />
        </b-tab>
        <b-tab title="Criar Países" lazy>
          <Countries />
        </b-tab>
        <b-tab title="Editar Estados" lazy>
          <States />
        </b-tab>
        <b-tab title="Editar Cidades" lazy>
          <Cities />
        </b-tab>
      </b-tabs>
      <!-- </b-card> -->
    </div>
  </div>
</template>

<script>
import PageTitle from '../../components/template/PageTitle';
import Addresses from './addresses/Addresses ';
import Questions from '../cadastro/questions/Questions';
import Answers from '../cadastro/answers/Answers';
import Companies from '../cadastro/companies/Companies';
import Countries from '../cadastro/countries/Countries';
import States from '../cadastro/states/States';
import Cities from '../cadastro/cities/Cities';

export default {
  name: 'HeaderTitle',
  components: {
    PageTitle,
    Addresses,
    Questions,
    Answers,
    Companies,
    Countries,
    States,
    Cities,
  },
};
</script>

<style></style>
