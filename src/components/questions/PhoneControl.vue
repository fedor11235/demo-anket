<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Text${question.type[0].toUpperCase() + question.type.slice(1)}`"
      :questionsTypes="`Text${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      v-model="$store.state.savedAnswers[question.id]"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :comments="question.comments"
      :img="question.img"
      :required="question.required"
      :questionDifficult="question.questionDifficult"
      :selects="question.selects"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import TextSimple from "./text/TextSimple.vue";
import { getPhone } from "@/fake/api";

export default {
  data() {
    return {
      arrayQuestions: [],
    };
  },
  components: { TextSimple },
  mounted() {
    this.arrayQuestions = getPhone();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>
