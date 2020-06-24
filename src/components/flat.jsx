import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    };

    return (
        <div className="flat card-description">
          <div className="card" style={style}>
            <h1>{this.props.flat.name}</h1>
            <h2>{this.props.flat.price}</h2>
          </div>
        </div>
    );
  }
};

export default Flat;
