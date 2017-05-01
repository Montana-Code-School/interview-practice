import React from 'react';

export default class ShowVeggies extends React.Component {
  render() {
    //create a map function for your name and counter here.
    return (
      <div>return your mapped items here.</div>
    );
  }
}

ShowVeggies.propTypes = {things: React.PropTypes.array};
