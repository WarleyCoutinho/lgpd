<template>
  <div>
    <hr class="hr" />
    <div class="auth-modal">
      <b-form-group
        label="Nome do departamento:"
        label-for="nome-do-departamento"
      >
        <input v-model="departamento" type="text" placeholder="Finanças" />
      </b-form-group>
      <b-form-group label="Responsável:" label-for="responsável">
        <input
          v-model="name"
          name="email"
          type="text"
          placeholder="Mia Ribeiro"
        />
      </b-form-group>
      <router-link to="/departamentos">
        <b-button id="buttons" variant="Light" @click="save">
          Ir para Departamentos
        </b-button>
      </router-link>
      <b-div>
        <b-button class="ml-2" variant="Light" @click="save"> Salvar </b-button>
      </b-div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormDepartamento',
};
</script>

<style scoped>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-modal {
  background-color: #fff;
  width: 380px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-modal input {
  border: 1px solid #263238;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}
.modal button {
  align-self: flex-end;
  color: #ffff;
  background-color: #263238;
  padding: 5px 15px;
  border: none;
}
#buttons {
  /* Buttons */

  width: 300px;
  height: 40px;
  margin-left: -50px;
  margin-bottom: 40px;
  color: black;
  background-color: #e5e5e5;

  /* H4 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}
</style>
