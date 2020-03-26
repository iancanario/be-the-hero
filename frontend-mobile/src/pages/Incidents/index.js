import React, {useState,useEffect} from 'react';
import { FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { 
  Container,
  Header, 
  Image, 
  HeaderText, 
  Title, 
  Description, 
  TextBold,
  IncidentsList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles';

import api from '../../services/api';

import logo from '../assets/logo.png';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadIncidents(){ 
    if(loading) {
      return;
    }

    if(total > 0 && incidents.length === total){
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: {page}
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <Container>
      <Header>
        <Image source={logo}/>
        <HeaderText>
          Total de <TextBold>{total} casos</TextBold>.
        </HeaderText>
      </Header>

      <Title>Bem Vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <FlatList 
        style={{marginTop: 32}}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>
           <IncidentProperty> ONG: </IncidentProperty>
           <IncidentValue> {incident.name} </IncidentValue>
           
           <IncidentProperty> CASO: </IncidentProperty>
           <IncidentValue> {incident.title} </IncidentValue>

           <IncidentProperty> VALOR: </IncidentProperty>
           <IncidentValue> {Intl.NumberFormat('pt-BR', {
                style: 'currency', 
                currency: 'BRL'
              }).format(incident.value)} 
             </IncidentValue>

           <DetailsButton onPress={() => navigateToDetail(incident)}> 
           <DetailsButtonText>Ver mais detalhes</DetailsButtonText> 
           <Feather name="arrow-right" size={16} color="#E02041"/>
           </DetailsButton>
        </Incident>
        )}
      />
  
     
    </Container>
  );
}
