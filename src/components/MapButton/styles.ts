import styled from 'styled-components/native';
import { ImageProperties } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface IContainerProps {
  noMargin: boolean;
  transparent?: boolean;
}

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: ${({ transparent }) => (transparent ? 'transparent' : '#fff')};
  border-radius: 22.5px;
  /* box-shadow: 0px 5px 41px #0d1724; */
  margin-right: ${({ noMargin }: IContainerProps) =>
    noMargin ? '0px' : '10px'};
`;

export const Icon = styled.Image<ImageProperties>``;
