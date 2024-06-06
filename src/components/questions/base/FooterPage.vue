<template>
  <div class="sf-footer" :class="footerClasses">
    <div class="sf-footer__wrapper">
      <div
        class="sf-footer__side sf-footer__side--left"
        :class="{
          'sf-footer__side--with-logo': logo,
          'sf-footer__side--without-btns': !btns,
        }"
      >
        <div class="sf-footer__logo-wrapper" v-if="logo">
          <a href="#" class="sf-footer__logo sf-footer__logo--desktop">
            <img src="/demo-anket/img/type-questions/logo-footer.svg" alt="logo-footer" />
          </a>

          <div class="sf-footer__descr">
            Создание опросов <br />
            и проведение исследований
          </div>

          <a href="#" class="sf-footer__logo sf-footer__logo--mobile">
            <img
              src="/demo-anket/img/type-questions/logo-footer-mobile.svg"
              alt="logo-footer"
            />
            <div class="sf-footer__descr">
              Создание опросов <br />
              и проведение исследований
            </div>
          </a>
        </div>
        <div class="sf-footer__btns" v-if="btns">
          <a href="#" class="sf-footer__btn sf-footer__btn--back">назад</a>
          <a
            href="#"
            class="sf-footer__btn sf-footer__btn--back sf-footer__btn--back-mod"
          >
            <i></i>
          </a>
          <a href="#" class="sf-footer__btn sf-footer__btn--next">Далее</a>
        </div>
      </div>

      <div class="sf-footer__side sf-footer__side--right" v-if="links">
        <span
          class="sf-footer__link sf-footer__link--owner"
          @click="$emit('openWriteModal')"
        >
          <i></i>
          Написать владельцу
        </span>
        <span
          class="sf-footer__link sf-footer__link--clt"
          @click="$emit('openComplainModal')"
        >
          <i></i>
          Пожаловаться на анкету
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: Boolean,
      required: true,
    },
    btns: {
      type: Boolean,
      required: true,
    },
    links: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    footerClasses() {
      if (!this.logo && !this.btns && !this.links) {
        return "sf-footer--empty";
      } else if (!this.logo && !this.links) {
        return "sf-footer--only-btns";
      }
      return "";
    },
  },
};
</script>
