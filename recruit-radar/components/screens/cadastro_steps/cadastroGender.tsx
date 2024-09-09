import React, { useState } from "react";
import CheckBox from 'expo-checkbox'; // Importando o CheckBox correto
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../../style/cadastro_steps/cadastroGender'; // Ajuste o caminho do estilo
import Header from "../componentsScreen/Header"; // Seu componente de Header, como no exemplo

const CadastroGender = () => {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
  
    // Função para alterar o gênero selecionado
    const handleGenderSelection = (gender: string) => {
      // Se o gênero já estiver selecionado, desmarque-o, caso contrário, selecione
      setSelectedGender((prev) => (prev === gender ? null : gender));
    };
  
    return (
      <View style={styles.container}>
        <Header showRightIcon={true} />
        
        <View style={styles.content}>
          {/* Título e texto de instrução */}
          <Text style={styles.title}>Selecione o seu gênero</Text>
  
          {/* Opções de gênero */}
          <View style={styles.genderOptions}>
            <View style={styles.genderOption}>
              <CheckBox
                value={selectedGender === 'mulher'}
                onValueChange={() => handleGenderSelection('mulher')}
              />
              <Text style={styles.genderText}>Mulher</Text>
            </View>
  
            <View style={styles.genderOption}>
              <CheckBox
                value={selectedGender === 'homem'}
                onValueChange={() => handleGenderSelection('homem')}
              />
              <Text style={styles.genderText}>Homem</Text>
            </View>
  
            <View style={styles.genderOption}>
              <CheckBox
                value={selectedGender === 'outro'}
                onValueChange={() => handleGenderSelection('outro')}
              />
              <Text style={styles.genderText}>Outros identidade de gênero</Text>
            </View>
  
            <View style={styles.genderOption}>
              <CheckBox
                value={selectedGender === 'naoInformar'}
                onValueChange={() => handleGenderSelection('naoInformar')}
              />
              <Text style={styles.genderText}>Prefiro não informar</Text>
            </View>
          </View>
  
          {/* Botão de Continuar */}
          <TouchableOpacity style={styles.buttonContinue}>
            <Text style={styles.textButtonContinue}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default CadastroGender;
