import {observable, action, computed} from 'mobx';
import Artwork from '../models/Artwork';
import City from '../models/City';
import Tour from '../models/Tour';
import artworksData from '../../assets/data/artworks.json';
import toursData from '../../assets/data/tours.json';
import citiesData from '../../assets/data/cities.json';

class Store {

  @observable
  tours = []

  @observable
  selectedTour = {
    id: 0,
    map: `tour1`,
    title: `Surreal tour`,
    desc: `Surrealisme wil ervoor zorgen, dat je een andere kijk op de werkelijkheid krijgt. Het wil dat je de achterliggende betekenis achter het kunstwerk zoekt, en hieruit leert. Enkele voorbeelden van bekende surrealisten zijn: René Magritte, Max Ernst, Salvador Dali en Frida Kahlo.`
  }

  @observable
  artworks = []

  @observable
  randomArtworks = []

  @observable
  cities = []

  @observable
  lovedCities = []

  @action
  addData = () => {
    artworksData.forEach(a => this.artworks.push(new Artwork(a)));
    toursData.forEach(a => this.tours.push(new Tour(a)));
    citiesData.forEach(a => this.cities.push(new City(a)));
  }

  @action
  randomizeArtworks = () => {
    const shuffledArray = this.artworks.sort(() => .5 - Math.random());
    this.randomArtworks = shuffledArray.slice(0, 3);
  }

  @action
  setSelectedTour = tour => {
    this.selectedTour = tour;
  }

  @action
  addLoved = id => {
    const city = this.getCityById(id);
    if (this.lovedCities.includes(city) || this.lovedCities.length >= 3) {
      return;
    } else {
      this.lovedCities.push(city);
    }
  }

  @action
  deleteLovedCity = id => {
    this.lovedCities = this.lovedCities.filter(l => l.id !== id);
  }

  @action
  clearLovedCities = () => {
    this.lovedCities = [];
  }

  @observable
  selectedCity = {}

  @action
  setSelectedCity = city => {
    this.selectedCity = city;
  }

  @computed
  get nTotalDistance() {
    let totalDistance = 0;
    this.lovedCities.forEach(l => totalDistance = totalDistance + l.distance);
    return totalDistance;
  }

  @computed
  get nTotalPainters() {
    let totalPainters = 0;
    this.lovedCities.forEach(l => totalPainters = totalPainters + l.nPainters);
    return totalPainters;
  }

  @computed
  get nTotalCities() {
    return this.lovedCities.length;
  }

  @computed
  get enoughCitiesSeleted() {
    if (this.nTotalCities >= 3) {
      return true;
    } else {
      return false;
    }
  }

  @computed
  get nBelgianCities() {
    let countBelgianCities = 0;
    this.lovedCities.forEach(l => (l.country === `BE`) ? countBelgianCities ++ : ``);
    return countBelgianCities;
  }

  @computed
  get mostSelectedArtstyle() {
    const artStyleIdArray = this.lovedCities.map(l => l.artStyleId);
    return artStyleIdArray.sort((a, b) =>
          artStyleIdArray.filter(v => v === a).length
        - artStyleIdArray.filter(v => v === b).length
    ).pop();
  }

  calculateTourResult = () => {
    if (this.nBelgianCities >= 2) {
      return this.getTourById(2);
    } else if (this.nTotalDistance > 3800) {
      return this.getTourById(3);
    } else if (this.mostSelectedArtstyle === 3) {
      return this.getTourById(0);
    } else if (this.mostSelectedArtstyle === 5) {
      return this.getTourById(4);
    } else if (this.mostSelectedArtstyle === 9) {
      return this.getTourById(1);
    } else {
      return this.getTourById(1);
    }
  }

  @observable
  calculatedTour = {};

  @action
  getTourById = id => {
    return this.tours.find(t => t.id === parseInt(id));
  }

  @action
  getCityById = id => {
    return this.cities.find(c => c.id === parseInt(id));
  }

  @action
  getArtworkById = id => {
    return this.artworks.find(a => a.id === parseInt(id));
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
