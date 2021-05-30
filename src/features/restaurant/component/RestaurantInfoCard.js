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
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${name}-${i}`}
                xml={star}
                width={25}
                height={25}
              />
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
