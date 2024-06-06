<template>
  <div class="page-wrapper page-wrapper--finish">
    <h2 class="page-main-title">
      Благодарим Вас за честные ответы и&nbsp;потраченное время!
    </h2>
    <div class="page-main-text">Мы обязательно учтем ваше мнение!</div>

    <div class="default-btns-wrapper">
      <button class="default-btn default-btn--success" @click="handlerSaveFile">
        скачать свой ответ
      </button>
      <button
        class="default-btn default-btn--success"
        @click="handlerFinishPageNext"
      >
        посмотреть результаты
      </button>
    </div>

    <div class="text-redirect">
      Через 80 секунд Вы будете перенаправлены на страницу<br />
      <a href="#">https://anketolog.loc/</a>
    </div>

    <div class="share-survey">
      <h3 class="page-main-subtitle">Поделиться анкетой:</h3>
      <div class="share-survey__wrapper">
        <div class="share-survey__social">
          <div class="share-survey__title">Соц. сети</div>
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
        <a href="#" class="share-survey__title">Ссылка</a>
        <a href="#" class="share-survey__title">HTML-код</a>
      </div>
    </div>

    <div class="different-survey">
      <h3 class="page-main-subtitle">Пройдите другие анкеты:</h3>
      <div class="different-survey__wrapper">
        <div class="different-survey__item">
          <h3 class="page-main-subtitle">Название анкеты</h3>
          <div class="different-survey__info">
            <div class="different-survey__info-item">0 рублей</div>
            <div class="different-survey__info-item">0 вопросов</div>
          </div>
        </div>
        <div class="different-survey__item">
          <h3 class="page-main-subtitle">Название анкеты</h3>
          <div class="different-survey__info">
            <div class="different-survey__info-item">0 рублей</div>
            <div class="different-survey__info-item">0 вопросов</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-banner page-banner--first">
      <div class="page-banner__left">
        <h3 class="page-main-subtitle">Нравится участвовать в&nbsp;опросах?</h3>
        <p class="page-banner__par">
          Выражайте свое мнение по этой и еще множеству других тем!<br />
          Станьте <b>постоянным респондентом онлайн-панели “Анкетолог”</b> и
          высказывайтесь по самым актуальным проблемам.
        </p>
        <p class="page-banner__par">
          <b>Получайте вознаграждение</b> за заполнение анкет, а также
          <b>возможность участвовать в розыгрыше призов</b> или
          <b>делать добро другим</b> в благотворительных программах.
        </p>

        <button class="default-btn default-btn--success" @click="nextPage">
          стать респондентом
        </button>
      </div>

      <div class="page-banner__image"></div>
    </div>

    <div class="page-banner page-banner--second">
      <div class="page-banner__left">
        <h3 class="page-main-subtitle">
          Хотите создавать анкеты и&nbsp;проводить опросы самотсоятельно?
        </h3>
        <p class="page-banner__par">
          <b>Тестируйте</b> собственные товары и рекламные кампании
        </p>
        <p class="page-banner__par"><b>Изучайте</b> своих клиентов</p>
        <p class="page-banner__par"><b>Опрашивайте</b> сотрудников</p>
        <p class="page-banner__par">
          <b>Проводите сотни различных опросов</b> с серивисом Анкетолог
        </p>
        <p class="page-banner__par page-banner__par--mt">
          <b>Триал-версия</b> полного функционала сервиса на 5 дней всем новым
          пользователям
        </p>

        <button class="default-btn default-btn--success" @click="nextPage">
          создать анкету
        </button>
      </div>

      <div class="page-banner__image"></div>
    </div>

    <div class="page-banner page-banner--third">
      <div class="page-banner__left">
        <h3 class="page-main-subtitle">Нравится участвовать в опросах?</h3>
        <p class="page-banner__par">
          Выражайте свое мнение по этой и еще множеству других тем!<br />
          Станьте <b>постоянным респондентом онлайн-панели “Анкетолог”</b> и
          высказывайтесь по самым актуальным проблемам.
        </p>
        <p class="page-banner__par">
          <b>Получайте вознаграждение</b> за заполнение анкет, а также
          <b>возможность участвовать в розыгрыше призов</b> или
          <b>делать добро другим</b> в благотворительных программах.
        </p>

        <button class="default-btn default-btn--success" @click="nextPage">
          стать респондентом
        </button>
      </div>

      <div class="page-banner__image"></div>
    </div>

    <div class="page-banner page-banner--fourth">
      <div class="page-banner__left">
        <h3 class="page-main-subtitle">
          Хотите создавать анкеты и проводить опросы самотсоятельно?
        </h3>
        <p class="page-banner__par">
          <b>Тестируйте</b> собственные товары и рекламные кампании
        </p>
        <p class="page-banner__par"><b>Изучайте</b> своих клиентов</p>
        <p class="page-banner__par"><b>Опрашивайте</b> сотрудников</p>
        <p class="page-banner__par">
          <b>Проводите сотни различных опросов</b> с серивисом Анкетолог
        </p>
        <p class="page-banner__par page-banner__par--mt">
          <b>Триал-версия</b> полного функционала сервиса на 5 дней всем новым
          пользователям
        </p>
        <button class="default-btn default-btn--success" @click="nextPage">
          создать анкету
        </button>
      </div>

      <div class="page-banner__image"></div>
    </div>
  </div>
</template>

<script>
import { setHeader } from "@/mixins";

export default {
  mixins: [setHeader],
  methods: {
    nextPage() {},
    handlerFinishPageNext() {
      this.$router.push({ name: "result" });
    },
    handlerSaveFile() {
      const file = new Blob([JSON.stringify(this.$store.state.savedAnswers)], {
        type: "text/plain",
      });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = "result.txt";
      a.click();
    },
  },
  created() {
    this.$store.state.numberQuestions = 0;
  },
};
</script>

<style scoped></style>
