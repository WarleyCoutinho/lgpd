<template>
  <div class="Heder-login">
    <hr class="hr" />
    <b-col md sm="12" class="mt-4">
      <PageTitle icon="fa fa-cogs" main="Usuários" sub="Usuários do Sistema" />
    </b-col>
    <div>
      <Users />
    </div>
  </div>
</template>

<script>
import PageTitle from '../../../components/template/PageTitle';
import Users from './Users';

export default {
  name: 'HeaderTitle',
  components: {
    PageTitle,
    Users,
  },
};
</script>

<style></style>
