import React from 'react';

import * as S from './styles';

interface IProps {
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <S.Container {...props}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
  );
};

export default Button;
