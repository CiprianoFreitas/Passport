<template>
  <div id='app'>
    <h1 class='title'>Passport</h1>
    <Sidebar />
    <Map />
  </div>
</template>

<script>
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import store from './utils/Store';

export default {
  name: 'App',
  components: {
    Map,
    Sidebar,
  },
  data() {
    return {
      shared: store.state,
    };
  },
};
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.title{
  position: absolute;
  color: white;
  left: 3rem;
  font-size: 3rem;
  background-color: #0000007e;;
  padding:1rem;
  z-index: 10;
}
</style>
