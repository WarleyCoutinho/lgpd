<template>
  <div class="container">
    <hr class="hr" />
    <input type="hidden" v-model="answer.answerId" />
    <b-row>
      <b-col md="6" sm="12" class="seccão01">
        <div id="secao">{{ tiDepartment }}</div>
        <input type="hidden" v-model="answer.id" />
        <!-- <b-row>
          <div id="Ellipse7">
            <b-dd-header></b-dd-header>
          </div>
        </b-row>
        <b-row>
          <div id="Ellipse6">
            <b-dd-header></b-dd-header>
          </div>
        </b-row> -->
        <ul>
          <li
            class="perguntas"
            v-for="(question, index) in answers.questions"
            :key="index"
          >
            {{ question.id }}.{{ ' ' + question.question }}
            <b-form-radio-group
              v-model="question.answer"
              :options="question.options"
              stacked
              class="respostas"
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
import { baseApiUrl, showError, userKey } from '@/global';
import { request } from '@/config/services/request';

export default {
  name: 'TI',
  data: function () {
    return {
      mode: 'save',
      answer: {},
      answers: [],
    };
  },
  methods: {
    loadanswers() {
      const localStorageData = JSON.parse(localStorage.getItem(userKey));
      const companyId = localStorageData.user.companyId;
      request()
        .get(`${baseApiUrl}/answer/${companyId}`)
        .then((res) => {
          const tiQuestions = res.data.find(
            (item) => item.department == 'TI',
            (this.tiDepartment = res.data[3].department)
          );
          tiQuestions.questions = tiQuestions.questions.sort((a, b) => {
            if (a.id > b.id) return 1;
            if (b.id > a.id) return -1;

            return 0;
          });

          this.answers = tiQuestions;
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
      const dataToSend = {
        responses: this.answers.questions.map((question) => {
          return {
            answer: question.answer,
            questionId: question.id,
          };
        }),
      };
      request()
        .post(`${baseApiUrl}/answer/${companyId}`, dataToSend)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
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
.perguntas {
  text-align: justify;
  font-size: 16px;
}
.respostas {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
}
li {
  list-style-type: none;
}
.buttons {
  /* Buttons */
  width: 550px;
  height: 40px;
  margin-bottom: 60px;
  margin-top: 30px;
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
  margin-bottom: 50px;

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
