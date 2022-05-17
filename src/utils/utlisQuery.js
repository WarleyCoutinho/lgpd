import { baseApiUrl } from '@/global';
import Vue from 'vue';
import { request } from '@/config/services/request';
// import { userKey } from '@/global';

Vue.mixin({
  methods: {
    mxGetAnswer(companyId) {
      /*
    Listar as perguntas com as Respostas (ROTA PRECISA DE TOKEN.
    Colocar o header: authorization: Bearer token)
     **GET** http://localhost:3000/answer/:idDaEmpreesa - 
     */

      const url = `${baseApiUrl}/answers/${companyId}`;

      return new Promise((resolve, reject) => {
        request()
          .get(url, {
            params: {
              responses: [{}],
            },
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => reject(err));
      });
    },

    mxGetAnswerStatistics(companyId) {
      /*
    Listar as perguntas com as Respostas (ROTA PRECISA DE TOKEN.
    Colocar o header: authorization: Bearer token)
     **GET** http://localhost:3000/answer/:idDaEmpreesa - 
     */
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;

      request()
        .get(
          `http://localhost:3000/answer/${companyId}/statistics`,
          this.answer
        )
        .then((res) => {
          this.statistics = res.data[0];
        });
    },
  },
});
