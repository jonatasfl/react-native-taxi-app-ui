import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { color, font } from '../../style-vars';

export const Container = styled.SafeAreaView`
  align-items: center;
  padding: 15%;
`;

export const IconContainer = styled.View`
  align-items:center;
  justify-content: center;
  width: ${Dimensions.get('window').width / 1.9}
  height: ${Dimensions.get('window').width / 1.9};
  border-radius: ${Dimensions.get('window').width / 2};
  background: ${color.primary};
  margin-bottom: 21px;
`;

export const Envelope = styled.Image``;

export const Title = styled.Text`
  font-family: ${({ bold }) => (bold ? font.bold : font.regular)};
  font-size: 30px;
  color: ${color.primary};
  margin-bottom: 17px;
`;

export const Description = styled.Text`
  font-family: ${({ bold }) => (bold ? font.bold : font.regular)};
  font-size: 16px;
  text-align: center;
  color: ${color.primary};
`;
