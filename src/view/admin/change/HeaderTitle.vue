<template>
  <div class="container">
    <hr class="hr" />
    <b-col md sm="12" class="mt-4">
      <PageTitle
        icon="fa fa-cogs"
        main=" Altere seu nome de usuário e-mail e senha"
        sub=" Novo dado do usuário"
      />
    </b-col>
    <div>
      <Update />
    </div>
  </div>
</template>

<script>
import PageTitle from '../../../components/template/PageTitle';
import Update from './Update';

export default {
  name: 'HeaderTitle',
  components: {
    PageTitle,
    Update,
  },
};
</script>

<style></style>
