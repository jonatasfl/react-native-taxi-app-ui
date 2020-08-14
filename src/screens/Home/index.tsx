import React from 'react';
import { StatusBar } from 'expo-status-bar';

import cabImg from '../../assets/cab.png';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <StatusBar style="light" />
      <S.TopArea>
        <S.CabImg source={cabImg} />
      </S.TopArea>
      <S.Title>Welcome to Roxio</S.Title>
    </S.Container>
  );
};

export default Home;
