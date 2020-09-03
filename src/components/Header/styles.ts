import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ThemeProps } from 'theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px 5%;
  margin-top: ${Constants.statusBarHeight}px;
  background: transparent;
`;

export const Left = styled.View`
  align-items: center;
  justify-content: center;
  width: 15%;
`;

export const Center = styled.View`
  align-items: center;
  justify-content: center;
  width: 70%;
`;

export const Title = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${hp('4%')}px;
  color: ${({ theme }) => theme.color.primary};
`;

export const Right = styled.View`
  background: blue;
  width: 15%;
`;
