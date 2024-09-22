import { StyleSheet } from "react-native";
import * as Font from 'expo-font';

export const styles = StyleSheet.create({
  body: {
    fontFamily: 'Lara-Regular',
    backgroundColor: '#FFFFFF',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    width: '100%',
    height:'100%',
    maxWidth: 2000,
    maxHeight:2000,
  },
  titlePrimaryContainer:{
    flexDirection:"row",
    marginTop: "20%",
    justifyContent: 'center',
  },
  
  titlePrimary:{
    fontFamily: 'Lora_400Regular',
    fontSize: 40,
    color: '#0262A6',
  },
  logo: {
    width: 50,
    height: 'auto', // No React Native, 'auto' para largura e altura se ajusta proporcionalmente.
  },
  sloganContainer:{
    flexDirection:"row",
    marginTop:"30%",
    alignItems:"center",
    justifyContent: 'center',
    
  },
  slogan: {
    fontSize: 20,
    color: '#1BB8FA',
    marginBottom: 20,
    textAlign:"center",
    
    
  },
  containerButtonPrimary:{
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    width: '100%',
    marginTop: 10,
    bottom:"25%",
  },
  buttonPrimary: {
    backgroundColor: '#0262A6',
    borderColor: 'transparent',
    borderRadius: 20,
    cursor: 'pointer',
    width: '100%',
    maxWidth: 300,
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 5,
    
  },
  textbuttonPrimary:{
    color: 'white',
    fontSize:22,
    textAlign:"center",
  },

  containerButtonEnter:{
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    width: '100%',
    marginLeft:135,
    bottom:"20%",
  },
  buttonEnter: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    width: '80%',
  },
  textButtonEnter:{
    color: '#007BFF',
    fontFamily: 'Lora_800Bold',
    borderColor: 'transparent',
    fontSize: 32,
  },
  

  terms: {
    fontSize: 12,
    color: '#777',
    marginTop: 20,
    marginBottom: 20,
    position:'absolute',
    alignItems:'center',
    fontStyle:'normal',
    padding: 15,
    bottom:"30%",
  },
  
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  
  sliderIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 50,
    borderColor:'#DADADA',
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: '#737380',
  },
});
