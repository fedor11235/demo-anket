<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Multidropdown${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      :questionsTypes="`Multidropdown${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      v-model="$store.state.savedAnswers[question.id]"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :comments="question.comments"
      :img="question.img"
      :timer="question.timer"
      :selects="question.selects"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import MultidropdownSimple from "./multidropdown/MultidropdownSimple.vue";
import { getMultidropdown } from "@/fake/api";

export default {
  data() {
    return {
      arrayQuestions: [],
    };
  },
  components: {
    MultidropdownSimple,
  },
  mounted() {
    this.arrayQuestions = getMultidropdown();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>
