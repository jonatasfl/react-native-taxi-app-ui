import React, { useState } from 'react';

import economy from '../../assets/economy.png';
import luxury from '../../assets/luxury.png';
import family from '../../assets/family.png';

import * as S from './styles';

interface IProps extends React.ComponentProps {
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
    <S.Container active={active} {...props}>
      <>
        <S.Image source={carType[text.toLowerCase()]} />
        <S.Title>{text}</S.Title>
      </>
    </S.Container>
  );
};

export default CarButton;
