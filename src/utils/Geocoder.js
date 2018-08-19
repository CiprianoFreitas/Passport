export function searchPlaces(text) {
  const url = `https://autocomplete.geocoder.api.here.com/6.2/suggest.json?\
app_id=3FDejKh8tJBrvwJA89AP&\
app_code=mFz_rDiDnYINoh02K6yYbQ&\
query=${text}`;

  return fetch(url).then(response => response.json());
}

export function getLocationData(locationId) {
  const url = `https://geocoder.api.here.com/6.2/geocode.json\
?locationid=${locationId}\
&jsonattributes=1\
&gen=9\
&app_id=3FDejKh8tJBrvwJA89AP\
&app_code=mFz_rDiDnYINoh02K6yYbQ`;

  return fetch(url).then(response => response.json());
}
