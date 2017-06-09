import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';
import {observer, inject} from 'mobx-react';

import {object} from 'prop-types';

import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Tours from './Tours';
import ArtworksMap from './ArtworksMap';
import TourDetail from '../components/tour/TourDetail';

class App extends Component {

  renderEditProject = ({match}) => {
    const {id} = match.params;
    const {getTourById} = this.props.store;

    const tour = getTourById(id);

    return <TourDetail {...tour} />;
  };

  render() {
    return (
      <section>
        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/tours' component={Tours} />
          <Route path='/tour/:id' render={this.renderEditProject} />
          <Route exact path='/map' component={ArtworksMap} />
        </Switch>

      </section>
    );
  }

}

App.propTypes = {
  store: object.isRequired
};

export default inject(`store`)(observer(App));
