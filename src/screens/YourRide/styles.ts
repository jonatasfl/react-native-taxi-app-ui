import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { color, font } from '../../style-vars';

interface IDescProps {
  value?: boolean;
}

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center' },
})`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-bottom: 20%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10%;
`;

export const BackButton = styled.TouchableHighlight``;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${font.regular};
  font-size: ${hp('4%')}px;
  color: ${color.primary};
`;

export const InfoContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray};
  margin-top: 1%;
  padding: 8% 0;
`;

export const Description = styled.Text`
  font-family: ${({ value }: IDescProps) => (value ? font.bold : font.regular)};
  font-size: ${({ value }: IDescProps) => (value ? `${hp('7%')}px` : '14px')};
  color: ${color.primary};
`;

export const DriverContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 114px;
  border: 1px solid ${color.gray};
  border-radius: 57px;
  margin-bottom: 8px;
`;

export const Avatar = styled.Image`
  width: 94px;
  height: 94px;
  border-radius: 47px;
`;

export const DriverName = styled.Text`
  font-family: ${font.bold};
  font-size: 18px;
  color: ${color.primary};
  margin-bottom: 16px;
`;

export const RatingContainer = styled.View`
  align-items: center;
  width: 100%;
  padding-top: 10%;
`;

export const MessageInput = styled.TextInput`
  justify-content: flex-start;
  width: 100%;
  border-radius: 20px;
  border: 1px solid ${color.gray};
  margin: 8% 0 4% 0;
  padding: 13px 17px;
`;
