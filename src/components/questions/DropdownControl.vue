<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Dropdown${question.type[0].toUpperCase() + question.type.slice(1)}`"
      :questionsTypes="`Dropdown${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      v-model="$store.state.savedAnswers[question.id]"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :img="question.img"
      :timer="question.timer"
      :selects="question.selects"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import DropdownSimple from "./dropdown/DropdownSimple.vue";
import { getDropdown } from "@/fake/api";

export default {
  data() {
    return {
      arrayQuestions: [],
    };
  },

  components: {
    DropdownSimple,
  },

  mounted() {
    this.arrayQuestions = getDropdown();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>

<style scoped></style>
