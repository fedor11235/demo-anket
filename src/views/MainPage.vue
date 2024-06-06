<template>
  <div class="questions" ref="contentBlock">
    <div class="wrapper-select">
      <select name="" id="" v-model="current">
        <option :value="type" v-for="(type, id) in types" :key="id">
          {{ type }}
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
      current: "Name",
      types: [
        "Scale",
        "DistributionScale",
        // "Matrix",
        "Select",
        "Multiselect",
        // "Map",
        "Dropdown",
        "Multidropdown",
        "Free",
        "Freelist",
        "Paircompare",
        "Name",
        "Email",
        "Phone",
        "Date",
        "File",
        "Order",
        "Clicktest",
        "Areatest",
        "TextType",
        "MapType",
      ],
      headerHeight: 0,
    };
  },

  computed: {
    currentComponent() {
      const curQuest = this.current;
      return () => import(`@/components/questions/${curQuest}Control.vue`);
    },
  },
};
</script>

<style lang="scss"></style>
