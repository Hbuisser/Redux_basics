import React from 'react';

const Flat = (props) => {
  const style = {
  backgroundImage: `url(${props.flat.imageUrl})`
  };

  return (
    <div className="flat card-container">
      <div className="card" style={style}>

        <div className="card-trip">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
          <div className="card-trip-infos">
            <div>
              <h2></h2>
              <p>Short description here!</p>
            </div>
            <h2 className="card-trip-pricing">£99.99</h2>
            <img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="card-trip-user avatar-bordered" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Flat;
