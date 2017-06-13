import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';
import {observer, inject} from 'mobx-react';

import {object} from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Tours from './Tours';
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

  componentDidMount() {
    const {addData} = this.props.store;
    addData();
  }

  renderCreateStats = () => {
    const {nTotalCities} = this.props.store;
    if (nTotalCities === 0) {
      return <Redirect to='/create' />;
    } else {
      return <CreateStats />;
    }
  }

  renderTourResult = () => {
    const {nTotalCities, calculateTourResult} = this.props.store;
    let {calculatedTour} = this.props.store;
    calculatedTour = calculateTourResult();

    if (nTotalCities === 0) {
      return <Redirect to='/create' />;
    } else {
      return <TourResult {...calculatedTour} />;
    }
  }

  render() {
    return (
      <section>
        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/create/stats' render={this.renderCreateStats} />
          <Route exact path='/create/result' render={this.renderTourResult} />
          <Route exact path='/tours' component={Tours} />
          <Route path='/tour/:id' render={this.renderEditProject} />
<<<<<<< HEAD
=======
          <Route render={() => <Redirect to='/' />} />
>>>>>>> 89fb666792c0900409b0d075adc8f6c13c1de072
        </Switch>

      </section>
    );
  }

}

App.propTypes = {
  store: object.isRequired
};

export default inject(`store`)(observer(App));
