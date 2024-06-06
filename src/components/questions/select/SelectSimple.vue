<template>
  <div
    :class="[
      'question',
      'question--select',
      { 'question--disabled': values.disabled },
    ]"
  >
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :img="img"
      :required="required"
    />
    <div class="question-list-wrapper">
      <div
        v-for="select of selects"
        :key="select.id"
        :class="[
          'question-list',
          { 'question-list--2cols': select.columnsNumber === 2 },
          { 'question-list--3cols': select.columnsNumber === 3 },
        ]"
      >
        <label
          v-for="value of select.selects"
          :key="value.id"
          :class="[
            'question__element',
            { 'question__element--img': value.type === 'img' },
            { 'question__element--textarea': value.type === 'area' },
            {
              'question__element--active': values.selects.find(
                (elem) => elem.id === value.id
              )?.isActive,
            },
          ]"
          @click.prevent="isActiveMeth2(value.id)"
        >
          <span class="question__element-text"> {{ value.title }}</span>

          <input name="radio" type="radio" />
          <CustomInput :type="value.type" :src="value.img" />
        </label>
      </div>
    </div>

    <DifficultControl :question="values" />
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import CustomInput from "../base/CustomInput.vue";
import DifficultControl from "../base/DifficultControl.vue";

export default {
  components: { QuestionTitle, DifficultControl, CustomInput },
  props: [
    "questionNumber",
    "title",
    "description",
    "img",
    "required",
    "comments",
    "selects",
    "value",
    "questionsTypes",
  ],
  data() {
    return {
      isSelect: false,
      values: {
        disabled: false,
        selects: [],
      },
    };
  },
  methods: {
    isActiveMeth2(id) {
      const value = this.values.selects.find((elem) => elem.id === id);
      if (value) {
        value.isActive = !value.isActive;
        if (value.isActive) {
          for (const select of this.values.selects) {
            if (select.id === id) {
              continue;
            }
            select.isActive = false;
          }
        }
      } else {
        this.values.selects.push({ id, isActive: true });
        for (const select of this.values.selects) {
          if (select.id === id) {
            continue;
          }
          select.isActive = false;
        }
      }
    },
  },
  watch: {
    values: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });
        for (const key of val.selects) {
          if (key.isActive || this.values.disabled) {
            if (this.isSelect) {
              return;
            }
            this.isSelect = true;
            this.$emit("finish");
            return;
          }
        }
        this.isSelect = false;
        this.$emit("clean");
      },
      deep: true,
    },
  },
};
</script>
