import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { color, font } from '../../style-vars';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const OptionsContainer = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  bottom: 110px;
  width: 80%;
  height: 50px;
`;

export const LeftOptions = styled.View`
  flex-direction: row;
`;

export const WhereToContainer = styled.TouchableHighlight`
  position: absolute;
  justify-content: center;
  bottom: 45px;
  width: 80%;
  height: 55px;
  border: 1px solid ${color.gray};
  background: #fff;
  border-radius: 45px;
  padding: 0 23px;
`;

export const From = styled.Text`
  font-family: ${font.regular};
  font-size: 10px;
  color: ${color.primary};
`;

export const ToContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GreenDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${color.secondary};
  margin-right: 10px;
`;

export const To = styled.Text`
  font-family: ${font.regular};
  font-size: 18px;
  color: ${color.primary};
`;
