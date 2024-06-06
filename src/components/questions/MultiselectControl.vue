<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Multiselect${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      :questionsTypes="`Multiselect${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      v-model="$store.state.savedAnswers[question.id]"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :img="question.img"
      :required="question.required"
      :selects="question.selects"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import MultiselectSimple from "./multiselect/MultiselectSimple.vue";
import { getMultiselect } from "@/fake/api";

export default {
  components: {
    MultiselectSimple,
  },
  data() {
    return {
      arrayQuestions: [],
      questions: [
        {
          id: 0,
          disabled: false,
          question: [
            {
              id: 0,
              type: "default",
              isActive: false,
            },
            {
              id: 1,
              type: "default",
              isActive: false,
            },
            {
              id: 2,
              type: "default",
              isActive: false,
            },
            {
              id: 3,
              type: "default",
              isActive: false,
            },
            {
              id: 4,
              type: "nothing",
              isActive: false,
            },
          ],
        },
        {
          id: 1,
          disabled: false,
          question: [
            {
              id: 0,
              type: "default",
              isActive: false,
            },
            {
              id: 1,
              type: "default",
              isActive: false,
            },
            {
              id: 2,
              type: "default",
              isActive: false,
            },
            {
              id: 3,
              type: "default",
              isActive: false,
            },
            {
              id: 4,
              type: "default",
              isActive: false,
            },
          ],
        },
        {
          id: 2,
          disabled: false,
          question: [
            {
              id: 0,
              type: "default",
              isActive: false,
            },
            {
              id: 1,
              type: "default",
              isActive: false,
            },
            {
              id: 2,
              type: "default",
              isActive: false,
            },
            {
              id: 3,
              type: "default",
              isActive: false,
            },
            {
              id: 4,
              type: "default",
              isActive: false,
            },
          ],
        },
        {
          id: 3,
          disabled: false,
          question: [
            {
              id: 0,
              type: "default",
              isActive: false,
            },
            {
              id: 1,
              type: "default",
              isActive: false,
            },
            {
              id: 2,
              type: "default",
              isActive: false,
            },
            {
              id: 3,
              type: "default",
              isActive: false,
            },
            {
              id: 4,
              type: "default",
              isActive: false,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.arrayQuestions = getMultiselect();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>
