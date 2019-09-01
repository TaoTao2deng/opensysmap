<template>
  <div id="map"></div>
</template>
<script>
import Axios from "axios";
import "leaflet/dist/leaflet.css";
import "@/assets/iconfont/icon.css";
import * as L from "leaflet";
import "@/assets/js/leaflet-transformTileLayer.js";
import gcj02Transform from "@/assets/js/gcj02Transform";
export default {
  data() {
    return {
      /**
       * 点的数据
       */
      markerDatas: null,
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
      // new L.TransformTileLayer(
      //   "http://mt{s}.google.cn/vt/lyrs=m&scale=2&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile",
      //   {
      //     transforms: gcj02Transform,
      //     subdomains: "0123",
      //     updateWhenIdle: false
      //   }
      // ).addTo(this.map);
      console.log(this.map);
      transforms: gcj02Transform,
        L.tileLayer(
          "http://mt{s}.google.cn/vt/lyrs=m&scale=2&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile",
          {
            subdomains: "0123",
            updateWhenIdle: false
          }
        ).addTo(this.map);
      Axios.get("/data/data.json").then(data => {
        const divIcon = L.divIcon({
          className: "iconfont iconxuexiao xuexiao"
        });
        this.markerDatas = data.data;
        this.markerDatas.forEach(markerData => {
          const { lat, lng, name } = markerData;
          L.marker([lat, lng], { icon: divIcon, alt: name, title: name }).addTo(
            this.map
          );
        });
      });

      //c
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style>
.xuexiao {
  font-size: 30px;
  color: #ff0000;
}
</style>
<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>