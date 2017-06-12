export default class Artwork {

  id = ``
  image = ``
  painter = ``
  name = ``
  period = ``
  city = ``
  lon = ``
  lat = ``
  country = ``
  desc = ``

  constructor({id, image, painter, name, period, city, lon, lat, country, desc}) {
    this.id = id;
    this.image = image;
    this.painter = painter;
    this.name = name;
    this.period = period;
    this.city = city;
    this.lon = lon;
    this.lat = lat;
    this.country = country;
    this.desc = desc;
  }

}
