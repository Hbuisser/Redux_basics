import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
    // REDUX ACTION
    debugger
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    };
    const classes = "flat card";
    if (this.props.flat === this.propselectedFlat) {
      classes += " selected";
    }

    return (
        <div className={classes} onClick={this.handleClick}>
          <div className="card" style={style}>
            <h1>{this.props.flat.name}</h1>
            <h2>{this.props.flat.price}</h2>
          </div>
        </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedflat
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
//export default Flat;
