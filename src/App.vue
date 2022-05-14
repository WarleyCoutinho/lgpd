<template>
  <div id="app" :class="{ container: !user }">
    <Header :hideUserDropdown="!user" />
    <!-- <Loading v-if="checkTokenValidate" />
    <Content else />  -->
    <Content />
    <Footer />
  </div>
</template>

<script>
// import { baseApiUrl, userKey } from '@/global';
import { userKey } from '@/global';
import { mapState } from 'vuex';
import Header from '@/components/template/Header';
import Content from '@/components/template/Content';
import Footer from '@/components/template/Footer';
//import Loading from '@/components/template/Loading';
import './config/styles/global.css';
import { request } from '@/config/services/request';
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
        this.$router.push({ name: 'auth' });
        return true;
      }
      const res = await request().post(
        `http://localhost:3000/login/check-token`,
        userData
      );
      if (res.data) {
        this.$store.commit('setUser', userData);
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: 'auth' });
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
