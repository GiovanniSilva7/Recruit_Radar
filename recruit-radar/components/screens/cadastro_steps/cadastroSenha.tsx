import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../../style/cadastro_steps/cadastroSenha';
import  Header  from "../componentsScreen/Header";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { StackHeaderProps, StackNavigationProp } from '@react-navigation/stack';


const cadastroSenha = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
const handleCEP = () =>{
  navigation.navigate('cadastroCEP');
}

  return (
    <View style={styles.container}>
      <Header showRightIcon={true}/>
<View style={styles.contentContainer}>      
      <View style={styles.titlePrimaryContainer}>
        
      </View>
      <View style={styles.text1PasswordEmail}>
          <Text style={styles.text1Password}>
            Adicione sua Senha
          </Text>
          </View>
          
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
       <TextInput
                  style={styles.input}
                  placeholder="Confirme a Senha"
                  value={password}
                  onChangeText={(confirmPassword) => setconfirmPassword(confirmPassword)}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                />

      

      <TouchableOpacity style={styles.buttonSend} onPress={handleCEP}>
        <Text style={styles.textButtonSend}>Continuar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default cadastroSenha;
