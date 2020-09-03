import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import logoSm from '../../assets/logo-sm.png';
import visa from '../../assets/visa-white.png';
import camera from '../../assets/camera.png';

import Header from '../../components/Header';
import Button from '../../components/Button';

import * as S from './styles';

const AddCard: React.FC = () => {
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('Jonatas Lizandro');
  const [number, setNumber] = useState('1234 5678 908');
  const [exp, setExp] = useState('12 / 2022');
  const [cvv, setCvv] = useState('010');

  const { navigate } = useNavigation();

  return (
    <>
      <Header title="Add Card" boldPosition={1} />
      <S.Container>
        <S.Card>
          <S.CardTop>
            <S.CardImage source={logoSm} />
            <S.CardImage source={visa} />
          </S.CardTop>
          <S.CardBottom>
            <S.CardText>{name}</S.CardText>
            <S.CardText>1234 5678 908</S.CardText>
          </S.CardBottom>
        </S.Card>
        <S.Label>Full Name</S.Label>
        <S.Input
          value={name}
          onChangeText={setName}
          onFocus={() => setFocused('name')}
          focused={focused === 'name'}
        />
        <S.Label>Card Number</S.Label>
        <S.CardInputWrapper focused={focused === 'number'}>
          <S.CardInput
            keyboardType="number-pad"
            value={number}
            onChangeText={setNumber}
            onFocus={() => setFocused('number')}
          />
          <S.CardImage source={camera} />
        </S.CardInputWrapper>
        <S.ExpCvvWrapper>
          <S.ExpWrapper>
            <S.Label>Expiry Date</S.Label>
            <S.Input
              keyboardType="number-pad"
              value={exp}
              onChangeText={setExp}
              onFocus={() => setFocused('exp')}
              focused={focused === 'exp'}
            />
          </S.ExpWrapper>
          <S.CvvWrapper>
            <S.Label>CVV</S.Label>
            <S.Input
              keyboardType="number-pad"
              value={cvv}
              onChangeText={setCvv}
              onFocus={() => setFocused('cvv')}
              focused={focused === 'cvv'}
            />
          </S.CvvWrapper>
        </S.ExpCvvWrapper>
        <Button onPress={() => navigate('CurrentLocation')}>Add Card</Button>
      </S.Container>
    </>
  );
};

export default AddCard;
