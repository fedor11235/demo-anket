<template>
  <label
    class="question__element question__element--dif"
    @click.prevent="clickDifficult"
  >
    <div class="question__element-text">Затрудняюсь ответить</div>
    <input name="radio" type="radio" />
    <CustomInput />
  </label>
</template>

<script>
/* eslint-disable */
import CustomInput from "./CustomInput.vue";

export default {
  components: {
    CustomInput,
  },
  props: {
    question: {
      type: Object,
    },
  },

  methods: {
    clickDifficult(e) {
      this.question.disabled = !this.question.disabled;
      if (this.question.options && this.question.selectedOption) {
        if (Array.isArray(this.question.selectedOption)) {
          // this.question.selectedOption = [];

          let textarea = document.querySelector(
            ".question__element.question__element--textarea"
          );
          if (textarea) {
            textarea.style.display = "block";
          }
        } else {
          this.question.selectedOption = null;
        }
        let texts = document.querySelectorAll(".dropdown__text");
        texts[this.question.id].classList.remove("dropdown__text--active");
        document.querySelectorAll(".dropdown-item").forEach((item) => {
          item.classList.remove("dropdown-item--active");
        });
      }

      // if (this.question.question)
      // {
      //     this.question.question.forEach(q => {
      //         q.isActive = false;
      //         if (q.questionsGroup)
      //         {
      //             q.questionsGroup.forEach(j => {
      //                 j.isActive = false;
      //             });
      //         }
      //     });
      // }

      e.currentTarget.classList.toggle("question__element--active");
    },
  },
};
</script>

<style scoped></style>
