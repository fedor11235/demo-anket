<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :questionsTypes="`Scale${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      :is="`Scale${question.type[0].toUpperCase() + question.type.slice(1)}`"
      :is-active="isActive"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :comments="question.comments"
      :scale="question.scale"
      v-model="$store.state.savedAnswers[question.id]"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import ScaleStar from "./scale/ScaleStar.vue";
import ScaleRedSmiley from "./scale/ScaleRedSmiley.vue";
import ScaleWhiteSmiley from "./scale/ScaleWhiteSmiley.vue";
import ScaleFoxSmiley from "./scale/ScaleFoxSmiley.vue";
import ScaleWord from "./scale/ScaleWord.vue";
import ScaleNumber from "./scale/ScaleNumber.vue";
import ScaleNumberColor from "./scale/ScaleNumberColor.vue";
import ScaleRange from "./scale/ScaleRange.vue";
import { getScale } from "@/fake/api";

export default {
  components: {
    ScaleStar,
    ScaleRedSmiley,
    ScaleWhiteSmiley,
    ScaleFoxSmiley,
    ScaleWord,
    ScaleNumber,
    ScaleNumberColor,
    ScaleRange,
  },

  data() {
    return {
      isActive: false,
      arrayQuestions: [],
    };
  },

  mounted() {
    this.arrayQuestions = getScale();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>

<style scoped></style>
