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
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');

  const { navigate } = useNavigation();

  function changeNumber(value: string) {
    if ([4, 9, 14].indexOf(value.length) !== -1) {
      setNumber(`${value} `);
    } else {
      setNumber(value);
    }
  }

  function changeExp(value: string) {
    if (value.length === 2) {
      setExp(`${value} / `);
    } else {
      setExp(value);
    }
  }

  return (
    <S.Container>
      <Header title="Add Card" boldPosition={1} />
      <S.Inner>
        <S.Card>
          <S.CardTop>
            <S.CardImage source={logoSm} />
            <S.CardImage source={visa} />
          </S.CardTop>
          <S.CardBottom>
            <S.CardText>{name}</S.CardText>
            <S.CardText>{number}</S.CardText>
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
            onChangeText={changeNumber}
            onFocus={() => setFocused('number')}
            maxLength={19}
          />
          <S.CardImage source={camera} />
        </S.CardInputWrapper>
        <S.ExpCvvWrapper>
          <S.ExpWrapper>
            <S.Label>Expiry Date</S.Label>
            <S.Input
              keyboardType="number-pad"
              value={exp}
              onChangeText={changeExp}
              onFocus={() => setFocused('exp')}
              focused={focused === 'exp'}
              maxLength={9}
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
              maxLength={3}
            />
          </S.CvvWrapper>
        </S.ExpCvvWrapper>
        <Button onPress={() => navigate('CurrentLocation')}>Add Card</Button>
      </S.Inner>
    </S.Container>
  );
};

export default AddCard;
