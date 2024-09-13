import React, { useRef, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import { styles } from '../../../style/profilesidebra';  // Importa os estilos
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

const { width } = Dimensions.get('window');


// Definição dos props esperados
type ProfileSidebarModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
};
 
const handleNextStep = () =>{
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  navigation.navigate('DadosPessoais')
}

const ProfileSidebarModal: React.FC<ProfileSidebarModalProps> = ({ modalVisible, closeModal }) => {
  const slideAnim = useRef(new Animated.Value(width)).current;
  useEffect(() => {
    if (modalVisible) {
      // Animação de abertura
      Animated.timing(slideAnim, {
        toValue: 0, // Move o modal para dentro da tela (posição 0)
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      // Animação de fechamento
      Animated.timing(slideAnim, {
        toValue: width, // Move o modal para fora da tela (direita)
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [modalVisible, slideAnim]);
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
      <Animated.View style={[styles.sidebar, { right: slideAnim }]}>
          {/* Botão de fechar */}
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.closeSidebar}>X</Text>
          </TouchableOpacity>

          {/* Seção do perfil */}
          <View style={styles.profileSection}>
            <Image
              source={require('../../../assets/profile.png')}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Vanessa Silva</Text>
          </View>

          {/* Itens do menu */}
          <Text style={styles.menuItem} onPress={handleNextStep}>Ver perfil</Text>
          <Text style={styles.menuItem}>Editar perfil</Text>
          <Text style={styles.menuItem}>Excluir Perfil</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ProfileSidebarModal;
