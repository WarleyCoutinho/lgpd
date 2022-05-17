<template>
  <div class="container">
    <hr class="hr" />
    <div>
      <b-row>
        <b-col md="6" sm="12" class="color1">
          <div class="secao">RH</div>

          <div>
            <b-card-text>
              1. Esta é uma questão para o usuário sobre algum aspecto do
              sistema em relação à LGPD, entendeu?
            </b-card-text>
            <div>
              <b-form-group label="" v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Sim"
                  >Sim</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Não"
                  >Não</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Talves"
                  >Talves</b-form-radio
                >
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div>
            </div>
          </div>
          <div>
            <b-card-text>
              2. Esta é uma questão para o usuário sobre algum aspecto do
              sistema em relação à LGPD, entendeu?
            </b-card-text>
            <div>
              <b-form-group label="" v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Sim"
                  >Sim</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Não"
                  >Não</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Talves"
                  >Talves</b-form-radio
                >
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div>
            </div>
          </div>
          <div>
            <b-card-text>
              3. Esta é uma questão para o usuário sobre algum aspecto do
              sistema em relação à LGPD, entendeu?
            </b-card-text>
            <div>
              <b-form-group label="" v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Sim"
                  >Sim</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Não"
                  >Não</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Talves"
                  >Talves</b-form-radio
                >
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div>
            </div>
          </div>
          <div>
            <b-card-text>
              4. Esta é uma questão para o usuário sobre algum aspecto do
              sistema em relação à LGPD, entendeu?
            </b-card-text>
            <div>
              <b-form-group label="" v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Sim"
                  >Sim</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Não"
                  >Não</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Talves"
                  >Talves</b-form-radio
                >
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RH',
};
</script>

<style></style>
