import React from 'react';

import * as S from './styles';

const PhoneInput: React.FC = props => {
  return (
    <S.Container>
      <S.Code>+994</S.Code>
      <S.Input keyboardType="numeric" {...props} />
    </S.Container>
  );
};

export default PhoneInput;
