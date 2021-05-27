import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <CardContainer elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
    </CardContainer>
  );
};
export default RestaurantInfo;
const Title = styled.Text`
  color: blue;
  font-size: 25px;
`;
const CardContainer = styled(Card)`
  margin: 10px;
  background-color: white;
`;

const styles = StyleSheet.create({
  cover: {
    padding: 10,
  },
  title: {
    padding: 10,
  },
});
