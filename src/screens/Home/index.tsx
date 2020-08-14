import React from 'react';
import { StatusBar } from 'expo-status-bar';

import PhoneInput from '../../components/PhoneInput';

import cabImg from '../../assets/cab.png';
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <StatusBar style="light" />
      <S.TopArea>
        <S.CabImg source={cabImg} />
      </S.TopArea>
      <S.Title>
        <S.Title>Welcome to </S.Title>
        <S.TitleBold>Roxio</S.TitleBold>
      </S.Title>
      <PhoneInput />
    </S.Container>
  );
};

export default Home;
