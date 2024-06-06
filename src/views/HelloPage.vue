<template>
  <div class="page-wrapper page-wrapper--hello">
    <h2 class="page-main-title">Здравствуйте!</h2>
    <div class="page-main-text">
      Примите, пожалуйста, участие в нашем опросе. Ваше мнение для нас очень
      важно!
    </div>
    <button class="default-btn default-btn--success" @click="nextPage">
      начать
    </button>
    <div class="hello-page__policy">
      Нажимая на кнопку начала или завершения анкеты, Вы соглашаетесь
      <a href="#">с правилами обработки персональных данных</a> и
      <a href="#">политикой конфиденциальности</a>
    </div>
  </div>
</template>

<script>
import { setHeader } from "@/mixins";

export default {
  mixins: [setHeader],
  methods: {
    nextPage() {
      this.$router.push({ name: "main" });
    },
  },
  created() {
    this.$store.state.numberQuestions = 0;
  },
};
</script>

<style scoped></style>
