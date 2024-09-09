// Header.tsx
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { styles } from '../../../style/header';

interface HeaderProps {
  showRightIcon?: boolean; 
}

const Header: React.FC<HeaderProps> = ({ showRightIcon }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBack = () => {
    navigation.goBack(); 
  };
  const handleQuit = () =>{
    navigation.navigate('RegistroComponent');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack}>
        <Image
          source={require('../../../assets/arrow-left-icon.png')} 
          style={styles.backIcon}
        />
      </TouchableOpacity>

      
      {showRightIcon && (
        <TouchableOpacity onPress={handleQuit}>
          <Image
            source={require('../../../assets/excluir.png')} 
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
