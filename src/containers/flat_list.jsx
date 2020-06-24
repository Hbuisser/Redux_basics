import React, { Component } from 'react';
import Flat from '../containers/flat';
import { bindActionCreators } from 'redux';
import { setFlats } from '../actions';
import { connect } from 'react-redux';

class FlatList extends Component {
  // static defaultProps = {
  //   flats: [{
  //   "name": "Charm at the Steps of Montmartre",
  //   "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //   "price": 164,
  //   "priceCurrency": "EUR"
  //   }]
  // }

  componentWillMount() {
  // TODO: dispatch an action to load flats!
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={name}/>)}
      </div>
    );
  }
}

// bind the SetFlats (the action) to use it in the "mount"
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

// link the state to components (props)
function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  }
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
//export default FlatList;
