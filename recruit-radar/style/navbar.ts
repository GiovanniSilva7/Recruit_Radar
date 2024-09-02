import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#1BB8FA',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
      padding:1,
    },
    icon: {
      width: 30,
      height: 30,
      alignItems:'center',
      justifyContent:'center',
      tintColor: '#fff',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#007bff',
    },
    textHome:{
      color:'white',
      fontSize:12,
    },
  });
  