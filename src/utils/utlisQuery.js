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
              responses: [
                { answer: 'Sim', questionId: 1 },
                { answer: 'Não', questionId: 2 },
                { answer: 'Talvez', questionId: 3 },
                { answer: 'Sim', questionId: 4 },
              ],
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
      const url = `${baseApiUrl}/answers/${companyId}/statistics`;

      return new Promise((resolve, reject) => {
        request()
          .get(url, {
            params: {
              responses: [
                { answer: 'Sim', questionId: 1 },
                { answer: 'Não', questionId: 2 },
                { answer: 'Talvez', questionId: 3 },
                { answer: 'Sim', questionId: 4 },
              ],
            },
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => reject(err));
      });
    },
  },
});
