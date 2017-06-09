import React from 'react';
import {string} from 'prop-types';

import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Tours from './Tours';
import ArtworksMap from './ArtworksMap';

const App = ({name}) => (

  <section>

    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

    <header>
      <h1>Hello, {name}</h1>
    </header>

    <section>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/tours' component={Tours} />
        <Route exact path='/map' component={ArtworksMap} />
      </Switch>
    </section>

  </section>

);

App.propTypes = {
  name: string.isRequired
};

export default inject(
  ({store}) => ({
    name: store.name
  })
)(
  observer(App)
);
