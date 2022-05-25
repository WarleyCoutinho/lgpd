<template>
  <div id="app" :class="{ container: !user }">
    <Header :hideUserDropdown="!user" />
    <Content />
    <Footer />
  </div>
</template>

<script>
import { baseApiUrl, userKey } from '@/global';
import { request } from '@/config/services/request';
import { mapState } from 'vuex';
import Header from '@/components/template/Header';
import Content from '@/components/template/Content';
import Footer from '@/components/template/Footer';
import './config/styles/global.css';
export default {
  name: 'App',
  components: { Header, Content, Footer },
  computed: mapState(['user']),
  data: function () {
    return {
      checkToken: true,
    };
  },
  methods: {
    async checkTokenValidate() {
      this.checkToken = true;
      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit('setUser', null);
      if (!userData) {
        this.checkToken = true;
        this.$router.push({ name: 'login' });
        return true;
      }
      const res = await request().post(
        `${baseApiUrl}/login/check-token`,
        userData
      );
      if (res.data) {
        this.$store.commit('setUser', userData);
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: 'login' });
      }
      this.checkToken = false;
      return false;
    },
  },
  created() {
    this.checkTokenValidate();
  },
};
</script>
