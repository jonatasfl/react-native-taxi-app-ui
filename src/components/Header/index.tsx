import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../MapButton';

import back from '../../assets/arrow-left.png';

import * as S from './styles';

interface Props {
  title?: string;
  transparentButton?: boolean;
  boldPosition?: number;
}

const Header: React.FC<Props> = ({
  title,
  transparentButton = true,
  boldPosition = -1,
}) => {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <S.Left>
        <Button icon={back} transparent={transparentButton} onPress={goBack} />
      </S.Left>
      <S.Center>
        {title && boldPosition === -1 && <S.Title>{title}</S.Title>}
        {title && boldPosition >= 0 && (
          <S.Title>
            {title.split(' ').map((word, index) => (
              <S.Title key={Math.random()} bold={index === boldPosition}>
                {`${word} `}
              </S.Title>
            ))}
          </S.Title>
        )}
      </S.Center>
      <S.Right />
    </S.Container>
  );
};

export default Header;
