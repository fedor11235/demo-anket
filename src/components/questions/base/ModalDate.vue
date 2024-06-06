<template>
  <div class="modal-date">
    <div class="modal-date__header">
      <div
        class="modal-date__arrow modal-date__arrow--prev"
        @click="handlerPrevYear"
      >
        <i></i>
      </div>

      <div
        :class="[
          'modal-date__select',
          {
            'modal-date__select--open': isOpenDropdawnMonth,
          },
        ]"
        @click="isOpenDropdawnMonth = !isOpenDropdawnMonth"
      >
        <div class="modal-date__option">
          <div class="modal-date__option-title">{{ selectMonth.title }}</div>

          <i class="modal-date__option-icon"></i>
        </div>

        <div v-if="isOpenDropdawnMonth" class="modal-date__select-dropdown">
          <div
            v-for="option of optionsMonth"
            :key="option.id"
            class="modal-date__select-dropdown-item"
            @click="selectMonth = option"
          >
            {{ option.title }}
          </div>
        </div>
      </div>

      <div
        :class="[
          'modal-date__select',
          {
            'modal-date__select--open': isOpenDropdawnYear,
          },
        ]"
        @click="isOpenDropdawnYear = !isOpenDropdawnYear"
      >
        <div class="modal-date__option">
          <div class="modal-date__option-title">{{ selectYear.title }}</div>

          <i class="modal-date__option-icon"></i>
        </div>

        <div
          v-if="isOpenDropdawnYear"
          class="modal-date__select-dropdown"
          @scroll="handlersScrollYear"
        >
          <div
            v-for="option of optionsYear"
            :key="option.id"
            class="modal-date__select-dropdown-item"
            @click="selectYear = option"
          >
            {{ option.title }}
          </div>
        </div>
      </div>

      <div
        class="modal-date__arrow modal-date__arrow--next"
        @click="handlerNextYear"
      >
        <i></i>
      </div>
    </div>
    <div class="modal-date__body">
      <div
        class="modal-date__body-name"
        v-for="option of optionsDaysWeek"
        :key="option"
      >
        {{ option }}
      </div>
      <div
        v-for="(option, index) of optionsDaysDays"
        :key="index"
        :class="[
          'number',
          {
            'number--empty': option.type === 'empty',
            'number--active':
              option.month === selectDay.month &&
              option.year === selectDay.year &&
              option.number === selectDay.number,
          },
        ]"
        @click="handlerSelectDay(option)"
      >
        {{ option.number }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenDropdawnMonth: false,
      isOpenDropdawnYear: false,
      yearNumber: 7,
      selectMonth: {
        id: 0,
        value: 0,
        title: "Январь",
      },
      selectYear: {
        id: 0,
        value: 2024,
        title: 2024,
      },
      selectDay: {},
      optionsMonth: [
        {
          id: 0,
          value: 0,
          title: "Январь",
        },
        {
          id: 1,
          value: 1,
          title: "Февраль",
        },
        {
          id: 2,
          value: 2,
          title: "Март",
        },
        {
          id: 3,
          value: 3,
          title: "Апрель",
        },
        {
          id: 4,
          value: 4,
          title: "Май",
        },
        {
          id: 5,
          value: 5,
          title: "Июнь",
        },
        {
          id: 6,
          value: 6,
          title: "Июль",
        },
        {
          id: 7,
          value: 7,
          title: "Август",
        },
        {
          id: 8,
          value: 8,
          title: "Сентябрь",
        },
        {
          id: 9,
          value: 9,
          title: "Октябрь",
        },
        {
          id: 10,
          value: 10,
          title: "Ноябрь",
        },
        {
          id: 11,
          value: 11,
          title: "Декабрь",
        },
      ],
      optionsDaysWeek: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    };
  },
  computed: {
    optionsYear() {
      const arrayYear = [];
      for (let i = 0; i < this.yearNumber; i++) {
        arrayYear.push({
          id: i,
          value: 2024 - i,
          title: 2024 - i,
        });
      }
      return arrayYear;
    },
    optionsDaysDays() {
      const dayNumber =
        32 -
        new Date(this.selectYear.value, this.selectMonth.value, 32).getDate();
      const dayWeek = new Date(
        this.selectYear.value,
        this.selectMonth.value,
        0
      ).getDay();
      const dayArray = [];
      for (let day = 1; day <= dayNumber; day++) {
        dayArray.push({
          number: day,
          month: this.selectMonth.value,
          year: this.selectYear.value,
        });
      }
      if (dayWeek !== 0) {
        if (this.selectMonth.value === 0) {
          const dayWeekLastYear =
            32 - new Date(this.selectYear.value - 1, 11, 32).getDate();
          for (let day = 0; day < dayWeek; day++) {
            dayArray.unshift({ number: dayWeekLastYear - day, type: "empty" });
          }
        } else {
          const dayWeekLastYear =
            32 -
            new Date(
              this.selectYear.value,
              this.selectMonth.value - 1,
              32
            ).getDate();
          for (let day = 0; day < dayWeek; day++) {
            dayArray.unshift({ number: dayWeekLastYear - day, type: "empty" });
          }
        }
      }
      const dayLastWeek = new Date(
        this.selectYear.value,
        this.selectMonth.value,
        dayNumber
      ).getDay();
      if (dayLastWeek === 6) {
        return dayArray;
      } else {
        for (let day = 1; day <= 7 - dayLastWeek; day++) {
          dayArray.push({ number: day, type: "empty" });
        }
        return dayArray;
      }
    },
  },
  methods: {
    handlerSelectDay(day) {
      this.selectDay = day;
      this.$emit("selectDay", day);
    },
    handlersScrollYear(event) {
      if (
        event.target.scrollHeight ===
        event.target.scrollTop + event.target.clientHeight
      ) {
        this.yearNumber += 7;
      }
    },
    handlerPrevYear() {
      this.selectYear.id += 1;
      this.selectYear.value -= 1;
      this.selectYear.title -= 1;
    },
    handlerNextYear() {
      if (this.selectYear.id === 0) {
        return;
      }
      this.selectYear.id -= 1;
      this.selectYear.value += 1;
      this.selectYear.title += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-date {
  position: absolute;
  top: 0; /**/
  left: calc(100% + 10px);
  z-index: 2;
  color: #2b2b2b;
  border: 1px solid #dddddd;
  border-radius: 12px;
  background-color: white;
  padding: 20px;
  @media (max-width: 768px) {
    left: 0;
    top: calc(100% + 12px);
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    left: -10px;
    top: 25px;
    width: 20px;
    height: 10px;
    background: #fff;
    border: 1px solid #dddddd;
    transform: skewX(38deg) rotate(334deg);
    mix-blend-mode: lighten;
    @media (max-width: 768px) {
      top: -5px;
      right: 20px;
      left: unset;
    }
  }
}
.modal-date__header {
  align-items: center;
  display: flex;
  justify-content: center;
  column-gap: 7px;
}
.modal-date__body {
  display: grid;
  gap: 8px 20px;
  grid-template-columns: repeat(7, 1fr);
  @media (max-width: 425px) {
    gap: 8px;
  }
}

.modal-date__body-name {
  text-align: center;
  color: #000;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 4px;
}
.number {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #2b2b2b;
  min-width: 24px;
  min-height: 24px;
  border-radius: 4px;
  transition: all 0.3s ease;
  @media (hover: hover) {
    &:hover {
      background-color: rgba(30, 220, 26, 0.1);
    }
  }
}
.number--empty {
  color: #dddddd;
  pointer-events: none;
}
.number--active {
  color: #fff;
  font-weight: 600;
  background-color: #1edc1a;

  @media (hover: hover) {
    &:hover {
      color: #fff;
      font-weight: 600;
      background-color: #1edc1a;
    }
  }
}

.number--current {
  color: #fff;
  font-weight: 600;
  background-color: #1edc1a;

  @media (hover: hover) {
    &:hover {
      color: #fff;
      font-weight: 600;
      background-color: #1edc1a;
    }
  }
}

.modal-date__select {
  border: 1px solid currentColor;
  color: #2b2b2b;
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  min-width: 86px;

  &.modal-date__select--open {
    .modal-date__option-icon {
      transform: rotate(180deg);
    }
    .modal-date__select-dropdown {
      display: block;
    }
  }
}

.modal-date__option {
  padding: 12px 14px;
  gap: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (hover: hover) {
    &:hover {
      .modal-date__option-icon {
        background-image: url("../../../../public/img/type-questions/select-arrow-hover.svg");
      }
    }
  }
}

.modal-date__option-icon {
  display: block;
  width: 14px;
  height: 14px;
  background-image: url("../../../../public/img/type-questions/select-arrow.svg");
}

.modal-date__select-dropdown {
  display: none;
  background-color: #fff;
  width: calc(100% + 2px);
  left: -1px;
  position: absolute;
  top: calc(100% - 3px);
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid currentColor;
  border-radius: 0 0 4px 4px;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cbcbcb;
    border-radius: 18px;
  }
}

.modal-date__select-dropdown-item {
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 8px 14px;
  color: #2b2b2b;
  font-size: 12px;
  line-height: 16px;
  @media (hover: hover) {
    &:hover {
      background-color: rgba(30, 220, 26, 0.1);
    }
  }
}

.modal-date__arrow {
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  @media (hover: hover) {
    &:hover {
      background-color: rgba(30, 220, 26, 0.1);
    }
  }

  i {
    height: 10px;
    width: 18px;
    display: block;
    background: url("../../../../public/img/type-questions/select-arrow.svg")
      center center/cover no-repeat;
  }

  &.modal-date__arrow--prev {
    i {
      transform: rotate(90deg);
    }
  }

  &.modal-date__arrow--next {
    i {
      transform: rotate(-90deg);
    }
  }
}
</style>
