import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from '../../style/jobs';
import Navbar from "./componentsScreen/Navbar";  

type JobCardProps = {
  title: string;
  companyName: string;
  location: string;
  matchMessage: string;
  datePosted: string;
  imageUrl:string;
  companyImageUrl:string;
};

const JobCard: React.FC<JobCardProps> = ({
  title,
  companyName,
  companyImageUrl,
  location,
  matchMessage,
  datePosted,
  imageUrl,
}) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.cardCompanyImage}>
    <Image source={require('../../assets/detsoft.png')} style={styles.companyImage}></Image>
    <Text style={styles.companyName}>{companyName}</Text>
    </View>
    <Text style={styles.location}>{location}</Text>
    <View style={styles.cardImageUser}>
    <Image source={require('../../assets/mulher.png')} style={styles.imageUser}/>
    <Text style={styles.matchMessage}>{matchMessage}</Text>
    </View>
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
      imageUrl:'',
      datePosted: 'Há 1 mês',
    },
    {
      id: '2',
      title: 'Product Manager',
      companyName: 'Tech Solutions',
      location: 'Rio de Janeiro, Brasil',
      matchMessage: 'Perfil parcialmente compatível',
      imageUrl:'',
      datePosted: 'Há 2 semanas',
    },
    {
      id: '3',
      title: 'UX Designer',
      companyName: 'Creative Labs',
      location: 'Curitiba, Brasil',
      matchMessage: 'Boa compatibilidade',
      imageUrl:'',
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
              imageUrl={item.imageUrl}
              location={item.location}
              matchMessage={item.matchMessage}
              datePosted={item.datePosted}
            />
          )}
          snapToAlignment='center'
          decelerationRate='normal'
          snapToInterval={Dimensions.get('window').width * 0.8} 
          contentContainerStyle={{ paddingHorizontal: Dimensions.get('window').width * 0.1 }} 
        />
      </View>
      <View style={styles.containerLike}>
        <TouchableOpacity style={styles.dislike}>
        <Image style={styles.dislike} source={require('../../assets/excluir.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.like}>
        <Image style={styles.like} source={require('../../assets/gostei.png')}></Image>
        </TouchableOpacity>
        
      </View>

      <Navbar /> 

    </View>
  );
};

export default Jobs;
