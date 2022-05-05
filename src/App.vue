<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
    <Header
      title="TCC- Projeto de conclusão de Curso"
      :hideToggle="!user"
      :hideUserDropdown="!user"
    />
    <Menu v-if="user" />
    <Loading v-if="validatingToken" />
    <Content v-else />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import { baseApiUrl, userKey } from '@/global';
import { mapState } from 'vuex';
import Header from '@/components/template/Header';
// import Menu from '@/components/template/Menu';
import Content from '@/components/template/Content';
import Footer from '@/components/template/Footer';
import Loading from '@/components/template/Loading';
import './styles/global.css';
export default {
  name: 'App',
  components: { Header, Content, Footer, Loading },
  computed: mapState(['isMenuVisible', 'user']),
  data: function () {
    return {
      validatingToken: true,
    };
  },
  methods: {
    async validateToken() {
      this.validatingToken = true;
      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit('setUser', null);
      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ name: 'auth' });
        return;
      }
      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);
      if (res.data) {
        this.$store.commit('setUser', userData);
        if (this.$mq === 'xs' || this.$mq === 'sm') {
          this.$store.commit('toggleMenu', false);
        }
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: 'auth' });
      }
      this.validatingToken = false;
    },
  },
  created() {
    this.validateToken();
  },
};
</script>
