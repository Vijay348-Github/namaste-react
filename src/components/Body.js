import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resdata } from '../commons/resdata';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resdata.restaurants);

  return (
    <div className="body">

      <div className="filter">

        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = resdata.restaurants.filter(
              (res) => res.rating > 4.5
            );
            setRestaurantList(filteredData);
          }}
        >
          Get Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {restaurantList.map((restaurant, index) => 
          <RestaurantCard resdata={restaurant} key={index} />
        )
        }
      </div>
    </div>
  );
};

export default Body;


















// import RestaurantCard from "./RestaurantCard";
// import { resdata } from "../commons/resdata";
// import { Button } from "bootstrap";
// import { useState } from "react";
// import {useState} from "react";

// const Body = () => {

//     const [restaurantLis,setRestauranrList] = useState(resdata.restaurants);

//     return (
//         <div className="body">
//             <div className="filter">
//                 <button className="filter-btn"
//                     onClick={() =>{
//                         const filteredData = restaurantLis.filter(
//                             (res) => res.rating > 4.5
//                         );
//                         setRestauranrList(filteredData);
//                     }}
//                 >
//                     Get Top Rated Restaurants
//                 </button>
//             </div>
//             <div className="res-container">
//                 {resdata.restaurants.map((restaurant, index) => (
//                     <RestaurantCard resdata={restaurant} key={index} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Body;
