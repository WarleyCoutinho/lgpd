import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
  iconPack: 'fontawesome',
  duration: 3000,
});

Vue.toasted.register(
  'defaultSuccess',
  (payload) => (!payload.msg ? 'Operação realidada com sucesso!' : payload.msg),
  { type: 'success', icon: 'check' }
);

Vue.toasted.register(
  'defaultError',
  (payload) =>
    !payload.msg
      ? 'Oops.. Erro inesperado, ou sem conexão com o banco de dados!'
      : payload.msg,
  { type: 'error', icon: 'times' }
);
