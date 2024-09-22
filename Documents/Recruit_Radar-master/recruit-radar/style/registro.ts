import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lora-Bold',
    backgroundColor: '#FFFFFF',
    margin: 0,
    padding: 16,
    textAlign: 'center',
    width: '100%',
    height:'100%',
    maxWidth: 2000,
    maxHeight:2000,
    flex: 1,
    justifyContent: 'flex-end', // Garante que o botão fique na parte inferior
    
  },
  titlePrimaryContainer:{
    flexDirection:"row",
    marginTop: "31%",
    justifyContent: 'center',
    padding:10,
  },
  
  titlePrimary:{
    fontFamily: 'Lora-Bold',
    fontWeight:'800',
    fontSize: 40,
    color: '#0262A6',
  },
  logo: {
    width: 50,
    height: 'auto', // No React Native, 'auto' para largura e altura se ajusta proporcionalmente.
  },
  text1Container:{
    flexDirection:"row",
    marginTop:"30%",
    alignItems:"flex-end",
    justifyContent: 'center',
    
  },
  text1: {
    fontSize: 36,
    color: '#0262A6',
    marginBottom: 20,
    textAlign:"left",
    fontWeight:'800',
    fontFamily:'Lora-Bold',
    
    
  },
  highlight:{
    color: 'black',
  },
  text2Container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent: 'center',
  },
  text2:{
    fontSize: 18,
    color: '#0262A6',
    textAlign:"center",
    fontFamily:'Montserrat',
    fontWeight:'400'
  },
  containerButtonRegister:{
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    width: '100%',
    marginTop: 10,
    bottom:"25%",
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
  buttonRegister: {
    backgroundColor: '#0262A6',
    borderColor: 'transparent',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
    cursor: 'pointer',
    width: '100%',
    maxWidth: 600,
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    
    
  },
  textButtonRegister:{
    color: 'white',
    fontSize:32,
    textAlign:"center",
    fontFamily:'Arial, 80'
  },
  containerButtonEnter:{
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    
  },
  
  buttonEnter: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    justifyContent:"center",
    alignItems:"center",
    width: '100%',
  },
  textButtonEnter:{
    color: '#007BFF',
    fontFamily: 'Montserrat',
    borderColor: 'transparent',
    fontSize: 32,
    fontWeight:'800'
  },
  forgotPassaword:{
    justifyContent:"center",
    alignItems:"flex-start",
    marginLeft:20,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    width: '80%',
   
  },
  textForgotPassaword:{
    color: '#0262A6',
    fontFamily: 'Lora-Bold',
    borderColor: 'transparent',
    fontSize: 20,
    fontWeight:'700'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: "50%",
    backgroundColor: '#FFFFFF',
     
  },

});
