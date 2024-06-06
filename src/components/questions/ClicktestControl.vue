<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Clicktest${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      :questionsTypes="`Clicktest${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      v-model="$store.state.savedAnswers[question.id]"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :comments="question.comments"
      :img="question.img"
      :required="question.required"
      :imgClick="question.imgClick"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import ClicktestSimple from "./clicktest/ClicktestSimple.vue";
import { getClicktest } from "@/fake/api";

export default {
  components: { ClicktestSimple },
  data() {
    return {
      arrayQuestions: [],
    };
  },
  mounted() {
    this.arrayQuestions = getClicktest();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>

<style scoped></style>
