<template>
  <div class="container">
    <hr class="hr" />
    <input type="hidden" v-model="answer.answerId" />
    <b-row>
      <b-col md="6" sm="12" class="seccão01">
        <div id="secao">Marketing</div>
        <input type="hidden" v-model="answer.id" />
        <b-row>
          <div id="Ellipse7">
            <b-dd-header></b-dd-header>
          </div>
        </b-row>
        <b-row>
          <div id="Ellipse6">
            <b-dd-header></b-dd-header>
          </div>
        </b-row>
        <ul>
          <li v-for="(question, index) in answers.questions" :key="index">
            {{ question.id }}-{{ question.question }}
            <b-form-radio-group
              v-model="question.answer"
              :options="question.options"
              stacked
              class="mb-3"
            />
          </li>
        </ul>
        <b-row>
          <b-col xs="12">
            <b-button
              class="buttons"
              variant="Light"
              v-if="mode === 'save'"
              @click="save"
            >
              CONCLUIR
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { showError, userKey } from '@/global';
import { request } from '@/config/services/request';

export default {
  name: 'Marketing',
  data: function () {
    return {
      mode: 'save',
      answer: {},
      answers: [],
      responses: [
        // { answer: 'Sim', questionId: 11 },
        // { answer: 'Não', questionId: 12 },
        // { answer: 'Sim', questionId: 13 },
        // { answer: 'Talvez', questionId: 14 },
        // { answer: 'Sim', questionId: 15 },
        { answer: 'Sim', questionId: 17 },
      ],
    };
  },
  methods: {
    loadanswers() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      request()
        .get(`http://localhost:3000/answer/${companyId}`)
        .then((res) => {
          const comercialQuestions = res.data.find(
            (item) => item.department == 'Comercial'
          );
          console.log('Trazendo dados', res, comercialQuestions);
          comercialQuestions.questions = comercialQuestions.questions.sort(
            (a, b) => {
              if (a.id > b.id) return 1;
              if (b.id > a.id) return -1;

              return 0;
            }
          );

          this.answers = comercialQuestions;
        });
    },
    reset() {
      this.mode = 'save';
      this.answer = {};
      this.loadanswers();
    },
    save() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      request()
        .post(`http://localhost:3000/answer/${companyId}`, this.responses)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
      console.log('Enviando Dados', this.responses);
    },
    loadanswer(answer, mode = 'save') {
      this.mode = mode;
      this.answer = { ...answer };
    },
  },
  mounted() {
    this.loadanswers();
  },
};
</script>

<style scoped>
.buttons {
  /* Buttons */

  position: absolute;
  width: 550px;
  height: 40px;
  left: 10px;
  top: 20px;
  margin-bottom: 20px;
  color: black;
  background-color: #e5e5e5;

  /* H4 (Bold) */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  /* Blue Grey 900 */

  color: #263238;
}
#Ellipse6 {
  /* Ellipse 6 */

  width: 24px;
  height: 24px;
  left: 1656px;
  top: 299px;
  border-radius: 32px;
  margin-bottom: 20px;
  margin-left: 890px;

  /* Blue Grey 50 */

  background: #eceff1;
  /* Blue Grey 900 */

  border: 4px solid #263238;
}
#Ellipse7 {
  /* Ellipse 7 */

  width: 24px;
  height: 24px;
  left: 1656px;
  top: 355px;
  border-radius: 32px;
  margin-bottom: 20px;
  margin-left: 890px;

  /* Teal 300 */

  background: #4db6ac;
}
.color {
  margin-top: 10px;
  color: #000;
  margin-right: 500px;
  margin-left: 300px;
  background-color: var(--color-background-nav);
}
#secao {
  /* margin-left: 200px; */
  width: 559px;
  height: 64px;
  left: 680px;
  top: 188px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Blue Grey 900 */

  color: #263238;
}
.seccão01 {
  margin-top: 10px;
  color: #000;
  margin-right: 500px;
  margin-left: 300px;
  background-color: var(--color-background);
}
</style>
