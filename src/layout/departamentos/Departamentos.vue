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
      <div class="container2">
        <div id="boxAdd" class="box">
          <h2 class="textoMeio">
            <router-link to="/form-departamento">
              <i class="fa fa-plus"> </i>
            </router-link>
          </h2>
        </div>
        <div class="box">
          <h3 class="title">Finanças</h3>
          <li>
            <img id="foto1" src="../../assets/48.png" alt="48" />
            <a href="/financas"><h4 class="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 class="title">T.I</h3>
          <li>
            <img id="foto1" src="../../assets/66.png" alt="66" />
            <a href="/ti"><h4 class="title">Ver detalhes</h4></a>
          </li>
        </div>
      </div>
      <div class="container22">
        <div class="box">
          <h3 class="title">Marketing</h3>
          <li>
            <img id="foto1" src="../../assets/72.png" alt="72" />
            <a href="/marketing"><h4 class="title">Ver detalhes</h4></a>
          </li>
        </div>
        <div class="box">
          <h3 class="title">R.H.</h3>
          <li>
            <img id="foto1" src="../../assets/89.png" alt="89" />
            <a href="/rh"><h4 class="title">Ver detalhes</h4></a>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Departamentos',
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
}
#nome {
  color: #000;
  font-size: 20px;
  font-weight: bolder;
}

#logo {
  color: black;
  font-size: 40px;
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
  flex-direction: column;
  align-items: center;
}
.container22 {
  margin-left: 170px;
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
  height: 320px;
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
  margin-bottom: 100px;
  margin-top: 150px;
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
#boxAdd {
  background-color: gainsboro;
}
.box {
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  width: 300px;
  height: 320px;
  border-width: 2px;
  border-style: solid;
  background: white;
  border-radius: 5px;
  border-color: grey;
}
#menu-h {
  background-color: white;
  width: 100%;
}

#menu-h ul {
  max-width: 1000px;
  list-style: none;
}

#menu-h ul li {
  display: inline;
}

#menu-h ul li a {
  color: black;
  padding: 20px;
  display: inline-block;
  text-decoration: none;
  transition: background 0.4s;
}

#menu-h ul li a:hover {
  background-color: rgb(24, 139, 233);
}

#menu-h ul li:last-child a {
  float: right;
  background-color: rgb(24, 139, 233);
}
</style>
