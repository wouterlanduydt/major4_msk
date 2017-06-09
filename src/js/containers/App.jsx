import React from 'react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Tours from './Tours';
import ArtworksMap from './ArtworksMap';

const App = () => {

  {process.env.NODE_ENV !== `production` ? <DevTools /> : null;}

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/create' component={Create} />
      <Route exact path='/tours' component={Tours} />
      <Route exact path='/map' component={ArtworksMap} />
    </Switch>
  );

};

export default App;
