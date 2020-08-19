import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import { font, color } from '../../style-vars';

export const Container = styled.View`
  flex: 1;
`;

export const Map = styled(MapView)`
  flex: 1;
`;

export const Bottom = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  padding: 10%;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CreditCardInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CreditCardImage = styled.Image`
  margin-right: 5px;
`;

export const CreditCardText = styled.Text`
  align-items: center;
  font-family: ${font.regular};
  font-size: 18px;
  color: ${color.primary};
`;
