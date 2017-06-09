import {observable, action} from 'mobx';

class Store {

  @observable
  name = `Zoek cultuur niet te ver`

  @observable
  tours = [
    {
      _id: 1,
      map: `tour1`,
      title: `Surreal tour`,
      desc: `blablabla`
    },
    {
      _id: 2,
      map: `tour1`,
      title: `Modern tour`,
      desc: `blablabla`
    },
    {
      _id: 3,
      map: `tour1`,
      title: `Belgian tour`,
      desc: `blablabla`
    },
    {
      _id: 4,
      map: `tour1`,
      title: `Far far away tour`,
      desc: `blablabla`
    }, {
      _id: 5,
      map: `tour1`,
      title: `Garden lover tour`,
      desc: `blablabla`
    }
  ]

  @action
  getTourById = _id => {
    return this.tours.find(t => t._id === parseInt(_id));
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
