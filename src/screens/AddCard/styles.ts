import styled from 'styled-components/native';

import { ThemeProps } from '../../theme';

interface InputProps extends ThemeProps {
  focused?: boolean;
}

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Inner = styled.View`
  justify-content: flex-end;
  padding: 40px 10% 5% 10%;
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

export const CardText = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 10px;
`;

export const CardImage = styled.Image``;

export const Label = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.color.primary};
`;

export const Input = styled.TextInput<InputProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.color.secondary : theme.color.gray};
  margin-bottom: 20px;
`;

export const CardInputWrapper = styled.View<InputProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.color.secondary : theme.color.gray};
  margin-bottom: 20px;
`;

export const CardInput = styled.TextInput<InputProps>`
  flex: 1;
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
  padding: 8px 0;
`;

export const CardCamera = styled.Image``;

export const ExpCvvWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ExpWrapper = styled.View`
  width: 60%;
  margin-right: 10%;
`;

export const CvvWrapper = styled.View`
  width: 30%;
`;
