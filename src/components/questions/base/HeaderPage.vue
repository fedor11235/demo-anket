<template>
  <div>
    <div
      class="sf-header sf-header--desk"
      ref="header"
      :class="[headerClasses, { scrolled: isScrolled }]"
    >
      <div class="sf-header__up">
        <div class="sf-header__left-empty"></div>

        <div class="sf-header__up-wrapper">
          <div class="sf-header__up-info">
            Доступна <a href="#">новая версия анкеты</a>. При переходе текущие
            ответы будут сброшены!
          </div>
        </div>
      </div>

      <div class="sf-header__main-wrap">
        <div class="sf-header__middle" v-if="logo">
          <div class="sf-header__left-empty"></div>
          <div class="sf-header__middle-wrapper">
            <img
              class="sf-header__middle-logo"
              src="/img/type-questions/logo-comp.png"
              alt="logo"
            />
            <img
              class="sf-header__middle-logo"
              src="/img/type-questions/logo-comp.png"
              alt="logo"
            />
          </div>
        </div>

        <div class="sf-header__bottom">
          <div class="sf-header__left-empty"></div>
          <div class="sf-header__bottom-wrapper">
            <div class="sf-header__bottom-title" v-if="title">
              Все типы вопросов в одном месте
            </div>
            <div class="sf-header__bottom-info" v-if="info">
              <div class="sf-header__bottom-info-item">
                {{ numberRubles }} рублей
              </div>
              <div class="sf-header__bottom-info-item">
                {{ numberQuestions }} вопроса
              </div>
              <div
                class="sf-header__bottom-info-item sf-header__bottom-info-item--mod"
              >
                {{ Math.trunc($store.getters.completionPercentage) }}% пройдено
              </div>
            </div>
          </div>

          <div class="sf-header__prog-bar" v-if="progres">
            <div
              class="sf-header__prog-bar-item"
              :style="{ width: `${$store.getters.completionPercentage}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sf-header sf-header--mob"
      :class="[headerClasses, { scrolled: isScrolled }]"
    >
      <div class="sf-header__main-wrap-mob">
        <div class="sf-header__up" v-if="logo">
          <div class="sf-header__middle-wrapper">
            <img
              class="sf-header__middle-logo"
              src="/img/type-questions/logo-comp.png"
              alt="logo"
            />
          </div>
        </div>

        <div class="sf-header__under-wrap">
          <div class="sf-header__middle">
            <div class="sf-header__bottom-wrapper">
              <div class="sf-header__bottom-title" v-if="title">
                Все типы вопросов в одном месте
              </div>
              <div class="sf-header__bottom-info" v-if="info">
                <div class="sf-header__bottom-info-item">20 рублей</div>
                <div class="sf-header__bottom-info-item">23 вопроса</div>
                <div
                  class="sf-header__bottom-info-item sf-header__bottom-info-item--mod"
                >
                  {{ Math.trunc($store.getters.completionPercentage) }}%
                  пройдено
                </div>
              </div>
            </div>

            <div class="sf-header__prog-bar" v-if="progres">
              <div
                class="sf-header__prog-bar-item"
                :style="{ width: `${$store.getters.completionPercentage}%` }"
              ></div>
            </div>
          </div>

          <div
            class="sf-header__bottom sf-header__bottom--scroll"
            :style="{ transform: 'translateY(' + -scrolledFromTop + 'px)' }"
          >
            <div class="sf-header__up-info">
              Доступна <a href="#">новая версия анкеты</a>. При переходе текущие
              ответы будут сброшены!
            </div>
          </div>
        </div>
      </div>

      <div class="sf-header__bottom">
        <div class="sf-header__up-info">
          Доступна <a href="#">новая версия анкеты</a>. При переходе текущие
          ответы будут сброшены!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: {
    numberQuestions: {
      type: Number,
      default: 0,
    },
    numberRubles: {
      type: Number,
      default: 0,
    },
    logo: {
      type: Boolean,
      required: true,
    },
    title: {
      type: Boolean,
      required: true,
    },
    progres: {
      type: Boolean,
      required: true,
    },
    info: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      isScrolled: false,
      questionsWrapper: null,
      // widthProgresBar: 0,
      scrolledFromTop: 0,
    };
  },

  mounted() {
    this.questionsWrapper = document.querySelector(".questions-wrapper");
    console.log("this.questionsWrapper: ", this.questionsWrapper);
    this.$emit("headerHeight", this.$refs.header.clientHeight);
  },

  computed: {
    headerClasses() {
      if (!this.title && !this.info) {
        return "sf-header--empty";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const headerWrapper = document.querySelector(
        ".sf-header__main-wrap"
      ).offsetHeight;
      const headerHeight =
        document.querySelector(".sf-header__up").offsetHeight;

      if (window.innerWidth <= 425) {
        if (window.scrollY >= 40) {
          console.log("1-lap");
          const headerHeightMob =
            document.querySelector(".sf-header.sf-header--mob .sf-header__up")
              .offsetHeight + 20;
          this.scrolledFromTop = window.scrollY - headerHeightMob + 20;
          this.isScrolled = true;
          const headerWrapperMob1 = document.querySelector(
            ".sf-header.sf-header--mob .sf-header__middle"
          ).offsetHeight;
          const headerWrapperMob2 = document.querySelector(
            ".sf-header__bottom.sf-header__bottom--scroll"
          ).offsetHeight;
          document.querySelector(
            ".sf-header__bottom.sf-header__bottom--scroll"
          ).style.top = headerWrapperMob1 - 10 + "px";
          document.querySelector(".questions-wrapper").style.paddingTop =
            headerWrapperMob1 + headerWrapperMob2 + "px";
        } else {
          console.log("2-lap");
          this.isScrolled = false;
          document.querySelector(".questions-wrapper").style.paddingTop = 0;
        }
      } else {
        if (window.scrollY >= headerHeight) {
          console.log("3-lap", window.scrollY, headerHeight);
          this.isScrolled = true;
          document.querySelector(".questions-wrapper").style.paddingTop =
            headerWrapper + "px";
        } else {
          console.log("4-lap", window.scrollY, headerHeight);
          this.isScrolled = false;
          document.querySelector(".questions-wrapper").style.paddingTop = 0;
        }
      }
    },
  },
};
</script>
