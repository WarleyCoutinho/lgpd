<template>
  <header class="container">
    <div id="user-dropdown" v-if="!hideUserDropdown">
      <nav class="container">
        <router-link to="/"
          ><img id="logo" alt="TCC Logo" src="../../assets/Logotipo.svg"
        /></router-link>

        <img
          v-on:click="openMenu"
          alt="Abrir menu "
          id="menu-button"
          src="../../assets/menu.svg"
        />

        <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
        <div id="menu-items" :class="{ active: menuActive }">
          <img id="menu-logo" alt="TCC Logo" src="../../assets/Logotipo.svg" />

          <ul>
            <li v-on:click="closeMenu" id="Inicio">
              <router-link to="/inicio">Inicio</router-link>
            </li>
            <li v-on:click="closeMenu" id="Departamentos">
              <router-link to="/departamentos">Departamentos</router-link>
            </li>
            <li v-on:click="closeMenu">
              <router-link to="/lgpd">LGPD</router-link>
            </li>
            <li v-on:click="closeMenu" id="Sobre">
              <router-link to="/sobre">Sobre</router-link>
            </li>
            <li>
              <UserDropdown v-if="!hideUserDropdown" />
            </li>
          </ul>
        </div>
        <hr class="hr" />
      </nav>
    </div>
  </header>
</template>

<script>
import UserDropdown from './UserDropdown';
import { mapState } from 'vuex';
export default {
  name: 'Header',
  props: {
    title: String,
    hideUserDropdown: Boolean,
  },
  components: { UserDropdown },
  data() {
    return {
      menuActive: false,
      // hideUserDropdown: false,
    };
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible
        ? 'fa-toggle-on'
        : ' fa-toggle-off ';
    },
    ...mapState(['user']),
  },
  methods: {
    openMenu: function () {
      this.menuActive = true;
    },
    closeMenu: function () {
      this.menuActive = false;
    },
  },
};
</script>

<style scoped>
header {
  /* Header */
  background-color: var(--color-background);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#user-dropdown {
  margin-left: 500px;
  margin-right: 40px;
  display: flex;

  /* H5 (Bold) */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}
nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}
#logo {
  /* Logotipo */

  /* position: absolute; */
  left: 12.5%;
  right: 78.91%;
  top: 25%;
  bottom: 26%;

  margin-left: -400px;
  /* justify-content: space-between; */

  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  /* identical to box height */

  /* Blue Grey 900 */

  color: #263238;
}
#menu-button {
  width: 30px;
  margin-left: 50px;
  left: 12.5%;
  right: 78.91%;
  top: 25%;
  bottom: 26%;
  background-color: #263238;
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.8;
}
#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-right: 100px;
}
#menu-items {
  position: fixed;
  display: none;
  flex-direction: column;
  top: 0;
  right: 0;
  background-color: var(--color-background);
  width: 60%;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
}
#menu-items.active {
  display: flex;
}
ul {
  list-style: none;
  text-align: center;
  max-width: 1000px;
  list-style: none;
}
ul li {
  margin: 20px 0px;
  display: inline;
}
ul li a {
  color: var(--color-text-header);
  padding: 20px;
  display: inline-block;
  text-decoration: none;
  transition: background 0.4s;

  /* H5 (Bold) */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}
ul li a:hover {
  background-color: rgb(24, 139, 233);
}

ul li:last-child a {
  float: right;
  background-color: rgb(24, 139, 233);
}
#Inicio {
  /* Início */

  /* position: absolute; */
  left: 37.5%;
  right: 60%;
  top: 38%;
  bottom: 38%;
  justify-content: space-between;

  /* H5 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  /* Blue Grey 900 */

  /* color: #263238; */
  color: var(--color-text-title);
}
#Departamentos {
  /* Departamentos */
  /* position: absolute; */
  left: 43.33%;
  right: 49.48%;
  top: 38%;
  bottom: 38%;

  /* H5 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  /* Blue Grey 900 */

  color: #263238;
}
.LGPD {
  /* LGPD */

  position: absolute;
  left: 53.85%;
  right: 43.59%;
  top: 38%;
  bottom: 38%;

  /* H5 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  /* Blue Grey 900 */

  color: #263238;
}
#Sobre {
  /* Sobre */

  /* position: absolute; */
  left: 59.74%;
  right: 37.55%;
  top: 38%;
  bottom: 38%;
  margin-left: 40px;

  /* H5 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  /* Blue Grey 900 */

  color: #263238;
}
@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }
  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }
  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }
  ul li {
    margin: 0;
    margin-left: 20px;
  }
}
</style>
