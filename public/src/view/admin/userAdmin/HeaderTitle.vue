<template>
  <div class="container">
    <hr class="hr" />
    <b-col md sm="12" class="mt-4">
      <PageTitle
        icon="fa fa-pencil-square-o"
        main="Cria outros Usuários atraves do admin"
        sub=""
      />
    </b-col>
    <div class="admin-pages-tabs">
      <!-- <b-card no-body> -->
      <b-tabs>
        <b-tab title="Criar Usuários" lazy active>
          <CreateOther />
        </b-tab>
        <b-tab title="Editar Usuários" lazy>
          <User />
        </b-tab>
      </b-tabs>
      <!-- </b-card> -->
    </div>
  </div>
</template>

<script>
import PageTitle from '../../../components/template/PageTitle';
import CreateOther from '../userAdmin/CreateOther ';
import User from './User';
export default {
  name: 'HeaderTitle',
  components: { PageTitle, CreateOther, User },
};
</script>

<style></style>
