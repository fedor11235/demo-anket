<template>
  <div class="question question--order">
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
      :img="img"
      :required="required"
    />

    <div class="question-order-list">
      <draggable
        v-model="values"
        group="people"
        @start="drag = true"
        @end="drag = true"
      >
        <!-- <transition-group tag="div" name="slides"> -->
        <div
          class="question-order-wrapper"
          v-for="(item, index) in values"
          :key="item.id"
          @dragstart="onDragStart($event)"
          @dragend="onDragEnd($event)"
        >
          <!-- <div class="question-order-pseudo question-order-pseudo--before"></div> -->

          <div class="question-order-item-wrapper question-order-desktop">
            <div class="question-order-number">{{ item.id + 1 }}</div>

            <div class="question-order-item">
              <div class="question-order-item__thumb"></div>
              <div class="question-order-item__text">{{ item.text }}</div>
              <div class="question-order-item__overlay" v-if="item.src">
                <img :src="item.src" :alt="item.alt" />
                <a ref="linkImgPopup" :href="item.src">
                  <i></i>
                </a>
              </div>

              <div class="question-order-item__controls">
                <button
                  @click="handlerMoveUp(index)"
                  :class="[
                    'question-order-btn',
                    'question-order-btn--up',
                    { 'question-order-btn--disabled': index === 0 },
                  ]"
                >
                  <i></i>
                </button>
                <button
                  @click="handlerMoveDown(index)"
                  :class="[
                    'question-order-btn',
                    'question-order-btn--down',
                    {
                      'question-order-btn--disabled':
                        index === values.length - 1,
                    },
                  ]"
                >
                  <i></i>
                </button>
              </div>
            </div>
          </div>

          <div class="question-order-item-wrapper question-order-mobile">
            <div class="question-order-number">{{ item.id + 1 }}</div>
            <div class="question-order-item">
              <div class="question-order-item__top">
                <div class="question-order-item__thumb"></div>
                <div class="question-order-item__controls">
                  <button
                    class="question-order-btn question-order-btn--up question-order-btn--disabled"
                  >
                    <i></i>
                  </button>
                  <button class="question-order-btn question-order-btn--down">
                    <i></i>
                  </button>
                </div>
              </div>

              <div class="question-order-item__text">{{ item.text }}</div>
              <div class="question-order-item__overlay" v-if="item.src">
                <img :src="item.src" :alt="item.alt" />
                <a ref="linkImgPopup" :href="item.src">
                  <i></i>
                </a>
              </div>
            </div>
          </div>

          <!-- <div class="question-order-pseudo question-order-pseudo--after"></div> -->
        </div>
        <!-- </transition-group> -->
      </draggable>
    </div>

    <button
      class="default-btn default-btn--success mt-5"
      @click="handlerFinish"
    >
      Готово
    </button>

    <!-- <div class="question-order-pseudo question-order-pseudo--after"></div> -->
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import draggable from "vuedraggable";
import $ from "jquery";

export default {
  props: [
    "questionNumber",
    "title",
    "description",
    "comments",
    "img",
    "required",
    "questionDifficult",
    "selects",
    "value",
    "questionsTypes",
  ],

  components: { QuestionTitle, draggable },

  data() {
    return {
      isSelect: false,
      isDragging: false,
      values: [],
    };
  },

  methods: {
    handlerFinish() {
      if (!this.isSelect) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: this.values,
        });
        this.$emit("finish");
      }
      this.isSelect = true;
    },
    onDragStart(event) {
      event.currentTarget.classList.add("question-order-wrapper--active");
    },
    onDragEnd(event) {
      event.currentTarget.classList.remove("question-order-wrapper--active");
    },
    handlerMoveUp(index) {
      if (index === 0) return;
      const temp = this.values[index];
      const temp2 = this.values[index - 1];
      this.values.splice(index - 1, 1, temp);
      this.values.splice(index, 1, temp2);
    },
    handlerMoveDown(index) {
      if (index === this.values.length - 1) return;
      const temp = this.values[index];
      const temp2 = this.values[index + 1];
      this.values.splice(index + 1, 1, temp);
      this.values.splice(index, 1, temp2);
    },
  },

  created() {
    this.values = this.selects;
  },

  mounted() {
    /* eslint-disable */
    this.$question = $(this.$refs.linkImgPopup);
    this.$question.fancybox({});
  },
};
</script>

<style scoped>
.slides-move {
  transition: all 0.3s;
}
</style>
