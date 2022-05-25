<template>
  <div class="container">
    <hr class="hr" />
    <b-col md sm="12" class="mt-4">
      <PageTitle
        icon="fa fa-sitemap"
        main="Gestão de Serviços"
        sub="realização de cadastro no sistema"
      />
    </b-col>
    <div>
      <CompanyRegistration />
    </div>
  </div>
</template>

<script>
import PageTitle from '../../../components/template/PageTitle';
import CompanyRegistration from './CompanyRegistration';

export default {
  name: 'HeaderTitle',
  components: {
    PageTitle,
    CompanyRegistration,
  },
};
</script>

<style></style>
