export const setHeader = {
  methods: {
    setOffsetHeader() {
      if (this.$route.name === "main") {
        const questions = document.querySelector(".questions");
        const sfHeaderBottom = document.querySelector(".sf-header__bottom");
        const sfHeaderMiddle = document.querySelector(".sf-header__middle");
        const sfHeaderUp = document.querySelector(".sf-header__up");
        if (window.innerWidth <= 575.98) {
          sfHeaderBottom.style.gridTemplateColumns = `${
            questions.offsetLeft + 20
          }px 1fr`;
          sfHeaderMiddle.style.gridTemplateColumns = `${
            questions.offsetLeft + 20
          }px 1fr`;
          sfHeaderUp.style.gridTemplateColumns = `${
            questions.offsetLeft + 20
          }px 1fr`;
        } else if (window.innerWidth <= 767.98) {
          sfHeaderBottom.style.gridTemplateColumns = `${
            questions.offsetLeft + 40
          }px 0.775fr`;
          sfHeaderMiddle.style.gridTemplateColumns = `${
            questions.offsetLeft + 40
          }px 0.775fr`;
          sfHeaderUp.style.gridTemplateColumns = `${
            questions.offsetLeft + 40
          }px 0.775fr`;
        } else {
          sfHeaderBottom.style.gridTemplateColumns = `${
            questions.offsetLeft + 120
          }px 0.775fr`;
          sfHeaderMiddle.style.gridTemplateColumns = `${
            questions.offsetLeft + 120
          }px 0.775fr`;
          sfHeaderUp.style.gridTemplateColumns = `${
            questions.offsetLeft + 120
          }px 0.775fr`;
        }

        sfHeaderBottom.style.paddingLeft = 0;
        sfHeaderMiddle.style.paddingLeft = 0;
        sfHeaderUp.style.paddingLeft = 0;
      } else if (this.$route.name === "captcha") {
        const pageCaptcha = document.querySelector(".page-captcha__dialog");
        const sfHeaderBottom = document.querySelector(".sf-header__bottom");
        const sfHeaderMiddle = document.querySelector(".sf-header__middle");
        const sfHeaderUp = document.querySelector(".sf-header__up");
        if (window.innerWidth <= 767.98) {
          sfHeaderBottom.style.gridTemplateColumns = `${
            pageCaptcha.offsetLeft + 20
          }px 0.775fr`;
          sfHeaderMiddle.style.gridTemplateColumns = `${
            pageCaptcha.offsetLeft + 20
          }px 0.775fr`;
          sfHeaderUp.style.gridTemplateColumns = `${
            pageCaptcha.offsetLeft + 20
          }px 0.775fr`;
        } else {
          sfHeaderBottom.style.gridTemplateColumns = `${
            pageCaptcha.offsetLeft + 66
          }px 0.775fr`;
          sfHeaderMiddle.style.gridTemplateColumns = `${
            pageCaptcha.offsetLeft + 66
          }px 0.775fr`;
          sfHeaderUp.style.gridTemplateColumns = `${
            pageCaptcha.offsetLeft + 66
          }px 0.775fr`;
        }

        sfHeaderBottom.style.paddingLeft = 0;
        sfHeaderMiddle.style.paddingLeft = 0;
        sfHeaderUp.style.paddingLeft = 0;
      } else {
        const pageWrapper = document.querySelector(".page-wrapper");
        const sfHeaderBottom = document.querySelector(".sf-header__bottom");
        const sfHeaderMiddle = document.querySelector(".sf-header__middle");
        const sfHeaderUp = document.querySelector(".sf-header__up");
        if (!pageWrapper) return;

        if (window.innerWidth <= 991.98) {
          sfHeaderBottom.style.gridTemplateColumns = `${
            pageWrapper.offsetLeft + 20
          }px 0.775fr`;
          sfHeaderMiddle.style.gridTemplateColumns = `${
            pageWrapper.offsetLeft + 20
          }px 0.775fr`;
          sfHeaderUp.style.gridTemplateColumns = `${
            pageWrapper.offsetLeft + 20
          }px 0.775fr`;
        } else {
          sfHeaderBottom.style.gridTemplateColumns = `${pageWrapper.offsetLeft}px 0.775fr`;
          sfHeaderMiddle.style.gridTemplateColumns = `${pageWrapper.offsetLeft}px 0.775fr`;
          sfHeaderUp.style.gridTemplateColumns = `${pageWrapper.offsetLeft}px 0.775fr`;
        }

        sfHeaderBottom.style.paddingLeft = 0;
        sfHeaderMiddle.style.paddingLeft = 0;
        sfHeaderUp.style.paddingLeft = 0;
      }
    },

    updateHeaderHeight(height) {
      this.headerHeight = height;
    },
  },
  updated() {
    this.setOffsetHeader();
  },
  mounted() {
    console.log("this.$route.name: ", this.$route.name);
    this.setOffsetHeader();
    window.addEventListener("resize", this.setOffsetHeader);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setOffsetHeader);
  },
};
