<template>
  <div class="questions" ref="contentBlock">
    <div class="wrapper-select">
      <select name="" id="" v-model="current">
        <option :value="type" v-for="(type, id) in types" :key="id">
          {{ type.title }}
        </option>
      </select>
    </div>
    <keep-alive>
      <component
        :is="currentComponent"
        @setNumberQuestions="$store.state.numberQuestions = $event"
      ></component>
    </keep-alive>

    <button
      class="default-btn default-btn--final default-btn--success"
      @click="$router.push({ name: 'captcha' })"
    >
      Завершить
    </button>
  </div>
</template>

<script>
import { setHeader } from "@/mixins";

export default {
  mixins: [setHeader],

  data() {
    return {
      theme: "default", //'green', image
      current: {value: "Scale", title: "Шкала"},
      types: [
        {value: "Scale", title: "Шкала"},
        // {value: "Matrix", title: "Матрица"},
        {value: "DistributionScale", title: "Распределительная шкала"},
        {value: "Select", title: "Одиночный выбор"},
        {value: "Multiselect", title: "Мультивыбор"},
        // {value: "Map", title: "Карта"},
        {value: "Dropdown", title: "Выпадающий список"},
        {value: "Multidropdown", title: "Выпадающий список мультивыбор"},
        {value: "Free", title: "Окно ответа"},
        {value: "Freelist", title: "Окно ответа увеличивающийся"},
        {value: "Paircompare", title: "ДВыбор между двух"},
        {value: "Name", title: "Имя"},
        {value: "Email", title: "Емаил"},
        {value: "Phone", title: "Телефон"},
        {value: "Date", title: "Дата"},
        {value: "File", title: "Файл"},
        {value: "Order", title: "Перетаскивание"},
        {value: "Clicktest", title: "Клик тест"},
        {value: "Areatest", title: "Тест области"},
        {value: "TextType", title: "Мультимедиа"},
        // {value: "MapType", title: "Карта"},
      ],
      headerHeight: 0,
    };
  },

  computed: {
    currentComponent() {
      const curQuest = this.current.value;
      return () => import(`@/components/questions/${curQuest}Control.vue`);
    },
  },
};
</script>

<style lang="scss"></style>
