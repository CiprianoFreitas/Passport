<template>
  <aside class="sidebar">
    <ul class="cities-list">
      <li v-for="city in cities">{{city.label}}</li>
    </ul>
    <Autocomplete v-on:item-selected="itemSelected"/>
    <button v-on:click="addPlace">Add</button>
  </aside>
</template>

<script>
import Autocomplete from "./Autocomplete/Autocomplete";
import { getLocationData } from '../utils/Geocoder'
import store from '../utils/Store'

export default {
  name: "Sidebar",
  components:{
    Autocomplete
  },
  data() {
    return {
      city:{label:''},
      cities: []
    };
  },
  methods:{
    itemSelected(item){
      this.city = item;
    },
    addPlace(){
      this.cities.push(this.city);
      console.log(this.city);
      getLocationData(this.city.locationId)
      .then(r =>{
        const location = r.response.view["0"].result["0"].location.displayPosition;
        console.log(location);
        store.setLocation(location)
      })
      this.city = {label:''};
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
  background-color: #0000007e;
  padding: 1rem;
  position: absolute;
  right: 1rem;
  top: 6rem;
  z-index: 10;
}

.cities-list{
  color:white;
  padding:0;
  list-style: none;
}
</style>
