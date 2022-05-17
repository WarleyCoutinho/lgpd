<template>
  <div class="loading">
    <b-spinner
      style="width: 3rem; height: 3rem; color: #314657"
      label="Large Spinner"
    ></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style>
.loading {
  max-height: 100vh;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999;
  position: fixed;
}
</style>
