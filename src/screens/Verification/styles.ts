import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';

import { ThemeProps } from '../../theme';

interface ITextProps extends ThemeProps {
  bold?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 15%;
`;

export const InnerContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  align-items: center;
  justify-content: flex-end;
  padding-left: 15%;
  padding-right: 15%;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get('window').width / 1.9}px;
  height: ${Dimensions.get('window').width / 1.9}px;
  border-radius: ${Dimensions.get('window').width / 2}px;
  background: ${({ theme }: ThemeProps) => theme.color.primary};
  margin-bottom: 21px;
`;

export const Envelope = styled.Image``;

export const Title = styled.Text`
  font-family: ${({ bold, theme }: ITextProps) =>
    bold ? theme.font.bold : theme.font.regular};
  font-size: 30px;
  color: ${({ theme }: ThemeProps) => theme.color.primary};
  margin-bottom: 17px;
`;

export const Description = styled.Text`
  font-family: ${({ bold, theme }: ITextProps) =>
    bold ? theme.font.bold : theme.font.regular};
  font-size: 16px;
  text-align: center;
  color: ${({ theme }: ThemeProps) => theme.color.primary};
  margin-bottom: 35px;
`;

export const CodeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
