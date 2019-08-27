<template>
  <div id="map"></div>
</template>
<script>
import Axios from "axios";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
export default {
  data() {
    return {
      /**
       * 点的数据
       */
      markerData: null,
      /**
       *创建的地图对象
       */
      map: null
    };
  },
  methods: {
    init() {
      this.map = L.map("map", {
        minZoom: 3,
        maxZoom: 18,
        center: [23.1175784, 113.2430314],
        zoom: 12,
        zoomControl: false,
        editable: true,
        doubleClickZoom: false,
        attributionControl: false,
        autoZIndex: false,
        maxBounds: L.latLngBounds([[90, -180], [-90, 180]])
      });
      L.tileLayer(
        "http://mt{s}.google.cn/vt/lyrs=m&scale=2&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile",
        {
          subdomains: "0123",
          updateWhenIdle: false
        }
      ).addTo(this.map);
      Axios.get("/data/data.json").then(data => {
        console.log(data.data);
        this.markerData = data.data;
      });

      //c
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>