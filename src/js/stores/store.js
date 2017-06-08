import {observable} from 'mobx';

class Store {

  @observable
  name = `msk_opreis`

}

const store = new Store();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

export default store;
