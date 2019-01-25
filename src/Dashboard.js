import React from 'react';
import Pet from './components/Pet';
import {fetchCat, deleteCat} from './actions/cat';
import { fetchDog, deleteDog } from './actions/dog';
import { connect } from 'react-redux';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptCat() {
    this.props.dispatch(deleteCat());
    this.props.dispatch(fetchCat());
  }

  onAdoptDog() {
    this.props.dispatch(deleteDog());
    this.props.dispatch(fetchDog());
  }

  render() {
    return (
      <div className="Dashboard">
        <h1 className='welcome'>Welcome to Petful!</h1>
        <Pet animal={this.props.catToAdopt} onAdoptPet={() => this.onAdoptCat()} animalType={'cats'}/>
        <Pet animal={this.props.dogToAdopt} onAdoptPet={() => this.onAdoptDog()} animalType={'dogs'}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cats.data,
  dogToAdopt: state.dogs.data
})

export default connect(mapStateToProps)(Dashboard);