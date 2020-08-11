import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  return (
    <div className="belt">
      {props.sushis.map((sushi) => (
        <Sushi
          handleEatSushi={props.handleEatSushi}
          key={sushi.id}
          sushi={sushi}
        ></Sushi>
      ))}
      <MoreButton handleMoreSushi={props.handleMoreSushi} />
    </div>
  );
};

export default SushiContainer;
