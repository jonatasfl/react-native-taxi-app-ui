import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import economy from '../../assets/economy.png';
import luxury from '../../assets/luxury.png';
import family from '../../assets/family.png';

import * as S from './styles';

interface IProps extends RectButtonProperties {
  text: string;
  active?: boolean;
}

const carType = {
  economy,
  luxury,
  family,
};

const CarButton: React.FC<IProps> = ({ text, active, ...props }) => {
  return (
    <S.Container active={active}>
      <S.Button {...props}>
        <S.Image source={carType[text.toLowerCase()]} />
        <S.Title>{text}</S.Title>
      </S.Button>
    </S.Container>
  );
};

export default CarButton;
