import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {styles} from '../../style/cadastro';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';


const CadastroComponent = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleRegistro = () => {
    navigation.navigate('RegistroComponent');
  };
    return (
        <View style={styles.body}>
          <View style={styles.titlePrimaryContainer}>
            <Text style={styles.titlePrimary}>Recruit </Text>   
            <Image source={require('../../img/recruit_logo.png')} style = {styles.logo}/>
            <Text style={styles.titlePrimary}> Radar</Text>
            </View>
            <View style={styles.sloganContainer}>
          <Text style={styles.slogan}>
            Unindo Vagas e Talentos:{"\n"}
             O Tinder do Match Profissional.
          </Text>
          </View>
          <View style={styles.sliderIndicators}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <Text style={styles.terms}>
            Ao clicar em Entrar, você aceita o 
            <Text style={styles.link}> Contrato do Usuário</Text>, a 
            <Text style={styles.link}> Política de Privacidade</Text> e a 
            <Text style={styles.link}> Política de Cookies</Text> do RecruitRadar.
          </Text>

          <View style={styles.containerButtonPrimary}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleRegistro}>
            <Text style={styles.textbuttonPrimary}>Entrar</Text>
          </TouchableOpacity>
          </View>
       
          
          
          
        </View>
      );
    };
  
  export default CadastroComponent;
