<template>
  <div>
    <div
      v-for="select of question"
      :key="select.id"
      class="question-list question-list--2cols"
    >
      <template v-if="lastRow > select.id">
        <label
          v-for="question of select.questionsGroup"
          :key="question.id"
          class="question__element question__element--img"
          @click.prevent="isActiveMeth2(select.id, question.id)"
          :class="{
            'question__element--active': selects.find(
              (elem) => elem.i === select.id && elem.j === question.id
            ),
          }"
        >
          <span class="question__element-text">{{ question.title }}</span>
          <input name="radio" type="radio" />
          <CustomInput type="img" :src="question.img" />
        </label>
      </template>
    </div>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";

export default {
  components: { CustomInput },
  props: ["question", "value"],

  data() {
    return {
      selects: [],
      lastRow: 1,
    };
  },

  methods: {
    isActiveMeth2(i, j) {
      const select = this.selects.find((elem) => elem.i === i && elem.j === j);
      if (select) {
        this.selects = this.selects.filter(
          (elem) => !(elem.i === select.i && elem.j === select.j)
        );
      } else {
        this.selects.push({ i, j });
        if (this.lastRow < i + 2) {
          this.lastRow = i + 2;
        }
      }
      this.$emit("input", this.selects);
    },
  },
};
</script>

<style scoped></style>
