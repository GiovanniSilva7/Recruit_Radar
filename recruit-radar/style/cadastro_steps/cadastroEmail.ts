import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      fontFamily: 'Lora-Bold',
      backgroundColor: '#FFFFFF',
      padding: 16,
      width: '100%',
      height: '100%',
      flex: 1,
    },
    header: {
      width: '100%',
      height: 60,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    backIcon: {
      width: 35,
      height: 35,
      tintColor: '#0262A6',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingHorizontal: 20,
    },
    titlePrimaryContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    titlePrimary: {
      fontFamily: 'Lora-Bold',
      fontWeight: '800',
      fontSize: 32,
      color: '#0262A6',
      textAlign: 'center',
    },
    logo: {
      width: 40,
      height: 40,
      marginHorizontal: 5,
      resizeMode: 'contain',
    },
    input: {
      height: 60,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      marginTop: '16%',
      marginBottom: '16%',
      paddingHorizontal: 10,
    },
    containerNotification: {
      marginTop: 10,
      paddingHorizontal: 20,
    },
    textNotification: {
      color: 'black',
      fontSize: 16,
      textAlign: "center",
      fontFamily: 'Lora-Bold',
      fontWeight: '400',
    },
    text1ContainerEmail:{
        flexDirection:"row",
        marginTop:"20%",
        alignItems:"flex-end",
        justifyContent: 'flex-start',
        
      },
      text1Email: {
        fontSize: 32,
        color: 'black',
        textAlign:"left",
        fontWeight:'800',
        fontFamily:'Lora-Bold',

      },
      text2ContainerForgot:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'flex-start',
        marginBottom:'10%'
      },
      text2Forgot:{
        fontSize: 40,
        color: 'black',
        textAlign:"center",
        fontWeight:'800',
        fontFamily:'Lora-Bold',
      },
    buttonSend: {
      backgroundColor: '#0262A6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginTop: 20,
      paddingVertical: 8,
      paddingHorizontal: 20,
    },
    textButtonSend: {
      color: 'white',
      fontSize: 32,
      textAlign: "center",
      fontFamily: 'Lora-Bold',
    },
  });
  
  