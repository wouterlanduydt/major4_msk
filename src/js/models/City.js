export default class City {

  id = ``
  name = ``
  country = ``
  artStyle = ``
  artStyleId = ``
  nPainters = ``
  nMusea = ``
  distance = ``
  lon = ``
  lat = ``
  loved = ``
  desc = ``

  constructor({id, name, country, artStyle, artStyleId, nPainters, nMusea, distance, lon, lat, loved, desc}) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.artStyle = artStyle;
    this.artStyleId = artStyleId;
    this.nPainters = nPainters;
    this.nMusea = nMusea;
    this.distance = distance;
    this.lon = lon;
    this.lat = lat;
    this.loved = loved;
    this.desc = desc;
  }

}
