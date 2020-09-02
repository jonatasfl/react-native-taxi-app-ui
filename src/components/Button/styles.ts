import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { ThemeProps } from '../../theme';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }: ThemeProps) => theme.color.primary};
  border-radius: 27.5px;
  height: 55px;
`;

export const ButtonText = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
`;
