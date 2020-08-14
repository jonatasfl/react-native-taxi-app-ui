import React, { forwardRef } from 'react';

import * as S from './styles';

export default forwardRef(
  (props, ref): React.ReactElement => {
    return (
      <S.Container>
        <S.Input ref={ref} {...props} />
      </S.Container>
    );
  },
);
