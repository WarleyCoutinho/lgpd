<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block">{{ ` ${user.user.name}` }}</span>
      <div class="nivel">
        <p>{{ user.user.admin }}</p>
      </div>
      <div class="user-dropdown-img">
        <Gravatar :email="user.user.email" alt="User" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="user-dropdown-content">
      <router-link to="/companyRegistration">
        <i class="fa fa-address-card-o"></i> Administração
      </router-link>
      <router-link to="/users">
        <i class="fa fa-plus-circle"></i> Novos Usuários
      </router-link>
      <router-link to="/personalData">
        <i class="fa fa-address-book"></i> Meus Dados
      </router-link>
      <a href @click.prevent="logout"> <i class="fa fa-sign-out"></i> Sair </a>
    </div>
  </div>
</template>

<script>
import { userKey } from '@/global';
import { mapState } from 'vuex';
import Gravatar from 'vue-gravatar';

export default {
  name: 'UserDropdown',
  components: { Gravatar },
  computed: mapState(['user']),
  methods: {
    logout() {
      localStorage.removeItem(userKey);
      this.$store.commit('setUser', null);
      this.$router.push({ name: 'auth' });
    },
  },
};
</script>

<style scoped>
.user-dropdown {
  position: relative;
  height: 100%;
}
.user-dropdown:hover {
  background-color: var(--color-background);
}
.user-button {
  display: flex;
  /* H5 (Bold) */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  color: var(--color-text-header);
  height: 100%;
  padding: 0px 20px;
}
.user-dropdown-img {
  margin: 0px 10px;
}
.user-dropdown-img > img {
  max-height: 37px;
  border-radius: 5px;
}
.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: var(--color-background);
  border-radius: 32px;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(170, 166, 166, 0.034);
  padding: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}
.user-dropdown-content a {
  text-decoration: none;
  color: var(--color-text-header);
  padding: 10px;
}
.user-dropdown-content a:hover {
  text-decoration: none;
  color: var(--color-text-title);
  background-color: var(--color-background);
}
</style>
