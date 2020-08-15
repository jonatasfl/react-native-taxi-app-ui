import React from 'react';

import * as S from './styles';

const MapButton: React.FC = ({ icon, ...props }) => {
  return (
    <S.Container {...props}>
      <S.Icon source={icon} />
    </S.Container>
  );
};

export default MapButton;
