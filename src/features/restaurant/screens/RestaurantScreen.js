import React, { useContext } from "react";
import { FlatList } from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import RestaurantInfo from "../component/RestaurantInfoCard";
import SearchBar from "../component/SearchBar";
import {
  Loading,
  RestaurantContainer,
  RestaurantListContainer,
} from "./RestaurantScreen.style";

const RestaurantScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return (
    <RestaurantContainer>
      <SearchBar />
      <RestaurantListContainer>
        {isLoading && <Loading size={50} color={"tomato"} />}
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={(item, idx) => `${item.name}-${idx}`}
        />
      </RestaurantListContainer>
    </RestaurantContainer>
  );
};
export default RestaurantScreen;
