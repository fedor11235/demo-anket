<template>
  <div
    class="question question--scale question--scale-range question--scale-range-multiple"
  >
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :img="img"
    />
    <div ref="sliders" class="question-list-wrapper">
      <div class="question-list">
        <div class="question__element">
          <div class="question__range-type">
            <div class="question__range-sides-mob">
              <div class="question__range-side-mob">Беспокоен</div>
              <div class="question__range-side-mob">Спокоен</div>
            </div>
            <div class="question__range-side">Беспокоен</div>
            <div class="question__range-wrapper">
              <input type="number" ref="slider1" />
            </div>
            <div class="question__range-side">Спокоен</div>
          </div>

          <div class="question__range-type">
            <div class="question__range-sides-mob">
              <div class="question__range-side-mob">Незаинтересован</div>
              <div class="question__range-side-mob">Заинтересован</div>
            </div>
            <div class="question__range-side">Незаинтересован</div>
            <div class="question__range-wrapper">
              <input type="number" ref="slider2" />
            </div>
            <div class="question__range-side">Заинтересован</div>
          </div>
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
  props: ["questionNumber", "title", "description", "img"],
  data() {
    return {
      allSelect: 0,
      selectValue: [],
    };
  },
  mounted() {
    $(this.$refs.slider1).ionRangeSlider({
      skin: "big",
      values: [
        "Беспокоен",
        "не очень спокоен",
        "чуть спокоен",
        "средне спокоен",
        "спокоен",
      ],
    });

    $(this.$refs.slider2).ionRangeSlider({
      skin: "big",
      grid: true,
      min: 0,
      max: 10,
      step: 1,
      values: [
        "Незаинтересован",
        "немного заинтересован",
        "чуть более заинтересован",
        "средне заинтересован",
        "заинтересован",
      ],
    });

    $(".irs-handle")
      .on("mousedown touchstart", function (e) {
        if ($(".irs-handle").hasClass("state_hover")) {
          let single = $(e.target).closest(".irs").find(".irs-single ");
          let from = $(e.target).closest(".irs").find(".irs-from ");
          let to = $(e.target).closest(".irs").find(".irs-to ");
          single.css("display", "block");
          from.css("display", "block");
          to.css("display", "block");
        }
      })
      .on("touchend", () => {
        $(".irs-single ").css("display", "none");
        $(".irs-from ").css("display", "none");
        $(".irs-to ").css("display", "none");
        const irsBars = this.$refs.sliders.getElementsByClassName("irs-handle");
        if (irsBars.length > 0) {
          this.selectValue = [];
          for (let index = 0; index < irsBars.length; index++) {
            this.selectValue.push({
              id: index,
              value: irsBars[index].style.width,
            });
          }
        }
      });

    $(this.$refs.sliders).on("mouseup", () => {
      $(".irs-single ").css("display", "none");
      $(".irs-from ").css("display", "none");
      $(".irs-to ").css("display", "none");
      const irsBars = this.$refs.sliders.getElementsByClassName("irs-handle");
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
        if (val.length > 0) {
          if (val.value !== "0%") {
            this.allSelect++;
          }
          if (this.allSelect === 2) {
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
