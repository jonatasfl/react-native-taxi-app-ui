import React from 'react';

import * as S from './styles';

const PhoneInput: React.FC = () => {
  return (
    <S.Container>
      <S.Code>+994</S.Code>
      <S.Input keyboardType="numeric" />
    </S.Container>
  );
};

export default PhoneInput;
