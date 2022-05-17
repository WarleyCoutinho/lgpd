<template>
  <div class="user">
    <div>User Component</div>
    <div class="image">
      <img :src="user.avatar_url" />
    </div>
    <div class="name">
      {{ user.login }}
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get('http://localhost:3000/answer/1/statistics')
        .then((res) => {
          this.user = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
