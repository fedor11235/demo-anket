<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`Select${question.type[0].toUpperCase() + question.type.slice(1)}`"
      :questionsTypes="`Select${
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
import SelectSimple from "./select/SelectSimple.vue";
import { getSelect } from "@/fake/api";

export default {
  components: {
    SelectSimple,
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
              type: "default",
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
  methods: {
    isActiveMeth2(i, j) {
      this.questions.map((items) => {
        if (items.id === i) {
          items.question.map((item) => {
            item.id === j ? (item.isActive = true) : (item.isActive = false);
          });
        }
      });
    },
  },
  mounted() {
    this.arrayQuestions = getSelect();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>
