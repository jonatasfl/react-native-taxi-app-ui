import React, { ReactElement } from 'react';

import Button from '../../components/Button';

import homeIcon from '../../assets/home.png';
import historyIcon from '../../assets/history.png';

import * as S from './styles';

interface IData {
  id: number;
  icon: ReactElement;
  text: string;
  subtext?: string;
}

interface IItemProps {
  icon: ReactElement;
  text: string;
  subtext?: string;
}

const data: IData[] = [
  { id: 1, icon: homeIcon, text: 'Home', subtext: 'Spring St. 140' },
  { id: 2, icon: historyIcon, text: 'Upton St. 99' },
  { id: 3, icon: historyIcon, text: 'Sparkvill Ave 111' },
  { id: 4, icon: historyIcon, text: 'James Cameron Plasa' },
];

const Item: React.FC<IItemProps> = ({ icon, text, subtext }) => {
  return (
    <S.HistoryItem>
      <S.ItemIcon source={icon} />
      <S.ItemText>{text}</S.ItemText>
      {subtext && <S.ItemText small>{subtext}</S.ItemText>}
    </S.HistoryItem>
  );
};

const SelectDestination: React.FC = () => {
  function renderItem({ item }) {
    return <Item text={item.text} subtext={item.subtext} icon={item.icon} />;
  }

  return (
    <S.Container>
      <S.TopContainer
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 5,
        }}
      >
        <S.Timeline>
          <S.Dot />
          <S.Dash />
          <S.Dot secondary />
        </S.Timeline>
        <S.FromTo>
          <S.From>Wilson Terrace 219 W</S.From>
          <S.To>Diana Trail 115 A</S.To>
        </S.FromTo>
      </S.TopContainer>
      <S.HistoryList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
      <S.BottomContainer>
        <Button>Done</Button>
      </S.BottomContainer>
    </S.Container>
  );
};

export default SelectDestination;
