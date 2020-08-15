import React from 'react';

import * as S from './styles';

interface IProps {
  icon: React.ReactNode;
  noMargin?: boolean;
}

const MapButton: React.FC<IProps> = ({ icon, noMargin = false, ...props }) => {
  return (
    <S.Container noMargin={noMargin} {...props}>
      <S.Icon source={icon} />
    </S.Container>
  );
};

export default MapButton;
