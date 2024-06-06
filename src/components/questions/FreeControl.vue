<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Free${question.type[0].toUpperCase() + question.type.slice(1)}`"
      :questionsTypes="`Free${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      v-model="$store.state.savedAnswers[question.id]"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :comments="question.comments"
      :img="question.img"
      :required="question.required"
      :timer="question.timer"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import FreeSimple from "./free/FreeSimple.vue";
import { getFree } from "@/fake/api";

export default {
  data() {
    return {
      arrayQuestions: [],
    };
  },
  components: { FreeSimple },
  mounted() {
    this.arrayQuestions = getFree();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>

<style scoped></style>
