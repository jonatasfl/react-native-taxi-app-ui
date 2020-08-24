import React, { useState } from 'react';
import StarRating from 'react-native-star-rating';

import Button from '../../components/Button';

import avatar from '../../assets/avatar.png';
import { color } from '../../style-vars';

import * as S from './styles';

const YourRide: React.FC = () => {
  const [rating, setRating] = useState(4);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Your Ride</S.Title>
      </S.Header>
      <S.InfoContainer>
        <S.Description>Your ride is</S.Description>
        <S.Description value>$5.58</S.Description>
        <S.Description>March 21, 2020 at 10:30 a.m</S.Description>
      </S.InfoContainer>
      <S.DriverContainer>
        <S.RatingContainer>
          <S.AvatarContainer>
            <S.Avatar source={avatar} />
          </S.AvatarContainer>
          <S.DriverName>Michael Douglas</S.DriverName>
          <S.Description>Rate your driver</S.Description>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={rating}
            selectedStar={setRating}
            fullStarColor={color.secondary}
            emptyStar="star"
            emptyStarColor={color.gray}
            starSize={30}
            containerStyle={{ width: '50%', paddingTop: 8 }}
          />

          <S.MessageInput
            multiline
            numberOfLines={3}
            placeholder="Your message"
          />
        </S.RatingContainer>
        <Button>Done</Button>
      </S.DriverContainer>
    </S.Container>
  );
};

export default YourRide;
