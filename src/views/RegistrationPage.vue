<template>
  <div ref="authorizationPage" class="page-wrapper page-wrapper--finish">
    <h2 class="page-main-title">Регистрация</h2>
    <div>Введите логин</div>
    <input
      v-model="login"
      type="text"
      placeholder="Введите"
      class="text-input"
    />
    <div>Введите пароль</div>
    <input
      v-model="password"
      type="text"
      placeholder="Введите"
      class="text-input"
    />

    <div class="share-survey">
      <h3 class="page-main-subtitle">Войти с помощью</h3>
      <div class="share-survey__wrapper">
        <div class="share-survey__social">
          <div class="share-survey__social-items">
            <a href="#" class="share-survey__social-item">
              <i
                style="
                  background: url('/img/type-questions/vk.svg') center
                    center/contain no-repeat;
                "
              ></i>
            </a>
            <a href="#" class="share-survey__social-item">
              <i
                style="
                  background: url('/img/type-questions/tw.svg') center
                    center/contain no-repeat;
                "
              ></i>
            </a>
            <a href="#" class="share-survey__social-item">
              <i
                style="
                  background: url('/img/type-questions/ok.svg') center
                    center/contain no-repeat;
                "
              ></i>
            </a>
            <a href="#" class="share-survey__social-item">
              <i
                style="
                  background: url('/img/type-questions/mail.svg') center
                    center/contain no-repeat;
                "
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <button
      class="default-btn default-btn--success mt-5"
      @click="handlerRegistration"
    >
      Зарегсистрироваться
    </button>

    <div>
      <div>
        <input type="checkbox" id="checkbox" v-model="isPersonalData" />
        <label for="checkbox"
          >Я согласен на обработку персональных данных</label
        >
      </div>
      <div>
        <input type="checkbox" id="checkbox" v-model="isTermsOfUse" />
        <label for="checkbox">Я согласен с пользовательским соглашением</label>
      </div>
      <div>
        <input type="checkbox" id="checkbox" v-model="isPrivacyPolicy" />
        <label for="checkbox">Я согласен с политикой конфиденциальности</label>
      </div>
    </div>
  </div>
</template>

<script>
import { setHeader } from "@/mixins";

export default {
  mixins: [setHeader],

  data() {
    return {
      login: "",
      password: "",
      isPersonalData: false,
      isTermsOfUse: false,
      isPrivacyPolicy: false,
    };
  },
  created() {
    this.$store.state.numberQuestions = 0;
  },
  methods: {
    handlerRegistration() {
      this.$router.push({ name: "hello" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap";
.clue-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    margin: 0;
  }
}
.text-input {
  width: 100%;
  padding: 0 20px;
  border-radius: 12px;
  outline: 1px solid #ddd;
  background: #fff;
  min-height: 60px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border: none;
  color: #2b2b2b;

  &:hover,
  &:focus {
    outline: 2px solid #1edc1a;
  }

  &.input--error {
    border: 1px solid #ff1f1f;
  }

  &::placeholder {
    color: #ddd;
  }

  @include media-breakpoint-down(xs) {
    min-height: 48px;
    font-size: 14px;
    line-height: 16px;
    padding: 0 12px;
    border-radius: 8px;
  }
}
</style>
