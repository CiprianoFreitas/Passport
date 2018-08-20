<template>
  <v-autocomplete
    :items='autocomplete_items'
    v-model='item'
    :get-label='getLabel'
    :component-item='template'
    @item-selected='itemSelected'
    @update-items='updateItems'>
  </v-autocomplete>
</template>

<script>
import ItemTemplate from './ItemTemplate';
import { searchPlaces } from '../../utils/Geocoder';

export default {
  name: 'Autocomplete',
  data() {
    return {
      autocomplete_items: [],
      item: null,
      template: ItemTemplate,
    };
  },
  methods: {
    itemSelected(item) {
      this.$emit('item-selected', item);
    },
    getLabel(item) {
      return item.label;
    },
    updateItems(text) {
      searchPlaces(text)
        .then((result) => {
          this.autocomplete_items = result.suggestions;
        });
    },
  },
};
</script>

<style>
.v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  font-size: 1.5em;
  padding: 10px 15px;
  box-shadow: none;
  border: 1px solid #157977;
  width: calc(100% - 32px);
  outline: none;
  background-color: #eee;
}
.v-autocomplete .v-autocomplete-input-group.v-autocomplete-selected .v-autocomplete-input {
  color: black;
}
.v-autocomplete .v-autocomplete-list {
  width: 100%;
  text-align: left;
  border: none;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 1px solid #157977;
}
.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #157977;
  border-left: 1px solid #157977;
  border-right: 1px solid #157977;
}
.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:last-child {
  border-bottom: none;
}
.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:hover {
  background-color: #eee;
}
.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item abbr {
  opacity: 0.8;
  font-size: 0.8em;
  display: block;
  font-family: sans-serif;
}
</style>
