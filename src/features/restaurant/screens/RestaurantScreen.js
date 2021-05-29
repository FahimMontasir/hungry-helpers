import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../component/RestaurantInfoCard";
import {
  RestaurantContainer,
  RestaurantListContainer,
  SearchContainer,
} from "./RestaurantScreen.style";

const RestaurantScreen = () => {
  return (
    <RestaurantContainer>
      <SearchContainer>
        <Searchbar placeholder="search now" />
      </SearchContainer>
      <RestaurantListContainer>
        <FlatList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          renderItem={({ item }) => <RestaurantInfo />}
          keyExtractor={(item) => item.name.toString()}
        />
      </RestaurantListContainer>
    </RestaurantContainer>
  );
};
export default RestaurantScreen;
