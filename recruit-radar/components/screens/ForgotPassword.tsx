import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { styles } from '../../style/forgotPassword';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBack = () => {
    navigation.goBack();  // Função para voltar à tela anterior
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../assets/arrow-left-icon.png')} // Substitua pelo caminho correto do ícone de seta
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.titlePrimaryContainer}>
        <Text style={styles.titlePrimary}>Recruit</Text>
        <Image 
          source={require('../../img/recruit_logo.png')} 
          style={styles.logo} 
        />
        <Text style={styles.titlePrimary}>Radar</Text>
      </View>
      <View style={styles.text1ContainerForgot}>
          <Text style={styles.text1Forgot}>
            Esqueci
          </Text>
          </View>
          <View style={styles.text2ContainerForgot}>
            <Text style={styles.text2Forgot}>
             a senha
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

      <View style={styles.containerNotification}>
        <Text style={styles.textNotification}>
          Enviaremos um código de verificação para este e-mail ou telefone se corresponder a uma conta do RecruitRadar.
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonSend}>
        <Text style={styles.textButtonSend}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
