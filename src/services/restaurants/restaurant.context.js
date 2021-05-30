import React, { useState, createContext, useMemo, useEffect } from "react";
import { useContext } from "react";
import { LocationContext } from "../locations/locations.context";
import { restaurantRequest, transformResult } from "./restaurant.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveData = (loc) => {
    setRestaurants([]);
    setIsLoading(true);

    setTimeout(() => {
      restaurantRequest(loc)
        .then(transformResult)
        .then((res) => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const strLocation = `${location.lat},${location.lng}`;
      retrieveData(strLocation);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
