<template>
  <div id='map' class='map-container'></div>
</template>

<script>
import store from '../utils/Store';

/* global H */
let map = null;
const initMap = () => {
  const platform = new H.service.Platform({
    app_id: '3FDejKh8tJBrvwJA89AP',
    app_code: 'mFz_rDiDnYINoh02K6yYbQ',
    useHTTPS: true,
  });
  const pixelRatio = window.devicePixelRatio || 1;
  const defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320,
    pois: false,
  });

  // Step 2: initialize a map  - not specificing a location will give a whole world view.
  map = new H.Map(
    document.getElementById('map'),
    defaultLayers.normal.xbasenight,
    { pixelRatio },
  );

  // Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  // eslint-disable-next-line
  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  map.setCenter({ lat: 52.381573, lng: 4.8711743 }, true);
  map.setZoom(10, true);
  // Create the default UI components
};
export default {
  name: 'Map',
  data() {
    return {
      shared: store.state,
    };
  },
  watch: {
    'shared.location': (val) => {
      map.setCenter({ lat: val.latitude, lng: val.longitude }, true);
    },
  },
  mounted() {
    this.$nextTick(() => {
      initMap();
    });
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.map-container {
  height: 100vh;
}
.map {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
