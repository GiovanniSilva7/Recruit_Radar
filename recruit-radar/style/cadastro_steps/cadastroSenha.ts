import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      fontFamily: 'Lora-Bold',
      backgroundColor: '#FFFFFF',
      padding: 16,
      flex: 1,
      
    },
    header: {
      width: '100%',
      height: 60,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
      width: '100%',
      height: '100%',
      marginTop:'30%',
      
    },
    titlePrimaryContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:'10%'
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
      width:'auto',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius:8,
      marginBottom: 16,
      marginTop:10,
      marginLeft:20,
      marginRight:20,
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
    text1PasswordEmail:{
        flexDirection:"row",
        marginBottom:"20%",
        alignItems:"flex-end",
        justifyContent: 'flex-start',
        
      },
      text1Password: {
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
  
  