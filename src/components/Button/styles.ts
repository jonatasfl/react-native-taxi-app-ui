import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { color, font } from '../../style-vars';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${color.primary};
  border-radius: 27.5px;
  height: 55px;
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  font-family: ${font.bold};
  font-size: 18px;
  color: ${color.white};
`;
