import React, {useState} from "react";
import { View, TextInput, Text, TouchableOpacity, Image, Button } from "react-native";
import {styles} from '../../style/registro';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';


const RegistroComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    navigation.navigate('Jobs');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
    return (
        <View style={styles.container}>
          <View style={styles.form}>
          <View style={styles.titlePrimaryContainer}>
            <Text style={styles.titlePrimary}>Recruit </Text>   
            <Image source={require('../../img/recruit_logo.png')} style = {styles.logo}/>
            <Text style={styles.titlePrimary}> Radar</Text>
            </View>
            
            <View style={styles.text1Container}>
          <Text style={styles.text1}>
            Entrar
          </Text>
          </View>
          <View style={styles.text2Container}>
            <Text style={styles.text2}>
            <Text style={styles.highlight}>ou</Text> Cadastre-se no RecruitRadar.
            </Text>
          </View>
          
          <TextInput
            style={styles.input}
            placeholder="Email ou telefone"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                />
   
        
          <TouchableOpacity style={styles.forgotPassaword}>
            <Text style={styles.textForgotPassaword} onPress={handleForgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.textButtonRegister} onPress={handleLogin}>Entrar</Text>
          </TouchableOpacity>
         
          </View>
          
          
        </View>
      );
    };
  
  export default RegistroComponent;
