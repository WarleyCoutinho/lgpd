<template>
  <div class="container">
    <hr class="hr" />
    <b-col md sm="12" class="mt-4">
      <PageTitle icon="fa fa-sitemap" main="Meus Dados" sub="Dados Pessoais" />
    </b-col>
    <div>
      <PersonalData />
    </div>
  </div>
</template>

<script>
import PageTitle from '../../../components/template/PageTitle';
import PersonalData from './PersonalData';

export default {
  name: 'HeaderTitle',
  components: {
    PageTitle,
    PersonalData,
  },
};
</script>

<style></style>
