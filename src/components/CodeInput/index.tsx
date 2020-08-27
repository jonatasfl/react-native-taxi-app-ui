import React, {
  forwardRef,
  RefObject,
  RefAttributes,
  MutableRefObject,
  ForwardRefRenderFunction,
  RefForwardingComponent,
} from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './styles';

type IProps = TextInputProps;
type IRef = RefObject<TextInput>;

const CodeInput: RefForwardingComponent<TextInput, TextInputProps> = (
  props,
  ref,
) => {
  return (
    <S.Container>
      <S.Input ref={ref} {...props} maxLength={1} />
    </S.Container>
  );
};

export default forwardRef(CodeInput);
