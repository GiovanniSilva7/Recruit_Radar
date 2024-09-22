import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from '../../../style/candidaturas'; // Certifique-se de que o caminho está correto
import Navbar from './Navbar';


type CandidaturaCardProps = {
  title: string;
  companyName: string;
  dateApplied: string;
  logoUrl: string;
};

const CandidaturaCard: React.FC<CandidaturaCardProps> = ({
  title,
  companyName,
  dateApplied,
  logoUrl,
}) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <Image source={require('../../../assets/detsoft.png')} style={styles.companyLogo} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.dateApplied}>{dateApplied}</Text>
      </View>
    </View>
  </View>
);


const MinhasCandidaturas = () => {
  const data = [
    {
      id: '1',
      title: 'Software Engineer',
      companyName: 'Detsoft',
      dateApplied: 'Candidatou-se há 3 dias',
      logoUrl: '../../assets/detsoft.png',
    },
    {
      id: '2',
      title: 'Product Owner',
      companyName: 'Detsoft',
      dateApplied: 'Candidatou-se há 5 dias',
      logoUrl: '../../assets/detsoft.png',
    },
    {
      id: '3',
      title: 'Contador(a)',
      companyName: 'Detsoft',
      dateApplied: 'Candidatou-se há 1 semana',
      logoUrl: '../../assets/detsoft.png',
    },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.headerTitle}>Minhas candidaturas</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CandidaturaCard
            title={item.title}
            companyName={item.companyName}
            dateApplied={item.dateApplied}
            logoUrl={item.logoUrl}
          />
        )}
      />
      <Navbar />
    </View>
  );
};

export default MinhasCandidaturas;