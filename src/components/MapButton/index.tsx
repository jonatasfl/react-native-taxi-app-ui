import React from 'react';

import * as S from './styles';

interface IProps {
  icon: React.ReactNode;
  noMargin?: boolean;
  transparent?: boolean;
}

const MapButton: React.FC<IProps> = ({
  icon,
  noMargin = false,
  transparent,
  ...props
}) => {
  return (
    <S.Container noMargin={noMargin} transparent={transparent} {...props}>
      <S.Icon source={icon} />
    </S.Container>
  );
};

export default MapButton;
