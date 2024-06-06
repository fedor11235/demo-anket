<template>
  <div class="question question--clicktest">
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
      :img="img"
      :required="required"
    />

    <div class="clicktest-wrapper" @click="handlerAddPoint">
      <img class="clicktest__desktop-img" :src="imgClick" alt="iphone_black" />

      <a
        class="clicktest__mobile-img"
        ref="linkImg"
        :href="imgClick"
        data-fancybox
        data-caption="Single image"
      >
        <img :src="imgClick" />
      </a>

      <span
        v-for="(point, index) in points"
        :key="index"
        @click.stop="handlerClickPoint(index)"
        :style="{ left: point.left, top: point.top }"
      ></span>
    </div>
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
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
    "imgClick",
    "value",
    "questionsTypes",
  ],
  components: { QuestionTitle },
  data() {
    return {
      isSelect: false,
      points: [],
    };
  },
  methods: {
    handlerClickPoint(index) {
      this.points.splice(index, 1);
    },
    handlerAddPoint(event) {
      this.points.push({
        top: `${event.layerY - 8}px`,
        left: `${event.layerX - 8}px`,
      });
    },
  },
  mounted() {
    /* eslint-disable */
    this.$question = $(this.$refs.linkImg);
    this.$question.fancybox({});

    /* eslint-disable */
    this.$question1 = $(this.$refs.linkImg1);
    this.$question1.fancybox({});
  },
  watch: {
    points: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });
        if (val.length > 0) {
          if (this.isSelect) {
            return;
          }
          this.isSelect = true;
          this.$emit("finish");
          return;
        }

        this.isSelect = false;
        this.$emit("clean");
      },
      deep: true,
    },
  },
};
</script>
