import styled from 'styled-components/native';

interface IProps {
  noMargin: boolean;
}

export const Container = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: #fff;
  border-radius: 22.5px;
  /* box-shadow: 0px 5px 41px #0d1724; */
  margin-right: ${({ noMargin }: IProps) => (noMargin ? '0px' : '10px')};
`;

export const Icon = styled.Image``;
