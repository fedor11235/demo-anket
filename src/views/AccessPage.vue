<template>
  <div ref="authorizationPage" class="page-wrapper page-wrapper--finish">
    <h2 class="page-main-title">Для доступа к анкете введите логин и пароль</h2>
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

    <button class="default-btn default-btn--success mt-5" @click="handlerLogin">
      Войти
    </button>
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
    };
  },
  created() {
    this.$store.state.numberQuestions = 0;
  },
  methods: {
    handlerLogin() {
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
