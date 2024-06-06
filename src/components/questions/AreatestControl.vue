<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Areatest${question.type[0].toUpperCase() + question.type.slice(1)}`"
      :questionsTypes="`Areatest${
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
import AreatestSimple from "./areatest/AreatestSimple.vue";
import { getAreatest } from "@/fake/api";

export default {
  components: { AreatestSimple },
  data() {
    return {
      result: {},
      arrayQuestions: [],
    };
  },
  mounted() {
    this.arrayQuestions = getAreatest();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>

<style scoped></style>
