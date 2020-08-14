import React from 'react';
import { StatusBar } from 'expo-status-bar';

import * as S from './styles';

const Verification: React.FC = () => {
  return (
    <S.Container>
      <StatusBar style="dark" />
      <S.IconContainer>
        <S.Envelope source={require('../../assets/envelope.png')} />
      </S.IconContainer>
      <S.Title>
        <S.Title>Verification </S.Title>
        <S.Title bold>Code</S.Title>
      </S.Title>
      <S.Description>
        <S.Description>
          Please type the verification code sent to
{' '}
        </S.Description>
        <S.Description bold>+994 555 66 77</S.Description>
      </S.Description>
    </S.Container>
  );
};

export default Verification;
