import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../style/navbar';  

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../../assets/home-icon.png')} style={styles.icon} />
        <Text style={styles.textHome}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../../assets/notifications-icon.png')} style={styles.icon} />
        <Text style={styles.textHome}>Notificações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../../assets/applications-icon.png')} style={styles.icon} />
        <Text style={styles.textHome}>Candidaturas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../../assets/favorites-icon.png')} style={styles.icon} />
        <Text style={styles.textHome}>Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../../assets/help-icon.png')} style={styles.icon} />
        <Text style={styles.textHome}>Ajuda</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
