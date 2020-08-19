import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';

import * as S from './styles';

interface IProps extends TextInput {
  autoFocus?: boolean;
}

const CodeInput = forwardRef<IProps>(
  (props, ref): React.ReactElement => {
    return (
      <S.Container>
        <S.Input ref={ref} {...props} />
      </S.Container>
    );
  },
);

export default CodeInput;
