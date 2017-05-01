import React from 'react';

export default class ShowThings extends React.Component {
  render() {
    //create a map function for your name and counter here.
    return (
      <div>return your mapped items here.</div>
    );
  }
}

ShowThings.propTypes = {things: React.PropTypes.array};
