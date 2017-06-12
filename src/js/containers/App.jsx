import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';
import {observer, inject} from 'mobx-react';

import {object} from 'prop-types';

import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Tours from './Tours';
import ArtworksMap from './ArtworksMap';
import CreateStats from '../components/createstats';
import TourResult from '../components/tourresult';
import TourDetail from '../components/tour/TourDetail';

class App extends Component {

  renderEditProject = ({match}) => {
    const {id} = match.params;
    const {getTourById} = this.props.store;
    const tour = getTourById(id);

    return <TourDetail {...tour} />;
  };

  loadData = () => {
    const {addData} = this.props.store;
    addData();
  }

  renderCreateStats = () => {
    return <CreateStats />;
  }

  renderTourResult = () => {
    let {calculatedTour} = this.props.store;
    const {calculateTourResult} = this.props.store;
    calculatedTour = calculateTourResult();
    return <TourResult {...calculatedTour} />;
  }

  render() {
    return (
      <section>
        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}
        {this.loadData()}

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/create/stats' render={this.renderCreateStats} />
          <Route exact path='/create/result' render={this.renderTourResult} />
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
