<template>
  <div class="container">
    <hr class="hr" />
    <b-col md sm="12" class="mt-4">
      <PageTitle icon="fa fa-sitemap" main="Meus Dados" sub="Dados Pessoais" />
    </b-col>
    <div>
      <NewPerson />
    </div>
  </div>
</template>

<script>
import PageTitle from '../../../components/template/PageTitle';
import NewPerson from './NewPerson';

export default {
  name: 'HeaderTitle',
  components: {
    PageTitle,
    NewPerson,
  },
};
</script>

<style></style>
