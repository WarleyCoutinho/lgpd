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
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-content);
}
</style>
