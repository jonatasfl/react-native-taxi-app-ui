import styled from 'styled-components/native';

import { color, font } from '../../style-vars';

export const Container = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${color.primary};
  border-radius: 45px;
  height: 55px;
`;

export const ButtonText = styled.Text`
  font-family: ${font.bold};
  font-size: 18px;
  color: ${color.white};
`;
