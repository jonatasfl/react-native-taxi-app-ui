import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { ThemeProps } from '../../theme';

interface IProps extends ThemeProps {
  active?: boolean;
}

export const Container = styled.View<IProps>`
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.color.secondary}`
      : `1px solid ${theme.color.gray}`};
  border-radius: 20px;
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 82px;
  border-radius: 20px;
  background: #fff;
`;

export const Image = styled.Image`
  margin-bottom: 6px;
`;

export const Title = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.color.primary};
`;
