import styled from 'styled-components/native';

import { color } from '../../style-vars';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
  height: 55px;
  border: 1px solid ${color.gray};
  border-radius: 45px;
  padding: 0 24px;
`;

export const Code = styled.Text`
  font-size: 18px;
  color: ${color.primary};
  margin-right: 19px;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  width: 100%;
  height: 100%;
  color: ${color.gray};
`;
