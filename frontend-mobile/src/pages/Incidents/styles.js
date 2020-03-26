import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items:  center;
`;

export const Image = styled.Image`
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #767680;
`;

export const IncidentsList = styled.View`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #fff;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: #e02031;
  font-weight: bold;
`;