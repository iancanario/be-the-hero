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
  align-items: center;
`;

export const Image = styled.Image`
  
`;

export const Button = styled.TouchableOpacity`
  
`;

export const Incident = styled.View`
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 48px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: 24px;
`;

export const IncidentPropertyF = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: 0px;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`;

export const ContactBox = styled.View`
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #fff;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: #E02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const TextAction = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;


