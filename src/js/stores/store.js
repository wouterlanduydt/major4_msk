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
  artworks = []

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

  @observable
  selectedArtwork = {}

  @observable
  detailShown = true;

  @action
  toggleKnowMore = buttonText => {
    if (this.detailShown) {
      this.detailShown = false;
      buttonText.innerHTML = `Verberg`;
    } else {
      this.detailShown = true;
      buttonText.innerHTML = `Ontdek meer`;
    }
  }

  @action
  setSelectedArtwork = artwork => {
    this.selectedArtwork = artwork;
  }

  @action
  resetSelectedArtwork = () => {
    this.selectedArtwork = {};
  }

  @observable
  selectedCity = {}

  @action
  setSelectedCity = city => {
    this.selectedCity = city;
  }

  // loved van die city
  @action
  toggleLove = city => {
    console.log(city);
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
  get nBelgianCities() {
    let countBelgianCities = 0;
    this.lovedCities.forEach(l => (l.country === `BE`) ? countBelgianCities ++ : ``);
    return countBelgianCities;
  }

  calculateTourResult = () => {
    if (this.nBelgianCities >= 2) {
      return this.getTourById(2);
    } else if (this.nTotalDistance > 3000) {
      return this.getTourById(3);
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
