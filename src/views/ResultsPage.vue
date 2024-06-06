<template>
  <div class="page-wrapper">
    <div v-for="(answer, index) of $store.state.savedAnswers" :key="index">
      <div>{{ index }}: {{ answer }}</div>
    </div>
    <button
      class="default-btn default-btn--success mt-5"
      @click="handlerViewResultsPageBack"
    >
      Назад
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    handlerViewResultsPageBack() {
      this.$router.push({ name: "finish" });
    },
  },
  created() {
    this.$store.state.numberQuestions = 0;
  },
};
</script>
