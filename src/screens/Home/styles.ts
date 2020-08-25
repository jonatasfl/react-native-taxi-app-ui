import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { color, font } from '../../style-vars';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 60px;
`;

export const TopArea = styled.View`
  align-items: center;
  top: -10%;
  width: 100%;
  height: 50%;
  background: ${color.primary};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;

export const CabImg = styled.Image`
  bottom: -35%;
  height: ${hp('50%')}px;
`;

export const BottomArea = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50%;
  padding: ${`${hp('10%')}px ${hp('10%')}px  ${hp('1%')}px ${hp('10%')}px`};
`;

export const Title = styled.Text`
  font-family: ${font.regular};
  font-size: 30px;
  color: ${color.primary};
  margin-bottom: 42px;
`;

export const TitleBold = styled.Text`
  font-family: ${font.bold};
  font-size: 30px;
  color: ${color.primary};
`;
