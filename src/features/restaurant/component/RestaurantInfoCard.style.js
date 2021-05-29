import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const CardContainer = styled(Card)`
  margin: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
export const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
export const Address = styled.Text`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.body};
`;
export const Rating = styled.View`
  flex-direction: row;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled.Image`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;
