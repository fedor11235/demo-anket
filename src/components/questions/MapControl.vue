<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable */
// import { Loader } from "@googlemaps/js-api-loader"

export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    // const loader = new Loader({
    //   apiKey: "YOUR_API_KEY",
    //   version: "weekly",
    //   // ...additionalOptions,
    // });
    // loader.load().then(async () => {
    //   const { Map } = await google.maps.importLibrary("maps");
    //   this.map = new Map(document.getElementById("map"), {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    //   });
    // });
  },
};
</script>

<style scoped></style>
