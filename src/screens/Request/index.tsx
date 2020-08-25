import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Polyline } from 'react-native-maps';

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
      >
        <Polyline
          coordinates={[
            { latitude: -43.935129, longitude: -19.916483 },
            { latitude: -43.935322, longitude: -19.917199 },
            { latitude: -43.935452, longitude: -19.917306 },
            { latitude: -43.935597, longitude: -19.917413 },
            { latitude: -43.936989, longitude: -19.918178 },
            { latitude: -43.938683, longitude: -19.919081 },
            { latitude: -43.937698, longitude: -19.920745 },
            { latitude: -43.938009, longitude: -19.921849 },
            { latitude: -43.938881, longitude: -19.921655 },
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
          strokeWidth={6}
        />
      </S.Map>
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
