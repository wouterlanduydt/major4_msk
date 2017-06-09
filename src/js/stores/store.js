import {observable, action} from 'mobx';

class Store {

  @observable
  name = `Zoek cultuur niet te ver`

  @observable
  tours = [
    {
      _id: 1,
      tour: `tour1`,
      tourTitle: `tour1`,
      tourText: `blablabla`
    },
    {
      _id: 2,
      tour: `tour1`,
      tourTitle: `tour2`,
      tourText: `blablabla`
    },
    {
      _id: 3,
      tour: `tour1`,
      tourTitle: `tour3`,
      tourText: `blablabla`
    },
    {
      _id: 4,
      tour: `tour1`,
      tourTitle: `tour4`,
      tourText: `blablabla`
    }, {
      _id: 5,
      tour: `tour1`,
      tourTitle: `tour5`,
      tourText: `blablabla`
    }
  ]

  @action
  getTourById = _id => {
    console.log(_id);
    return this.tours.find(s => s._id === parseInt(_id));
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
