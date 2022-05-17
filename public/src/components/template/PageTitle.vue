<template>
  <div class="page-title">
    <div style="float: right" class="callout calendar-day">
      <div class="auto cell">
        <h6>
          {{ momentInstance.format("DD [de] MMMM [de] YYYY") }}
        </h6>
        <h6>
          {{ momentInstance.format("dddd[.] HH:mm:ss") }}
        </h6>
      </div>
    </div>
    <h1><i v-if="icon" :class="icon"></i> {{ main }}</h1>
    <h2>{{ sub }}</h2>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub"],
  data() {
    return {
      momentInstance: this.$moment(new Date()),
    };
  },
  mounted() {
    setInterval(() => {
      this.momentInstance = this.$moment(new Date());
    }, 1000);
  },
};
</script>

<style>
.page-title {
  color: #314657;
}

.page-title h1 h6 {
  margin: 0px;
}

.page-title h2 {
  color: #777;
  margin-top: 5px;
  font-size: 1.3rem;
}

.callout.calendar-day h6 {
  margin: 0;
}

.callout.calendar-day h6.light {
  color: #314657;
}
</style>

