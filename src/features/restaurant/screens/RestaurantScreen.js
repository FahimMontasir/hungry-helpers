import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfo from "../component/RestaurantInfoCard";

const RestaurantScreen = () => {
  return (
    <RestaurantContainer>
      <SearchContainer>
        <Searchbar placeholder="search now" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </RestaurantContainer>
  );
};
export default RestaurantScreen;
const RestaurantContainer = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
`;
