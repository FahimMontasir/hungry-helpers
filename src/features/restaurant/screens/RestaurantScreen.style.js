import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { ActivityIndicator } from "react-native-paper";
export const RestaurantContainer = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
`;
export const Loading = styled(ActivityIndicator)`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -25px;
`;
