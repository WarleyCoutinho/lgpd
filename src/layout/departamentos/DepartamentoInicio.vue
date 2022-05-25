<template>
  <div class="container">
    <hr class="hr" />
    <div id="texto1">
      <h2>Departamentos</h2>
    </div>
    <div id="texto2">
      <h4>Sua empresa está 0% dentro da LGPD</h4>
    </div>
    <div id="container">
      <div class="column2">
        <li>
          <h2 class="textoMeio">
            <router-link to="/form-departamento">
              <i class="fa fa-plus"> </i>
            </router-link>
          </h2>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DepartamentoInicio',
};
</script>

<style scoped>
i {
  color: #000;
}
#texto1 {
  margin-left: 25px;
  margin-bottom: 20px;
}

#texto2 {
  margin-left: 25px;
}

#container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.column2 {
  margin-left: 25px;
  background-color: #eceff1;
  width: 300px;
  height: 400px;
  display: flex;
}

.textoMeio {
  margin-left: 20px;
  margin-bottom: 100px;
  margin-top: 200px;
  text-align: center;
}

.container2 {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
