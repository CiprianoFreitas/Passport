const store = {
  state: {
    location: { lat: 0, lng: 0 }
  },
  setLocation: function(location) {
    this.state.location = location;
  }
};

export default store;
