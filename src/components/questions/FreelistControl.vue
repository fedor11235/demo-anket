<template>
  <div>
    <component
      v-for="question in arrayQuestions"
      :key="question.id"
      :is="`FreeList${question.type[0].toUpperCase() + question.type.slice(1)}`"
      :questionsTypes="`FreeList${
        question.type[0].toUpperCase() + question.type.slice(1)
      }`"
      v-model="$store.state.savedAnswers[question.id]"
      :question-number="question.questionNumber"
      :title="question.title"
      :description="question.description"
      :comments="question.comments"
      :img="question.img"
      :required="question.required"
      :limitation="question.limitation"
      :selects="question.selects"
      @finish="$store.commit('increment')"
      @clean="$store.commit('decrease')"
    ></component>
  </div>
</template>

<script>
import FreeListSimple from "./freeList/FreeListSimple.vue";
import { getFreeList } from "@/fake/api";

export default {
  data() {
    return {
      arrayQuestions: [],
      questions: [
        {
          id: 0,
          disabled: false,
          required: true,
          answers: [
            {
              id: 0,
              title: `Предложение 1`,
              required: true,
              src: `/img/type-questions/img-title3.png`,
            },
            {
              id: 1,
              title: `Предложение 2`,
              required: false,
            },
            {
              id: 2,
              title: `Предложение 3`,
              required: false,
              src: `/img/type-questions/img-title3.png`,
            },
          ],
        },
        {
          id: 1,
          disabled: false,
          required: false,
          answers: [
            {
              id: 0,
              title: `Предложение 1`,
              required: true,
            },
            {
              id: 1,
              title: `Предложение 2`,
              required: false,
              src: `/img/type-questions/img-title3.png`,
            },
            {
              id: 2,
              title: `Предложение 3`,
              required: false,
            },
          ],
        },
      ],
    };
  },
  components: { FreeListSimple },

  methods: {
    // addAnswer(q) {
    //     console.log(q);
    //     // q.answers.push(
    //     //     {
    //     //         id: q.answers.length + 1,
    //     //         title: `Предложение ${q.answers.length + 1}`,
    //     //         required: false,
    //     //     },
    //     // )
    // }
  },
  mounted() {
    this.arrayQuestions = getFreeList();
    this.$emit("setNumberQuestions", this.arrayQuestions.length);
  },
};
</script>

<style scoped></style>
