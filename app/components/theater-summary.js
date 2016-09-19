import React from 'react';
import Theater from './theater';

const N_THEATERS = 4;

const TheaterSummary = ({theaters}) => {

  theaters = theaters || [];

  const theaterNodes = theaters.map((theater, i) => {
    if (i < N_THEATERS) {
      return (<Theater
                theater={theater}
                key={i}
              />);
    }
  });

  return (<div className="theater-summary">
            {theaterNodes}
          </div>);
};

export default TheaterSummary;