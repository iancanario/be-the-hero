import React from 'react';
import {Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'

import { 
  Container, 
  Header, 
  Image, 
  Button,
  Incident, 
  IncidentProperty,
  IncidentPropertyF, 
  IncidentValue, 
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionButton,
  TextAction
} from './styles';

import logo from '../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const menssage = 
  `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar 
  no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
    }).format(incident.value)}`

  function navivateBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Héroi do caso: ${incident.title}`,
      recipients: [`${incident.email}`],
      body: menssage
    })
  }

  function sendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${menssage}`);
  }

  return (
    <Container>
      <Header>
        <Image source={logo}/>
        <Button onPress={navivateBack}>
          <Feather name="arrow-left" size={28} color="#E02041"/>
        </Button>
      </Header>

      <Incident>
        <IncidentPropertyF> ONG: </IncidentPropertyF>
        <IncidentValue> {incident.name} de {incident.city}/{incident.uf} </IncidentValue>
           
        <IncidentProperty> CASO: </IncidentProperty>
        <IncidentValue> {incident.title} </IncidentValue>

        <IncidentProperty> VALOR: </IncidentProperty>
        <IncidentValue> {Intl.NumberFormat('pt-BR', {
          style: 'currency', 
          currency: 'BRL'
          }).format(incident.value)} 
        </IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o heroi desse caso.</HeroTitle>
        <HeroDescription>Entre em contato:</HeroDescription>
        <Actions>
        <ActionButton onPress={sendWhatsApp}>
            <TextAction> WhatsApp </TextAction>
          </ActionButton>
          <ActionButton onPress={sendMail}>
            <TextAction> Email </TextAction>
          </ActionButton>
        </Actions>
      </ContactBox>
    </Container>
  );
}
