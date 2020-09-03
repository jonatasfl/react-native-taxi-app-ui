import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import { ThemeProps } from '../../theme';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  position: absolute;
  z-index: 999;
`;

export const Map = styled(MapView)`
  flex: 1;
`;

export const Bottom = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10% 10% 30px 10%;
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

export const CreditCardText = styled.Text<ThemeProps>`
  align-items: center;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
`;
