import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../MapButton';

import back from '../../assets/arrow-left.png';

import * as S from './styles';

interface Props {
  title?: string;
  transparentButton?: boolean;
}

const Header: React.FC<Props> = ({ title, transparentButton = true }) => {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <S.Left>
        <Button icon={back} transparent={transparentButton} onPress={goBack} />
      </S.Left>
      <S.Center>{title && <S.Title>{title}</S.Title>}</S.Center>
      <S.Right />
    </S.Container>
  );
};

export default Header;
