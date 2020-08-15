import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { color, font } from '../../style-vars';

interface IItemText {
  small?: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const TopContainer = styled.View`
  width: 100%;
  height: 125px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  /* border-bottom-width: 5px;
  border-bottom-color: rgba(0, 0, 0, 0.3); */
`;

export const From = styled.View``;

export const To = styled.View``;

export const HistoryList = styled(FlatList)`
  width: 100%;
  height: 80%;
  padding: 10%;
`;

export const HistoryItem = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray};
`;

export const ItemIcon = styled.Image`
  margin-right: 14px;
`;

export const ItemText = styled.Text`
  font-family: ${font.regular};
  font-size: ${({ small }: IItemText) => (small ? '10px' : '18px')};
  margin-left: ${({ small }: IItemText) => (small ? '14px' : '0px')};
  color: ${color.primary};
`;

export const BottomContainer = styled.View`
  width: 100%;
  padding: 10%;
`;
