<template>
  <div class="question question--scale question--scale-range">
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
    />
    <div ref="sliders" class="question__wrapper">
      <div class="question__table-wrapper">
        <div class="question__range-type">
          <div class="question__range-side">Беспокоен</div>
          <div class="question__range-wrapper">
            <input type="number" ref="slider1" />
          </div>
          <div class="question__range-side">Спокоен</div>
        </div>

        <div class="question__range-type">
          <div class="question__range-side">Незаинтересован</div>
          <div class="question__range-wrapper">
            <input type="number" ref="slider2" />
          </div>
          <div class="question__range-side">Заинтересован</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import $ from "jquery";

export default {
  components: { QuestionTitle },
  props: [
    "isActive",
    "questionNumber",
    "title",
    "description",
    "comments",
    "value",
    "questionsTypes",
  ],
  data() {
    return {
      allSelect: 0,
      selectValue: [],
    };
  },
  mounted() {
    $(this.$refs.slider1).ionRangeSlider({
      skin: "big",
    });

    $(this.$refs.slider2).ionRangeSlider({
      skin: "big",
      grid: true,
      min: 0,
      max: 10,
      step: 1,
      values: [
        "Feb",
        "Mar",
        "Apr",
        "Feb",
        "Mar",
        "Apr",
        "Feb",
        "Mar",
        "Apr",
        "Feb",
      ],
    });

    $(".irs-handle").on("mousedown", (e) => {
      if ($(".irs-handle").hasClass("state_hover")) {
        let single = $(e.target).closest(".irs").find(".irs-single ");
        single.css("display", "block");
      }
    });

    $(this.$refs.sliders).on("mouseup", () => {
      $(".irs-single ").css("display", "none");
      const irsBars = this.$refs.sliders?.getElementsByClassName("irs-handle");
      if (irsBars.length > 0) {
        this.selectValue = [];
        for (let index = 0; index < irsBars.length; index++) {
          this.selectValue.push({
            id: index,
            value: irsBars[index].style.left,
          });
        }
      }
    });
  },
  watch: {
    selectValue: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });
        if (val.length > 0) {
          if (val.value !== "0%") {
            this.allSelect++;
          }
          if (this.allSelect === 1) {
            this.$emit("finish");
            return;
          }
        }
      },
      deep: true,
    },
  },
};
</script>
