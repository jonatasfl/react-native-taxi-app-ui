import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { ThemeProps } from '../../theme';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: ${Constants.statusBarHeight + 100}px 10% 5% 10%;
`;

export const Card = styled.View`
  justify-content: center;
  background: #000;
  height: 170px;
  padding: 0 8%;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const CardTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CardBottom = styled.View``;

export const CardText = styled.Text`
  font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }: ThemeProps) => theme.color.white};
  margin-bottom: 10px;
`;

export const CardImage = styled.Image``;

export const Label = styled.Text`
  font-family: ${({ theme }: ThemeProps) => theme.font.regular};
  font-size: 14px;
  color: ${({ theme }: ThemeProps) => theme.color.primary};
`;

export const Input = styled.TextInput`
  font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }: ThemeProps) => theme.color.primary};
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: ThemeProps) => theme.color.gray};
  margin-bottom: 20px;
`;

export const CardInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }: ThemeProps) => theme.color.primary};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: ThemeProps) => theme.color.gray};
  margin-bottom: 20px;
`;

export const CardInput = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }: ThemeProps) => theme.color.primary};
  padding: 8px 0;
`;

export const CardCamera = styled.Image``;

export const ExpCvvWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ExpWrapper = styled.View`
  width: 60%;
  margin-right: 10%;
`;

export const CvvWrapper = styled.View`
  width: 30%;
`;
