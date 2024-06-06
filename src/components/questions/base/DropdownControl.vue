<template>
  <div>
    <div
      ref="dropdown"
      class="dropdown"
      :class="{ 'dropdown--active': isOpen }"
    >
      <div ref="droptext" class="dropdown__text" @click.stop="toggleDropdown">
        {{ selectedOption ? selectedOption.label : "Выберите" }}
      </div>

      <div class="dropdown-inner-wrapper">
        <div class="dropdown-inner">
          <i class="dropdown-inner__icon"></i>
          <input type="text" placeholder="Выберите" />
          <button @click.stop="arrowClose"><i></i></button>
        </div>
      </div>
      <div class="dropdown-items" ref="dropItems" v-show="isOpen">
        <button
          class="dropdown-item"
          v-for="option in question.options"
          :key="option.value"
          @click.stop="selectOption($event, option)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>

    <label
      v-if="!isNotCustom"
      v-show="selectedOption && selectedOption.value === 'other'"
      class="question__element question__element--textarea"
    >
      <CustomInput type="area" />
    </label>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";

export default {
  components: {
    CustomInput,
  },
  props: ["question", "value", "isNotCustom"],
  data() {
    return {
      isOpen: false,
      selectedOption: "",
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      this.$refs.droptext.classList.remove("dropdown__text--active");
    },

    arrowClose() {
      this.isOpen = !this.isOpen;
      if (this.selectedOption) {
        this.$refs.droptext.classList.add("dropdown__text--active");
      }
    },

    selectOption(e, option) {
      if (option.value !== "nothing" || option.value !== "other") {
        this.isOpen = false;
        this.selectedOption = option;
        this.$emit("input", option);
        const children = this.$refs.dropItems.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.remove("dropdown-item--active");
        }
        e.target.classList.add("dropdown-item--active");
        this.$refs.droptext.classList.add("dropdown__text--active");
      } else {
        this.selectedOption = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap";
.dropdown {
  min-height: 52px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  background: #fff;
  @include media-breakpoint-down(xs) {
    border-radius: 8px;
  }
  + label {
    margin-top: 12px;
  }

  .dropdown__text {
    min-height: 52px;
    padding: 14px 55px 14px 16px;
    position: relative;
    z-index: 0;
    cursor: pointer;
    border-radius: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    @include media-breakpoint-down(xs) {
      padding: 17px 55px 17px 16px;
      font-size: 14px;
      line-height: 16px;
      border-radius: 8px;
    }

    &::after {
      position: absolute;
      content: "";
      right: 16px;
      top: calc(50% - 10px);
      bottom: 0;
      width: 20px;
      height: 20px;
      display: block;
      transform: rotate(180deg);
      background: url("@/assets/svg/dropdown-button.svg") center center/contain
        no-repeat;
    }

    &.dropdown__text--active {
      position: absolute;
      font-weight: 600;
      background: #1edc1a;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &::after {
        transform: rotate(0deg);
        background: url("@/assets/svg/dropdown-button-w.svg") center
          center/contain no-repeat;
      }
    }
  }

  .dropdown-inner__icon {
    display: none;
  }

  &.dropdown--active {
    .dropdown-items {
      position: absolute;
      width: 100%;
      border-left: 1px solid #dddddd;
      border-right: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      border-radius: 0 0 12px 12px;
      z-index: 1;
      top: calc(100% - 7px);
    }
    .dropdown__text {
      display: none;
    }

    .dropdown-inner {
      display: flex;

      &::after {
        transform: rotate(0deg);
      }
    }

    .dropdown-items {
      display: block;
    }
  }
}
.dropdown-inner-wrapper {
  align-items: center;
}

.dropdown-inner {
  min-height: 52px;
  position: relative;
  border-radius: 12px 12px 0 0;
  padding-left: 16px;
  display: none;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ddd;

  .dropdown-inner__icon {
    display: block;
    min-width: 20px;
    width: 20px;
    height: 20px;
    background: url("@/assets/svg/search-icon.svg") center center/contain
      no-repeat;
    margin-right: 16px;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #2b2b2b;
    @include media-breakpoint-down(xs) {
      font-size: 14px;
      line-height: 16px;
    }

    &::placeholder {
      color: #dddddd;
    }
  }

  button {
    padding: 0;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    margin: 15px 16px;
    i {
      width: 20px;
      height: 20px;
      background: url("@/assets/svg/dropdown-button.svg") center center/contain
        no-repeat;
    }
  }
}

.dropdown-items {
  max-height: 520px;
  overflow-y: auto;
}

.dropdown-item {
  white-space: inherit;
  background: #ffffff;
  border-top: 1px solid #dddddd;
  min-height: 52px;
  padding: 13px 16px;
  color: #2b2b2b;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @include media-breakpoint-down(xs) {
    font-size: 14px;
    line-height: 16px;
    min-height: 44px;
  }

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(30, 220, 26, 0.2),
        rgba(30, 220, 26, 0.2)
      ),
      linear-gradient(0deg, #ffffff, #ffffff), #f5f5f5;
  }

  &:last-child {
    border-radius: 0 0 12px 12px;
    @include media-breakpoint-down(xs) {
      border-radius: 0 0 8px 8px;
    }
  }

  &.dropdown-item--active {
    font-weight: 600;
    background: #1edc1a;
    color: #fff;
  }
}
</style>
