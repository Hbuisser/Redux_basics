import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    };

    return (
        <div className="flat card" style={style}>
          <div className="card-description">
            <h1>{this.props.flat.name}</h1>
            <h2>{this.props.flat.price}</h2>
          </div>
        </div>
    );
  }
};

export default Flat;
