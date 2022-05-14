<template>
  <div>
    <hr class="hr" />
    <div id="texto1">
      <h2>Departamentos</h2>
    </div>
    <div id="texto2">
      <h4>Sua empresa está 0% dentro da LGPD</h4>
    </div>
    <div class="container">
      <div class="column2">
        <li>
          <h2 class="textoMeio">
            <router-link to="/departamentos">
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
  margin-left: 200px;
  margin-bottom: 20px;
}

#texto2 {
  margin-left: 200px;
  margin-bottom: 20px;
}
#nome {
  color: #000;
  font-size: 20px;
  font-weight: bolder;
}

#divNome {
  background-color: white;
}

li {
  list-style-type: none;
}

#foto {
  width: 50px;
  height: 50px;
  border-radius: 20px;
}

#foto1 {
  margin-left: 10px;
  width: 250px;
  height: 250px;
}

.container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.column1 {
  margin-right: 20px;
  margin-left: 350px;
  background-color: #263238;
  width: 500px;
  height: 250px;
  display: flex;
}
.column2 {
  margin-left: 200px;
  background-color: #eceff1;
  width: 300px;
  height: 400px;
  display: flex;
}

.column4 {
  color: #000;
  margin-left: 350px;
  display: flex;
  margin-top: 20px;
}

.column5 {
  color: #000;
  margin-right: 470px;
  display: flex;
  margin-top: 20px;
}

.title {
  margin-left: 20px;
  color: #000;
  text-align: center;
}

.title5 {
  margin-left: 20px;
  color: #000;
}
.title6 {
  margin-left: 20px;
  margin-right: 50px;
  margin-top: 40px;
  color: white;
}

.textoMeio {
  margin-left: 20px;
  margin-bottom: 100px;
  margin-top: 200px;
  text-align: center;
}

.textoMeio2 {
  color: white;
  margin-right: 30px;
  margin-top: 70px;
}

.title1 {
  margin-top: 40px;
  color: white;
}

.textoTitulo {
  margin-left: 20px;
  margin-bottom: 20px;
}

.container1 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container2 {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.box {
  width: 300px;
  height: 320px;
  border-width: 2px;
  border-style: solid;
  background: white;
  border-radius: 5px;
  border-color: grey;
}
</style>
