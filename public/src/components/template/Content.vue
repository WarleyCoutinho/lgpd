<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Content',
};
</script>

<style>
.content {
  width: 90%;
  flex-direction: column;
  background-color: var(--color-background-content);
}
</style>
