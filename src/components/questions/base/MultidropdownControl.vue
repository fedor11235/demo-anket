<template>
  <div>
    <div
      ref="dropdown"
      class="dropdown"
      :class="[
        { 'dropdown--active': values.isOpen },
        {
          'dropdown--noempty': values.values.length,
        },
      ]"
    >
      <div ref="droptext" class="dropdown__text" @click="toggleDropdown">
        Выберите
      </div>
      <div class="dropdown__head-items" v-if="values.values.length">
        <div
          class="dropdown__head-item"
          v-for="(checkedName, index) in values.values"
          :key="index"
        >
          <p>{{ checkedName }}</p>
          <button @click.prevent="unchecked(checkedName)"></button>
        </div>
      </div>
      <div class="dropdown-inner-wrapper">
        <div class="dropdown-inner">
          <i class="dropdown-inner__icon"></i>
          <input type="text" placeholder="Выберите" />
          <button @click="arrowClose"><i></i></button>
        </div>
      </div>
      <div class="dropdown-items" ref="dropItems" v-show="values.isOpen">
        <label
          class="question__element"
          v-for="(option, id) in question.options"
          :key="id"
          @click="checkInNothingAndOtherType(option)"
          :class="{
            'question__element--active': values.values.includes(option.label),
          }"
        >
          <!--                    :class="{ 'question__element--active': question.selectedOption && (Array.isArray(question.selectedOption) ? question.selectedOption.includes(option.label) : false) }"-->
          <span class="question__element-text">{{ option.label }}</span>

          <!-- TODO раскомметить -->
          <input
            :value="option.label"
            :id="option.value"
            type="checkbox"
            @input="handlerSelectValue(option.label)"
          />
          <!-- v-model="question.selectedOption" -->
          <CustomInput />
        </label>
      </div>
    </div>

    <template v-if="otherTextarea">
      <label class="question__element question__element--textarea">
        <CustomInput type="area" />
      </label>
    </template>

    <!--        <template v-if="question.textarea">-->
    <!--            <label class="question__element question__element&#45;&#45;textarea">-->
    <!--                <CustomInput type="area"/>-->
    <!--            </label>-->
    <!--        </template>-->
  </div>
</template>

<script>
/* eslint-disable */
import CustomInput from "./CustomInput.vue";

export default {
  components: { CustomInput },
  props: ["question", "values"],

  data() {
    return {
      otherTextarea: false,
    };
  },

  methods: {
    checkInNothingAndOtherType(opt) {
      if (opt.value === "nothing") {
        // this.question.selectedOption = [];
        this.values.textarea = false;
        this.otherTextarea = false;
      }
      if (opt.value === "other") {
        this.values.textarea = true;
        // this.question.selectedOption = [];
        this.otherTextarea = true;
      } else {
        // this.otherTextarea = false;
        this.values.textarea = false;
      }
    },

    handlerSelectValue(selectedOption) {
      this.$emit("selectedOption", selectedOption);
    },

    unchecked(curr) {
      this.values.values = this.values.values.filter((name) => name !== curr);
    },

    toggleDropdown() {
      this.values.isOpen = !this.values.isOpen;
      this.$refs.droptext.classList.remove("dropdown__text--active");
    },

    arrowClose() {
      this.values.isOpen = !this.values.isOpen;
    },
  },

  watch: {
    "values.values": function (val) {
      if (!val.includes("Другое")) {
        this.otherTextarea = false;
      }
    },
  },
};
</script>
