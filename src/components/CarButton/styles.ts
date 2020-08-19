import styled from 'styled-components/native';

import { color, font } from '../../style-vars';

export const Container = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 82px;
  border: ${({ active }) =>
    active ? `2px solid ${color.secondary}` : `1px solid ${color.gray}`};
  border-radius: 20px;
  background: #fff;
`;

export const Image = styled.Image`
  margin-bottom: 6px;
`;

export const Title = styled.Text`
  font-family: ${font.regular};
  font-size: 12px;
  color: ${color.primary};
`;
