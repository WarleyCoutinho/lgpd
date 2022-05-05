<template>
  <div class="Heder-login">
    <b-col md sm="12" class="mt-4">
      <PageTitle icon="fa fa-cogs" main="Usuários" sub="Usuários do Sistema" />
    </b-col>
    <div>
      <Usuario />
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle';
import Usuario from './Usuario';

export default {
  name: 'UserPages',
  components: {
    PageTitle,
    Usuario,
  },
};
</script>

<style></style>
