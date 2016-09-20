import React from 'react';

const N_SHOWTIMES = 5;

const Theater = ({theater, index}) => {

  let showtimeNodes;

  const {Name, Url, Showtimes} = theater;

  if (Showtimes['0']) {
      showtimeNodes = Showtimes['0'].map((showtime, i) => {
        if (i < N_SHOWTIMES) {
          return (<span className="theater-showtime" key={i}>{showtime}</span>);
        }
      });
  }

  const anchor = (<a className="theater-name"
                     href={Url}
                     target="_blank">
                     {Name}
                  </a>);


  return (<div className="theater-info"
               key={index} >
            {anchor}
            { showtimeNodes && <div className="theater-showtime-list">
                                {showtimeNodes}
                               </div> 
            }
          </div>);
};

export default Theater;