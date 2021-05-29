import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/Typography/Text";
import { Spacer } from "../../../components/Spacer";
import {
  CardContainer,
  CardCover,
  IconContainer,
  Info,
  Rating,
  Row,
  Icon,
} from "./RestaurantInfoCard.style";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((r, i) => (
              <SvgXml key={i} xml={star} width={25} height={25} />
            ))}
          </Rating>
          <IconContainer>
            {isClosedTemporarily && (
              <Text variant="error">Temporarily closed</Text>
            )}
            <Spacer position="left" />
            {isOpenNow && <SvgXml width={30} height={30} xml={open} />}
            <Icon source={{ uri: icon }} />
          </IconContainer>
        </Row>
        <Text variant="caption">{address}</Text>
      </Info>
    </CardContainer>
  );
};
export default RestaurantInfo;
