import React from 'react';
import { useNavigation } from '@react-navigation/native';

import logoSm from '../../assets/logo-sm.png';
import visa from '../../assets/visa-white.png';
import camera from '../../assets/camera.png';

import Button from '../../components/Button';

import * as S from './styles';

const AddCard: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.Card>
        <S.CardTop>
          <S.CardImage source={logoSm} />
          <S.CardImage source={visa} />
        </S.CardTop>
        <S.CardBottom>
          <S.CardText>Russel Hassano</S.CardText>
          <S.CardText>1234 5678 908</S.CardText>
        </S.CardBottom>
      </S.Card>
      <S.Label>Full Name</S.Label>
      <S.Input value="Hassel Hassano" />
      <S.Label>Card Number</S.Label>
      <S.CardInputWrapper>
        <S.CardInput value="1234 5678 908" keyboardType="number-pad" />
        <S.CardImage source={camera} />
      </S.CardInputWrapper>
      <S.ExpCvvWrapper>
        <S.ExpWrapper>
          <S.Label>Expiry Date</S.Label>
          <S.Input value="12 / 2022" keyboardType="number-pad" />
        </S.ExpWrapper>
        <S.CvvWrapper>
          <S.Label>CVV</S.Label>
          <S.Input value="010" keyboardType="number-pad" />
        </S.CvvWrapper>
      </S.ExpCvvWrapper>
      <Button onPress={() => navigate('CurrentLocation')}>Add Card</Button>
    </S.Container>
  );
};

export default AddCard;
