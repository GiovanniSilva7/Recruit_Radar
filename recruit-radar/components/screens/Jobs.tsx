import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from '../../style/jobs';
import Navbar from "../screens/Navbar";  

type JobCardProps = {
  title: string;
  companyName: string;
  location: string;
  matchMessage: string;
  datePosted: string;
};

const JobCard: React.FC<JobCardProps> = ({
  title,
  companyName,
  location,
  matchMessage,
  datePosted,
}) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.companyName}>{companyName}</Text>
    <Text style={styles.location}>{location}</Text>
    <Text style={styles.matchMessage}>{matchMessage}</Text>
    <Text style={styles.datePosted}>{datePosted}</Text>
    <TouchableOpacity>
      <Text style={styles.detailsLink}>Detalhes da vaga</Text>
    </TouchableOpacity>
  </View>
);

const Jobs = () => {
  const data = [
    {
      id: '1',
      title: 'Software Engineer',
      companyName: 'Detsoft',
      location: 'São Paulo, Brasil (Remoto)',
      matchMessage: 'Seu perfil corresponde a esta vaga',
      datePosted: 'Há 1 mês',
    },
    {
      id: '2',
      title: 'Product Manager',
      companyName: 'Tech Solutions',
      location: 'Rio de Janeiro, Brasil',
      matchMessage: 'Perfil parcialmente compatível',
      datePosted: 'Há 2 semanas',
    },
    {
      id: '3',
      title: 'UX Designer',
      companyName: 'Creative Labs',
      location: 'Curitiba, Brasil',
      matchMessage: 'Boa compatibilidade',
      datePosted: 'Há 3 dias',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/profile.png')}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardcontainer}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <JobCard
              title={item.title}
              companyName={item.companyName}
              location={item.location}
              matchMessage={item.matchMessage}
              datePosted={item.datePosted}
            />
          )}
          snapToAlignment='center'
          decelerationRate='fast'
          snapToInterval={Dimensions.get('window').width * 1} 
          contentContainerStyle={{ paddingHorizontal: Dimensions.get('window').width * 0.1 }} 
        />
      </View>

      <Navbar /> 

    </View>
  );
};

export default Jobs;
