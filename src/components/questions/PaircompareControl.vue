<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Paircompare${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      :questionsTypes="`Paircompare${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      v-model="$store.state.savedAnswers[question.id]"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :comments="question.comments"
      :img="question.img"
      :required="question.required"
      :selects="question.selects"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import PaircompareSimple from "./paircompare/PaircompareSimple.vue";
import { getPaircompare } from "@/fake/api";

export default {
  components: {
    PaircompareSimple,
  },

  data() {
    return {
      arrayQuestions: [],
    };
  },
  mounted() {
    this.arrayQuestions = getPaircompare();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>

<style scoped></style>
