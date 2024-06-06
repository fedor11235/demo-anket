<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`DistributionScale${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :img="question.img"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import QuestionTitle from "./base/QuestionTitle.vue";
import DistributionScaleSingle from "./distributionScale/DistributionScaleSingle.vue";
import DistributionScaleDouble from "./distributionScale/DistributionScaleDouble.vue";
import { getDistributionScale } from "@/fake/api";

export default {
  components: {
    QuestionTitle,
    DistributionScaleSingle,
    DistributionScaleDouble,
  },

  data() {
    return {
      arrayQuestions: [],
    };
  },

  mounted() {
    this.arrayQuestions = getDistributionScale();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>
