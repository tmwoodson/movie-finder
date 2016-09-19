import React from 'react';

const N_SHOWTIMES = 5;

const Theater = ({theater, index}) => {

  let showtimeNodes;

  if (theater.Showtimes['0']) {
      showtimeNodes = theater.Showtimes['0'].map((showtime, i) => {
        if (i < N_SHOWTIMES) {
          return (<span className="theater-showtime" key={i}>{showtime}</span>);
        }
      });
  }


  return (<div className="theater-info"
               key={index} >
            <div className="theater-name">
              {theater.Name}
            </div>
            { showtimeNodes && <div className="theater-showtime-list">
                                {showtimeNodes}
                               </div> 
            }
          </div>);
};

export default Theater;