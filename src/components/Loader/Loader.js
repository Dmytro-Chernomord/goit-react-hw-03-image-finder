import Loader from 'react-loader-spinner';
import React from 'react';

export default class Spiner extends React.Component {
  //other logic
  render() {
    return (
      <div className="loader">
        <Loader
          type="ThreeDots"
          color="#3f51b5"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      </div>
    );
  }
}
