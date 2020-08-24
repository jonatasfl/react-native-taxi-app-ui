import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import arrowLeft from '../../assets/arrow-left.png';
import visa from '../../assets/visa.png';

import MapButton from '../../components/MapButton';
import CarButton from '../../components/CarButton';
import Button from '../../components/Button';

import * as S from './styles';

const Request: React.FC = () => {
  const [selected, setSelected] = useState('economy');

  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Map
        region={{
          latitude: -19.925131,
          longitude: -43.940618,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        loadingEnabled
        showsCompass={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
      />
      <S.Header>
        <MapButton
          icon={arrowLeft}
          onPress={() => navigation.navigate('SelectDestination')}
        />
      </S.Header>
      <S.Bottom>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(255,255,255, 0.2)', 'rgba(255,255,255, 0.9)', '#fff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        <S.Options>
          <CarButton
            text="Economy"
            onPress={() => setSelected('economy')}
            active={selected === 'economy'}
          />
          <CarButton
            text="Luxury"
            onPress={() => setSelected('luxury')}
            active={selected === 'luxury'}
          />
          <CarButton
            text="Family"
            onPress={() => setSelected('family')}
            active={selected === 'family'}
          />
        </S.Options>
        <S.CreditCardInfo>
          <S.CreditCardImage source={visa} />
          <S.CreditCardText>•••• 0990</S.CreditCardText>
        </S.CreditCardInfo>
        <Button onPress={() => navigation.navigate('YourRide')}>
          Send Request
        </Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Request;
