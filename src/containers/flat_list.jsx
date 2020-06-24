import React, { Component } from 'react';
import Flat from '../Components/flat';
import { bindActionCreators } from 'redux';
import { setFlats } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

class FlatList extends Component {
  static defaultProps = {
    flats: [{
    "name": "Charm at the Steps of Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    "price": 164,
    "priceCurrency": "EUR"
    }]
  }

  componentWillMount() {
  // TODO: dispatch an action to load flats!
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={name}/>)}
      </div>
    );
  }
}

export default FlatList;
