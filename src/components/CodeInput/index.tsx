import React, { forwardRef, RefForwardingComponent } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './styles';

type IRef = TextInput | null;

const CodeInput: RefForwardingComponent<IRef, TextInputProps> = (
  props,
  ref,
) => {
  return (
    <S.Container>
      <S.Input ref={ref} keyboardType="numeric" maxLength={1} {...props} />
    </S.Container>
  );
};

export default forwardRef(CodeInput);
