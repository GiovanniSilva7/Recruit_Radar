import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../../style/cadastro_steps/cadastroEmail';
import  Header  from "../componentsScreen/Header";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from '@react-navigation/stack';

const cadastroEmail = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePassword = () =>{
    navigation.navigate('cadastroSenha')
  }


  return (
    <View style={styles.container}>
      <Header showRightIcon={true}/>
      
      <View style={styles.titlePrimaryContainer}>
        
      </View>
      <View style={styles.text1ContainerEmail}>
          <Text style={styles.text1Email}>
            Adicione seu e-mail
          </Text>
          </View>
          
      <TextInput
        style={styles.input}
        placeholder="E-mail ou telefone"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      

      <TouchableOpacity style={styles.buttonSend} onPress={handlePassword}>
        <Text style={styles.textButtonSend}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default cadastroEmail;
