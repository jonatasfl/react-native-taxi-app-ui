import React from 'react';

import MapButton from '../../components/MapButton';

import iconHome from '../../assets/home.png';
import iconHistory from '../../assets/history.png';
import iconCenter from '../../assets/map_center.png';
import * as S from './styles';

const Map: React.FC = () => {
  return (
    <S.Container>
      <S.Map
        region={{
          latitude: -19.927987,
          longitude: -43.945196,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        showsUserLocation
        loadingEnabled
        showsCompass={false}
      />
      <S.OptionsContainer>
        <S.LeftOptions>
          <MapButton icon={iconHome} />
          <MapButton icon={iconHistory} />
        </S.LeftOptions>
        <MapButton icon={iconCenter} />
      </S.OptionsContainer>
      <S.WhereToContainer>
        <>
          <S.From>From: Wilson Terrace 219 W</S.From>
          <S.ToContainer>
            <S.GreenDot />
            <S.To>Where to?</S.To>
          </S.ToContainer>
        </>
      </S.WhereToContainer>
    </S.Container>
  );
};

export default Map;
