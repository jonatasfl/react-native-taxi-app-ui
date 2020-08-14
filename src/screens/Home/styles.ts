import styled from 'styled-components/native';

const colorPrimary = '#0d1724';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const TopArea = styled.View`
  align-items: center;
  top: -10%;
  width: 100%;
  height: 50%;
  background: ${colorPrimary};
  border-bottom-left-radius: 300;
  border-bottom-right-radius: 300;
`;

export const CabImg = styled.Image`
  bottom: -35%;
`;

export const Title = styled.Text`
  font-family: 'OpenSans_400Regular';
  font-size: 30px;
  color: ${colorPrimary};
`;
