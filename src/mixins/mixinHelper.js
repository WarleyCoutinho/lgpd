import Vue from 'vue';

Vue.mixin({
  methods: {
    sampleFunction(value) {
      alert(value);
    },
    formatDate(value) {
      return this.$moment.utc(value).format('DD/MM/YYYY HH:mm');
    },
    timeToDecimal(value) {
      let arr = value.split(':');
      let dec = (arr[1] / 6) * 10;

      return parseFloat(
        parseInt(arr[0], 10) + '.' + (dec < 10 ? '0' : '') + dec
      );
    },
    diffDate(dataInicial, dataFinal) {
      const diff =
        this.$moment(dataFinal, 'DD/MM/YYYY HH:mm') -
        this.$moment(dataInicial, 'DD/MM/YYYY HH:mm');
      if (diff < 0) {
        return alert('A data Final não pode ser ANTES da data Inicial.');
      }
      const time = diff / 3600000;
      const hora = parseInt(time);
      const minuto = parseInt((time - hora) * 60);
      return hora + ':' + minuto;
    },
  },
});
